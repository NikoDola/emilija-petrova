export const projects = [
  {
    slug: "ks-group-brand-identity",
    cardTitle: "KS Group — Brand Identity System",
    title: "KS Group — Brand Identity System",
    category: "Brand Identity",
    image: "/images/portfolio/ks-group.avif",
    description:
      "A complete identity direction built to give KS Group a clear, confident and consistent presence across its brand touchpoints.",
    galleryHeights: [1472, 1013, 1013, 1013, 1013, 1013, 1013, 2270, 2075, 1013, 1013, 231],
  },
  {
    slug: "restaurant-menu-gold-felicia",
    cardTitle: "Gold Felicia — Restaurant Menu Design",
    title: "Restaurant Menu Design — Gold Felicia",
    category: "Menu & Print Design",
    image: "/images/portfolio/restaurant-menu-gold-felicia.avif",
    description:
      "An elegant restaurant menu for Gold Felicia, combining refined typography, rich food photography and a premium black-and-gold visual language.",
    galleryWidth: 1440,
    galleryHeights: [1065, 172, 1065, 1065, 1065, 1065, 1065, 1065, 1065, 172, 1065, 1065, 1065, 207],
  },
  {
    slug: "music-event-campaigns-gold-felicia",
    cardTitle: "Gold Felicia — Music Event Campaigns",
    title: "Music Event Campaigns — Gold Felicia",
    category: "Event Campaign Design",
    image: "/images/portfolio/music-event-campaigns-gold-felicia.avif",
    description:
      "A bold visual campaign for Gold Felicia's live music events, uniting artist imagery, dramatic typography and premium nightlife styling across promotional formats.",
    galleryHeights: [9473],
  },
  {
    slug: "gold-felicia-photo-editing",
    cardTitle: "Gold Felicia — Photo Editing & Design",
    title: "Photo Editing & Design — Gold Felicia Cabaret Artists",
    category: "Photo Editing & Design",
    image: "/images/portfolio/gold-felicia.avif",
    description:
      "A theatrical image-editing and visual design project shaped around the expressive, high-energy world of Gold Felicia's cabaret artists.",
    galleryHeights: [8178],
  },
  {
    slug: "evrotip-anniversary-mark",
    cardTitle: "Evrotip — 10 Years Anniversary Mark",
    title: "Evrotip — 10 Years Anniversary Mark",
    category: "Logo Design",
    image: "/images/portfolio/evrotip.avif",
    description:
      "A celebratory anniversary mark that brings Evrotip's decade milestone and football identity together in one memorable symbol.",
    galleryHeights: [1569, 798, 1698],
  },
  {
    slug: "valshift-visual-identity",
    cardTitle: "Valshift — Visual Identity Design",
    title: "Valshift — Visual Identity Design",
    category: "Visual Identity",
    image: "/images/portfolio/valshift.avif",
    description:
      "A contemporary visual identity for a technology-led brand, balancing a precise digital feel with an approachable visual voice.",
    galleryHeights: [1374, 1085, 1085, 108, 1011, 1170, 276],
  },
  {
    slug: "delov-photography-logo",
    cardTitle: "Delov Photography — Logo Design",
    title: "Wedding Photographer — Logo Design",
    category: "Logo Design",
    image: "/images/portfolio/wedding-photographer.avif",
    description:
      "An elegant, editorial logo system created for a wedding photographer, designed to feel personal, refined and timeless.",
    galleryHeights: [7560],
  },
  {
    slug: "premium-safety-solution",
    cardTitle: "Premium Safety Solution",
    title: "Premium Safety Solution — Branding & Social Media",
    category: "Branding & Social Media",
    image: "/images/portfolio/premium-safety.avif",
    description:
      "A cohesive brand and social media direction for a safety specialist, translating technical expertise into clear and trustworthy communication.",
    galleryHeights: [8271],
  },
  {
    slug: "virtual-internship-fair-social-media",
    cardTitle: "Virtual Internship Fair — Social Media Design",
    title: "Virtual Internship Fair — Social Media Design",
    category: "Social Media Design",
    image: "/images/portfolio/virtual-internship-fair.avif",
    description:
      "A bright social media campaign for a virtual internship fair, designed to connect students and graduates with companies through clear, engaging event communication.",
    galleryHeights: [9601],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
