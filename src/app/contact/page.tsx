import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import ContactForm from "@/components/contact-form";
import FaqAccordion from "@/components/faq-accordion";
import { siteConfig } from "@/lib/data";

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
                  <Link href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors text-sm">
                    f
                  </Link>
                  <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors text-sm">
                    ig
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
