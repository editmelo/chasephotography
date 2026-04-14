import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import ContactForm from "@/components/contact-form";
import FaqAccordion from "@/components/faq-accordion";
import { siteConfig } from "@/lib/data";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact | Chase Portraits Photography",
  description: "Book your photography session with Chase Portraits in Nashville, TN. Get in touch for portraits, weddings, and events.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Get in Touch" subtitle="Let's Create Together" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="bg-tan rounded-md p-8">
              <div className="space-y-8">
                <div>
                  <p className="section-label">Phone</p>
                  <Link href={`tel:${siteConfig.phone}`} className="text-brown-dark text-lg mt-2 block hover:text-orange transition-colors">
                    {siteConfig.phone}
                  </Link>
                </div>
                <div>
                  <p className="section-label">Email</p>
                  <Link href={`mailto:${siteConfig.email}`} className="text-brown-dark text-lg mt-2 block hover:text-orange transition-colors">
                    {siteConfig.email}
                  </Link>
                </div>
                <div>
                  <p className="section-label">Location</p>
                  <p className="text-brown-dark text-lg mt-2">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="section-label">Hours</p>
                  <div className="mt-2 space-y-1">
                    {siteConfig.hours.map((h) => (
                      <p key={h.days} className="text-brown-dark text-sm">
                        <span className="font-medium">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tan py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label text-center mb-8">Frequently Asked Questions</p>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
