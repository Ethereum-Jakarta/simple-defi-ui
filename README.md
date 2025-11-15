# 🚀 Lisk Trade

**Simple Decentralized Exchange Frontend on Lisk Sepolia Testnet**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)](https://vitejs.dev/)
[![Lisk](https://img.shields.io/badge/Network-Lisk-6366f1.svg)](https://lisk.com/)

> **Intuitive web interface for decentralized token trading**

## 📖 Overview

Lisk Trade is a modern, responsive frontend application for interacting with a simple DEX on Lisk Sepolia Testnet. Built with React and TypeScript, it provides an intuitive interface for token swapping, liquidity management, and real-time market data visualization.

### ✨ Key Features

- 🔄 **Token Swapping** - Seamless CAMP ↔ USDC trading interface
- 💧 **Liquidity Management** - Add/remove liquidity with visual feedback
- 📊 **Real-time Data** - Live price updates and pool statistics
- 🎨 **Modern UI/UX** - Clean, responsive design with dark/light themes
- 🔗 **Wallet Integration** - Connect with MetaMask and other Web3 wallets
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Fast Transactions** - Optimized for Lisk's high-speed blockchain

## 🏗️ Tech Stack

```
Frontend Architecture
┌─────────────────────────────────────┐
│              React App              │
├─────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────┐   │
│  │  Swap UI    │ │ Liquidity   │   │
│  │ Component   │ │ Component   │   │
│  └─────────────┘ └─────────────┘   │
├─────────────────────────────────────┤
│         Web3 Integration            │
│  ┌─────────────┐ ┌─────────────┐   │
│  │   Ethers    │ │   Wallet    │   │
│  │   Provider  │ │  Connection │   │
│  └─────────────┘ └─────────────┘   │
├─────────────────────────────────────┤
│         Smart Contracts             │
│  ┌─────────────┐ ┌─────────────┐   │
│  │   DEX ABI   │ │ Token ABIs  │   │
│  │ Integration │ │ Integration │   │
│  └─────────────┘ └─────────────┘   │
└─────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ 
- **npm** or **yarn**
- **Web3 Wallet** (MetaMask recommended)
- **Lisk Sepolia Testnet** setup in wallet

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/lisk-trade-frontend.git
cd lisk-trade-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

```bash
cp .env.example .env.local
# Update with your configuration
```

```env
VITE_CHAIN_ID=4202
VITE_RPC_URL=https://rpc.sepolia-api.lisk.com
VITE_EXPLORER_URL=https://sepolia-blockscout.lisk.com
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

### 5. Build for Production

```bash
npm run build
# or
yarn build
```

## 📱 Application Features

### 🔄 Token Swap Interface
- **Token Selection** - Easy dropdown with logos and balances
- **Amount Input** - Real-time validation and conversion
- **Price Impact** - Visual indicators for trade impact
- **Slippage Control** - Adjustable slippage tolerance
- **Transaction Preview** - Detailed breakdown before confirmation

### 💧 Liquidity Pool Management
- **Pool Overview** - Current reserves and APY display
- **Add Liquidity** - Balanced token input with ratio maintenance
- **Remove Liquidity** - Flexible withdrawal with preview
- **LP Token Tracking** - Your pool share and earned fees

### 📊 Market Data
- **Live Pricing** - Real-time CAMP/USDC exchange rate
- **24h Statistics** - Volume, price change indicators
- **Pool Analytics** - TVL, utilization, and fee metrics
- **Transaction History** - Your recent trading activity

### 🎨 User Experience
- **Responsive Design** - Works seamlessly on mobile and desktop
- **Dark/Light Theme** - Toggle between UI themes
- **Loading States** - Smooth loading animations and skeleton screens
- **Error Handling** - User-friendly error messages and recovery
- **Accessibility** - WCAG compliant design

## 🛠️ Smart Contract Integration

### Contract Addresses (Lisk Sepolia Testnet)

| Contract | Address | Purpose |
|----------|---------|---------|
| **SimpleDEX** | `0x70bDD0f7e01DEe803147ead041dE23a531A71CBf` | Main DEX functionality |
| **Campus Coin** | `0xEBAa841c5f97Ff097e61eea151dFA03640A6CC78` | CAMP token (18 decimals) |
| **Mock USDC** | `0x786Ca7D3a2E53f0d5F7bB6848E03b60Dae9a3719` | USDC token (6 decimals) |

### Token Configuration

```typescript
export const TOKENS = {
  CAMP: {
    address: "0xEBAa841c5f97Ff097e61eea151dFA03640A6CC78",
    symbol: "CAMP",
    name: "Campus Coin",
    decimals: 18,
    logo: "🏛️",
  },
  USDC: {
    address: "0x786Ca7D3a2E53f0d5F7bB6848E03b60Dae9a3719",
    symbol: "USDC", 
    name: "Mock USDC",
    decimals: 6,
    logo: "💵",
  },
};
```

### DEX Configuration

```typescript
export const DEX_CONFIG = {
  FEE_PERCENT: 0.3,        // 0.3% trading fee
  SLIPPAGE_TOLERANCE: 0.5, // Default 0.5% slippage
  DEADLINE: 20,            // 20 minutes transaction deadline
};
```

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#00ff88` (Green)
- **Background**: `#0f172a` (Dark) / `#ffffff` (Light)
- **Surface**: `#1e293b` (Dark) / `#f8fafc` (Light)
- **Text**: `#e2e8f0` (Dark) / `#1e293b` (Light)

### Typography
- **Headers**: Inter, system-ui, sans-serif
- **Body**: Inter, system-ui, sans-serif
- **Monospace**: 'Fira Code', Consolas, monospace

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects  
- **Inputs**: Clean borders with focus states
- **Modals**: Centered overlays with smooth animations

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) { /* sm */ }

/* Tablet */
@media (max-width: 768px) { /* md */ }

/* Desktop */
@media (max-width: 1024px) { /* lg */ }

/* Large Desktop */
@media (max-width: 1280px) { /* xl */ }
```

## 🔧 Development

### Project Structure

```
lisk-trade-frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/        # Generic components
│   │   ├── swap/          # Swap-specific components
│   │   └── liquidity/     # Liquidity components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── constants/         # Contract addresses & ABIs
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles & themes
│   └── App.tsx           # Main application component
├── package.json
└── vite.config.ts        # Vite configuration
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm test            # Run tests (if configured)
```

## 🛡️ Security Considerations

### Frontend Security
- ✅ **Input Validation** - All user inputs sanitized
- ✅ **XSS Protection** - React's built-in protection
- ✅ **HTTPS Only** - All external requests over HTTPS
- ✅ **Wallet Security** - Never store private keys
- ✅ **Transaction Verification** - Double-check all transaction data

### Web3 Best Practices
- ✅ **Contract Verification** - All contracts verified on explorer
- ✅ **Network Validation** - Ensure correct network connection
- ✅ **Amount Validation** - Prevent overflow/underflow
- ✅ **Slippage Protection** - User-configurable limits
- ✅ **Transaction Timeouts** - Deadline protection

## 🚀 Performance

### Optimization Features
- ⚡ **Code Splitting** - Lazy loading for optimal performance
- 📦 **Bundle Optimization** - Tree shaking and minification
- 🗄️ **Caching Strategy** - Efficient caching for API calls
- 🔄 **State Management** - Optimized React state updates
- 📱 **Mobile Performance** - Optimized for mobile devices

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🤝 Contributing

### Development Setup

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Make changes and test**
4. **Commit**: `git commit -m 'Add new feature'`
5. **Push**: `git push origin feature/new-feature`
6. **Create Pull Request**

### Code Style

- **ESLint** - Follow configured linting rules
- **Prettier** - Auto-formatting on save
- **TypeScript** - Strict type checking enabled
- **Conventional Commits** - Use conventional commit messages

## 🌟 Roadmap

### Phase 1 (Current)
- ✅ Basic swap interface
- ✅ Liquidity management
- ✅ Wallet integration
- ✅ Responsive design

### Phase 2 (Next)
- 🔄 **Advanced Charts** - TradingView integration
- 📊 **Analytics Dashboard** - Detailed trading metrics
- 🔔 **Notifications** - Transaction status alerts
- 🎯 **Limit Orders** - Advanced trading features

### Phase 3 (Future)
- 🌐 **Multi-chain Support** - Support for multiple networks
- 🤖 **Trading Bots** - Automated trading strategies
- 📱 **Mobile App** - Native mobile applications
- 🎮 **Gamification** - Trading rewards and achievements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lisk Network** - For the high-performance blockchain
- **React Team** - For the amazing frontend framework
- **Ethers.js** - For Web3 integration
- **Vite** - For the fast build tool
- **OpenZeppelin** - For secure smart contract standards

---

## 📞 Support

- **Documentation**: [View Docs](https://docs.lisk-trade.com)
- **Discord**: [Join Community](https://discord.gg/lisk-trade)
- **Twitter**: [@LiskTrade](https://twitter.com/lisktrade)
- **Email**: support@lisk-trade.com

**Built with ❤️ for the Lisk ecosystem**