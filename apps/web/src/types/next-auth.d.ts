import "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    name: string | null
    accessToken: string
  }

  interface Session {
    accessToken?: string
    user: {
      id: string
      email: string
      name: string | null
    }
  }
}
