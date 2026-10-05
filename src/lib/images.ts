import { existsSync } from "node:fs";
import path from "node:path";

const extensions = [".webp", ".avif", ".jpg", ".jpeg", ".png"];

/** Resolves "/img/profile" to the first existing file in /public, e.g. "/img/profile.jpg". */
export function resolveImage(basePath: string): string | null {
  for (const ext of extensions) {
    const candidate = `${basePath}${ext}`;
    if (existsSync(path.join(process.cwd(), "public", candidate))) return candidate;
  }
  return null;
}
