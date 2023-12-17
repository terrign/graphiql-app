import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';
import { gql } from 'graphql-request';
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

  return rawBaseQuery({ ...(args as FetchArgs), url }, api, extraOptions);
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: dynamicBaseQuery,
  endpoints: ({ query }) => ({
    getSchema: query<IntrospectionQuery, void>({
      query: () => ({
        url: '/',
        method: 'POST',
        body: {
          query: getIntrospectionQuery(),
        },
      }),
      transformResponse: ({ data }: { data: IntrospectionQuery }) => {
        return data;
      },
    }),
    getData: query<Record<string, unknown>, RequestBody>({
      query: ({ document, headers, variables }) => ({
        url: '/',
        method: 'POST',
        body: {
          query: gql`
            ${document}
          `,
          variables,
        },
        headers,
      }),
    }),
  }),
});

export const { useLazyGetSchemaQuery, useLazyGetDataQuery } = api;
