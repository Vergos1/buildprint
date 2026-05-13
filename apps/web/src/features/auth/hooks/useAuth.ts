"use client"

import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

type LoginData = {
  email: string
  password: string
}

function useAuth() {
  const router = useRouter()

  const handleLogin = async (data: LoginData) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    console.log(result)
    if (result?.error) {
      console.error("Auth error:", result)
      alert("Невірний email або пароль")
      return
    }

    router.push("/")
    router.refresh()
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/login")
    router.refresh()
  }

  return { handleLogin, handleLogout }
}

export default useAuth
