import { FieldDescription } from "@workspace-components"
import { cn } from "@workspace-lib"

export function PrivacyBlock({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <FieldDescription className={cn("text-center", className)} {...props}>
      Реєструючись, ви погоджуєтесь з <a href="#">Умовами використання</a> та{" "}
      <a href="#">Політикою конфіденційності</a>.
    </FieldDescription>
  )
}
