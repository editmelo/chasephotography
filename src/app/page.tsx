import Image from "next/image";
import Link from "next/link";
import { Camera, Clock, Sparkles } from "lucide-react";
import HeroSlideshow from "@/components/hero-slideshow";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import CtaBanner from "@/components/cta-banner";
import { PortfolioGallery } from "@/components/ui/portfolio-gallery";
import { testimonials } from "@/lib/data";

const services = [
  { image: "/images/hero-1.jpg", title: "Portraits", startingPrice: "$300", alt: "Portrait photography in Nashville", imagePosition: "object-[50%_30%]" },
  { image: "/images/hero-2.jpg", title: "Weddings", startingPrice: "$750", alt: "Wedding photography coverage", imagePosition: "object-center" },
  { image: "/images/hero-3.jpg", title: "Events", startingPrice: "$200/hr", alt: "Event photography in Nashville", imagePosition: "object-center" },
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

      {/* Behind the Lens */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Behind the Lens" title="The Experience" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-5">
                <Camera className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-lg font-medium text-brown-dark">Relaxed Sessions</h3>
              <p className="text-brown-text text-sm mt-3 leading-relaxed">
                No stiff poses here. Chase creates a comfortable, fun atmosphere so your genuine personality shines through every shot.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-lg font-medium text-brown-dark">Magazine-Worthy Quality</h3>
              <p className="text-brown-text text-sm mt-3 leading-relaxed">
                Every image is professionally retouched with clean, crisp, vibrant editing that has been featured in published magazines.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-5">
                <Clock className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-lg font-medium text-brown-dark">Quick Turnaround</h3>
              <p className="text-brown-text text-sm mt-3 leading-relaxed">
                Your gallery delivered in 10-14 days with an online gallery, downloads, and a mobile photo app for easy sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Showcase */}
      <PortfolioGallery
        title="See Our Work in Action"
        archiveButton={{ text: "View Full Portfolio", href: "/portfolio" }}
        className="bg-tan"
        images={[
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_0022-Edit.jpg", alt: "Portrait session" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_1224.jpg", alt: "Wedding photography" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_4659-Edit.jpg", alt: "Portrait photography" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_0736.jpg", alt: "Event photography" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_9364-Edit.jpg", alt: "Wedding portraits" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_2616.jpg", alt: "Portrait session" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_5716.jpg", alt: "Event coverage" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_8503.jpg", alt: "Portrait photography" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_1578.jpg", alt: "Wedding ceremony" },
          { src: "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_7395.jpg", alt: "Portrait session" },
        ]}
      />

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] md:h-[650px] rounded-md overflow-hidden">
              <Image
                src="/images/hero-4.jpg"
                alt="Maurice Chase - Nashville photographer"
                fill
                className="object-cover object-center"
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
