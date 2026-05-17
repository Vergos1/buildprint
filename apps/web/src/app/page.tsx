import { LandingHeader } from "@components"
import { links } from "@shared-config"
import { auth } from "@shared-lib"
import { Button } from "@workspace-components"
import {
  ArrowRight,
  Code2,
  Copy,
  FolderOpen,
  Search,
  Sparkles,
  Star,
  Tag,
  Zap,
} from "lucide-react"
import Link from "next/link"

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-border/50 bg-card/30 p-6 transition-all hover:border-border hover:bg-card/50">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors group-hover:bg-secondary group-hover:text-foreground">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="relative text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-card/50">
        <span className="text-lg font-bold text-muted-foreground">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export default async function Page() {
  const session = await auth()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader isLoggedIn={!!session} user={session?.user} />

      {/* Hero Section */}
      <section className="relative m-auto flex max-w-full flex-1 flex-col items-center justify-center overflow-hidden px-4 pt-12 pb-24 md:max-w-7xl">
        {/* Background Effects */}
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="glow absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Твоя особиста база рішень
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Припини писати
            </span>
            <br />
            <span className="bg-gradient-to-b from-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              одне й те саме.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            BuildPrint — це твоя база знань розробника. Зберігай рішення з
            контекстом, організовуй тегами, знаходь миттєво.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-12 gap-2 px-8 text-base" asChild>
              <Link href={links.register}>
                Почати
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base"
              asChild
            >
              <Link href="#how-it-works">Як це працює</Link>
            </Button>
          </div>

          {/* Terminal Command */}
          <div className="mt-8 flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-4 py-2 font-mono text-sm text-muted-foreground backdrop-blur-sm">
            <span className="text-foreground/60">$</span>
            <span>npx buildprint init</span>
          </div>

          {/* Code Preview */}
          <div className="mt-20 w-full max-w-full overflow-hidden md:max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-border/50 bg-card/80 shadow-2xl shadow-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-sm text-muted-foreground">
                  useFetch.ts
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="rounded bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground sm:text-xs">
                    hooks
                  </span>
                  <span className="rounded bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground sm:text-xs">
                    api
                  </span>
                </div>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto text-left font-mono text-[10px] leading-relaxed sm:text-xs">
                  <code>
                    <span className="text-muted-foreground/60">
                      {"// Custom fetch hook with error handling"}
                    </span>
                    {"\n"}
                    <span className="text-muted-foreground/60">
                      {"// Tags: hooks, api, typescript"}
                    </span>
                    {"\n\n"}
                    <span className="text-sky-400">{"export function "}</span>
                    <span className="text-amber-400">{"useFetch"}</span>
                    <span className="text-foreground/90">{"<"}</span>
                    <span className="text-emerald-400">{"T"}</span>
                    <span className="text-foreground/90">{">("}</span>
                    <span className="text-foreground/70">{"url"}</span>
                    <span className="text-foreground/90">{": "}</span>
                    <span className="text-emerald-400">{"string"}</span>
                    <span className="text-foreground/90">{")"}</span>
                    <span className="text-foreground/90">{" {"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-sky-400">{"const "}</span>
                    <span className="text-foreground/90">
                      {"[data, setData] = "}
                    </span>
                    <span className="text-amber-400">{"useState"}</span>
                    <span className="text-foreground/90">{"<"}</span>
                    <span className="text-emerald-400">{"T"}</span>
                    <span className="text-foreground/90">{" | "}</span>
                    <span className="text-sky-400">{"null"}</span>
                    <span className="text-foreground/90">{">( "}</span>
                    <span className="text-sky-400">{"null"}</span>
                    <span className="text-foreground/90">{");"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-sky-400">{"const "}</span>
                    <span className="text-foreground/90">
                      {"[loading, setLoading] = "}
                    </span>
                    <span className="text-amber-400">{"useState"}</span>
                    <span className="text-foreground/90">{"("}</span>
                    <span className="text-sky-400">{"true"}</span>
                    <span className="text-foreground/90">{");"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-sky-400">{"const "}</span>
                    <span className="text-foreground/90">
                      {"[error, setError] = "}
                    </span>
                    <span className="text-amber-400">{"useState"}</span>
                    <span className="text-foreground/90">{"<"}</span>
                    <span className="text-emerald-400">{"Error"}</span>
                    <span className="text-foreground/90">{" | "}</span>
                    <span className="text-sky-400">{"null"}</span>
                    <span className="text-foreground/90">{">( "}</span>
                    <span className="text-sky-400">{"null"}</span>
                    <span className="text-foreground/90">{");"}</span>
                    {"\n\n"}
                    {"  "}
                    <span className="text-sky-400">{"return "}</span>
                    <span className="text-foreground/90">
                      {"{ data, loading, error };"}
                    </span>
                    {"\n"}
                    <span className="text-foreground/90">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative m-auto max-w-7xl border-t border-border/50 py-32"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Можливості
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Все що тобі потрібно
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Не просто сніпети. Структуровані рішення з контекстом, які ти
              реально використаєш.
            </p>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<FolderOpen className="h-5 w-5" />}
              title="Організовані Принти"
              description="Зберігай код з описом — коли і чому використовувати. Більше ніякого «де я це бачив»."
            />
            <FeatureCard
              icon={<Tag className="h-5 w-5" />}
              title="Розумні теги"
              description="Категоризуй через теги: auth, forms, api. Знайди потрібне рішення за секунди."
            />
            <FeatureCard
              icon={<Search className="h-5 w-5" />}
              title="Миттєвий пошук"
              description="Шукай по назві, опису або коду. Твої рішення завжди під рукою."
            />
            <FeatureCard
              icon={<Copy className="h-5 w-5" />}
              title="Копіювання в один клік"
              description="Копіюй код миттєво. Більше не треба риться в старих проектах."
            />
            <FeatureCard
              icon={<Star className="h-5 w-5" />}
              title="Обрані"
              description="Зіркуй найпотрібніші принти для швидкого доступу. Збери свій особистий тулкіт."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Блискавично швидко"
              description="Побудовано для швидкості. Весь твій архів рішень — за мілісекунди."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="m-auto max-w-7xl border-t border-border/50 py-32"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Як це працює
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Три простих кроки
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Організуй свої знання розробника за хвилини
            </p>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <StepCard
              number="01"
              title="Збережи Принт"
              description="Додай код з назвою, описом і тегами. Поясни коли і як це застосовувати — щоб через місяць не гадати."
            />
            <StepCard
              number="02"
              title="Організуй і тегуй"
              description="Використовуй теги для категоризації. Створюй колекції: auth, forms, api-патерни і більше."
            />
            <StepCard
              number="03"
              title="Знаходь і використовуй"
              description="Шукай або переглядай принти. Копіюй код в один клік і повертайся до роботи."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="m-auto max-w-7xl border-t border-border/50 py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Готовий зібрати свою
            <br />
            базу знань?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Перестань втрачати найкращі рішення. Починай будувати свою
            бібліотеку сьогодні.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-12 gap-2 px-8 text-base" asChild>
              <Link href={links.register}>
                Почати безкоштовно
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground">
              <Code2 className="h-4 w-4 text-background" />
            </div>
            <span className="text-sm font-medium">BuildPrint</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Зроблено розробниками для розробників.
          </p>
        </div>
      </footer>
    </div>
  )
}
