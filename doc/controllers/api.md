# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Fetch Crypto Data by Name](../../doc/controllers/api.md#fetch-crypto-data-by-name)
* [Fetch Wallet NF Ts](../../doc/controllers/api.md#fetch-wallet-nf-ts)


# Fetch Crypto Data by Name

```ts
async fetchCryptoDataByName(
  name?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Query, Optional | Name or symbol (or starting name/symbol) of the asset |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchResponse`](../../doc/models/search-response.md)

## Example Usage

```ts
const name = 'bitcoin';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchCryptoDataByName(name);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Wallet NF Ts

```ts
async fetchWalletNFTs(
  wallet?: string,
  force?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string \| undefined` | Query, Optional | Wallet address or ENS or Mobula username |
| `force` | `boolean \| undefined` | Query, Optional | Will force a new on-chain data fetch |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const wallet = '0x554efD74C693999bABf7CC0f5646D465A31b32CB';

const force = true;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletNFTs(
  wallet,
  force
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

