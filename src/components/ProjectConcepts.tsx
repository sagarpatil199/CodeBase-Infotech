import type { CSSProperties } from "react";
import {
  projectConceptLabel,
  projectConcepts,
  type ProjectConcept,
} from "@/data/projects";
import { TechLogo, brandColor } from "./TechIcon";

/** The concept's stack, top to bottom, joined by a line that carries a pulse on hover. */
function Stack({ steps }: { steps: string[] }) {
  return (
    <ol
      aria-label="Technology stack, in order"
      className="mx-auto flex flex-col"
    >
      {steps.map((step, i) => (
        <li key={step} className="flex flex-col">
          {i > 0 && (
            <span
              aria-hidden="true"
              className="relative ml-6 h-6 w-px overflow-hidden bg-[color-mix(in_srgb,var(--cyan)_40%,var(--line))]"
            >
              <span className="bg-cyan absolute -top-2 left-1/2 h-2 w-px -translate-x-1/2 opacity-0 shadow-[0_0_6px_1px_var(--cyan)] group-hover/card:opacity-100 motion-safe:group-hover/card:animate-[flow_1.1s_ease-in_infinite]" />
            </span>
          )}
          <span
            className="group/tech flex items-center gap-3.5 self-start"
            style={{ "--brand": brandColor(step) } as CSSProperties}
          >
            <span className="border-line grid size-12 shrink-0 place-items-center rounded-xl border bg-white shadow-[0_1px_2px_rgb(10_16_48/0.06)] transition-all duration-300 group-hover/tech:-translate-y-0.5 group-hover/tech:border-[color-mix(in_srgb,var(--brand)_55%,transparent)] group-hover/tech:shadow-[0_6px_18px_-6px_color-mix(in_srgb,var(--brand)_60%,transparent)] dark:border-[color-mix(in_srgb,var(--brand)_32%,transparent)] dark:bg-[color-mix(in_srgb,var(--brand)_14%,var(--surface))]">
              <TechLogo name={step} className="size-6" />
            </span>
            <span className="text-ink text-[0.9375rem] leading-snug font-medium">
              {step}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function ConceptCard({
  concept,
  className = "",
}: {
  concept: ProjectConcept;
  className?: string;
}) {
  return (
    <li className={className}>
      <article className="group/card border-line bg-surface hover:border-cyan/40 flex h-full flex-col rounded-2xl border p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-34px_rgb(47_107_255/0.55)]">
        <div className="border-line/60 bg-surface-2/70 relative flex min-h-56 flex-1 items-center rounded-xl border bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:18px_18px] px-6 pt-14 pb-7 sm:px-8">
          <p className="border-violet/35 bg-bg/80 text-violet absolute top-4 left-4 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur">
            {projectConceptLabel}
          </p>
          <Stack steps={concept.flow} />
        </div>
        <div className="px-4 pt-5 pb-4 sm:px-5">
          <p className="text-cyan text-sm font-medium">{concept.category}</p>
          <h3 className="mt-1 text-xl font-semibold">{concept.title}</h3>
          <p className="text-muted mt-2 text-[0.9375rem]">
            {concept.description}
          </p>
        </div>
      </article>
    </li>
  );
}

/**
 * Grid of example concepts. Five cards lay out as two wide and three
 * narrow on large screens; three cards as one row.
 */
export function ProjectConcepts({ limit }: { limit?: number }) {
  const list = limit ? projectConcepts.slice(0, limit) : projectConcepts;
  const wide = list.length === 5 ? 2 : 0;

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {list.map((concept, i) => (
        <ConceptCard
          key={concept.title}
          concept={concept}
          className={
            i < wide
              ? "lg:col-span-3"
              : `lg:col-span-2 ${list.length % 2 === 1 && i === list.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}`
          }
        />
      ))}
    </ul>
  );
}
