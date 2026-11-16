import Link from "next/link";
import { routes } from "@/data/navigation";

/** Closing call to action. Dark navy in both themes so it ends the page firmly. */
export function CtaBand({
  heading = "Ready to Build Your IT Career?",
  text = "Ask about the programme, the fee and how payment works. Enrolment starts with an enquiry.",
  label = "Enroll Now",
  href = routes.enroll,
}: {
  heading?: string;
  text?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="wrap pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-[#0a1238] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_85%_0%,rgb(63_216_244/0.22),transparent_65%),radial-gradient(36rem_22rem_at_0%_100%,rgb(106_87_238/0.3),transparent_65%)]"
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-[#b9c4ee]">{text}</p>
          </div>
          <Link href={href} className="btn btn-primary shrink-0 self-start">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
