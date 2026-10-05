import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site, skills, experience, education } from "@/data/site";
import { resolveImage } from "@/lib/images";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const principles = [
  {
    title: "Built for production",
    body: "Live products for paying clients — real domains, real customers, real uptime.",
  },
  {
    title: "Clean & scalable",
    body: "Repository pattern, clean architecture and caching — code that grows with the business.",
  },
  {
    title: "DevOps mindset",
    body: "Docker, CI/CD and AWS — automated, repeatable releases instead of manual deploys.",
  },
  {
    title: "Growth-minded",
    body: "SEO, digital marketing and ad campaigns — I build products that get found and convert.",
  },
];

const socialLinks = [
  { label: "GitHub", href: site.socials.github },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "X", href: site.socials.x },
].filter((s) => s.href);

export default function HomePage() {
  const profile = resolveImage("/img/portrait-formal");
  const avatar = resolveImage("/img/portrait-casual");

  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            <span className="hero-name">
              {site.name} — {site.role}
            </span>
            I build software — and the pipelines that <em>ship</em> it.
          </h1>
          <p className="hero-lede">
            Full stack developer at {site.company} with {site.experienceYears} years of freelance experience delivering
            for clients in the UK and India. I work across the full stack and into DevOps — from clean, scalable
            backends to Docker, CI/CD and AWS deployments.
          </p>
          <div className="hero-actions">
            <Link href="/#work" className="btn">
              View selected work
            </Link>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              Get in touch
            </a>
            {site.resume && (
              <a href={site.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                Résumé
              </a>
            )}
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Experience</dt>
              <dd>{site.experienceYears} years</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Datameris IT Solutions</dd>
            </div>
            <div>
              <dt>Client work</dt>
              <dd>UK &amp; India</dd>
            </div>
            <div>
              <dt>Shipped</dt>
              <dd>{projects.length} products</dd>
            </div>
          </dl>
        </div>

        <div className="hero-photo">
          {profile ? (
            <Image
              src={profile}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(max-width: 900px) 80vw, 380px"
              className="hero-photo-img"
            />
          ) : (
            <div className="hero-photo-fallback" aria-hidden="true">
              AV
            </div>
          )}
        </div>
      </section>

      <section id="work" className="section container" aria-labelledby="work-title">
        <SectionHeading id="work-title" index="01" title="Selected work" />
        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section id="experience" className="section container" aria-labelledby="experience-title">
        <SectionHeading id="experience-title" index="02" title="Experience" />
        <ol className="experience">
          {experience.map((job) => (
            <li key={job.company} className="experience-item reveal">
              <div className="experience-head">
                <p className="experience-duration mono">
                  {job.duration}
                  {job.current && <span className="tag-solid">Current</span>}
                </p>
                <h3>{job.company}</h3>
                <p className="muted">{job.role}</p>
              </div>
              <div className="experience-body">
                <p>{job.description}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="section container" aria-labelledby="about-title">
        <SectionHeading id="about-title" index="03" title="About" />
        <div className="about reveal">
          {avatar && (
            <Image
              src={avatar}
              alt={`Casual portrait of ${site.name}`}
              width={112}
              height={112}
              sizes="112px"
              className="about-avatar"
            />
          )}
          <p className="about-lead">
            I&apos;m Avirag, a software developer who thinks like a product owner. I write <em>clean, scalable</em>{" "}
            code, automate how it ships — and understand the SEO and marketing that turn a launch into customers.
          </p>
          <ul className="principles">
            {principles.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="stack" className="section container" aria-labelledby="stack-title">
        <SectionHeading id="stack-title" index="04" title="Stack" />
        <div className="skills reveal">
          {skills.map((group) => (
            <div key={group.group} className="skill-group">
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section container" aria-labelledby="education-title">
        <SectionHeading id="education-title" index="05" title="Education" />
        <ol className="timeline">
          {education.map((item) => (
            <li key={item.institution} className="timeline-item reveal">
              <div className="timeline-head">
                <h3>{item.institution}</h3>
                {item.period && <span className="muted mono">{item.period}</span>}
              </div>
              <p className="timeline-credential">{item.credential}</p>
              <p className="muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="section container contact" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" index="06" title="Contact" />
        <div className="reveal">
          <p className="contact-title">
            Have a role or a product in mind? <em>Let&apos;s talk.</em>
          </p>
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email} <span aria-hidden="true">↗</span>
          </a>
          <ul className="socials">
            <li>
              <a href={`tel:${site.phoneHref}`} className="link-arrow">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </li>
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer me" className="link-arrow">
                  {s.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
