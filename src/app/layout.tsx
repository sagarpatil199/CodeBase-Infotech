import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/sora";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.brandName} | IT Training Institute in ${company.location.city}`,
    template: `%s | ${company.brandName}`,
  },
  description: company.introduction,
  openGraph: {
    type: "website",
    siteName: company.brandName,
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060a1e" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fe" },
  ],
};

/** Applies the saved theme before first paint. Dark is the default. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: company.brandName,
  legalName: company.legalName,
  description: company.introduction,
  slogan: company.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: company.location.city,
    addressRegion: company.location.state,
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="btn btn-primary btn-sm sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
