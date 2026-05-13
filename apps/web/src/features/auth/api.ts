import { apiClient } from "@api"
import { AuthResponse } from "@workspace-types/auth"
import { LoginDto, RegisterDto } from "./types"

const BASE_URL = "/auth"

export const authApi = {
  login: (dto: LoginDto) =>
    apiClient.post<LoginDto, AuthResponse>(`${BASE_URL}/login`, dto),

  register: (dto: RegisterDto) =>
    apiClient.post<RegisterDto, AuthResponse>(`${BASE_URL}/register`, dto),
}
