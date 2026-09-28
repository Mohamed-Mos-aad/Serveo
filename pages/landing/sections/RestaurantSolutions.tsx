// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import diningPhoto from "@/public/images/landing/Busy warm high-end restaurant dining room in Dubai.png";
import steakPhoto from "@/public/images/landing/Finely cooked and garnished steak dinner in a luxury Dubai dining room.png";

// ** Constants
const concepts = [
  {
    tag: "Full-Service",
    title: "Fine & Casual Dining",
    description:
      "Multi-station KDS, course holding, VIP guest preferences, sommelier billing, management, and split-tender billing.",
    points: ["Cover pacing controls", "Guest loyalty history"],
  },
  {
    tag: "Cafes & Bakeries",
    title: "Specialty Coffee & Roasters",
    description:
      "Ultra-fast single tap checkout, milk and single-origin inventory batches, pastry pars, and mobile loyalty pickup.",
    points: ["Sub-second order flow", "Batch baking schedule"],
  },
  {
    tag: "Ghost Kitchens",
    title: "High-Volume Ghost Kitchens",
    description:
      "Aggregate Deliveroo, Talabat, Noon Food, and Careem orders onto unified assembly screens without tablet clutter.",
    points: ["Multi-brand single printer", "Rider dispatch screen"],
  },
  {
    tag: "Franchises & Chains",
    title: "Multi-Unit Food Chains",
    description:
      "Centralized recipe distribution, cross-branch commissary transfers, global menu syncing, and enterprise role permissions.",
    points: ["Regional ZATCA / FTA tax", "Warehouse stock balancing"],
  },
];

export default function RestaurantSolutions() {
  return (
    <section className="bg-surface px-4 py-20 text-dark sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary">
            TAILORED HOSPITALITY ARCHITECTURES
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-dark sm:text-5xl">
            Engineered for every dining format.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-muted">
            From intimate Jumeirah roasteries to multi-kitchen commissary chains
            across Dubai and Riyadh.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[22px] border border-[#E8E1D3] bg-[#fcfaf6] text-dark"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={index % 2 ? steakPhoto : diningPhoto}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-semibold">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 min-h-19 text-xs leading-relaxed text-gray-muted">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-[#eee7df] pt-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[11px] text-charcoal"
                    >
                      <span className="text-primary">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
