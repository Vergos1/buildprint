import "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    email?: string | null
    name?: string | null
    accessToken?: string
  }

  interface Session {
    accessToken?: string
    user: {
      id: string
      email?: string | null
      name?: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    user?: any
  }
}
