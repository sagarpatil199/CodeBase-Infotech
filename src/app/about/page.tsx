import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { company } from "@/data/company";
import { featuredCourse } from "@/data/courses";
import { routes } from "@/data/navigation";
import { learningStages } from "@/data/technologies";

export const metadata: Metadata = {
  title: "About Us",
  description: `${company.brandName} is an ${company.instituteType.toLowerCase()} in ${company.location.display}, focused on practical and job-oriented learning.`,
  alternates: { canonical: routes.about },
};

const facts = [
  ["Legal name", company.legalName],
  ["Company status", company.status],
  ["CIN", company.cin],
  ["Incorporated", company.incorporationDate],
  ["Registered location", company.location.display],
  [
    "Business classification",
    `${company.classification} (NIC ${company.nicCode})`,
  ],
  ["Primary business", company.primaryBusiness],
  ["Secondary business", company.secondaryBusiness],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Practical IT Training for Real Career Opportunities"
        lede={company.tagline}
      />

      <section className="wrap band grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <h2 className="h2">Who we are</h2>
        <div>
          <p className="text-xl">{company.introduction}</p>
          <p className="text-muted mt-5">
            We are an {company.instituteType.toLowerCase()} based in{" "}
            {company.location.display}. {company.primaryBusiness} is our primary
            business, and we also offer{" "}
            {company.secondaryBusiness.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="bg-surface border-line border-y">
        <div className="wrap band grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Our focus: practical IT education
            </h2>
            <p className="text-muted mt-5">
              College teaches the theory. Jobs ask for the practice. Our work is
              the gap between the two: practical, job-oriented learning that
              connects academic knowledge with industry requirements.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              How you learn here
            </h2>
            <p className="text-muted mt-5">
              Training is hands-on and built around real-time projects. The{" "}
              {featuredCourse.duration.toLowerCase()} programme moves through{" "}
              {learningStages.length} stages in order:{" "}
              {learningStages.map((s) => s.title.toLowerCase()).join(", ")}.
            </p>
            <Link href={routes.course} className="btn btn-quiet mt-7">
              See the learning roadmap
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap band">
        <h2 className="h2">Who we teach</h2>
        <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {company.audience.map((group) => (
            <li key={group.title} className="border-cyan border-t-2 py-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="text-muted mt-2 text-[0.9375rem]">
                {group.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap band grid gap-10 pt-0 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:pt-0">
        <div>
          <h2 className="h2">Our commitment</h2>
          <p className="text-muted mt-5">{company.aim}</p>
        </div>
        <dl className="border-line border-t">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className="border-line grid gap-1 border-b py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
            >
              <dt className="text-muted text-[0.9375rem]">{label}</dt>
              <dd className="font-medium break-words">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand />
    </>
  );
}
