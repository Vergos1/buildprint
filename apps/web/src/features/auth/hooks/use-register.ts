import { MUTATION_KEYS } from "@shared-config/query-keys"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { ApiErrorResponse } from "src/shared/types/error"
import { authApi } from "../api"

export function useRegister() {
  const router = useRouter()

  return useMutation({
    mutationKey: MUTATION_KEYS.auth.register,
    mutationFn: authApi.register,
    onSuccess: () => {
      router.push("/login")
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      console.error("Помилка реєстрації:", error.response?.data?.message)
    },
  })
}
