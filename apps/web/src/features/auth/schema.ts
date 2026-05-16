import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "Введіть email").email("Невірний формат email"),
  password: z.string().min(1, "Введіть пароль").min(8, "Мінімум 8 символів"),
})

export const registerSchema = z
  .object({
    nickname: z.string().min(1, "Введіть ім'я").max(30, "Максимум 30 символів"),
    email: z.string().min(1, "Введіть email").email("Невірний формат email"),
    password: z.string().min(1, "Введіть пароль").min(8, "Мінімум 8 символів"),
    confirmPassword: z
      .string()
      .min(1, "Повторіть пароль")
      .min(8, "Мінімум 8 символів"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  })

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
