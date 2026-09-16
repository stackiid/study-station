function NoResultsIllustration() {
  return (
    <svg
      viewBox="0 0 120 96"
      className="h-24 w-auto"
      role="presentation"
      aria-hidden="true"
    >
      <ellipse cx="60" cy="82" rx="38" ry="6" fill="#EEF7F5" />
      <circle
        cx="50"
        cy="42"
        r="26"
        fill="#FFFFFF"
        stroke="#D6ECE7"
        strokeWidth="3"
      />
      <circle cx="50" cy="42" r="17" fill="#EEF7F5" />
      <path
        d="M42,46 Q50,38 58,46"
        fill="none"
        stroke="#227C6C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="44" cy="39" r="2" fill="#227C6C" />
      <circle cx="56" cy="39" r="2" fill="#227C6C" />
      <line
        x1="68"
        y1="60"
        x2="86"
        y2="78"
        stroke="#0F4C4C"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M96,20 C97,24 99,25 103,26 C99,27 97,28 96,32 C95,28 93,27 89,26 C93,25 95,24 96,20 Z"
        fill="#FF7A45"
      />
      <path
        d="M18,58 C18.7,60.5 20,61.7 22.5,62.4 C20,63 18.7,64.3 18,66.8 C17.3,64.3 16,63 13.5,62.4 C16,61.7 17.3,60.5 18,58 Z"
        fill="#FFAB7F"
      />
    </svg>
  );
}

export function SearchEmptyState({
  query,
  onReset,
}: {
  query: string;
  onReset: () => void;
}) {
  return (
    <div
      className="flex flex-col items-center px-6 py-10 text-center"
      data-reveal
    >
      <NoResultsIllustration />
      <h3 className="mt-5 font-display text-lg font-bold text-teal-900">
        Nothing found
      </h3>
      <p className="mt-1.5 max-w-xs text-sm text-ink-500">
        We couldn&apos;t find a course, resource, or tutorial matching{" "}
        <span className="font-medium text-ink-700">&ldquo;{query}&rdquo;</span>.
        Try another keyword, technology, or topic.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 text-sm font-semibold text-teal-700 hover:text-teal-800 underline underline-offset-4"
      >
        Clear search
      </button>
    </div>
  );
}
