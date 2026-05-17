import "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    nickname: string
    accessToken: string
  }

  interface Session {
    accessToken?: string
    user: {
      id: string
      email: string
      nickname: string
    }
  }
}
