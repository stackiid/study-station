import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { GlobalSearch } from "../search/GlobalSearch";
import { MobileNav } from "./MobileNav";
import { primaryNav } from "../../data/navigation";
import { cx } from "../../utils/helpers";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-5 top-5 z-40 mx-auto max-w-[96rem]",
          "rounded-2xl border border-white/60 bg-white/80 shadow-lift backdrop-blur-md",
          "transition-shadow duration-300 hover:shadow-xl",
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
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
            <GlobalSearch />
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

      <MobileNav open={menuOpen} onClose={closeMenu} />
    </>
  );
}
