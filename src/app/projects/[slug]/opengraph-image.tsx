import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1a1", letterSpacing: 2, textTransform: "uppercase" }}>
          {project?.category ?? "Project"}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {project?.name ?? site.name}
          </div>
          <div style={{ fontSize: 38, color: "#a1a1a1", marginTop: 28, maxWidth: 1000 }}>{project?.tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#737373" }}>
          <span>{project?.stack.slice(0, 4).join(" · ")}</span>
          <span>{site.name}</span>
        </div>
      </div>
    ),
    size,
  );
}
