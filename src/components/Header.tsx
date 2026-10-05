import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/data/site";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#stack", label: "Stack" },
  { href: "/#education", label: "Education" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} — home`}>
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-name">{site.name}</span>
        </Link>
        <nav aria-label="Primary" className="header-nav">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="nav-link">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="btn btn-small">
                Contact
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
