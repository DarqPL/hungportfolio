import Intro from "@/content/intro.mdx";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col justify-center gap-10">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Portfolio Starter
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Huynh Anh Hung
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Starter portfolio được setup với Next.js, Tailwind CSS, MDX và
            shadcn/ui để sẵn sàng phát triển dự án cá nhân.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a className={buttonVariants({ size: "lg" })} href="mailto:hello@example.com">
            Contact me
          </a>
          <a
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            <Intro />
          </div>
        </div>
      </section>
    </main>
  );
}
