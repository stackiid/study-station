import logoSrc from "../../assets/brand/study-station-logo.png";

interface LogoMarkProps {
  className?: string;
  title?: string;
}

/**
 * The Study Station brand mark: a rendered brain-and-mortarboard
 * illustration supplied as a raster asset (see docs/03-Design-System.md
 * for the source file and how to regenerate favicons if it ever changes).
 * Rendered as a plain <img> - transparent background, no wrapping card or
 * border, so it can drop into a navbar, footer, or full-bleed panel
 * without carrying any visual container of its own.
 */
export function LogoMark({ className, title = "Study Station" }: LogoMarkProps) {
  return <img src={logoSrc} alt={title} className={className} draggable={false} />;
}
