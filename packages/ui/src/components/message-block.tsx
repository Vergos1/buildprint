import { cn } from "../lib"

function MessageBlock({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive",
        className
      )}
      {...props}
    />
  )
}
export { MessageBlock }
