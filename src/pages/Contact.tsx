import { useState, type FormEvent } from "react";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import { ErrorState } from "../components/ui/ErrorState";
import { site } from "../data/site";

type Status = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: {
  name: string;
  email: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (response.ok) {
        setStatus("success");
        setValues({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <>
        <PageHero
          eyebrow="Contact"
          title="Message sent"
          description="Thanks for reaching out - we read every message."
        />
        <section className="container-page py-16 text-center">
          <div className="mx-auto max-w-md surface-card p-8">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-2xl text-teal-600">
              <i className="fa-solid fa-check" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-xl font-bold text-teal-900">
              We got your message
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              We typically reply within a couple of days. Feel free to send
              another message any time.
            </p>
            <Button className="mt-6" onClick={() => setStatus("idle")}>
              Send another message
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Study Station"
        description="Questions, broken links, or a course you think we should add - send it over."
      />

      <section className="container-page py-12 sm:py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="surface-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display font-bold text-teal-900">
                Email
              </h3>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-1 block text-sm text-ink-500 hover:text-teal-700"
              >
                {site.contactEmail}
              </a>
            </div>
            <div className="surface-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-50 text-coral-600">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display font-bold text-teal-900">
                Community channel
              </h3>
              <a
                href={site.communityChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-ink-500 hover:text-teal-700"
              >
                Join for updates & announcements
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="surface-card p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-ink-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                  aria-invalid={Boolean(errors.name)}
                  className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-coral-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-ink-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  aria-invalid={Boolean(errors.email)}
                  className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-coral-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-ink-700"
              >
                Subject{" "}
                <span className="font-normal text-ink-300">(optional)</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    subject: event.target.value,
                  }))
                }
                className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-ink-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }))
                }
                aria-invalid={Boolean(errors.message)}
                className="mt-1.5 w-full resize-none rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-coral-600">{errors.message}</p>
              )}
            </div>

            {status === "error" && (
              <ErrorState
                className="mt-5"
                title="Message couldn't be sent"
                description="Something went wrong on our end. Try again, or email us directly."
              />
            )}

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
