export interface UserPublic {
  id: string
  email: string
  nickname: string
  createdAt?: string
}

export interface AuthUser {
  id: string
  email: string
  nickname: string
  accessToken: string
}

export interface AuthResponse {
  accessToken: string
  user: UserPublic
}
