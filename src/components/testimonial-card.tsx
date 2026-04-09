interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <div className="text-orange text-lg">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <p className="text-brown-text text-sm mt-3 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-brown-dark font-medium text-sm mt-4">&mdash; {name}</p>
    </div>
  );
}
