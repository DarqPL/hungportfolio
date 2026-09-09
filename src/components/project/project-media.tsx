import Image from "next/image";
import type { ProjectMedia as ProjectMediaType } from "@/data/projects";

type ProjectMediaProps = {
  media?: ProjectMediaType;
};

export function ProjectMedia({ media }: ProjectMediaProps) {
  if (!media) {
    return (
      <div className="grid aspect-[16/10] place-items-center border border-dashed border-border bg-card/50 p-6 text-center">
        <p className="max-w-sm font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Project visual evidence can be added here later.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-border bg-card">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
