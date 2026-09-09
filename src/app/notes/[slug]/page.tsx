import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/json-ld";
import { getNoteBySlug, notes } from "@/data/notes";
import { absoluteUrl, createMetadata } from "@/lib/seo";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return createMetadata({ title: "Note Not Found", path: `/notes/${slug}` });
  }

  return createMetadata({
    title: note.title,
    description: note.description,
    path: `/notes/${note.slug}`,
  });
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.description,
    url: absoluteUrl(`/notes/${note.slug}`),
    datePublished: note.publishedAt,
    dateModified: note.updatedAt ?? note.publishedAt,
    keywords: note.tags,
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <Container className="py-14 sm:py-18">
        <article className="max-w-3xl space-y-6">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {note.publishedAt ?? "Draft"}
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            {note.title}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">{note.description}</p>
        </article>
      </Container>
    </main>
  );
}
