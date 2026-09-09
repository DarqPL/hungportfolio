import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { notes } from "@/data/notes";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Notes",
  description:
    "Technical notes by Huynh Anh Hung on Java, Spring Boot, backend architecture, databases, and Web3.",
  path: "/notes",
});

export default function NotesPage() {
  return (
    <main>
      <Container className="py-14 sm:py-18">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">Notes</p>
          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Technical Notes
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            A future home for concise development notes on backend engineering,
            Java, Spring Boot, databases, and Web3.
          </p>
        </div>

        {notes.length === 0 ? (
          <div className="mt-12 border border-dashed border-border bg-card/40 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">No notes published yet.</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              The MDX notes architecture is ready, but this section stays quiet until real posts are added.
            </p>
          </div>
        ) : null}
      </Container>
    </main>
  );
}
