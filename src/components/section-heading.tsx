interface SectionHeadingProps {
  label: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="section-label">{label}</p>
      <h2 className={`font-[family-name:var(--font-alex-brush)] text-4xl mt-2 ${light ? "text-cream-light" : "text-brown-dark"}`}>
        {title}
      </h2>
    </div>
  );
}
