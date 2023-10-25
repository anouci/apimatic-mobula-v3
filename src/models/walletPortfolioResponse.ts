/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Asset4, asset4Schema } from './asset4';

export interface WalletPortfolioResponse {
  assets?: Asset4[];
}

export const walletPortfolioResponseSchema: Schema<WalletPortfolioResponse> = object(
  { assets: ['assets', optional(array(lazy(() => asset4Schema)))] }
);