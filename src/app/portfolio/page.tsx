import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
export const metadata: Metadata = {
  title: "Portfolio | Chase Portraits Photography",
  description: "Browse our portfolio of portrait, wedding, and event photography in Nashville, TN.",
};

const collections = [
  {
    title: "Portraits",
    href: "/portfolio/portraits",
    image: "/images/hero-1.jpg",
    description: "Individual, couples, and family portrait sessions",
  },
  {
    title: "Weddings",
    href: "/portfolio/weddings",
    image: "/images/hero-2.jpg",
    description: "Ceremony, reception, and couple portraits",
  },
  {
    title: "Events",
    href: "/portfolio/events",
    image: "/images/hero-3.jpg",
    description: "Birthdays, corporate events, and celebrations",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageBanner title="Portfolio" subtitle="Our Recent Work" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((col) => (
              <Link
                key={col.title}
                href={col.href}
                className="group relative rounded-md overflow-hidden aspect-[3/4] block"
              >
                <Image
                  src={col.image}
                  alt={`${col.title} photography portfolio`}
                  fill
                  className="object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-brown-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h2 className="font-[family-name:var(--font-alex-brush)] text-3xl text-cream-light">
                    {col.title}
                  </h2>
                  <p className="text-cream-light/70 text-sm mt-2">{col.description}</p>
                  <p className="text-orange text-xs uppercase tracking-[2px] mt-3">
                    See More &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
