import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { GlobalSearch } from "../search/GlobalSearch";
import { MobileNav } from "./MobileNav";
import { primaryNav } from "../../data/navigation";
import { cx } from "../../utils/helpers";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-paper/85 backdrop-blur-md shadow-soft"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-16 sm:h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary"
          >
            {primaryNav.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  cx(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-teal-700/8 text-teal-800"
                      : "text-ink-700 hover:text-teal-800 hover:bg-teal-700/6",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <GlobalSearch variant="desktop" />
            <div className="md:hidden">
              <GlobalSearch variant="mobile" />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-teal-800 hover:bg-teal-700/8 transition-colors md:hidden"
            >
              <i className="fa-solid fa-bars text-lg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
