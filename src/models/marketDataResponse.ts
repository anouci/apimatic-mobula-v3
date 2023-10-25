/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface MarketDataResponse {
  /** The liquidity of the asset. */
  liquidity?: number;
  /** The market cap of the asset. */
  marketCap?: number;
  /** The price of the asset. */
  price?: number;
}

export const marketDataResponseSchema: Schema<MarketDataResponse> = object({
  liquidity: ['liquidity', optional(number())],
  marketCap: ['market_cap', optional(number())],
  price: ['price', optional(number())],
});
