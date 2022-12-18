import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:80/"
})


export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (queryObject) => `products?${queryObject}`
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`
        })
    })
})

export const {useGetProductsQuery, useGetProductQuery} = shopApi