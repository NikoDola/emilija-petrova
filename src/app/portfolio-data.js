export const projects = [
  {
    slug: "ks-group-brand-identity",
    cardTitle: "KS Group — Brand Identity System",
    title: "КС Групација (KS Group) — Brand Identity System",
    category: "Brand Identity",
    image: "/images/portfolio/ks-group.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/253592711/ks-grupacia-(KS-Group)-Brand-Identity-System",
    description:
      "A complete identity direction built to give KS Group a clear, confident, and consistent presence across its brand touchpoints.",
  },
  {
    slug: "gold-felicia-photo-editing",
    cardTitle: "Gold Felicia — Photo Editing & Design",
    title: "Photo Editing & Design — Gold Felicia Cabaret Artists",
    category: "Photo Editing",
    image: "/images/portfolio/gold-felicia.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/251669655/Photo-Editing-Design-Gold-Felicia-Cabaret-Artists",
    description:
      "A theatrical image-editing and visual design project shaped around the expressive, high-energy world of Gold Felicia’s cabaret artists.",
  },
  {
    slug: "evrotip-anniversary-mark",
    cardTitle: "Evrotip — 10 Years Anniversary Mark",
    title: "Evrotip — 10 Years Anniversary Mark",
    category: "Logo Design",
    image: "/images/portfolio/evrotip.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/251347369/Evrotip-10-Years-Anniversary-Mark",
    description:
      "A celebratory anniversary mark that brings Evrotip’s decade milestone and football identity together in one memorable symbol.",
  },
  {
    slug: "valshift-visual-identity",
    cardTitle: "Valshift — Visual Identity Design",
    title: "Valshift — Visual Identity Design",
    category: "Visual Identity",
    image: "/images/portfolio/valshift.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/251345701/Valshift-Visual-Identity-Design",
    description:
      "A contemporary visual identity for a technology-led brand, balancing a precise digital feel with an approachable visual voice.",
  },
  {
    slug: "delov-photography-logo",
    cardTitle: "Delov Photography — Logo Design",
    title: "Wedding Photographer — Logo Design",
    category: "Logo Design",
    image: "/images/portfolio/wedding-photographer.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/251342597/Wedding-Photographer-Logo-Design",
    description:
      "An elegant, editorial logo system created for a wedding photographer, designed to feel personal, refined, and timeless.",
  },
  {
    slug: "premium-safety-solution",
    cardTitle: "Premium Safety Solution",
    title: "Premium Safety Solution — Branding & Social Media",
    category: "Branding & Social Media",
    image: "/images/portfolio/premium-safety.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/216343755/Premium-Safety-Solution-(Branding-Social-Media)",
    description:
      "A cohesive brand and social media direction for a safety specialist, translating technical expertise into clear and trustworthy communication.",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
