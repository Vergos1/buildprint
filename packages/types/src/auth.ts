export interface UserPublic {
  id: string
  email: string
  name: string | null
  createdAt?: string
}

export interface AuthUser {
  id: string
  email: string
  name: string | null
  accessToken: string
}

export interface AuthResponse {
  accessToken: string
  user: UserPublic
}
