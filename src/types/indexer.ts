export type BigIntString = string;

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
}

export interface Swap {
  id: string;
  user: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: BigIntString;
  amountOut: BigIntString;
  priceImpact?: number | null;
  gasUsed: BigIntString;
  blockNumber: BigIntString;
  timestamp: BigIntString;
  transactionHash: string;
}

export interface SwapsPage {
  items: Swap[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface RecentSwapsQuery {
  swapss: SwapsPage;
}

export type LiquidityEventType = "ADD" | "REMOVE";

export interface LiquidityEvent {
  id: string;
  type: LiquidityEventType;
  provider: string;
  amountA: BigIntString;
  amountB: BigIntString;
  liquidity: BigIntString;
  shareOfPool?: number | null;
  blockNumber: BigIntString;
  timestamp: BigIntString;
  transactionHash: string;
}

export interface LiquidityEventsPage {
  items: LiquidityEvent[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface LiquidityEventsQuery {
  liquidityEventss: LiquidityEventsPage;
}

export interface DailyVolume {
  id: string;
  date: string;
  volumeUSD: number;
  transactionCount: number;
  uniqueUsers: number;
  avgGasPrice?: BigIntString | null;
}

export interface DailyVolumesPage {
  items: DailyVolume[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface DailyVolumesQuery {
  dailyVolumess: DailyVolumesPage;
}

export interface PoolStats {
  id: string;
  reserveA: BigIntString;
  reserveB: BigIntString;
  totalLiquidity: BigIntString;
  price: BigIntString;
  tvlUSD?: number | null;
  volume24h?: number | null;
  lastUpdated: BigIntString;
}

export interface PoolStatsQuery {
  poolStats: PoolStats | null;
}

export interface UserStats {
  id: string;
  totalSwaps: number;
  totalVolumeUSD: number;
  liquidityProvided: BigIntString;
  feesEarned: number;
  firstSeen: BigIntString;
  lastActivity: BigIntString;
}

export interface UserStatsQuery {
  userStats: UserStats | null;
}

export interface DashboardQuery {
  recentSwaps: SwapsPage;
  poolStats: PoolStats | null;
  dailyVolumes: DailyVolumesPage;
  userStats: UserStats | null;
}
