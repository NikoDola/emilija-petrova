export const projects = [
  {
    slug: "ks-group-brand-identity",
    cardTitle: "KS Group — Brand Identity System",
    title: "KS Group — Brand Identity System",
    category: "Brand Identity",
    image: "/images/portfolio/ks-group.jpg",
    description:
      "A complete identity direction built to give KS Group a clear, confident and consistent presence across its brand touchpoints.",
    galleryHeights: [1472, 1013, 1013, 1013, 1013, 1013, 1013, 2270, 2075, 1013, 1013, 231],
  },
  {
    slug: "gold-felicia-photo-editing",
    cardTitle: "Gold Felicia — Photo Editing & Design",
    title: "Photo Editing & Design — Gold Felicia Cabaret Artists",
    category: "Photo Editing & Design",
    image: "/images/portfolio/gold-felicia.jpg",
    description:
      "A theatrical image-editing and visual design project shaped around the expressive, high-energy world of Gold Felicia's cabaret artists.",
    galleryHeights: [8178],
  },
  {
    slug: "evrotip-anniversary-mark",
    cardTitle: "Evrotip — 10 Years Anniversary Mark",
    title: "Evrotip — 10 Years Anniversary Mark",
    category: "Logo Design",
    image: "/images/portfolio/evrotip.jpg",
    description:
      "A celebratory anniversary mark that brings Evrotip's decade milestone and football identity together in one memorable symbol.",
    galleryHeights: [1569, 798, 1698],
  },
  {
    slug: "valshift-visual-identity",
    cardTitle: "Valshift — Visual Identity Design",
    title: "Valshift — Visual Identity Design",
    category: "Visual Identity",
    image: "/images/portfolio/valshift.jpg",
    description:
      "A contemporary visual identity for a technology-led brand, balancing a precise digital feel with an approachable visual voice.",
    galleryHeights: [1374, 1085, 1085, 108, 1011, 1170, 276],
  },
  {
    slug: "delov-photography-logo",
    cardTitle: "Delov Photography — Logo Design",
    title: "Wedding Photographer — Logo Design",
    category: "Logo Design",
    image: "/images/portfolio/wedding-photographer.jpg",
    description:
      "An elegant, editorial logo system created for a wedding photographer, designed to feel personal, refined and timeless.",
    galleryHeights: [7560],
  },
  {
    slug: "premium-safety-solution",
    cardTitle: "Premium Safety Solution",
    title: "Premium Safety Solution — Branding & Social Media",
    category: "Branding & Social Media",
    image: "/images/portfolio/premium-safety.jpg",
    description:
      "A cohesive brand and social media direction for a safety specialist, translating technical expertise into clear and trustworthy communication.",
    galleryHeights: [8271],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
