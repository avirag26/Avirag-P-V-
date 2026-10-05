import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#a1a1a1", marginTop: 28 }}>
            {site.experienceYears} years · Next.js · NestJS · Docker · CI/CD · AWS
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#737373" }}>
          <span>Scholaro · Cocospice · Micro C Media · StreamDrop</span>
          <span>Portfolio</span>
        </div>
      </div>
    ),
    size,
  );
}
