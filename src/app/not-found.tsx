import Link from "next/link";
import { routes } from "@/data/navigation";

export default function NotFound() {
  return (
    <section className="wrap py-28 lg:py-40">
      <p className="text-cyan font-mono">404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
        This page does not exist
      </h1>
      <p className="lede mt-6">
        The link may be old or mistyped. The home page has everything.
      </p>
      <Link href={routes.home} className="btn btn-primary mt-9">
        Go to the home page
      </Link>
    </section>
  );
}
