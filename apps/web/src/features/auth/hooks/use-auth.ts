"use client"

import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LoginDto } from "../types"

export function useAuth() {
  const router = useRouter()

  const login = async (dto: LoginDto) => {
    const result = await signIn("credentials", {
      ...dto,
      redirect: false,
    })

    if (result?.error) {
      throw new Error("Невірний email або пароль")
    }

    router.push("/")
    router.refresh()
  }

  const logout = async () => {
    await signOut({ redirect: false })
    router.push("/login")
    router.refresh()
  }

  return { login, logout }
}
