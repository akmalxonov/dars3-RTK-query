import {createApi,retry,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = async(arg,api,extraOptions)=>{
    const rowBaseQuery = fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders:(headers)=>{
            const token =localStorage.getItem("token")
            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    })
     console.log("BASE URL:", import.meta.env.VITE_BASE_URL); 
    const response = await rowBaseQuery(arg,api,extraOptions);
    return response
}
const fetchRetryWithBaseQuery = retry(baseQuery,{maxRetries:0})

export const api = createApi({
    reducerPath:"api",
    baseQuery:fetchRetryWithBaseQuery,
    tagTypes:["Products"],
    endpoints:()=>({})  
})