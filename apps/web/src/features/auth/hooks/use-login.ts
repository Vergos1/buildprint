"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import type { LoginDto } from "../types"

type LoginFn = (dto: LoginDto) => Promise<void>

export function useLogin(): LoginFn {
  const router = useRouter()

  const login = async (dto: LoginDto): Promise<void> => {
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

  return login
}
