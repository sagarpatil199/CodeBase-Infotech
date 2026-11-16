"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Flips the `data-theme` attribute on <html>. The current theme lives in
 * the DOM (set before paint by the inline script in layout.tsx), so this
 * needs no React state and never flashes the wrong theme.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode etc.): the choice lasts this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="border-line text-ink hover:border-blue grid size-11 place-items-center rounded-full border transition-colors"
      aria-label="Switch between light and dark theme"
    >
      <Sun className="hidden size-[1.125rem] dark:block" aria-hidden="true" />
      <Moon className="size-[1.125rem] dark:hidden" aria-hidden="true" />
    </button>
  );
}
