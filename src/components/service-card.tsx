import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  startingPrice: string;
  alt: string;
  imagePosition?: string;
}

export default function ServiceCard({ image, title, startingPrice, alt, imagePosition = "object-top" }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className={`object-cover ${imagePosition} group-hover:scale-105 transition-transform duration-500`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-medium text-brown-dark">{title}</h3>
        <p className="text-brown-text text-sm mt-1">Starting at {startingPrice}</p>
        <Link href="/services" className="text-orange text-xs uppercase tracking-[2px] mt-3 inline-block hover:text-orange-light transition-colors">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}
