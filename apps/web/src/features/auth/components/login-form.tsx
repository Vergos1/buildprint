"use client"
import { useAuth } from "@features/auth/hooks/use-auth"
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
import { links } from "src/shared/config"
import { PrivacyBlock } from "../../../components/privacy-block"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { login } = useAuth()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
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
              </Field>
              <Field>
                <Button type="submit">Увійти</Button>
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
