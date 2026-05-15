"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { authService } from "../service"
import type { LoginDto } from "../types"

type LoginFn = (dto: LoginDto) => Promise<void>

export function useLogin(): LoginFn {
  const router = useRouter()

  const login = async (dto: LoginDto): Promise<void> => {
    authService.login(dto)

    router.push("/")
    router.refresh()
  }

  return login
}
