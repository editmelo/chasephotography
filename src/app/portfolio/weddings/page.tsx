import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import GalleryGrid from "@/components/gallery-grid";
import { weddingGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Wedding Photography | Chase Portraits Photography",
  description: "Browse our wedding photography portfolio — ceremony, reception, and couple portraits in Nashville, TN.",
};

export default function WeddingPortfolioPage() {
  return (
    <>
      <PageBanner title="Weddings" subtitle="Wedding Photography" />
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link href="/portfolio" className="text-orange text-xs uppercase tracking-[2px] hover:text-orange-light transition-colors">
          &larr; Back to Portfolio
        </Link>
      </div>
      <GalleryGrid images={weddingGallery} />
    </>
  );
}
