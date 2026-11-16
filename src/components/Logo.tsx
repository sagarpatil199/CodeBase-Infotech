import Link from "next/link";
import { company } from "@/data/company";
import { routes } from "@/data/navigation";

/** Text wordmark with a small branch mark: a codebase growing commit by commit. */
export function Logo() {
  return (
    <Link
      href={routes.home}
      className="inline-flex items-center gap-2.5"
      aria-label={`${company.brandName} home`}
    >
      <svg viewBox="0 0 28 28" className="size-7" aria-hidden="true">
        <path
          d="M8 6v8a5 5 0 0 0 5 5h6"
          fill="none"
          stroke="var(--cyan)"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path d="M8 8v12" stroke="var(--blue)" strokeWidth="2.25" />
        <circle cx="8" cy="6" r="3" fill="var(--blue)" />
        <circle cx="8" cy="22" r="3" fill="var(--blue)" />
        <circle cx="20" cy="19" r="3" fill="var(--violet)" />
      </svg>
      <span className="font-display text-ink text-[1.0625rem] leading-none font-semibold tracking-tight">
        CodeBase <span className="text-muted font-normal">Infotech</span>
      </span>
    </Link>
  );
}
