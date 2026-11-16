import { Check } from "lucide-react";
import Link from "next/link";
import { courseHref, formatFee, type Course } from "@/data/courses";
import { routes } from "@/data/navigation";

/** The one programme, its fee and how it can be paid. */
export function ProgrammePanel({
  course,
  showDetailsLink = true,
}: {
  course: Course;
  showDetailsLink?: boolean;
}) {
  return (
    <div className="border-line bg-surface grid overflow-hidden rounded-3xl border lg:grid-cols-[1.35fr_1fr]">
      <div className="p-7 sm:p-10 lg:p-12">
        <p className="text-cyan font-medium">Featured programme</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          {course.name}
        </h2>
        <p className="text-muted mt-4 max-w-xl text-lg">{course.outcome}</p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {course.stages.map((stage) => (
            <li key={stage.number} className="chip">
              {stage.title}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={routes.enroll} className="btn btn-primary">
            Enroll Now
          </Link>
          {showDetailsLink && (
            <Link href={courseHref(course)} className="btn btn-quiet">
              View programme details
            </Link>
          )}
          {course.syllabusUrl && (
            <a href={course.syllabusUrl} download className="btn btn-quiet">
              Download Syllabus
            </a>
          )}
        </div>
      </div>

      <div className="border-line bg-surface-2 border-t p-7 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
        <dl className="grid grid-cols-2 gap-6">
          <div>
            <dt className="text-muted text-sm">Duration</dt>
            <dd className="font-display mt-1 text-3xl font-semibold">
              {course.duration}
            </dd>
          </div>
          <div>
            <dt className="text-muted text-sm">Total fee</dt>
            <dd className="font-display mt-1 text-3xl font-semibold">
              {formatFee(course.fee)}
            </dd>
          </div>
        </dl>

        <h3 className="border-line mt-8 border-t pt-7 font-sans text-base font-semibold tracking-normal">
          Payment options
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {course.paymentOptions.map((option) => (
            <li key={option} className="flex items-start gap-3">
              <Check
                className="text-cyan mt-1 size-4 shrink-0"
                aria-hidden="true"
              />
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
