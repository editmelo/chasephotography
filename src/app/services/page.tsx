import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import PricingCard from "@/components/pricing-card";
import CtaBanner from "@/components/cta-banner";
import { portraitPackages, weddingPackages, eventInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing | Chase Portraits Photography",
  description: "Portrait, wedding, and event photography packages in Nashville, TN. Transparent pricing starting at $200/hr.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" subtitle="Packages & Pricing" />

      {/* Portrait Photography */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-orange" />
            <p className="section-label">Portrait Photography</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portraitPackages.map((pkg) => (
              <PricingCard key={pkg.name} name={pkg.name} price={pkg.price} features={pkg.features} popular={pkg.popular} />
            ))}
          </div>
          <p className="text-center text-brown-text text-sm mt-8">
            50% deposit required at booking. Turnaround time: 10-14 days for final gallery.
          </p>
        </div>
      </section>

      {/* Wedding Photography */}
      <section className="bg-tan py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-orange" />
            <p className="section-label">Wedding Photography</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {weddingPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-md p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-brown-dark">{pkg.name}</h3>
                    <p className="text-brown-text text-sm mt-1">{pkg.duration}</p>
                  </div>
                  <p className="text-2xl font-semibold text-orange">${pkg.price.toLocaleString()}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="text-brown-text text-sm flex items-start gap-2">
                      <span className="text-orange mt-0.5">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Photography */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-orange" />
            <p className="section-label">Event Photography</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-3xl font-semibold text-brown-dark">{eventInfo.rate}</p>
              <p className="text-brown-text mt-2">Minimum {eventInfo.minimumHours} hours coverage</p>
              <p className="text-brown-text mt-4 leading-relaxed">
                Capturing the essence of your special events with candid shots and posed portraits to create a comprehensive visual story.
              </p>
              <p className="text-brown-text mt-4">Half-day and full-day event packages available.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-brown-dark uppercase tracking-[2px] mb-4">Event Types</h3>
              <div className="flex flex-wrap gap-2">
                {eventInfo.types.map((type) => (
                  <span key={type} className="bg-tan px-3 py-1.5 rounded-full text-sm text-brown-text">{type}</span>
                ))}
              </div>
              <h3 className="text-sm font-medium text-brown-dark uppercase tracking-[2px] mt-8 mb-4">Add-Ons</h3>
              <ul className="space-y-2">
                {eventInfo.addOns.map((addon) => (
                  <li key={addon.name} className="flex justify-between text-sm text-brown-text">
                    <span>{addon.name}</span>
                    <span className="text-orange font-medium">{addon.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">Ready to Book? Contact Us</Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
