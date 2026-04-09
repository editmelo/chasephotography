interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ name, price, features, popular = false }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-md overflow-hidden ${
      popular
        ? "border-t-4 border-orange shadow-lg scale-[1.02]"
        : "border-t-2 border-orange/30 shadow-sm"
    }`}>
      <div className="p-6 text-center">
        {popular && (
          <span className="inline-block bg-orange text-white text-[10px] uppercase tracking-[1px] px-3 py-1 rounded-full mb-3">
            Popular
          </span>
        )}
        <p className="section-label">{name}</p>
        <p className="text-4xl font-semibold text-brown-dark mt-2">
          ${price.toLocaleString()}
        </p>
        <ul className="mt-6 space-y-3 text-left">
          {features.map((feature) => (
            <li key={feature} className="text-brown-text text-sm flex items-start gap-2">
              <span className="text-orange mt-0.5">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
