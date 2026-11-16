import { courseHref, featuredCourse } from "./courses";

export const routes = {
  home: "/",
  about: "/about/",
  education: "/education/",
  course: courseHref(featuredCourse),
  services: "/services/",
  projects: "/projects/",
  contact: "/contact/",
  /** Enquiry form with the enquiry type preselected. */
  enroll: "/contact/?type=course#enquiry",
  discussProject: "/contact/?type=software#enquiry",
} as const;

export const mainNav = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Education", href: routes.education },
  { label: "Services", href: routes.services },
  { label: "Projects", href: routes.projects },
  { label: "Contact", href: routes.contact },
];

export const footerNav = [
  {
    title: "Explore",
    links: mainNav,
  },
  {
    title: "Education",
    links: [
      { label: "Courses", href: routes.education },
      { label: "Programme details", href: routes.course },
      { label: "Learning roadmap", href: `${routes.course}#roadmap` },
      { label: "Enroll now", href: routes.enroll },
    ],
  },
  {
    title: "Software services",
    links: [
      { label: "Software development", href: routes.services },
      { label: "Project concepts", href: routes.projects },
      { label: "Discuss your project", href: routes.discussProject },
    ],
  },
];
