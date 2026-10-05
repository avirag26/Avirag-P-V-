import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectMedia } from "@/components/ProjectMedia";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} — ${project.category}`;
  return {
    title,
    description: project.summary,
    keywords: [project.name, project.category, ...project.stack, site.name],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title,
      description: project.summary,
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const url = `${site.url}/projects/${project.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.summary,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: project.live ?? url,
        author: { "@id": `${site.url}/#person` },
        keywords: project.stack.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/#work` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
    ],
  };

  return (
    <article className="case container">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#work">Work</Link>
          </li>
          <li aria-current="page">{project.name}</li>
        </ol>
      </nav>

      <header className="case-header">
        <p className="project-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
          {project.client && <span className="tag-outline">{project.client}</span>}
        </p>
        <h1 className="case-title">{project.name}</h1>
        <p className="case-tagline">{project.tagline}</p>
        <div className="hero-actions">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">
              Visit live site ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Source code ↗
            </a>
          )}
        </div>
      </header>

      <div className="case-media">
        <ProjectMedia project={project} priority sizes="(max-width: 1120px) 100vw, 1120px" />
      </div>

      <div className="case-grid">
        <aside className="case-aside">
          <h2 className="label">Stack</h2>
          <ul className="tags">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <h2 className="label">Role</h2>
          <p>
            {project.client
              ? "Client engagement — design, development, SEO & deployment"
              : "Design, full-stack development & deployment"}
          </p>
        </aside>
        <div className="case-body">
          <h2 className="label">Overview</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="case-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <section aria-labelledby="highlights-title" className="case-highlights">
        <h2 id="highlights-title" className="label">
          Key highlights
        </h2>
        <ol className="highlights">
          {project.highlights.map((h, i) => (
            <li key={h.title} className="reveal">
              <span className="mono muted">{String(i + 1).padStart(2, "0")}</span>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <Link href={`/projects/${next.slug}`} className="next-project">
        <span className="label">Next project</span>
        <span className="next-project-name">
          {next.name} <span aria-hidden="true">→</span>
        </span>
      </Link>

      <JsonLd data={schema} />
    </article>
  );
}
