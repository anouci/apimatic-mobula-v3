/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface NFTTransaction {
  /** The NFT collection name. */
  collection?: string;
  /** The sender's address. */
  from?: string;
  /** The timestamp of the transaction. */
  timestamp?: number;
  /** The receiver's address. */
  to?: string;
  /** The NFT token id. */
  tokenId?: string;
}

export const nFTTransactionSchema: Schema<NFTTransaction> = object({
  collection: ['collection', optional(string())],
  from: ['from', optional(string())],
  timestamp: ['timestamp', optional(number())],
  to: ['to', optional(string())],
  tokenId: ['tokenId', optional(string())],
});
