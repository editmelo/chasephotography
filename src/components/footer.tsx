import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-orange/30">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-brown-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6 text-sm text-brown-text">
          <Link href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
            Facebook
          </Link>
          <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
            Instagram
          </Link>
          <Link href={`tel:${siteConfig.phone}`} className="hover:text-orange transition-colors">
            {siteConfig.phone}
          </Link>
        </div>
      </div>
    </footer>
  );
}
