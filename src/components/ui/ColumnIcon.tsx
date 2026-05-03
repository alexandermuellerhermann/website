type Props = {
  className?: string;
  size?: number;
};

export function ColumnIcon({ className, size = 32 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      {/* Capital scrolls */}
      <path
        d="M10 14 C10 11, 13 9, 17 10 C20 11, 22 13, 24 13 C26 13, 28 11, 31 10 C35 9, 38 11, 38 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="13.5" r="1.6" fill="currentColor" />
      <circle cx="34" cy="13.5" r="1.6" fill="currentColor" />
      {/* Abacus */}
      <rect x="9" y="14.5" width="30" height="2.5" fill="currentColor" />
      {/* Shaft fluting */}
      <line x1="14" y1="18" x2="14" y2="38" stroke="currentColor" strokeWidth="1.2" />
      <line x1="19" y1="18" x2="19" y2="38" stroke="currentColor" strokeWidth="1.2" />
      <line x1="24" y1="18" x2="24" y2="38" stroke="currentColor" strokeWidth="1.2" />
      <line x1="29" y1="18" x2="29" y2="38" stroke="currentColor" strokeWidth="1.2" />
      <line x1="34" y1="18" x2="34" y2="38" stroke="currentColor" strokeWidth="1.2" />
      {/* Base */}
      <rect x="8" y="38" width="32" height="2.5" fill="currentColor" />
      <rect x="6" y="40.5" width="36" height="2" fill="currentColor" />
    </svg>
  );
}
