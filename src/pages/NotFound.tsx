import { LinkButton } from "../components/ui/Button";
import { LogoMark } from "../components/ui/LogoMark";

export default function NotFound() {
  return (
    <section className="brand-mesh flex min-h-[70vh] items-center justify-center py-16">
      <div className="container-page flex flex-col items-center text-center">
        <LogoMark className="h-20 w-auto object-contain opacity-90" />
        <p className="mt-6 font-display text-7xl font-extrabold text-teal-900/15 sm:text-8xl">
          404
        </p>
        <h1 className="-mt-6 font-display text-2xl font-bold text-teal-900 sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-sm text-ink-500">
          The page you're looking for doesn't exist or may have moved. Let's get
          you back on track.
        </p>
        <LinkButton to="/" size="lg" className="mt-7">
          Back to home
        </LinkButton>
      </div>
    </section>
  );
}
