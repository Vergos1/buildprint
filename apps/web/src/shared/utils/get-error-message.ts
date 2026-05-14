import axios from "axios"

export function getErrorMessage(
  error: unknown,
  fallback = "Щось пішло не так"
): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? fallback
  }
  if (error instanceof Error) return error.message
  return fallback
}
