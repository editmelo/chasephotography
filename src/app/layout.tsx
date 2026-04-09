import type { Metadata } from "next";
import { Alex_Brush, Lexend_Deca, Petit_Formal_Script } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const petitFormal = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-petit-formal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chase Portraits Photography | Nashville, TN",
    template: "%s | Chase Portraits Photography",
  },
  description:
    "Professional portrait, wedding, and event photography in Nashville, TN. Clean, crisp, vibrant imagery with genuine expressions. Book your session today.",
  keywords: [
    "Nashville photographer",
    "portrait photography Nashville",
    "wedding photographer Nashville TN",
    "event photographer LaVergne TN",
    "Chase Portraits",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaseportraits.com",
    siteName: "Chase Portraits Photography",
    title: "Chase Portraits Photography | Nashville, TN",
    description:
      "Professional portrait, wedding, and event photography in Nashville, TN.",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1920,
        height: 1080,
        alt: "Chase Portraits Photography",
      },
    ],
  },
  metadataBase: new URL("https://chaseportraits.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alexBrush.variable} ${lexendDeca.variable} ${petitFormal.variable}`}
    >
      <body className="font-[family-name:var(--font-lexend)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Chase Portraits Photography",
              image: "https://chaseportraits.com/images/logo.png",
              telephone: "615-933-1169",
              email: "chaseportraits@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "LaVergne",
                addressRegion: "TN",
                postalCode: "37086",
                addressCountry: "US",
              },
              url: "https://chaseportraits.com",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://facebook.com/chaseportraits",
                "https://instagram.com/chase_portraits",
              ],
            }),
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
