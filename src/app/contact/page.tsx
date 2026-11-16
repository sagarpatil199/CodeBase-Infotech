import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactLines } from "@/components/ContactLines";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageIntro } from "@/components/PageIntro";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import { routes } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Enquire about courses or software development at ${company.brandName}, ${company.location.display}.`,
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact Us"
        lede="Ask about the programme or tell us about a software project."
      />

      <section className="wrap band grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div id="enquiry">
          <h2 className="h2">Send an enquiry</h2>
          <p className="text-muted mt-4 mb-8">
            For students and for software development clients. Choose the
            enquiry type that fits.
          </p>
          <Suspense fallback={null}>
            <EnquiryForm />
          </Suspense>
        </div>

        <aside className="lg:border-line lg:border-l lg:pl-14">
          <h2 className="text-2xl font-semibold">Reach us directly</h2>
          <div className="mt-6">
            <ContactLines large />
          </div>

          <h2 className="border-line mt-10 border-t pt-10 text-2xl font-semibold">
            Location
          </h2>
          <p className="mt-4 text-lg">{contact.location}</p>
          <p className="text-muted mt-1 text-[0.9375rem]">
            Registered location of {company.legalName}.
          </p>
          {/* The map link appears only once a verified link is set in src/data/contact.ts */}
          {contact.mapUrl && (
            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-quiet btn-sm mt-6"
            >
              Open in Google Maps
            </a>
          )}
        </aside>
      </section>
    </>
  );
}
