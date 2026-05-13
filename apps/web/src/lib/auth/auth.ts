import { AuthResponse, AuthUser } from "@workspace-types/auth"
import axios from "axios"
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
        const { data } = await axios.post<AuthResponse>(
          "http://localhost:3001/auth/login",
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        )

        if (!data?.user || !data?.accessToken) return null

        return {
          id: data.user.id,
          email: data.user.email,
          name: data.user.name,
          accessToken: data.accessToken,
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
