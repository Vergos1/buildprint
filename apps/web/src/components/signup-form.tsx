import Abstraction from "@public/auth/abstraction-2.png"
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
import { cn } from "@workspace-lib"
import Image from "next/image"
import Link from "next/link"
import { links } from "src/shared/config"
import { PrivacyBlock } from "./privacy-block"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Реєстрація</h1>
                <p className="text-sm text-balance text-muted-foreground">
                  Введіть дані нижче, щоб створити новий акаунт
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Ім&apos;я</FieldLabel>
                <Input
                  id="name"
                  type="name"
                  placeholder="Іван Петренко"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Електронна пошта</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@gmail.com"
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Пароль</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Повторіть пароль
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Пароль має містити щонайменше 8 символів.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Зареєструватись</Button>
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
