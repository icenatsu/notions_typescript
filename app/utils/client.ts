import {z} from "zod";

export type ClientConfig<T> = {
  data?: unknown;
  zodSchema?: z.ZodSchema<T>;
  method?: 'DELETE' | 'GET' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
  headers?: HeadersInit;
  customConfig?: RequestInit;
  signal?: AbortSignal;
};

export async function client<T>(
  url: string,
  {
    data,
    zodSchema,
    method,
    headers: customHeaders,
    signal,
    customConfig,
  }: ClientConfig<T> = {}
): Promise<T> {
  const config: RequestInit = {
    method: method ?? (data ? 'POST' : 'GET'),
    body: data ? JSON.stringify(data) : null,
    headers: {
      'Content-Type': data ? 'application/json' : '',
      Accept: 'application/json',
      ...customHeaders, 
    },
    signal,
    ...customConfig,
  };

  try {
    const response = await window.fetch(url, config);

    if (response.status === 401) {
      throw new Error("You're not authenticated");
    }

    let result = null;

    if (response.status !== 204) {
      result = await response.json();      
    }

    if (response.ok) {
      return zodSchema && result ? zodSchema.parse(result) : result;
    } else {
      throw result;
    }
  } catch (e) {
    return Promise.reject(e);
  }
}
