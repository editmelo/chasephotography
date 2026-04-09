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
  title: "Chase Portraits Photography | Nashville, TN",
  description:
    "Professional portrait, wedding, and event photography in Nashville, TN. Clean, crisp, vibrant imagery with genuine expressions.",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
