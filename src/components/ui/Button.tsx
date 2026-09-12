import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { buttonClasses, type ButtonVariant, type ButtonSize } from "./buttonStyles";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

function ButtonContent({
  icon,
  iconPosition = "right",
  children,
}: Pick<SharedProps, "icon" | "iconPosition" | "children">) {
  return (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0 text-[0.9em]">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 text-[0.9em]">{icon}</span>}
    </>
  );
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, size, icon, iconPosition, className, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={buttonClasses(variant, size, className)} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}

type LinkButtonProps = SharedProps & LinkProps;

export function LinkButton({ variant, size, icon, iconPosition, className, children, ...rest }: LinkButtonProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </Link>
  );
}

type AnchorButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function AnchorButton({ variant, size, icon, iconPosition, className, children, ...rest }: AnchorButtonProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </a>
  );
}
