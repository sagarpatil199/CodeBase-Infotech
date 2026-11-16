"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  enquiryDelivery,
  enquiryTypes,
  type EnquiryType,
} from "@/data/contact";
import { courses } from "@/data/courses";

/** Builds the mailto: link that opens the visitor's email app, pre-filled. */
const buildMailto = (v: Values) => {
  const typeLabel = enquiryTypes.find((t) => t.value === v.type)?.label ?? "";
  const course = courses.find((c) => c.slug === v.course);
  const subject = `${typeLabel} from ${v.name.trim()}`;
  const body = [
    `Name: ${v.name.trim()}`,
    `Email: ${v.email.trim()}`,
    `Mobile: ${v.mobile.trim()}`,
    `Enquiry type: ${typeLabel}`,
    ...(course && v.type === "course" ? [`Course: ${course.name}`] : []),
    "",
    v.message.trim(),
  ].join("\n");
  return `mailto:${enquiryDelivery.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

type Values = {
  name: string;
  email: string;
  mobile: string;
  type: EnquiryType | "";
  course: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const validate = (v: Values): Errors => {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (!/^(\+91)?[6-9]\d{9}$/.test(v.mobile.replace(/[\s-]/g, "")))
    errors.mobile = "Enter a 10-digit mobile number.";
  if (!v.type) errors.type = "Choose an enquiry type.";
  if (v.type === "course" && !v.course) errors.course = "Choose a course.";
  if (v.message.trim().length < 10)
    errors.message = "Write a short message, at least 10 characters.";
  return errors;
};

const fieldClass =
  "border-line bg-bg text-ink placeholder:text-muted/70 focus:border-blue mt-2 w-full rounded-xl border px-4 py-3 text-base transition-colors outline-none aria-[invalid=true]:border-danger";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-danger mt-1.5 text-sm">
      {message}
    </p>
  );
}

/**
 * Enquiry form with client-side validation. There is no backend: a valid
 * submission opens the visitor's email app with the enquiry pre-filled and
 * addressed to `enquiryDelivery.to` (src/data/contact.ts). The visitor
 * sends it from their email app.
 */
export function EnquiryForm() {
  const params = useSearchParams();
  const requested = params.get("type");
  const initialType = enquiryTypes.some((t) => t.value === requested)
    ? (requested as EnquiryType)
    : "";

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    mobile: "",
    type: initialType,
    course: initialType === "course" ? courses[0].slug : "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [checked, setChecked] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setChecked(false);
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setChecked(false);
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return;
    }
    setChecked(true);
    window.location.href = buildMailto(values);
  };

  const aria = (key: keyof Values) => ({
    id: `enquiry-${key}`,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `enquiry-${key}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <p className="border-line bg-surface-2/60 text-muted rounded-xl border px-4 py-3 text-[0.9375rem]">
        Submitting opens your email app with this enquiry ready to send to{" "}
        <a
          href={`mailto:${enquiryDelivery.to}`}
          className="text-ink hover:text-cyan font-medium [overflow-wrap:anywhere] transition-colors"
        >
          {enquiryDelivery.to}
        </a>
        .
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-medium">
          Full name
          <input
            {...aria("name")}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={fieldClass}
          />
          <FieldError id="enquiry-name-error" message={errors.name} />
        </label>

        <label className="block font-medium">
          Email
          <input
            {...aria("email")}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={fieldClass}
          />
          <FieldError id="enquiry-email-error" message={errors.email} />
        </label>

        <label className="block font-medium">
          Mobile number
          <input
            {...aria("mobile")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.mobile}
            onChange={(e) => set("mobile", e.target.value)}
            className={fieldClass}
          />
          <FieldError id="enquiry-mobile-error" message={errors.mobile} />
        </label>

        <label className="block font-medium">
          Enquiry type
          <select
            {...aria("type")}
            value={values.type}
            onChange={(e) => set("type", e.target.value as Values["type"])}
            className={fieldClass}
          >
            <option value="">Choose one</option>
            {enquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <FieldError id="enquiry-type-error" message={errors.type} />
        </label>
      </div>

      {values.type === "course" && (
        <label className="block font-medium">
          Course
          <select
            {...aria("course")}
            value={values.course}
            onChange={(e) => set("course", e.target.value)}
            className={fieldClass}
          >
            <option value="">Choose a course</option>
            {courses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.name}
              </option>
            ))}
          </select>
          <FieldError id="enquiry-course-error" message={errors.course} />
        </label>
      )}

      <label className="block font-medium">
        Message
        <textarea
          {...aria("message")}
          rows={5}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${fieldClass} resize-y`}
        />
        <FieldError id="enquiry-message-error" message={errors.message} />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
        <p role="status" aria-live="polite" className="text-[0.9375rem]">
          {checked && (
            <>
              Your email app should now be open with the enquiry. Press Send
              there to deliver it. If nothing opened, email{" "}
              <a
                href={`mailto:${enquiryDelivery.to}`}
                className="text-cyan [overflow-wrap:anywhere]"
              >
                {enquiryDelivery.to}
              </a>{" "}
              directly.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
