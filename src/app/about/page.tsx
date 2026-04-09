import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/page-banner";
import CtaBanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About Chase | Chase Portraits Photography",
  description: "Meet Maurice 'Chase' — a versatile portrait, event, and fashion photographer in Nashville, TN with nearly a decade of experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Chase" subtitle="The Photographer" />

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] md:h-[650px] rounded-md overflow-hidden">
              <Image
                src="/images/hero-4.jpg"
                alt="Maurice Chase — Nashville photographer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-alex-brush)] text-3xl text-brown-dark">
                Meet Maurice &ldquo;Chase&rdquo;
              </h2>
              <p className="text-brown-text mt-6 leading-relaxed">
                Maurice &ldquo;Chase&rdquo; is a versatile portrait, event, and fashion photographer in Nashville, TN with nearly a decade of experience. His style emphasizes clean, crisp, vibrant imagery with relaxed, posed-candid moments and genuine expressions.
              </p>
              <p className="text-brown-text mt-4 leading-relaxed">
                Work has been published in various magazines, and his passion for capturing authentic moments shines through in every session. Whether it&apos;s a portrait, wedding, or event, Chase brings a relaxed energy that helps clients feel comfortable and confident in front of the camera.
              </p>
              {/* Stats */}
              <div className="flex gap-12 mt-8">
                <div>
                  <p className="text-3xl font-semibold text-orange">10+</p>
                  <p className="text-xs uppercase tracking-[2px] text-brown-text mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-orange">500+</p>
                  <p className="text-xs uppercase tracking-[2px] text-brown-text mt-1">Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="bg-tan py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-[family-name:var(--font-alex-brush)] text-2xl text-brown-dark italic">
            &ldquo;The thing that&apos;s fascinating about portraiture is that nobody is alike.&rdquo;
          </p>
          <p className="section-label mt-4">&mdash; Imogen Cunningham</p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
