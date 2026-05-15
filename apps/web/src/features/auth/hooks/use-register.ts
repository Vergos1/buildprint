import { MUTATION_KEYS } from "@shared-config/query-keys"
import { useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
import { ApiErrorResponse } from "src/shared/types/api-error"
import { authApi } from "../api"
import { authService } from "../service"
import type { RegisterDto } from "../types"

export function useRegister() {
  const router = useRouter()

  const {
    mutateAsync: registerMutation,
    isPending,
    error,
  } = useMutation<
    AxiosResponse<null>,
    AxiosError<ApiErrorResponse>,
    RegisterDto
  >({
    mutationKey: MUTATION_KEYS.auth.register,
    mutationFn: authApi.register,
  })

  const register = async (dto: RegisterDto) => {
    await registerMutation(dto)
    await authService.login(dto)
    router.push("/")
    router.refresh()
  }

  return { register, isPending, error }
}
