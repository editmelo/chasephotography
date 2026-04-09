import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/hero-slideshow";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import CtaBanner from "@/components/cta-banner";
import { testimonials } from "@/lib/data";

const services = [
  { image: "/images/hero-1.jpg", title: "Portraits", startingPrice: "$300", alt: "Portrait photography in Nashville" },
  { image: "/images/hero-2.jpg", title: "Weddings", startingPrice: "$750", alt: "Wedding photography coverage" },
  { image: "/images/hero-3.jpg", title: "Events", startingPrice: "$200/hr", alt: "Event photography in Nashville" },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Services Preview */}
      <section className="bg-tan py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="What We Offer" title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[450px] rounded-md overflow-hidden">
              <Image
                src="/images/portrait-1.jpg"
                alt="Maurice Chase - Nashville photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading label="Meet the Photographer" title="About Chase" centered={false} />
              <p className="text-brown-text mt-6 leading-relaxed">
                Maurice &ldquo;Chase&rdquo; is a versatile portrait, event, and fashion photographer in Nashville, TN with nearly a decade of experience. His style emphasizes clean, crisp, vibrant imagery with relaxed, posed-candid moments and genuine expressions.
              </p>
              <Link href="/about" className="text-orange text-xs uppercase tracking-[2px] mt-6 inline-block hover:text-orange-light transition-colors">
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-tan py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Client Love" title="What They Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
