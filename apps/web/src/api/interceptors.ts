import { auth } from "@shared-lib"
import { getSession } from "next-auth/react"
import { instance } from "./instance"

const isServer = () => typeof window === "undefined"

instance.interceptors.request.use(async (config) => {
  const session =
    typeof window === "undefined" ? await auth() : await getSession()

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }
  return config
})
