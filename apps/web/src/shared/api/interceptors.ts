import { auth } from "src/shared/lib"
import { instance } from "./instance"

instance.interceptors.request.use(async (config) => {
  const session = await auth()
  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }
  return config
})
