import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvApi = createApi({
  reducerPath: 'tvApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tv-backend.flareon.ru' }), // Укажи свой URL бэка
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => `channels?currentStart=${new Date().toISOString()}&currentEnd=${new Date().toISOString()}`, // Укажи эндпоинт
      transformResponse: (response) => response.data, // Достаём массив `data`
    }),
  }),
});

export const { useGetChannelsQuery } = tvApi;
