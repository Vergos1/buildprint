import { getErrorMessage } from "@shared-utils"
import axios from "axios"

export function getAuthError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status
    const message = error.response?.data?.message

    if (message) return message

    switch (status) {
      case 404:
        return "Користувача не знайдено"
      case 401:
        return "Невірний пароль"
      case 400:
        return "Невірні дані"
      case 409:
        return "Акаунт з таким email вже існує"
    }
  }
  return getErrorMessage(error)
}
