export type Note = {
  slug: string;
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  tags: string[];
  readingTime?: string;
};

export const notes: Note[] = [];

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
