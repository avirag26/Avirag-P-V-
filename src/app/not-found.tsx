import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="mono muted">404</p>
      <h1>This page doesn&apos;t exist.</h1>
      <Link href="/" className="btn">
        Back to home
      </Link>
    </section>
  );
}
