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
      <div className="p-6 sm:p-10 lg:p-12">
        <p className="text-cyan text-[0.9375rem] font-medium sm:text-base">
          Featured programme
        </p>
        <h2 className="mt-3 text-[1.625rem] font-semibold sm:text-4xl">
          {course.name}
        </h2>
        <p className="text-muted mt-3 max-w-xl sm:mt-4 sm:text-lg">
          {course.outcome}
        </p>

        <ol
          aria-label="Learning stages"
          className="border-line mt-7 grid border-t sm:grid-cols-2 sm:gap-x-8"
        >
          {course.stages.map((stage) => (
            <li
              key={stage.number}
              className="border-line flex items-baseline gap-3 border-b py-3 text-[0.9375rem]"
            >
              <span className="text-cyan font-mono text-xs">
                {stage.number}
              </span>
              <span className="font-medium">{stage.title}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

      <div className="border-line bg-surface-2 border-t p-6 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
        <dl className="grid grid-cols-2 gap-4 sm:gap-6">
          <div>
            <dt className="text-muted text-sm">Duration</dt>
            <dd className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
              {course.duration}
            </dd>
          </div>
          <div>
            <dt className="text-muted text-sm">Total fee</dt>
            <dd className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
              {formatFee(course.fee)}
            </dd>
          </div>
        </dl>

        <h3 className="border-line mt-6 border-t pt-6 font-sans text-base font-semibold tracking-normal sm:mt-8 sm:pt-7">
          Payment options
        </h3>
        <ul className="mt-4 flex flex-col gap-3 text-[0.9375rem] sm:text-base">
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
