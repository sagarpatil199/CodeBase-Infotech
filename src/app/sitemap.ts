import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { routes } from "@/data/navigation";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home,
    routes.about,
    routes.education,
    routes.course,
    routes.services,
    routes.projects,
    routes.contact,
  ];
  return paths.map((path) => ({ url: new URL(path, company.siteUrl).href }));
}
