import { authApi } from "@features/auth/api"
import { AuthResponse, AuthUser } from "@workspace-types/auth"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials): Promise<AuthUser | null> {
        const { email, password } = credentials as Record<string, string>

        if (!email || !password) return null

        try {
          const { data } = await authApi.login({ email, password })
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name,
            accessToken: data.accessToken,
          }
        } catch {
          return null
        }
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken

        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      }

      return token
    },

    session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken as string,
        user: {
          ...session.user,
          ...(token.user as { id: string; email: string; name: string | null }),
        },
      }
    },
  },
})
