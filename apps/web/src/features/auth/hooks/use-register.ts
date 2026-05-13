import { MUTATION_KEYS } from "@shared-config/query-keys"
import { useMutation } from "@tanstack/react-query"
import { authApi } from "../api"

export function useRegister() {
  return useMutation({
    mutationKey: MUTATION_KEYS.auth.register,
    mutationFn: authApi.register,
  })
}
