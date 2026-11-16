import { learningStages, type LearningStage } from "./technologies";

/**
 * Course catalogue. Fees, duration and payment terms are edited here.
 * Do not add modules, timings, eligibility rules or certifications
 * until the institute confirms them.
 */
export type Course = {
  slug: string;
  name: string;
  outcome: string;
  duration: string;
  fee: { amount: number; currency: "INR" };
  paymentSummary: string;
  paymentOptions: string[];
  stages: LearningStage[];
  /** Path or URL of the syllabus PDF. While null, "Download Syllabus" stays hidden. */
  syllabusUrl: string | null;
};

export const courses: Course[] = [
  {
    slug: "master-software-development-data-engineering",
    name: "Master Software Development & Data Engineering Program",
    outcome: "Become a Full Stack Developer & Data Engineer in 1 Year.",
    duration: "1 Year",
    fee: { amount: 30000, currency: "INR" },
    paymentSummary: "Students can pay partially or fully within 12 months.",
    paymentOptions: [
      "Full payment",
      "Partial payment",
      "Payment can be completed within 12 months",
      "EMI-friendly payment structure",
    ],
    stages: learningStages,
    syllabusUrl: null,
  },
];

export const featuredCourse = courses[0];

export const courseHref = (course: Course) => `/education/${course.slug}/`;

export const formatFee = (fee: Course["fee"]) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: fee.currency,
    maximumFractionDigits: 0,
  }).format(fee.amount);
