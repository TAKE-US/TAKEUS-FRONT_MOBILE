import axios from 'axios';
import { match } from 'ts-pattern';

export enum ERROR_TYPE {
  'NOT_ERROR' = 'NOT_ERROR',
  'CLIENT_ERROR' = 'CLIENT_ERROR',
  'SERVER_ERROR' = 'SERVER_ERROR',
}

export const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const isErrorByStatusCode = (statusCode: number): ERROR_TYPE | null => {
  return match(statusCode)
    .with(200, () => ERROR_TYPE.NOT_ERROR)
    .with(400, 401, 403, () => ERROR_TYPE.CLIENT_ERROR)
    .with(500, () => ERROR_TYPE.SERVER_ERROR)
    .otherwise(() => null);
};
