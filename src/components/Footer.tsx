import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="muted">Designed &amp; built with Next.js</p>
      </div>
    </footer>
  );
}
