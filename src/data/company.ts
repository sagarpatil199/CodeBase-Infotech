/**
 * Verified company information. Single source of truth for anything the
 * site says about the business. Edit here; pages read from this file.
 */
export const company = {
  brandName: "CodeBase Infotech",
  legalName: "Codebase Infotech Private Limited",
  status: "Active",
  cin: "U62010MH2026PTC465011",
  incorporationDate: "6 January 2026",
  location: {
    city: "Vasai",
    state: "Maharashtra",
    country: "India",
    display: "Vasai, Maharashtra, India",
  },
  classification: "Computer Programming, Consultancy and Related Activities",
  nicCode: "62010",
  primaryBusiness: "IT Training and Education",
  secondaryBusiness: "Software Development Services",
  instituteType: "IT Training Institute",
  tagline: "Learn. Build. Innovate.",
  introduction:
    "CodeBase Infotech is a professional IT training institute focused on practical and job-oriented learning. We bridge the gap between academic knowledge and industry requirements through hands-on training with real-time projects.",
  aim: "We aim to give students practical technical knowledge and industry-relevant learning experiences.",
  audience: [
    {
      title: "Students",
      description: "Add practical, hands-on skills alongside your studies.",
    },
    {
      title: "Fresh graduates",
      description:
        "Turn academic knowledge into the skills the industry asks for.",
    },
    {
      title: "Working professionals",
      description: "Build skills in software development and data engineering.",
    },
    {
      title: "Career builders",
      description:
        "Anyone pursuing a career in software development or data engineering.",
    },
  ],
  /**
   * PLACEHOLDER: the live domain has not been provided. Used only for
   * SEO metadata (canonical URLs, sitemap). Replace before going live.
   */
  siteUrl: "https://www.codebaseinfotech.example",
} as const;

/** The three institute highlights shown under the homepage hero. */
export const highlights = [
  {
    icon: "wrench",
    title: "Practical Training",
    description: "Hands-on, job-oriented learning from the first stage.",
  },
  {
    icon: "layers",
    title: "Real-Time Projects",
    description: "Learn each technology by building with it.",
  },
  {
    icon: "users",
    title: "Experienced Mentors",
    description: "Guidance from experienced mentors as you learn.",
  },
] as const;

/** "Why Choose Us" reasons. */
export const reasons = [
  {
    icon: "badge",
    title: "Industry-Level Training",
    description:
      "Training that connects academic knowledge with industry requirements.",
  },
  {
    icon: "layers",
    title: "Real-Time Projects",
    description: "Hands-on work with real-time projects, not theory alone.",
  },
  {
    icon: "users",
    title: "Experienced Mentors",
    description: "Learn with guidance from experienced mentors.",
  },
  {
    icon: "wallet",
    title: "Affordable Fees",
    description: "One clear fee for the full one-year programme.",
  },
  {
    icon: "calendar",
    title: "Flexible Payment Options",
    description:
      "Pay in full or in parts, and complete payment within 12 months.",
  },
] as const;

export type IconName =
  (typeof highlights)[number]["icon"] | (typeof reasons)[number]["icon"];
