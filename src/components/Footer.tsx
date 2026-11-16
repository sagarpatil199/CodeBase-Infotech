import Link from "next/link";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { ContactLines } from "./ContactLines";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-line bg-surface border-t">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.3fr_1.8fr_1.4fr]">
        <div>
          <Logo variant="full" className="h-auto w-56 sm:w-64" />
          <p className="text-muted mt-5 max-w-sm text-[0.9375rem]">
            {company.introduction}
          </p>
          <p className="font-display text-ink mt-5 font-medium">
            {company.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-ink font-sans text-sm font-semibold tracking-normal">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-ink text-[0.9375rem] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div>
          <h2 className="text-ink font-sans text-sm font-semibold tracking-normal">
            Contact
          </h2>
          <div className="text-muted mt-4">
            <ContactLines />
          </div>
        </div>
      </div>

      <div className="border-line border-t">
        <div className="wrap text-muted flex flex-col gap-1.5 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p>
            CIN: <span className="font-mono">{company.cin}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
