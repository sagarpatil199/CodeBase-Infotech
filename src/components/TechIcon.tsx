import { Code2 } from "lucide-react";
import type { CSSProperties } from "react";
import { techLogos, type TechLogoKey } from "./techLogos";

/** Which logo represents each technology name used in the content data. */
const logoFor: Record<string, TechLogoKey> = {
  "React.js": "react",
  ".NET": "dotnet",
  "ASP.NET Core": "dotnet",
  "ASP.NET Core Web API": "dotnet",
  "ASP.NET Core MVC": "dotnet",
  "Web API": "dotnet",
  MVC: "dotnet",
  "SQL Server": "sqlserver",
  PostgreSQL: "postgresql",
  Oracle: "oracle",
  "Azure Cloud": "azure",
  Databricks: "databricks",
};

/** A technology's brand logo, coloured for the current theme. */
export function TechLogo({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const key = logoFor[name];
  if (!key) return <Code2 className={className} aria-hidden="true" />;
  const logo = techLogos[key];
  const style = {
    "--logo": logo.hex,
    "--logo-dark": "dark" in logo ? logo.dark : logo.hex,
  } as CSSProperties;

  return (
    <svg
      viewBox={logo.viewBox}
      className={`fill-[var(--logo)] dark:fill-[var(--logo-dark)] ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {logo.paths.map((d) => (
        <path
          key={d.slice(0, 24)}
          d={d}
          fillRule={"fillRule" in logo ? logo.fillRule : undefined}
        />
      ))}
    </svg>
  );
}

/** Brand colour for hover accents. */
export const brandColor = (name: string) => {
  const key = logoFor[name];
  return key ? techLogos[key].hex : "var(--cyan)";
};
