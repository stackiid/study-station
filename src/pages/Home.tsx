import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LinkButton, AnchorButton } from "../components/ui/Button";
import { PersonIllustration } from "../components/ui/PersonIllustration";
import { CourseCard } from "../components/cards/CourseCard";
import { ResourceCard } from "../components/cards/ResourceCard";
import { TutorialCard } from "../components/cards/TutorialCard";
import { CategoryCard } from "../components/cards/CategoryCard";
import { getFeaturedCourses } from "../data/courses";
import { getFeaturedResources } from "../data/resources";
import { getFeaturedTutorials } from "../data/tutorials";
import { categories } from "../data/categories";
import { courses } from "../data/courses";
import { resources } from "../data/resources";
import { tutorials } from "../data/tutorials";
import { getCategoryCounts } from "../utils/categoryCounts";
import { site } from "../data/site";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { label: "Free courses", target: courses.length, suffix: "+" },
  { label: "Curated resources", target: resources.length, suffix: "+" },
  { label: "Video tutorials", target: tutorials.length, suffix: "+" },
  { label: "Cost to join", target: 0, prefix: "$" },
];

function StatCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  // Starts as soon as the hero mounts - the stats row lives above the
  // fold by design, so there's no scroll-triggering to wire up here.
  const value = useCountUp(target, { duration: 1100, delay: 500 });
  return (
    <>
      {prefix}
      {value}
      {suffix}
    </>
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !heroRef.current) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-hero-eyebrow]", { opacity: 0, y: 14, duration: 0.5 })
        .from("[data-hero-title]", { opacity: 0, y: 22, duration: 0.65 }, "-=0.3")
        .from("[data-hero-copy]", { opacity: 0, y: 16, duration: 0.55 }, "-=0.35")
        .from("[data-hero-cta]", { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from("[data-hero-mark]", { opacity: 0, scale: 0.85, rotate: -8, duration: 0.7 }, "-=0.6")
        .from("[data-hero-stat]", { opacity: 0, y: 12, duration: 0.4, stagger: 0.06 }, "-=0.25");
    }, heroRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={heroRef} className="relative overflow-hidden brand-mesh pb-14 pt-6 sm:pb-16 sm:pt-8 lg:pt-10">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span
            data-hero-eyebrow
            className="inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-teal-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral-500" aria-hidden="true" />
            100% free, always
          </span>

          <h1
            data-hero-title
            className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-teal-900 text-balance sm:text-5xl"
          >
            Study smart with courses, tutorials & resources in one place
          </h1>

          <p data-hero-copy className="mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {site.description} No paywalls, no sign-up walls - just organized, searchable learning material curated
            for developers and designers.
          </p>

          <div data-hero-cta className="mt-6 flex flex-wrap items-center gap-3">
            <LinkButton to="/courses" size="lg" icon={<i className="fa-solid fa-arrow-right" />}>
              Explore courses
            </LinkButton>
            <LinkButton to="/resources" variant="outline" size="lg">
              Browse resources
            </LinkButton>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} data-hero-stat>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-300">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-teal-900 sm:text-3xl">
                  <StatCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-hero-mark className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-white/50 blur-3xl" aria-hidden="true" />
          <PersonIllustration className="w-full max-w-sm -scale-x-100 drop-shadow-md sm:max-w-md" />
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);
  const featured = getFeaturedCourses(4);

  return (
    <section ref={sectionRef} className="container-page py-16 sm:py-20">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Popular picks"
          title="Featured courses"
          description="Hand-picked, community-rated courses across programming, design, and AI."
          align="left"
          className="mx-0 text-left"
        />
        <Link
          to="/courses"
          className="shrink-0 text-sm font-semibold text-teal-700 hover:text-teal-800 underline underline-offset-4"
        >
          View all courses
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

function CategoriesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);
  const counts = getCategoryCounts();

  return (
    <section ref={sectionRef} className="bg-teal-50/40 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Browse by topic"
          title="Find your lane"
          description="Every course, resource, and tutorial on Study Station is organized under one of these categories."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} count={counts[category.id] ?? 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedResources() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);
  const featured = getFeaturedResources(6);

  return (
    <section ref={sectionRef} className="container-page py-16 sm:py-20">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Bookmark these"
          title="Essential resources"
          description="Documentation, practice platforms, and reference sites worth keeping open in a tab."
          align="left"
          className="mx-0 text-left"
        />
        <Link
          to="/resources"
          className="shrink-0 text-sm font-semibold text-teal-700 hover:text-teal-800 underline underline-offset-4"
        >
          View all resources
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}

function TutorialsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);
  const featured = getFeaturedTutorials(3);

  return (
    <section ref={sectionRef} className="bg-teal-50/40 py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Watch & learn"
            title="Tutorials worth your time"
            description="Long-form videos from creators we trust, organized so you don't have to dig through a search results page."
            align="left"
            className="mx-0 text-left"
          />
          <Link
            to="/tutorials"
            className="shrink-0 text-sm font-semibold text-teal-700 hover:text-teal-800 underline underline-offset-4"
          >
            View all tutorials
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="container-page py-16 sm:py-20">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[1.75rem] bg-teal-800 px-6 py-14 text-center sm:px-12 sm:py-16"
      >
        <div className="brand-mesh absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
            Get new courses and resources first
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-teal-50/85">
            Join the free community channel for drop announcements, and reach out any time through the contact page.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AnchorButton
              href={site.communityChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={<i className="fa-brands fa-whatsapp" />}
              iconPosition="left"
            >
              Join community channel
            </AnchorButton>
            <LinkButton to="/contact" variant="outline" size="lg" className="!bg-transparent !text-white !border-white/25 hover:!bg-white/10">
              Contact us
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <CategoriesGrid />
      <FeaturedResources />
      <TutorialsPreview />
      <CommunityCta />
    </>
  );
}
