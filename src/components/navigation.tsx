"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

type DropdownItem = { label: string; href: string };
const servicesDropdown: DropdownItem[] = [
  { label: "All Services", href: "/services" },
  { label: "Portrait Pricing", href: "/services#portraits" },
  { label: "Wedding Pricing", href: "/services#weddings" },
  { label: "Event Pricing", href: "/services#events" },
];

const portfolioDropdown: DropdownItem[] = [
  { label: "All Portfolio", href: "/portfolio" },
  { label: "Portraits", href: "/portfolio/portraits" },
  { label: "Weddings", href: "/portfolio/weddings" },
  { label: "Events", href: "/portfolio/events" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navBg = isHome && !isScrolled ? "bg-transparent" : "bg-cream/95 backdrop-blur-md shadow-sm";
  const textColor = isHome && !isScrolled ? "text-white" : "text-brown-dark";
  const logoFilter = isHome && !isScrolled ? "brightness-0 invert" : "";

  const getLinkClass = (href: string) =>
    `text-xs uppercase tracking-[2px] transition-colors duration-300 ${
      pathname === href
        ? "text-orange border-b border-orange pb-1"
        : `${textColor} hover:text-orange`
    }`;

  const isSectionActive = (prefix: string) => pathname.startsWith(prefix);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1">
          <Image
            src="/images/logo.png"
            alt="Chase Portraits Photography"
            width={200}
            height={50}
            className={`h-10 w-auto transition-all duration-300 ${logoFilter}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.label === "Services" || link.label === "Portfolio") {
              const dropdown = link.label === "Services" ? servicesDropdown : portfolioDropdown;
              const active = isSectionActive(link.href);
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-xs uppercase tracking-[2px] transition-colors duration-300 ${
                      active
                        ? "text-orange border-b border-orange pb-1"
                        : `${textColor} hover:text-orange`
                    }`}
                  >
                    {link.label}
                    <span className="text-[10px]">▾</span>
                  </Link>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="bg-cream shadow-lg border border-orange/20 rounded-md py-2 min-w-[180px]">
                        {dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-xs uppercase tracking-[2px] text-brown-dark hover:bg-tan hover:text-orange transition-colors whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${textColor}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-cream ${isMobileOpen ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => {
            if (link.label === "Services" || link.label === "Portfolio") {
              const dropdown = link.label === "Services" ? servicesDropdown : portfolioDropdown;
              return (
                <div key={link.href} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className={`text-sm uppercase tracking-[2px] ${
                      isSectionActive(link.href) ? "text-orange" : "text-brown-dark hover:text-orange"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 flex flex-col gap-2 border-l border-orange/20">
                    {dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-xs uppercase tracking-[1px] text-brown-text hover:text-orange"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[2px] ${
                  pathname === link.href ? "text-orange" : "text-brown-dark hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
