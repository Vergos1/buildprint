import { signIn, signOut } from "next-auth/react"
import type { LoginDto } from "../types"

export const authService = {
  login: async (dto: LoginDto) => {
    const result = await signIn("credentials", {
      ...dto,
      redirect: false,
    })
    if (result?.error) throw new Error("Невірний email або пароль")
    return result
  },
  logout: async () => {
    await signOut({ redirect: false })
  },
}
