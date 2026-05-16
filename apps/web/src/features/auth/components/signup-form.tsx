"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Abstraction from "@public/auth/abstraction-2.png"
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
import { cn } from "@workspace-lib"
import Image from "next/image"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { links } from "src/shared/config"
import { PrivacyBlock } from "../../../components/privacy-block"
import { useRegister } from "../hooks/use-register"
import { type RegisterSchema, registerSchema } from "../schema"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, isPending, error } = useRegister()

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (dto: RegisterSchema) => {
    const { nickname, email, password } = dto
    await register({ nickname, email, password })
  }

  return (
    <div className={cn("flex flex-col gap-5", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Реєстрація</h1>
                <p className="text-sm text-balance text-muted-foreground">
                  Введіть дані нижче, щоб створити новий акаунт
                </p>
              </div>

              {error && (
                <MessageBlock>
                  {error.response?.data?.message ?? "Помилка реєстрації"}
                </MessageBlock>
              )}

              <Controller
                name="nickname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Нікнейм</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Nickname"
                      autoFocus
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

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
                      type={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="ivan@gmail.com"
                      autoComplete="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Пароль</FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          type="password"
                          aria-invalid={fieldState.invalid}
                          placeholder="••••••••"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>
                          Повторіть пароль
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          type="password"
                          aria-invalid={fieldState.invalid}
                          placeholder="••••••••"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </Field>
                <FieldDescription>
                  Пароль має містити щонайменше 8 символів.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Загрузка" : "Зареєструватись"}
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Вже є акаунт? <Link href={links.login}>Увійти</Link>
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
