import Image from "next/image";
import Link from "next/link";
import logoDark from "@/assets/brand/logo-dark.webp";
import logoFullDark from "@/assets/brand/logo-full-dark.webp";
import logoFullLight from "@/assets/brand/logo-full-light.webp";
import logoLight from "@/assets/brand/logo-light.webp";
import { company } from "@/data/company";
import { routes } from "@/data/navigation";

/**
 * The CodeBase Infotech logo. Each version has a light-theme file and a
 * dark-theme file (white "CodeBase" lettering); CSS shows the one that
 * matches the theme, and only that one is downloaded.
 *
 * - compact: mark and wordmark, for the header
 * - full: adds the "IT Training Institute" line, for the footer
 *
 * Source files: src/assets/brand/. Replace them to update the logo.
 */
export function Logo({
  variant = "compact",
  className = "h-10 w-auto sm:h-11 lg:h-[3.25rem]",
}: {
  variant?: "compact" | "full";
  className?: string;
}) {
  const [light, dark] =
    variant === "full" ? [logoFullLight, logoFullDark] : [logoLight, logoDark];

  return (
    <Link
      href={routes.home}
      className="inline-flex shrink-0 items-center py-1"
      aria-label={`${company.brandName} home`}
    >
      <Image
        src={light}
        alt={company.brandName}
        fetchPriority="high"
        className={`${className} dark:hidden`}
      />
      <Image
        src={dark}
        alt={company.brandName}
        fetchPriority="high"
        className={`hidden ${className} dark:block`}
      />
    </Link>
  );
}
