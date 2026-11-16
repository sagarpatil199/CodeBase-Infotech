import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { ProgrammePanel } from "@/components/ProgrammePanel";
import { company } from "@/data/company";
import { courses } from "@/data/courses";
import { routes } from "@/data/navigation";
import { learningStages } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Education and Courses",
  description: `Courses at ${company.brandName}: the one-year Master Software Development & Data Engineering Program, with practical training and real-time projects.`,
  alternates: { canonical: routes.education },
};

export default function EducationPage() {
  return (
    <>
      <PageIntro
        title="One programme, from first screen to data pipeline"
        lede="Practical, job-oriented training in software development and data engineering."
      >
        <Link href={routes.enroll} className="btn btn-primary">
          Enroll Now
        </Link>
      </PageIntro>

      <section className="wrap band flex flex-col gap-8">
        {courses.map((course) => (
          <ProgrammePanel key={course.slug} course={course} />
        ))}
      </section>

      <section className="bg-surface border-line border-y">
        <div className="wrap band">
          <h2 className="h2">What you will work with</h2>
          <p className="lede mt-5">
            Every technology in the programme, grouped by stage.
          </p>
          <dl className="border-line mt-10 border-t">
            {learningStages.map((stage) => (
              <div
                key={stage.number}
                className="border-line grid gap-3 border-b py-5 sm:grid-cols-[16rem_1fr] sm:items-center"
              >
                <dt className="font-display text-lg font-semibold">
                  <span className="text-cyan mr-3 font-mono text-sm font-normal">
                    {stage.number}
                  </span>
                  {stage.title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {stage.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
