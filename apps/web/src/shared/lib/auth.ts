import { SessionUser } from "@features/auth/types"
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
        const { email, password } = credentials as Record<string, string>

        if (!email || !password) return null

        const { data } = await axios.post<AuthResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          { email, password }
        )

        return {
          id: data.user.id,
          email: data.user.email,
          nickname: data.user.nickname,
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
          nickname: user.nickname,
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
          ...(token.user as SessionUser),
        },
      }
    },
  },
})
