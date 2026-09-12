import { PageHero } from "../components/ui/PageHero";
import { site } from "../data/site";

const sections = [
  {
    title: "Acceptance of terms",
    body: [
      `By using ${site.name}, you agree to these terms. If you don't agree, please don't use the site. We may update these terms from time to time; continued use after a change means you accept the update.`,
    ],
  },
  {
    title: "What Study Station is",
    body: [
      "Study Station is a free, independent educational platform. We organize and link to courses, tutorials, and resources hosted on third-party platforms (YouTube, Google Drive, documentation sites, and others). We don't host, own, sell, or claim authorship of that third-party content.",
    ],
  },
  {
    title: "Third-party content and links",
    body: [
      "We do our best to keep links accurate and working, but we don't control the availability, accuracy, or continued existence of third-party content. Links may break or content may be removed or changed by its original creator without notice. If you find a broken or outdated link, please let us know through the contact page.",
      "Ratings shown on course cards reflect general community sentiment about the linked content and are provided for guidance only.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "Use the site for personal, non-commercial learning purposes. Don't attempt to scrape, disrupt, or overload the site, and don't use the contact form to send spam, malicious links, or unlawful content.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The Study Station name, logo, and original site design are the property of Study Station. All linked third-party courses, tutorials, and resources remain the property of their respective creators and platforms.",
    ],
  },
  {
    title: "No warranty",
    body: [
      'Study Station is provided "as is," without warranties of any kind. We make reasonable efforts to keep information accurate and the site available, but we don\'t guarantee uninterrupted access or that every linked resource will remain free or accessible.',
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Study Station isn't liable for any damages arising from your use of the site or any third-party content linked from it, including content that becomes unavailable, inaccurate, or is later changed by its owner.",
    ],
  },
  {
    title: "Contact",
    body: [`Questions about these terms? Reach out at ${site.contactEmail} or through the contact page.`],
  },
];

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: January 2026" />
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
