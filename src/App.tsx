import Header from "./components/Header";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import type {
  Chain
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import DEXContainer from "./components/DEXContainer";
import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from './lib/graphql';

// Konfigurasi Chain Lisk Sepolia Testnet
const liskSepoliaTestnet: Chain = {
  id: 4202,
  name: 'Lisk Sepolia Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia-api.lisk.com'],
    },
    public: {
      http: ['https://rpc.sepolia-api.lisk.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Lisk Sepolia Blockscout',
      url: 'https://sepolia-blockscout.lisk.com',
    },
  },
  testnet: true,
};

// eslint-disable-next-line react-refresh/only-export-components
export const config = getDefaultConfig({
  appName: 'Simple DEX',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Dapatkan dari https://cloud.walletconnect.com
  chains: [liskSepoliaTestnet],
  ssr: true,
});

function App() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <div className="min-h-screen">
              <Header />
              <DEXContainer />
            </div>
            <Toaster position="top-center" />
          </RainbowKitProvider>
        </QueryClientProvider>
      </ApolloProvider>
     
    </WagmiProvider>
  )
}

export default App