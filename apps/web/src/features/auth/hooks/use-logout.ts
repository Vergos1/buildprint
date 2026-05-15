"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

type LogoutFn = () => Promise<void>

export function useLogout(): LogoutFn {
  const router = useRouter()

  const logout = async (): Promise<void> => {
    await signOut({ redirect: false })
    router.push("/login")
    router.refresh()
  }

  return logout
}
