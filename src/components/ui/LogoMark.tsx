import { useId } from "react";

interface LogoMarkProps {
  className?: string;
  title?: string;
}

export function LogoMark({
  className,
  title = "Study Station",
}: LogoMarkProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F4C4C" />
          <stop offset="100%" stopColor="#0A3A3A" />
        </linearGradient>
      </defs>

      <path
        fill={`url(#${gradientId})`}
        d="M10,37 C7,33 9,26 15,25 C15,20 21,17 25,20 C27,15 34,15 36,20 C41,16 48,19 47,25 C53,26 55,33 51,37 C54,41 52,47 46,48 C45,53 39,56 33,54 C31,57 26,57 24,54 C18,55 13,51 13,46 C8,45 7,40 10,37 Z"
      />
      <path
        fill={`url(#${gradientId})`}
        d="M27,51 C27,54.5 29,57.5 32,59 C35,57.5 37,54.5 37,51 C37,49 35,48 32,48 C29,48 27,49 27,51 Z"
      />
      <path
        d="M32,21 C31,28 33,36 32,44 C31,48 32,51 32,53"
        fill="none"
        stroke="#F2FBF9"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M16,29 C19,31 20,34 18,37"
        fill="none"
        stroke="#F2FBF9"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M14,40 C17,41 19,44 17,47"
        fill="none"
        stroke="#F2FBF9"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M48,29 C45,31 44,34 46,37"
        fill="none"
        stroke="#F2FBF9"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M50,40 C47,41 45,44 47,47"
        fill="none"
        stroke="#F2FBF9"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <rect x="24" y="24" width="16" height="11" rx="3" fill="#0A2E2C" />
      <path fill="#FF7A45" d="M32,4 L60,18 L32,32 L4,18 Z" />
      <path fill="#E8632E" d="M32,26 L60,18 L32,32 L4,18 Z" opacity="0.32" />
      <circle cx="32" cy="18" r="2.2" fill="#0A2E2C" />
      <path
        d="M34,18.6 C40,20.2 45,23 46.5,27.5"
        fill="none"
        stroke="#FF7A45"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M46.5,27.5 C45.6,31.5 45.8,35.5 46.5,38.5"
        fill="none"
        stroke="#FF7A45"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="46.5" cy="40" r="2" fill="#FF7A45" />
    </svg>
  );
}
