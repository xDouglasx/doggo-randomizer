import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://random.dog";

export const doggoApi = createApi({
    reducerPath: 'doggoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getDoggos: build.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ){

                let dogs = [];
                for(let i=0; i < 6; i++){
                 const dog= await fetchWithBQ('/woof.json')
                 dogs.push(dog.data);
                }
                
                return { data : dogs }
            },
        }),
    }),
})

export const {
    useGetDoggosQuery
} = doggoApi;
