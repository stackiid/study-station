import { PageHero } from "../components/ui/PageHero";
import { site } from "../data/site";

const sections = [
  {
    title: "What this policy covers",
    body: [
      `This policy explains how ${site.name} uses cookies and similar local storage technologies, and what happens once you follow a link from this site to a third-party platform like YouTube, Google Drive, or a documentation site.`,
    ],
  },
  {
    title: "Cookies we set",
    body: [
      "Study Station does not set its own tracking, analytics, or advertising cookies. We don't run ad networks or build advertising profiles.",
    ],
  },
  {
    title: "Local storage we use",
    body: [
      "To make search faster to reuse, we store your last few search terms directly in your browser's localStorage. This stays on your device - it's never sent to us, to YouTube, or to any other third party, and you can clear it at any time from the search overlay.",
    ],
  },
  {
    title: "Third-party cookies (including YouTube)",
    body: [
      "Study Station, including the YouTubers directory, links out to channels and videos hosted on YouTube and other third-party platforms. We don't control, and this policy doesn't cover, the cookies or tracking technologies those platforms use once you click through to them.",
      "When you visit a YouTube channel from a link on this site, YouTube's own cookie and privacy practices apply - not ours. We encourage you to review YouTube's (or Google's) cookie and privacy policies directly for details on what they collect.",
    ],
  },
  {
    title: "Managing cookies",
    body: [
      "You can control or delete cookies through your browser's settings at any time. Since Study Station itself doesn't set tracking cookies, clearing your browser's cookies mainly affects the third-party sites you've visited through our links, not this site.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If this policy changes, we'll update this page with a new effective date. Continued use of the site after changes means you accept the updated policy.",
    ],
  },
  {
    title: "Contact us",
    body: [
      `Questions about this policy? Reach out any time at ${site.contactEmail} or through the contact page.`,
    ],
  },
];

export default function Cookies() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="Last updated: September 2026"
      />
      <section className="container-page py-12 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-bold text-teal-900">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-relaxed text-ink-500 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
