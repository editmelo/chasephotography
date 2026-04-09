interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="bg-gradient-to-br from-brown-dark to-brown-mid py-20 text-center">
      <h1 className="font-[family-name:var(--font-alex-brush)] text-5xl text-cream-light">{title}</h1>
      <p className="section-label mt-3 text-orange-light">{subtitle}</p>
    </div>
  );
}
