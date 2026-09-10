import logoSrc from "../../assets/brand/study-station-logo.png";

interface LogoMarkProps {
  className?: string;
  title?: string;
}

export function LogoMark({
  className,
  title = "Study Station",
}: LogoMarkProps) {
  return (
    <img src={logoSrc} alt={title} className={className} draggable={false} />
  );
}
