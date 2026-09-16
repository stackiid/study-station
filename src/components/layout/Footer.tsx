import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { primaryNav, footerLegalNav } from "../../data/navigation";
import { categories } from "../../data/categories";
import { site } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-900/8 bg-teal-50/40">
      <div className="container-page py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              {site.description}
            </p>
            <a
              href={site.communityChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Join the community
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal-900">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {primaryNav.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-500 hover:text-teal-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal-900">
              Categories
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/courses?category=${category.id}`}
                    className="text-sm text-ink-500 hover:text-teal-700 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="contents sm:block">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal-900">
                Legal
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerLegalNav.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-ink-500 hover:text-teal-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:mt-2.5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal-900 sm:hidden">
                Contact
              </h3>
              <div className="mt-4 sm:mt-0">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-sm break-words text-ink-500 hover:text-teal-700 transition-colors"
                >
                  {site.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-3 border-t border-ink-900/8 pt-6 sm:mt-12 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-300">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-lg text-center text-xs text-ink-300 sm:text-right">
            {site.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
