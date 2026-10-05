import Image from "next/image";
import { resolveImage } from "@/lib/images";
import type { Project } from "@/data/projects";

export function ProjectMedia({
  project,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  const src = resolveImage(project.image);

  return (
    <div className="project-media">
      {src ? (
        <Image
          src={src}
          alt={`${project.name} — ${project.category} screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="project-media-img"
        />
      ) : (
        <div className="project-media-fallback" aria-hidden="true">
          <span>{project.name}</span>
          <small>{project.category}</small>
        </div>
      )}
    </div>
  );
}
