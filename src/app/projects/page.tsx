import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { ProjectConcepts } from "@/components/ProjectConcepts";
import { company } from "@/data/company";
import { routes } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Project Concepts",
  description: `Example project concepts built on the technology stack taught at ${company.brandName}: React.js, .NET, SQL databases, Azure Cloud and Databricks.`,
  alternates: { canonical: routes.projects },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        title="Project concepts"
        lede="Five examples of what the technologies in our programme can build, and how the parts connect."
      />
      <section className="wrap band">
        <ProjectConcepts />
      </section>
      <CtaBand />
    </>
  );
}
