import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-brown-dark py-20 text-center">
      <h2 className="font-[family-name:var(--font-alex-brush)] text-4xl text-cream-light">
        Let&apos;s Create Your Memories Together
      </h2>
      <p className="text-tan-muted mt-3 text-sm tracking-wide">
        Book your session today and let&apos;s capture something beautiful
      </p>
      <Link href="/contact" className="btn-primary inline-block mt-8">
        Get in Touch
      </Link>
    </section>
  );
}
