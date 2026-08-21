import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../portfolio-data";
import ScrollToTop from "../../scroll-to-top";
import styles from "./project.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.cardTitle,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Project navigation">
          <Link href="/#home" aria-label="Emilija Petrova, home">
            <Image
              src="/images/personal/logo.svg"
              alt=""
              width={48}
              height={47}
              loading="eager"
            />
          </Link>
          <div>
            <Link href="/#portfolio">All work</Link>
            <Link className={styles.contactLink} href="/#contact">
              Let&apos;s connect
            </Link>
          </div>
        </nav>
      </header>

      <article className={styles.project}>
        <Link className={styles.backLink} href="/#portfolio">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>

        <div className={styles.titleRow}>
          <div>
            <p className={styles.category}>{project.category}</p>
            <h1>{project.title}</h1>
          </div>
          <p className={styles.index}>
            {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div className={styles.gallery} aria-label={`${project.title} project gallery`}>
          {project.galleryHeights.map((height, index) => (
            <Image
              className={styles.galleryImage}
              src={`/images/projects/${project.slug}/${String(index + 1).padStart(2, "0")}.avif`}
              alt={`${project.title}, project image ${index + 1}`}
              width={1400}
              height={height}
              sizes="(max-width: 1160px) 100vw, 1120px"
              loading={index === 0 ? "eager" : "lazy"}
              unoptimized
              key={`${project.slug}-${index + 1}`}
            />
          ))}
        </div>

        <Link className={styles.nextProject} href={`/portfolio/${nextProject.slug}`}>
          <span>
            <small>Next project</small>
            {nextProject.cardTitle}
          </span>
          <strong aria-hidden="true">→</strong>
        </Link>
      </article>
      <ScrollToTop />
    </main>
  );
}
