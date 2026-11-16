import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { ProgrammePanel } from "@/components/ProgrammePanel";
import { RoadmapShowcase } from "@/components/RoadmapShowcase";
import { company } from "@/data/company";
import { courseHref, courses, formatFee } from "@/data/courses";
import { routes } from "@/data/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.name,
    description: `${course.name} at ${company.brandName}. Duration: ${course.duration}. Total fee: ${formatFee(course.fee)}. ${course.paymentSummary}`,
    alternates: { canonical: courseHref(course) },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.outcome,
    provider: { "@type": "Organization", name: company.brandName },
    offers: {
      "@type": "Offer",
      price: course.fee.amount,
      priceCurrency: course.fee.currency,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <PageIntro title={course.name} lede={course.outcome}>
        <Link href={routes.enroll} className="btn btn-primary">
          Enroll Now
        </Link>
        {course.syllabusUrl && (
          <a href={course.syllabusUrl} download className="btn btn-quiet">
            Download Syllabus
          </a>
        )}
      </PageIntro>

      <section
        aria-label="Programme at a glance"
        className="border-line border-b"
      >
        <dl className="wrap divide-line grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-7 md:pr-8">
            <dt className="text-muted text-sm">Duration</dt>
            <dd className="font-display mt-1 text-3xl font-semibold">
              {course.duration}
            </dd>
          </div>
          <div className="py-7 md:px-8">
            <dt className="text-muted text-sm">Total fee</dt>
            <dd className="font-display mt-1 text-3xl font-semibold">
              {formatFee(course.fee)}
            </dd>
          </div>
          <div className="py-7 md:pl-8">
            <dt className="text-muted text-sm">Payment</dt>
            <dd className="mt-1 text-lg font-medium">
              {course.paymentSummary}
            </dd>
          </div>
        </dl>
      </section>

      <RoadmapShowcase
        id="roadmap"
        heading="Learning roadmap"
        lede="Five stages, taken in order. Each one builds on the one before."
      >
        <Link href={routes.enroll} className="btn btn-primary">
          Enroll Now
        </Link>
      </RoadmapShowcase>

      <section className="wrap band pt-0 lg:pt-0">
        <ProgrammePanel course={course} showDetailsLink={false} />
      </section>

      <CtaBand />
    </>
  );
}
