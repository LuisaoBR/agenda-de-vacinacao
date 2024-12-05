import ky, { KyInstance } from 'ky'

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const createHttpInstance = () =>
  ky.extend({
    prefixUrl: baseUrl,
  });

export type Http = KyInstance

export const defaultHttpInstance = createHttpInstance();
