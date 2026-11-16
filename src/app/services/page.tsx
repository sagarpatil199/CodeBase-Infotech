import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { company } from "@/data/company";
import { routes } from "@/data/navigation";
import { publishedServices, servicesIntro } from "@/data/services";
import { learningStages } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Software Development Services",
  description: `${company.brandName} offers software development services alongside IT training, built on the technologies we teach.`,
  alternates: { canonical: routes.services },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Software Development Services"
        lede={servicesIntro.body}
      >
        <Link href={routes.discussProject} className="btn btn-primary">
          Discuss Your Project
        </Link>
      </PageIntro>

      {/* Rendered only when verified services exist in src/data/services.ts */}
      {publishedServices.length > 0 && (
        <section className="wrap band">
          <h2 className="h2">What we do</h2>
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {publishedServices.map((service) => (
              <li key={service.title} className="border-line border-t py-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted mt-2">{service.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="wrap band grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="h2">The technologies we work with</h2>
          <p className="text-muted mt-5">
            The same stack we teach, from the interface to the data layer.
          </p>
        </div>
        <dl className="border-line border-t">
          {learningStages.map((stage) => (
            <div
              key={stage.number}
              className="border-line grid gap-3 border-b py-5 sm:grid-cols-[14rem_1fr] sm:items-center"
            >
              <dt className="font-display text-lg font-semibold">
                {stage.title
                  .replace(" Development", "")
                  .replace(" Management", "s")}
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
      </section>

      <section className="bg-surface border-line border-y">
        <div className="wrap band grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <h2 className="h2">Tell us what you are building</h2>
            <p className="text-muted mt-5">
              A short enquiry is enough to start. It helps if you include:
            </p>
          </div>
          <ol className="border-line border-t">
            {servicesIntro.enquiryChecklist.map((item) => (
              <li key={item} className="border-line border-b py-5 text-lg">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <CtaBand
          heading="Have a project in mind?"
          text="Send a software development enquiry and tell us what you need."
          label="Discuss Your Project"
          href={routes.discussProject}
        />
      </div>
    </>
  );
}
