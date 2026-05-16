"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Abstraction from "@public/auth/abstraction-1.png"
import {
  Button,
  Card,
  CardContent,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  MessageBlock,
} from "@workspace-components"
import { appConfig } from "@workspace-config/app"
import { cn } from "@workspace-lib"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { links } from "src/shared/config"
import { PrivacyBlock } from "../../../components/privacy-block"
import { useLogin, useLogout } from "../hooks"
import type { LoginSchema } from "../schema"
import { loginSchema } from "../schema"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const login = useLogin()
  const logout = useLogout()
  const { status } = useSession()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (dto: LoginSchema) => {
    try {
      await login(dto)
    } catch (error) {
      form.setError("root", {
        message: "Помилка входу",
      })
    }
  }

  return (
    <div className={cn("flex flex-col gap-5", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Вхід</h1>
                <p className="text-balance text-muted-foreground">
                  Раді бачити вас знову у {appConfig.name}
                </p>
              </div>

              {form.formState.errors.root && (
                <MessageBlock>
                  {form.formState.errors.root.message}
                </MessageBlock>
              )}

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Електронна пошта
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      name={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="ivan@gmail.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Пароль</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      name={field.name}
                      aria-invalid={fieldState.invalid}
                      type="password"
                      placeholder="••••••••"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Завантаження..." : "Увійти"}
                </Button>
                {status === "authenticated" && (
                  <Button type="button" onClick={logout}>
                    Вийти
                  </Button>
                )}
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
