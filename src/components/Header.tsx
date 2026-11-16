"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, routes } from "@/data/navigation";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const isActive = (pathname: string, href: string) => {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? path === "/" : path.startsWith(href);
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-line/70 bg-bg/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="bg-cyan absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href={routes.enroll}
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Enroll Now
          </Link>
          <button
            type="button"
            className="border-line text-ink grid size-11 place-items-center rounded-full border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-line bg-bg border-t lg:hidden"
        >
          <ul className="wrap flex flex-col py-3">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-line/60 border-b">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`font-display flex items-center justify-between py-4 text-lg font-medium ${
                      active ? "text-cyan" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-5 pb-3">
              <Link
                href={routes.enroll}
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
