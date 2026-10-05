import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`project-card reveal${project.featured ? " is-featured" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="project-card-media" tabIndex={-1} aria-hidden="true">
        <ProjectMedia
          project={project}
          priority={project.featured}
          sizes={project.featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
        />
      </Link>
      <div className="project-card-body">
        <p className="project-meta">
          <span>{number}</span>
          <span>{project.category}</span>
          {project.featured && <span className="tag-solid">Flagship</span>}
          {project.client && <span className="tag-outline">{project.client}</span>}
        </p>
        <h3 className="project-title">
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="tags" aria-label={`${project.name} tech stack`}>
          {project.stack.slice(0, project.featured ? 6 : 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link href={`/projects/${project.slug}`} className="link-arrow">
            Case study <span aria-hidden="true">→</span>
          </Link>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
