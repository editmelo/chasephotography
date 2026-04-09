import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import GalleryGrid from "@/components/gallery-grid";
import { eventGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Event Photography | Chase Portraits Photography",
  description: "Browse our event photography portfolio — birthdays, corporate events, and celebrations in Nashville, TN.",
};

export default function EventPortfolioPage() {
  return (
    <>
      <PageBanner title="Events" subtitle="Event Photography" />
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link href="/portfolio" className="text-orange text-xs uppercase tracking-[2px] hover:text-orange-light transition-colors">
          &larr; Back to Portfolio
        </Link>
      </div>
      <GalleryGrid images={eventGallery} />
    </>
  );
}
