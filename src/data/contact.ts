/**
 * Contact details shown across the site.
 *
 * Email: the real enquiry address. The enquiry form also sends to it by
 * opening the visitor's email app (mailto:).
 *
 * ============================================================
 *  PHONE: DEMO PLACEHOLDER, NOT REAL
 * ============================================================
 * The company's actual phone number has not been provided yet. The value
 * below is a demonstration placeholder and is not operational.
 * To go live, replace `phone.value` and set `phone.isDemo` to false: the
 * "Demo" label disappears and the number becomes a clickable tel: link.
 */
export const contact = {
  phone: {
    value: "+91 90000 00000", // DEMO placeholder
    isDemo: true,
  },
  email: {
    value: "Hemant.Bamane@codebase-infotech.com",
    isDemo: false,
  },
  location: "Vasai, Maharashtra, India", // verified registered location
  /** Verified Google Maps link. Keep null until the company supplies one. */
  mapUrl: null as string | null,
};

/**
 * How enquiries are delivered. There is no backend: submitting the form
 * opens the visitor's email app with a pre-filled message to this address.
 * The visitor then presses Send in their email app.
 */
export const enquiryDelivery = {
  method: "mailto" as const,
  to: contact.email.value,
};

export const enquiryTypes = [
  { value: "course", label: "Course enquiry" },
  { value: "software", label: "Software development enquiry" },
] as const;

export type EnquiryType = (typeof enquiryTypes)[number]["value"];
