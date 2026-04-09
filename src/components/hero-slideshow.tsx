"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Portrait photography by Chase Portraits" },
  { src: "/images/hero-2.jpg", alt: "Wedding photography in Nashville" },
  { src: "/images/hero-3.jpg", alt: "Event photography coverage" },
  { src: "/images/hero-4.jpg", alt: "Professional photography session" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content with vertical orange accent bar */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-6">
            <div className="w-0.5 h-32 bg-orange hidden sm:block" />
            <div>
              <p className="section-label text-orange-light">Nashville, TN</p>
              <h1 className="font-[family-name:var(--font-alex-brush)] text-5xl sm:text-6xl lg:text-7xl text-cream-light mt-3 leading-tight">
                Capturing<br />Your Story
              </h1>
              <p className="text-cream-light/80 mt-4 max-w-md text-base sm:text-lg">
                Nearly a decade of magazine-worthy photography
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/contact" className="btn-primary">Book Now</Link>
                <Link href="/portfolio" className="btn-outline border-cream-light text-cream-light hover:bg-cream-light hover:text-brown-dark">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === current ? "bg-orange" : "bg-orange/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
