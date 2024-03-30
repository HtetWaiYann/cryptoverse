import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetCoinsApiResponse } from "../types/coinType.d";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "55ed38359fmshcf3aa76be053ca2p139905jsn690b32b5b850",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<GetCoinsApiResponse, number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
