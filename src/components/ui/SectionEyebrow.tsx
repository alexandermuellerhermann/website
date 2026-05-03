type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
};

export function SectionEyebrow({ children, align = "left" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="h-px w-8 bg-gold" aria-hidden />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-8 bg-gold" aria-hidden />
    </div>
  );
}
