import { z } from "zod"

/**
 * Схема валідації форми входу.
 *
 * @example
 * const result = loginSchema.safeParse({ email: "ivan@gmail.com", password: "12345678" })
 */
export const loginSchema = z.object({
  email: z.string().min(1, "Введіть email").email("Невірний формат email"),
  password: z.string().min(8, "Мінімум 8 символів"),
})

/**
 * Схема валідації форми реєстрації.
 * Перевіряє збіг пароля та підтвердження через refine.
 *
 * @example
 * const result = registerSchema.safeParse({
 *   nickname: "ivandev",
 *   email: "ivan@gmail.com",
 *   password: "12345678",
 *   confirmPassword: "12345678",
 * })
 */
export const registerSchema = z
  .object({
    /**
     * Нікнейм користувача.
     * Тільки латиниця, цифри, `-` та `_`.
     * Не може починатись або закінчуватись на `-` або `_`.
     */
    nickname: z
      .string()
      .min(3, "Нікнейм має бути не менше 3 символів")
      .max(30, "Нікнейм має бути не більше 30 символів")
      .regex(
        /^[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]$/,
        "Тільки латиниця, цифри, - та _ (не на початку/кінці)"
      ),
    email: z.string().min(1, "Введіть email").email("Невірний формат email"),
    password: z.string().min(8, "Мінімум 8 символів"),
    confirmPassword: z.string().min(1, "Повторіть пароль"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  })

/** Тип даних форми входу */
export type LoginSchema = z.infer<typeof loginSchema>

/** Тип даних форми реєстрації */
export type RegisterSchema = z.infer<typeof registerSchema>
