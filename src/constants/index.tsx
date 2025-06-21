/* eslint-disable react-refresh/only-export-components */
import SIMPLE_DEX_ABI_JSON from "./SIMPLE_DEX_ABI.json"
import ERC20_ABI_JSON from "./ERC20_ABI.json"

export const SIMPLE_DEX_ABI = SIMPLE_DEX_ABI_JSON;
export const ERC20_ABI = ERC20_ABI_JSON;

// Contract addresses (update dengan alamat yang sudah deployed)
export const CONTRACTS = {
  SIMPLE_DEX: "0x70bDD0f7e01DEe803147ead041dE23a531A71CBf",
  CAMPUS_COIN: "0xEBAa841c5f97Ff097e61eea151dFA03640A6CC78",
  MOCK_USDC: "0x786Ca7D3a2E53f0d5F7bB6848E03b60Dae9a3719",
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