import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';
import { RootState } from './index';

interface RequestBody {
  document?: string;
  variables?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: '',
});

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const url = (api.getState() as RootState).editor.url;

  api.dispatch({ type: 'START_LOADING' });
  try {
    const result = await rawBaseQuery({ ...(args as FetchArgs), url }, api, extraOptions);
    api.dispatch({ type: 'STOP_LOADING' });
    return result;
  } catch (error) {
    api.dispatch({ type: 'STOP_LOADING' });
    throw error;
  }

  return rawBaseQuery({ ...(args as FetchArgs), url }, api, extraOptions);
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: dynamicBaseQuery,
  endpoints: ({ query }) => ({
    getSchema: query({
      query: ({ url }) => ({
        url,
        method: 'POST',
        body: {
          query: getIntrospectionQuery(),
        },
      }),
      transformResponse: ({ data }: { data: IntrospectionQuery }) => {
        return data;
      },
    }),
    getData: query<string, RequestBody>({
      query: ({ document, headers, variables }) => ({
        url: '/',
        method: 'POST',
        body: {
          query: document,
          variables,
        },
        headers,
      }),
      transformResponse: (data: Record<string, unknown>) => {
        return JSON.stringify(data, null, 2);
      },
      transformErrorResponse: (error) => {
        if (!error.data) return null;

        return JSON.stringify(error.data, null, 2);
      },
    }),
  }),
});

export const { useLazyGetSchemaQuery, useLazyGetDataQuery, endpoints, useGetDataQuery, useGetSchemaQuery } = api;
