/**
 * Software development is the company's secondary business.
 *
 * Only services with status "verified" are shown on the site. The list is
 * empty because no individual services have been confirmed yet, so the
 * Services page presents software development in general terms.
 *
 * To publish a service, add it here with status "verified":
 *
 *   {
 *     title: "Custom web applications",
 *     description: "One or two plain sentences about the service.",
 *     status: "verified",
 *   },
 */
export type SoftwareService = {
  title: string;
  description: string;
  status: "verified" | "pending";
};

export const softwareServices: SoftwareService[] = [];

export const publishedServices = softwareServices.filter(
  (service) => service.status === "verified",
);

export const servicesIntro = {
  heading: "Software development, alongside what we teach",
  body: "Training and education is our primary business. Software development services are our second line of work, built on the same technologies we teach.",
  /** Helps visitors write a useful first enquiry. Guidance, not promises. */
  enquiryChecklist: [
    "What you want to build, in a sentence or two",
    "Who will use it",
    "Anything you already have: an existing system, designs or data",
    "When you would like to start",
  ],
};
