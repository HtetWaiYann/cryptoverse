export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  listedAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  coinrankingUrl: string;
  "24hVolume": string;
}

export interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: number;
  total24hVolume: number;
}

export interface CoinData {
  stats: Stats;
  coins: Coin[];
}

export interface GetCoinsApiResponse {
  status: string;
  data: CoinData;
}
