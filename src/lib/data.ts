export const siteConfig = {
  name: "Chase Portraits Photography",
  shortName: "Chase Portraits",
  phone: "615-933-1169",
  email: "chaseportraits@gmail.com",
  location: "LaVergne, TN 37086",
  social: {
    facebook: "https://facebook.com/chaseportraits",
    instagram: "https://instagram.com/chase_portraits",
  },
  hours: [
    { days: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { days: "Saturday", time: "9:00 AM - 8:00 PM" },
    { days: "Sunday", time: "12:00 PM - 6:00 PM" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    name: "Lastasha Mcbee",
    quote: "Chase is a fantastic photographer. I highly recommend Chase Portraits.",
    rating: 5,
  },
  {
    name: "Elizabeth Ham",
    quote: "Personable and fun to work with",
    rating: 5,
  },
  {
    name: "Krystle",
    quote: "Provided wonderful experience! Professional yet relaxed. Amazing shots.",
    rating: 5,
  },
];

export const portraitPackages = [
  {
    name: "Basic",
    price: 300,
    duration: "1 hour",
    images: 8,
    outfits: "1 outfit",
    popular: false,
    features: [
      "1 hour photo session",
      "8 fully retouched images",
      "Online gallery with downloads",
      "Print release",
      "Mobile photo app",
    ],
  },
  {
    name: "Deluxe",
    price: 375,
    duration: "1.5 hours",
    images: 16,
    outfits: "2 outfits",
    popular: true,
    features: [
      "1.5 hour photo session",
      "16 fully retouched images",
      "Online gallery with downloads",
      "Print release",
      "Mobile photo app",
    ],
  },
  {
    name: "Premium",
    price: 550,
    duration: "2 hours",
    images: 25,
    outfits: "Unlimited outfits",
    popular: false,
    features: [
      "2 hour photo session",
      "25 fully retouched images",
      "Online gallery with downloads",
      "Print release",
      "Mobile photo app",
    ],
  },
];

export const weddingPackages = [
  {
    name: "Intimate Ceremony",
    price: 750,
    duration: "2-3 hours",
    description: "Ceremony and couple portraits",
    features: ["2-3 hours coverage", "Ceremony + couple portraits", "Digital gallery"],
  },
  {
    name: "Modern Wedding",
    price: 2000,
    duration: "5 hours",
    description: "Ceremony through portraits",
    features: ["5 hours coverage", "Ceremony + portraits", "Reception details", "Digital gallery"],
  },
  {
    name: "Elegant Wedding",
    price: 2500,
    duration: "8 hours",
    description: "Full ceremony and reception",
    features: ["8 hours coverage", "Ceremony + portraits", "Reception details + coverage", "Digital gallery"],
  },
  {
    name: "Luxury Wedding",
    price: 3500,
    duration: "10 hours",
    description: "Complete coverage with album",
    features: [
      "10 hours coverage",
      "Ceremony + portraits",
      "Reception details + full coverage",
      "Complimentary 10x10 album",
      "Digital gallery",
    ],
  },
];

export const eventInfo = {
  rate: "$200/hour",
  minimumHours: 2,
  types: ["Birthdays", "Anniversaries", "Church services", "Graduations", "Ceremonies", "Parties", "Shows"],
  addOns: [
    { name: "Rush delivery", price: "$75-$100" },
    { name: "Extended hours", price: "$150/hour" },
  ],
};

export const faqItems = [
  {
    question: "What are your business hours?",
    answer: "We are available Monday through Friday from 9:00 AM to 6:00 PM, Saturdays from 9:00 AM to 8:00 PM, and Sundays from 12:00 PM to 6:00 PM.",
  },
  {
    question: "How do I book a session?",
    answer: "Browse our services, contact us to discuss your preferences, select a location and date, and choose a package. A 50% non-refundable deposit is required to secure your booking.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, and debit/credit cards via invoice.",
  },
  {
    question: "How many photos will I receive?",
    answer: "The number of edited images depends on your package, ranging from 8 to 25+ retouched images for portrait sessions, and 40-60 edited images per hour for events.",
  },
  {
    question: "Do you provide raw files?",
    answer: "No, we only deliver professionally edited images. Raw files are not included in any package.",
  },
  {
    question: "What is your cancellation/refund policy?",
    answer: "The 50% deposit is non-refundable. Rescheduling is available with at least 48 hours notice.",
  },
];

export type PortfolioCategory = "all" | "portraits" | "weddings" | "events";

export const portfolioImages = [
  { src: "/images/gallery/portrait-1.jpg", alt: "Portrait session in Nashville", category: "portraits" as const },
  { src: "/images/gallery/portrait-2.jpg", alt: "Outdoor portrait photography", category: "portraits" as const },
  { src: "/images/gallery/portrait-3.jpg", alt: "Studio portrait session", category: "portraits" as const },
  { src: "/images/gallery/wedding-1.jpg", alt: "Wedding ceremony photography", category: "weddings" as const },
  { src: "/images/gallery/wedding-2.jpg", alt: "Wedding couple portraits", category: "weddings" as const },
  { src: "/images/gallery/event-1.jpg", alt: "Event photography coverage", category: "events" as const },
];
