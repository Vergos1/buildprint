import { AxiosHeaders, RawAxiosRequestHeaders } from "axios"
import { instance } from "./instance"

export const apiClient = {
  get: <TResp, TParams = void>(
    path: string,
    params?: TParams,
    headers?: RawAxiosRequestHeaders | AxiosHeaders
  ) => instance.get<TResp>(path, { params, headers }),

  post: <TArg, TResp>(
    path: string,
    body?: TArg,
    headers?: RawAxiosRequestHeaders | AxiosHeaders
  ) => instance.post<TResp>(path, body, { headers }),

  patch: <TArg, TResp>(
    path: string,
    body?: TArg,
    headers?: RawAxiosRequestHeaders | AxiosHeaders
  ) => instance.patch<TResp>(path, body, { headers }),

  put: <TArg, TResp>(
    path: string,
    body?: TArg,
    headers?: RawAxiosRequestHeaders | AxiosHeaders
  ) => instance.put<TResp>(path, body, { headers }),

  delete: <TResp>(
    path: string,
    headers?: RawAxiosRequestHeaders | AxiosHeaders
  ) => instance.delete<TResp>(path, { headers }),
}
