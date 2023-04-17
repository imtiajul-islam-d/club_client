import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_FETCH_URL,
//   prepareHeaders: async (headers, { getState, endpoint }) => {
//     const token = getState()?.auth?.accessToken;
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
});
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    // if (result?.error?.status === 401) {
    //   api.dispatch(userLoggedOut());
    //   localStorage.removeItem("auth");
    // }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});