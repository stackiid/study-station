import { useEffect, useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { primaryNav, footerLegalNav } from "../../data/navigation";
import { site } from "../../data/site";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { cx } from "../../utils/helpers";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useBodyScrollLock(open);

  const onCloseRef = useRef(onClose);
  useLayoutEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={cx(
          "fixed inset-0 z-[45] bg-teal-900/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cx(
          "fixed inset-y-0 left-0 z-50 flex h-full w-[84%] max-w-xs flex-col bg-white shadow-lift transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-ink-900/8">
          <span className="font-display font-bold text-teal-900">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-teal-800 hover:bg-teal-700/8"
          >
            <i className="fa-solid fa-xmark text-lg" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cx(
                      "block rounded-xl px-3.5 py-3 text-base font-semibold transition-colors",
                      isActive
                        ? "bg-teal-50 text-teal-800"
                        : "text-ink-700 hover:bg-ink-900/[0.04]",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-ink-900/8 pt-6">
            <ul className="flex flex-col gap-1">
              {footerLegalNav.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-500 hover:bg-ink-900/[0.04]"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="px-5 pb-6 pt-2">
          <a
            href={site.communityChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full bg-coral-500 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-coral-600 transition-colors"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            Join the community
          </a>
        </div>
      </div>
    </>
  );
}
