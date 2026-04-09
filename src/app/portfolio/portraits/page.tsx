import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import GalleryGrid from "@/components/gallery-grid";
import { portraitGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portrait Photography | Chase Portraits Photography",
  description: "Browse our portrait photography portfolio — individual, couples, and family sessions in Nashville, TN.",
};

export default function PortraitPortfolioPage() {
  return (
    <>
      <PageBanner title="Portraits" subtitle="Portrait Photography" />
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link href="/portfolio" className="text-orange text-xs uppercase tracking-[2px] hover:text-orange-light transition-colors">
          &larr; Back to Portfolio
        </Link>
      </div>
      <GalleryGrid images={portraitGallery} />
    </>
  );
}
