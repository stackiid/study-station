import type { ReactNode } from "react";
import { cx } from "../../utils/helpers";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cx("flex flex-col items-center text-center py-16 px-6", className)}>
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 text-2xl">
        {icon ?? <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />}
      </div>
      <h3 className="font-display text-xl font-bold text-teal-900">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-ink-500">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
