import type { ReactNode } from "react";

/** Title block at the top of every inner page. */
export function PageIntro({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-line relative overflow-hidden border-b">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="wrap relative py-16 lg:py-24">
        <h1 className="max-w-4xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="lede mt-6 sm:text-xl">{lede}</p>
        {children && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
