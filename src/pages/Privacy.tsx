import { PageHero } from "../components/ui/PageHero";
import { site } from "../data/site";

const sections = [
  {
    title: "What this policy covers",
    body: [
      `This policy explains what information ${site.name} collects when you use this website, and how it's used. Study Station is an independent educational platform that curates links to third-party courses, tutorials, and resources - we don't require an account to browse or search the site.`,
    ],
  },
  {
    title: "Information we collect",
    body: [
      "Contact form submissions: when you submit the contact form, your name, email address, subject, and message are sent to our form provider (Formspree) so we can reply to you. We don't use this information for marketing.",
      "Local device storage: to make search faster to reuse, we store your last few search terms directly in your browser's localStorage. This data never leaves your device and isn't sent to us or any third party.",
      "Standard web logs: like most websites, our hosting provider may log basic technical information (such as IP address and browser type) for security and reliability purposes.",
    ],
  },
  {
    title: "What we don't do",
    body: [
      "We don't sell, rent, or share your personal information with advertisers. We don't run ad networks or third-party trackers on this site, and we don't build advertising profiles.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "Nearly everything on Study Station links out to third-party platforms - YouTube, Google Drive, documentation sites, and more. Once you leave studystation.dev, that site's own privacy policy applies. We encourage you to review the policies of any external site you visit through a link on this page.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This site does not set its own tracking cookies. Third-party sites you navigate to from our links may use their own cookies, governed by their own policies.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can clear your recent search history at any time from the search overlay, or by clearing your browser's site data for studystation.dev. You're never required to submit personal information to browse the site.",
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
    body: [`Questions about this policy? Reach out any time at ${site.contactEmail} or through the contact page.`],
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026" />
      <section className="container-page py-12 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-bold text-teal-900">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-ink-500 sm:text-base">
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
