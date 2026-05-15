"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { authService } from "../service"

type LogoutFn = () => Promise<void>

export function useLogout(): LogoutFn {
  const router = useRouter()

  const logout = async (): Promise<void> => {
    await authService.logout()
    router.push("/login")
    router.refresh()
  }

  return logout
}
