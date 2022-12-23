import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:80/"
})


export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`
        }),
        getProduct: builder.query({
            query: (id) => `products/product/${id}`
        }),
        getCategory: builder.query({
            query: (category)=> `products/${category}`
        })
    })
})

export const {useGetProductsQuery, useGetProductQuery, useGetCategoryQuery} = shopApi