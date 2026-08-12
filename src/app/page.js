import Image from "next/image";
import Link from "next/link";
import { projects } from "./portfolio-data";
import ExperienceCounter from "./experience-counter";
import HomeNavigation from "./home-navigation";
import ScrollToTop from "./scroll-to-top";
import styles from "./page.module.css";

const services = [
  {
    title: "Branding & Logo Design",
    description:
      "Logo design, visual identity, brand elements, color and typography systems, and basic brand guidelines.",
    icon: "/images/personal/brand-icon.svg",
  },
  {
    title: "Marketing Design",
    description:
      "Campaign visuals, promotional materials, event campaigns, advertising creatives, and banners.",
    icon: "/images/personal/marketing-icon.svg",
  },
  {
    title: "Social Media",
    description:
      "Social media posts, stories, campaign sets, digital ads, and promotional content.",
    icon: "/images/personal/social-media-icon.svg",
  },
  {
    title: "Print Design",
    description:
      "Menus, flyers, posters, brochures, invitations, promotional print, and editorial materials.",
    icon: "/images/personal/print-design-icon.svg",
  },
  {
    title: "Digital & Web Visual Design",
    description:
      "Website visuals, landing pages, web banners, UI visual concepts, and digital experiences.",
    icon: "/images/personal/digital-web-cion.svg",
  },
];

const softwares = [
  { name: "Adobe Photoshop", icon: "/images/personal/adobe-photoshop-icon.svg" },
  { name: "Adobe Illustrator", icon: "/images/personal/adobe-illustrator-icon.svg" },
  { name: "Adobe After Effects", icon: "/images/personal/adobe-after-effect-icon.svg" },
  { name: "Adobe InDesign", icon: "/images/personal/adobe-indesign-icon.svg" },
  { name: "Figma", icon: "/images/personal/figma-icon.svg" },
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function Portrait({ eager = false, showSoftwareOrbit = false }) {
  return (
    <div className={styles.portraitWrap}>
      <span className={styles.portraitGlow} aria-hidden="true" />
      {showSoftwareOrbit && (
        <div className={styles.softwareOrbit} aria-hidden="true">
          {softwares.map((software, index) => (
            <span
              className={styles.softwareOrbitTrack}
              style={{ "--orbit-delay": `${index * -4.4}s` }}
              key={software.name}
            >
              <span className={styles.softwareOrbitIcon}>
                <Image src={software.icon} alt="" width={44} height={44} />
              </span>
            </span>
          ))}
        </div>
      )}
      <Image
        className={styles.portrait}
        src="/images/personal/profile-image.avif"
        alt="Emilija Petrova"
        width={480}
        height={620}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        sizes="(max-width: 720px) 78vw, 430px"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.siteHeader}>
        <HomeNavigation />
      </header>

      <div id="main-content">
        <section className={`${styles.section} ${styles.hero}`} id="home">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Hello, I am</p>
            <h1>Emilija Petrova</h1>
            <p className={styles.role}>Graphic &amp; Visual Designer</p>

            <div className={styles.heroSocials} aria-label="Social profiles">
              <a
                href="https://www.behance.net/emilijapetrova"
                target="_blank"
                rel="noreferrer"
                aria-label="Emilija Petrova on Behance"
              >
                <Image src="/images/personal/social-behance.svg" alt="" width={40} height={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/petrovaemilija/"
                target="_blank"
                rel="noreferrer"
                aria-label="Emilija Petrova on LinkedIn"
              >
                <Image src="/images/personal/social-linkedin.svg" alt="" width={42} height={42} />
              </a>
            </div>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Let&apos;s connect
              </a>
              <a className={styles.secondaryButton} href="/emilija-petrova-cv.pdf" download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <Portrait eager showSoftwareOrbit />
        </section>

        <section className={`${styles.section} ${styles.services}`} id="services">
          <div className={styles.sectionHeading}>
            <h2>Services</h2>
            <p>Creative design solutions focused on strong, consistent and memorable visual identities.</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <Image src={service.icon} alt="" width={74} height={74} />
                <h3>{service.title}</h3>
                <span className={styles.cardLine} aria-hidden="true" />
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.about}`} id="about">
          <div className={styles.aboutContent}>
            <div className={styles.aboutCopy}>
              <h2>About me</h2>
              <div className={styles.aboutPanel}>
                <p>
                  I&apos;m a graphic and visual designer with a strong interest in branding,
                  visual identity and marketing design.
                </p>
                <p>
                  Over the years, I&apos;ve worked across digital, print, social media and
                  promotional campaigns, always focusing on creating visuals that are clear,
                  consistent and visually engaging.
                </p>
                <p>
                  I enjoy exploring new ideas, developing strong concepts and continuously
                  evolving my skills as a designer.
                </p>
              </div>

              <div className={styles.aboutStats}>
                <div className={styles.experienceCard}>
                  <ExperienceCounter target={5} />
                  <span>Years<br />Experience</span>
                </div>
                <div className={styles.programCard}>
                  <div className={styles.programIcons}>
                    {softwares.map((software) => (
                      <Image
                        key={software.name}
                        src={software.icon}
                        alt={software.name}
                        title={software.name}
                        width={43}
                        height={43}
                      />
                    ))}
                  </div>
                  <span>Softwares</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutPortrait}>
              <Portrait />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.portfolio}`} id="portfolio">
          <div className={styles.sectionHeading}>
            <h2>Portfolio</h2>
            <p>A selection of identity, logo, campaign and visual design projects.</p>
          </div>

          <div className={styles.portfolioGrid}>
            {projects.map((project) => (
              <Link className={styles.projectCard} href={`/portfolio/${project.slug}`} key={project.slug}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 340px"
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div>
                    <h3>{project.cardTitle}</h3>
                    <p>{project.category}</p>
                  </div>
                  <ArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.contact}`} id="contact">
          <div className={styles.contactContent}>
            <h2>Contact</h2>
            <p className={styles.contactIntro}>
              Have a project on mind or want to work together?
              <br />
              Let&apos;s <span>get in touch.</span>
            </p>

            <a className={styles.emailLink} href="mailto:emaa.petrova@gmail.com">
              <Image src="/images/personal/email.svg" alt="" width={34} height={34} />
              <span>emaa.petrova@gmail.com</span>
              <ArrowUpRight />
            </a>

            <div className={styles.socialDivider}>
              <span />
              <p>Or connect with me</p>
              <span />
            </div>

            <div className={styles.contactSocials}>
              <a href="https://www.behance.net/emilijapetrova" target="_blank" rel="noreferrer">
                <Image src="/images/personal/social-behance.svg" alt="" width={32} height={32} />
                Behance
                <ArrowUpRight />
              </a>
              <a href="https://www.linkedin.com/in/petrovaemilija/" target="_blank" rel="noreferrer">
                <Image src="/images/personal/social-linkedin.svg" alt="" width={32} height={32} />
                LinkedIn
                <ArrowUpRight />
              </a>
            </div>

            <p className={styles.location}>
              Based in Bitola, North Macedonia.
              <br />
              Available for freelance &amp; full-time opportunities.
            </p>
          </div>

          <div className={styles.contactMark} aria-hidden="true">
            <Image src="/images/personal/logo.svg" alt="" width={310} height={300} />
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <Image src="/images/personal/logo.svg" alt="" width={27} height={27} />
        <p>© {new Date().getFullYear()} Emilija Petrova</p>
        <a href="#home">Back to top ↑</a>
      </footer>
      <ScrollToTop />
    </main>
  );
}
