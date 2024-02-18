import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { redirectToLogin } from '../../utils/UnauthorizedAcess';
  const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL ?? 'https://dummyjson.com/', 
    prepareHeaders(headers) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });
  
  const baseQueryWithInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        redirectToLogin()
    }
    return result;
  };
  
  export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
    keepUnusedDataFor: 60 * 60 * 24, //24 hours
    tagTypes: ['getAllTodos'],
  });