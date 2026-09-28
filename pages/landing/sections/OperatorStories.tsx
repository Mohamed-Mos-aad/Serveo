// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import diningPhoto from "@/public/images/landing/Busy warm high-end restaurant dining room in Dubai.png";
import steakPhoto from "@/public/images/landing/Finely cooked and garnished steak dinner in a luxury Dubai dining room.png";

// ** Constants
const quotes = [
  {
    quote:
      "Our weekend dinner service at DIFC used to be sheer chaos between the bar orders and the woodfire kitchen. Serveo eliminated lost tickets overnight. The floor plan timer alone gave us an extra turn every single evening.",
    name: "Tariq Mansoor",
    role: "Executive Chef & Partner, DIFC Dubai",
    image: diningPhoto,
  },
  {
    quote:
      "Operating 6 cafes between Abu Dhabi and Al Ain was a nightmare for recipe costing. With Serveo, our central pastry kitchen pushes cost updates with one click, and inventory audits take 20 minutes instead of whole Sundays.",
    name: "Reem Al-Hashimi",
    role: "Managing Director, Bloom Specialty Roasters",
    image: steakPhoto,
  },
  {
    quote:
      "Full ZATCA Phase 2 compliance in Riyadh was daunting until we deployed Serveo. Our tax reporting is fully automated, delivery channel commissions are consolidated, and staff love the UI.",
    name: "Fahad Al-Otaibi",
    role: "Chief Operating Officer, Anisa Hospitality Riyadh",
    image: diningPhoto,
  },
];

export default function OperatorStories() {
  return (
    <section className="bg-surface px-4 py-20 text-dark sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary">
            OPERATOR STORIES
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-dark sm:text-5xl">
            Built for GCC restaurateurs who care about every detail.
          </h2>
          <p className="mt-4 text-sm text-gray-muted">
            Read how forward-thinking hospitality groups swapped clunky legacy
            terminals for Serveo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {quotes.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-[#e8e1d3] bg-white p-6 text-dark shadow-sm"
            >
              <div className="tracking-widest text-amber-500">★★★★★</div>
              <p className="mt-4 min-h-32 text-sm leading-relaxed">
                “{item.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-[#eee7df] pt-4">
                <Image
                  src={item.image}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold">{item.name}</p>
                  <p className="mt-1 text-[10px] text-gray-subtle">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
