import { cx } from "../../utils/helpers";

export function ErrorState({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={cx(
        "flex items-start gap-3 rounded-2xl border border-coral-100 bg-coral-50 px-4 py-3.5 text-sm text-coral-700",
        className,
      )}
    >
      <i className="fa-solid fa-circle-exclamation mt-0.5 text-coral-600" aria-hidden="true" />
      <div>
        <p className="font-semibold">{title}</p>
        {description && <p className="mt-0.5 text-coral-700/90">{description}</p>}
      </div>
    </div>
  );
}
