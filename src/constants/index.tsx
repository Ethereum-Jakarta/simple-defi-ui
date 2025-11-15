/* eslint-disable react-refresh/only-export-components */
import SIMPLE_DEX_ABI_JSON from "./SIMPLE_DEX_ABI.json"
import ERC20_ABI_JSON from "./ERC20_ABI.json"

export const SIMPLE_DEX_ABI = SIMPLE_DEX_ABI_JSON;
export const ERC20_ABI = ERC20_ABI_JSON;

// Contract addresses (update dengan alamat yang sudah deployed)
export const CONTRACTS = {
  SIMPLE_DEX: "0xA489A651d1C12d9958ffdCCCa0518F35Ffaad328",
  CAMPUS_COIN: "0x229109aE2894bD5F88C526e9df0053586762f894",
  MOCK_USDC: "0x350fEdD74A5Dedc922C852F84641D30799f94b89",
} as const;

// Token configurations
export const TOKENS = {
  CAMP: {
    address: CONTRACTS.CAMPUS_COIN,
    symbol: "CAMP",
    name: "Campus Coin",
    decimals: 18,
    logo: "🏛️",
  },
  USDC: {
    address: CONTRACTS.MOCK_USDC,
    symbol: "USDC",
    name: "Mock USDC",
    decimals: 6,
    logo: "💵",
  },
} as const;

// DEX configuration
export const DEX_CONFIG = {
  FEE_PERCENT: 0.3, // 0.3%
  SLIPPAGE_TOLERANCE: 0.5, // 0.5%
  DEADLINE: 20, // 20 minutes
} as const;