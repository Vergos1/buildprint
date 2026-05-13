import { AxiosHeaders, RawAxiosRequestHeaders } from "axios"
import { instance } from "./instance"

export function getData<TResp, TParams = void>(
  path: string,
  params?: TParams,
  headers?: RawAxiosRequestHeaders | AxiosHeaders
) {
  return instance.get<TResp>(path, { params, headers })
}

export function postData<TArg, TResp, TParams = void>(
  path: string,
  body?: TArg,
  params?: TParams,
  headers?: RawAxiosRequestHeaders | AxiosHeaders
) {
  return instance.post<TResp>(path, body, { params, headers })
}

export function patchData<TArg, TResp, TParams = void>(
  path: string,
  body?: TArg,
  params?: TParams,
  headers?: RawAxiosRequestHeaders | AxiosHeaders
) {
  return instance.patch<TResp>(path, body, { params, headers })
}

export function putData<TArg, TResp, TParams = void>(
  path: string,
  body?: TArg,
  params?: TParams,
  headers?: RawAxiosRequestHeaders | AxiosHeaders
) {
  return instance.put<TResp>(path, body, { params, headers })
}

export function deleteData<TResp, TParams = void>(
  path: string,
  params?: TParams,
  headers?: RawAxiosRequestHeaders | AxiosHeaders
) {
  return instance.delete<TResp>(path, { params, headers })
}
