import { shopApi } from "../../api/apiSlice";

const authApiSlice = shopApi.injectEndpoints({
    endpoints: (build)=> ({
        login: build.mutation({
            query: credentials => ({
                url:'/auth/login',
                method:'POST',
                body: {...credentials}
            })
        })
    })
})

export const {useLoginMutation} = authApiSlice
