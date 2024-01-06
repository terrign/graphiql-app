/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';
import { fetch, Request, Response } from '@remix-run/web-fetch';
import { AbortController as NodeAbortController } from 'abort-controller';

// @ts-expect-error
globalThis.fetch = fetch;
// @ts-expect-error
globalThis.Request = Request;
// @ts-expect-error
globalThis.Response = Response;

// @ts-expect-error
globalThis.AbortController = NodeAbortController;
