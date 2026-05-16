import { Button, Card, CardContent, Separator } from "@workspace-components"
import { PlugZap, RefreshCw, Router, Settings, WifiOff, X } from "lucide-react"
import { useRetry } from "./use-retry"

export const formatLastRetryTime = (date: Date) =>
  date.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

const reasons = [
  {
    icon: Router,
    title: "Wi-Fi або мобільний інтернет",
    description: "Перевірте що мережа увімкнена",
  },
  {
    icon: PlugZap,
    title: "Кабельне підключення",
    description: "Перевірте що кабель підключений",
  },
  {
    icon: Settings,
    title: "Налаштування мережі",
    description: "Перезапустіть роутер або пристрій",
  },
]

export const NetworkOffline = () => {
  const { retry, lastCheck, isChecking } = useRetry()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border bg-background">
            <WifiOff className="h-9 w-9 text-muted-foreground" />
          </div>
          <div className="absolute right-0.5 bottom-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-destructive">
            <X className="text-destructive-foreground h-3 w-3" />
          </div>
        </div>

        <h1 className="mb-2 text-2xl font-medium">Немає з'єднання з мережею</h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          Не вдалося підключитись до інтернету.
          <br />
          Перевірте налаштування мережі.
        </p>

        <Card className="mb-5 w-full p-0 text-left">
          <CardContent className="p-0">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <div key={title}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-xs text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Button className="w-full" disabled={isChecking} onClick={retry}>
          <RefreshCw className={isChecking ? "animate-spin" : ""} />
          {isChecking ? "Перевіряємо..." : "Спробувати знову"}
        </Button>

        <p className="mt-4 text-xs text-muted-foreground">
          Остання перевірка: {formatLastRetryTime(lastCheck)}
        </p>
      </div>
    </div>
  )
}
