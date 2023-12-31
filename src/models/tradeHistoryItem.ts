/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface TradeHistoryItem {
  blockchain?: string;
  date?: string;
  hash?: string;
  tokenAmount?: number;
  tokenPrice?: number;
  type?: string;
  valueUsd?: number;
}

export const tradeHistoryItemSchema: Schema<TradeHistoryItem> = object({
  blockchain: ['blockchain', optional(string())],
  date: ['date', optional(string())],
  hash: ['hash', optional(string())],
  tokenAmount: ['token_amount', optional(number())],
  tokenPrice: ['token_price', optional(number())],
  type: ['type', optional(string())],
  valueUsd: ['value_usd', optional(number())],
});
