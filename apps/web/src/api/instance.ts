import { auth } from "@lib"
import { handleApiError } from "@utils"
import axios, {
  AxiosHeaders,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
  withCredentials: true,
})

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

// Request interceptor for API calls
instance.interceptors.request.use(
  async (config) => {
    const result: InternalAxiosRequestConfig = { ...config }
    const headers = result.headers!
    headers["Accept-Language"] = "en"

    const session = await auth()

    if (session) {
      headers.Authorization = `Bearer ${session.accessToken}`
    }

    return result
  },
  (error) => {
    handleApiError(error)

    return Promise.reject(error)
  }
)
