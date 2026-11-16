import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/contact";

function DemoTag() {
  return (
    <span className="border-violet/50 text-violet ml-2 inline-block rounded-md border px-1.5 py-0.5 text-xs font-semibold whitespace-nowrap">
      Demo
    </span>
  );
}

/** Phone, email and location, read from the central contact config. */
export function ContactLines({ large = false }: { large?: boolean }) {
  const text = large ? "text-lg" : "text-[0.9375rem]";
  const { phone, email } = contact;

  return (
    <ul className={`flex flex-col gap-3.5 ${text}`}>
      <li className="flex items-start gap-3">
        <Phone className="text-cyan mt-1 size-4 shrink-0" aria-hidden="true" />
        <span>
          <span className="sr-only">Phone: </span>
          {phone.isDemo ? (
            <>
              {phone.value}
              <DemoTag />
            </>
          ) : (
            <a
              href={`tel:${phone.value.replace(/\s/g, "")}`}
              className="hover:text-cyan transition-colors"
            >
              {phone.value}
            </a>
          )}
        </span>
      </li>
      <li className="flex items-start gap-3">
        <Mail className="text-cyan mt-1 size-4 shrink-0" aria-hidden="true" />
        <span className="[overflow-wrap:anywhere]">
          <span className="sr-only">Email: </span>
          {email.isDemo ? (
            <>
              {email.value}
              <DemoTag />
            </>
          ) : (
            <a
              href={`mailto:${email.value}`}
              className="hover:text-cyan transition-colors"
            >
              {email.value}
            </a>
          )}
        </span>
      </li>
      <li className="flex items-start gap-3">
        <MapPin className="text-cyan mt-1 size-4 shrink-0" aria-hidden="true" />
        <span>
          <span className="sr-only">Location: </span>
          {contact.location}
        </span>
      </li>
      {phone.isDemo && (
        <li className="text-muted text-sm">
          The phone number is a demo placeholder, not a working number.
        </li>
      )}
    </ul>
  );
}
