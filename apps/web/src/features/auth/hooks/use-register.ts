import { MUTATION_KEYS } from "@shared-config/query-keys"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { authApi } from "../api"

export function useRegister() {
  const router = useRouter()

  return useMutation({
    mutationKey: MUTATION_KEYS.auth.register,
    mutationFn: authApi.register,
    onSuccess: () => {
      router.push("/login")
    },
    onError: (error) => {
      console.error("Помилка реєстрації:", error)
    },
  })
}
