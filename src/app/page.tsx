import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icon";
import { ProjectConcepts } from "@/components/ProjectConcepts";
import { ProgrammePanel } from "@/components/ProgrammePanel";
import { RoadmapShowcase } from "@/components/RoadmapShowcase";
import { company, highlights, reasons } from "@/data/company";
import { featuredCourse } from "@/data/courses";
import { routes } from "@/data/navigation";
import { servicesIntro } from "@/data/services";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="wrap relative grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <p className="font-display text-cyan text-lg font-medium">
              {company.tagline}
            </p>
            <h1 className="mt-5 text-[2.5rem] font-semibold sm:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]">
              Build Your IT Career with{" "}
              <span className="whitespace-nowrap">Industry-Ready</span> Skills
            </h1>
            <p className="text-muted mt-6 max-w-xl text-xl">
              {featuredCourse.outcome}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={routes.enroll} className="btn btn-primary">
                Enroll Now
              </Link>
              {featuredCourse.syllabusUrl ? (
                <a
                  href={featuredCourse.syllabusUrl}
                  download
                  className="btn btn-quiet"
                >
                  Download Syllabus
                </a>
              ) : (
                <Link href={routes.course} className="btn btn-quiet">
                  See the programme
                </Link>
              )}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Institute highlights */}
      <section
        aria-label="Institute highlights"
        className="border-line border-y"
      >
        <ul className="wrap divide-line grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 py-7 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <Icon
                name={item.icon}
                className="text-cyan mt-1 size-6 shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-muted mt-1 text-[0.9375rem]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured programme */}
      <section className="wrap band">
        <ProgrammePanel course={featuredCourse} />
      </section>

      {/* About */}
      <section className="wrap band grid gap-10 pt-0 lg:grid-cols-2 lg:gap-20 lg:pt-0">
        <h2 className="h2">
          Practical IT Training for Real Career Opportunities
        </h2>
        <div>
          <p className="text-lg">{company.introduction}</p>
          <p className="text-muted mt-5">{company.aim}</p>
          <Link href={routes.about} className="btn btn-quiet mt-8">
            About CodeBase Infotech
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-surface border-line border-y">
        <div className="wrap band grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <h2 className="h2">Why Choose Us</h2>
            <p className="lede mt-5">
              Five things you can count on when you learn with us.
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="border-line flex gap-4 border-t py-6"
              >
                <Icon
                  name={reason.icon}
                  className="text-blue mt-0.5 size-6 shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="text-muted mt-1.5 text-[0.9375rem]">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Curriculum roadmap */}
      <RoadmapShowcase
        heading="Five stages, one year"
        lede="The programme moves in order, from the interface people see to the data behind it."
      >
        <Link href={routes.course} className="btn btn-quiet">
          View programme details
        </Link>
      </RoadmapShowcase>

      {/* Projects showcase */}
      <section className="wrap band pt-0 lg:pt-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="h2">What these skills can build</h2>
            <p className="lede mt-5">
              Example project ideas that use the technologies in the programme.
            </p>
          </div>
          <Link href={routes.projects} className="btn btn-quiet self-start">
            All project concepts
          </Link>
        </div>
        <div className="mt-12">
          <ProjectConcepts limit={3} />
        </div>
      </section>

      {/* Software development introduction */}
      <section className="bg-surface border-line border-y">
        <div className="wrap band grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-20">
          <div>
            <h2 className="h2">{servicesIntro.heading}</h2>
            <p className="lede mt-5">{servicesIntro.body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={routes.services} className="btn btn-quiet">
              Software development services
            </Link>
          </div>
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
