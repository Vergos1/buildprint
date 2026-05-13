"use client"
import Abstraction from "@public/auth/abstraction-1.png"
import {
  Button,
  Card,
  CardContent,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@workspace-components"
import { appConfig } from "@workspace-config/app"
import { cn } from "@workspace-lib"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useAuth from "src/features/auth/hooks/useAuth"
import { links } from "src/shared/config"
import { PrivacyBlock } from "./privacy-block"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { handleLogin } = useAuth()
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  )
  const [isLoading, setIsLoading] = useState(false)

  const validate = (email: string, password: string) => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Введіть електронну пошту"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Невірний формат пошти"
    }

    if (!password) {
      newErrors.password = "Введіть пароль"
    } else if (password.length < 6) {
      newErrors.password = "Пароль має містити мінімум 6 символів"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    console.log(email, password)

    const validationErrors = validate(email, password)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsLoading(true)

    try {
      await handleLogin({ email, password })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Вхід</h1>
                <p className="text-balance text-muted-foreground">
                  Раді бачити вас знову у {appConfig.name}
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Електронна пошта</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ivan@gmail.com"
                  required
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Пароль</FieldLabel>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Завантаження..." : "Увійти"}
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Ще не зареєстровані?{" "}
                <Link href={links.signup}>Створити акаунт</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src={Abstraction}
              alt="Login illustration"
              fill
              priority
              className="object-cover dark:brightness-[0.8]"
            />
          </div>
        </CardContent>
      </Card>
      <PrivacyBlock className="px-6" />
    </div>
  )
}
