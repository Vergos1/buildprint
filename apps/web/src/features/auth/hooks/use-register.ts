import { MUTATION_KEYS } from "@shared-config/query-keys"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import type { ApiErrorResponse } from "src/shared/types/api-error"
import { authApi } from "../api"
import { authService } from "../service"

export function useRegister() {
  const router = useRouter()

  return useMutation({
    mutationKey: MUTATION_KEYS.auth.register,
    mutationFn: authApi.register,
    onSuccess: async (_, variables) => {
      await authService.login({
        email: variables.email,
        password: variables.password,
      })
      router.push("/login")
      router.refresh()
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      console.error("Помилка реєстрації:", error.response?.data?.message)
    },
  })
}
