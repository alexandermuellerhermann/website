type Props = {
  className?: string;
  size?: number;
};

export function ParthenonMark({ className, size = 36 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.66}
      viewBox="0 0 60 40"
      fill="none"
      aria-hidden
    >
      {/* Pediment */}
      <path d="M30 2 L4 14 L56 14 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      {/* Architrave */}
      <rect x="6" y="14" width="48" height="3" fill="currentColor" />
      {/* Columns */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={10 + i * 8}
          y1="17"
          x2={10 + i * 8}
          y2="34"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      ))}
      {/* Stylobate */}
      <rect x="4" y="34" width="52" height="2.5" fill="currentColor" />
      <rect x="2" y="36.5" width="56" height="2" fill="currentColor" />
    </svg>
  );
}
