import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
} from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  industries,
  serviceOptions,
  STUDIO_EMAIL,
  videoCountOptions,
} from "@/data/site";
import type { ContactFormErrors, ContactFormValues } from "@/types";

const empty: ContactFormValues = {
  name: "",
  email: "",
  brand: "",
  website: "",
  industry: "",
  service: "",
  videos: "",
  description: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter a business email.";
  else if (!isEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.brand.trim()) errors.brand = "Please enter your brand or company.";
  if (values.website.trim() && !isUrl(values.website)) {
    errors.website = "Enter a full URL, including https://";
  }
  if (!values.industry) errors.industry = "Select an industry.";
  if (!values.service) errors.service = "Select a service.";
  if (!values.videos) errors.videos = "Select how many videos you need.";
  if (values.description.trim().length < 20) {
    errors.description = "Tell us a little more — at least 20 characters.";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(empty);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const field = (key: keyof ContactFormValues) => ({
    id: key,
    name: key,
    value: values[key],
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setSubmitStatus(null);
      setValues((current) => ({ ...current, [key]: event.target.value }));
    },
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    
    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("https://formspree.io/f/mdegevzd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setValues(empty); 
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // THE NEW EDITORIAL INPUT STYLE
  const inputClass =
    "mt-2 w-full rounded-none border-0 border-b border-charcoal/30 bg-transparent px-0 py-3 text-sm text-charcoal outline-none transition-colors focus:border-charcoal focus:ring-0";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-charcoal/10 bg-ivory py-20 text-charcoal lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading title="Start a project." />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/70">
            <p>
              Share the product, the platform and the kind of film you need. We review all enquiries and usually reply within 24 hours.
            </p>
            <p>
              Prefer email?{" "}
              <a className="text-charcoal underline underline-offset-4 hover:text-taupe" href={`mailto:${STUDIO_EMAIL}`}>
                {STUDIO_EMAIL}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          {/* WRAPPED IN A SUBTLE CARD */}
          <div className="border border-charcoal/10 bg-white/40 p-6 sm:p-10 shadow-sm backdrop-blur-sm">
            <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" error={errors.name} className="sm:col-span-1">
                <input {...field("name")} autoComplete="name" className={inputClass} />
              </Field>
              <Field label="Business email" error={errors.email}>
                <input {...field("email")} type="email" autoComplete="email" className={inputClass} />
              </Field>
              <Field label="Brand / company" error={errors.brand}>
                <input {...field("brand")} autoComplete="organization" className={inputClass} />
              </Field>
              <Field label="Website or product link" error={errors.website} optional>
                <input {...field("website")} type="url" placeholder="https://" className={inputClass} />
              </Field>
              <Field label="Industry" error={errors.industry}>
                <select {...field("industry")} className={inputClass}>
                  <option value="">Select</option>
                  {industries.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Service required" error={errors.service}>
                <select {...field("service")} className={inputClass}>
                  <option value="">Select</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Number of videos" error={errors.videos} className="sm:col-span-2">
                <select {...field("videos")} className={inputClass}>
                  <option value="">Select</option>
                  {videoCountOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Project description" error={errors.description} className="sm:col-span-2">
                <textarea {...field("description")} rows={3} className={`${inputClass} resize-none`} />
              </Field>
              
              <div className="sm:col-span-2 mt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-charcoal text-ivory hover:bg-charcoal/80 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit enquiry"}
                </Button>

                {submitStatus === "success" && (
                  <p className="mt-4 border border-green-600/30 bg-green-50 px-4 py-3 text-sm text-green-800" role="status">
                    Thank you! Your enquiry has been sent successfully. We'll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-4 border border-red-600/30 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                    Oops! Something went wrong. Please try again or email us directly at {STUDIO_EMAIL}.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
  optional,
}: {
  label: string;
  error?: string;
  children: ReactElement<{ id?: string }>;
  className?: string;
  optional?: boolean;
}) {
  const id = children.props.id ?? label;
  return (
    <label className={`block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/70 ${className}`} htmlFor={id}>
      {label}
      {optional ? <span className="ml-2 normal-case tracking-normal text-charcoal/40">(Optional)</span> : null}
      {children}
      {error ? (
        <span id={`${id}-error`} className="mt-1 block text-[11px] normal-case tracking-normal text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}