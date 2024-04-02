import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '971701a18emsh22eccd62af5a76cp1eaf33jsnb139533ba7fa',
    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
};
const baseUrl = "https://google-api31.p.rapidapi.com";

const createRequest = (url: string, body: NewsBody) => ({ url, headers: cryptoNewsApiHeaders, method: 'POST', body });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.mutation<NewsResponse, NewsBody>({
      query: (body) => createRequest('', body),
    }),
  }),
});

export const { useGetCryptoNewsMutation } = cryptoNewsApi;
