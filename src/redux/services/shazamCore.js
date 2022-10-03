import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd6e1eef1cdmshedf6b0f20d4dc8fp181babjsna5fe927e5b51',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
    },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set(
                'X-RapidAPI-Key',
                'd6e1eef1cdmshedf6b0f20d4dc8fp181babjsna5fe927e5b51'
            );

            return headers;
        },
    }),
    endpoints: builder => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
