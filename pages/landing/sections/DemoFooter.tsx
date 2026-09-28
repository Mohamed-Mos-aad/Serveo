// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import logo from "@/public/logo.svg";

// ** Constants
const footerGroups = [
  {
    title: "PRODUCT",
    links: [
      "Restaurant POS",
      "Expeditor Kitchen KDS",
      "Visual Floor Plan Engine",
      "Recipe Costing & Inventory",
      "Multi-Branch Headquarters",
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      "Fine Dining & Lounges",
      "Specialty Cafes & Bakeries",
      "Ghost & Cloud Kitchens",
      "Enterprise Chains & QSR",
      "ZATCA & UAE VAT Setup",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "About Serveo",
      "GCC Hospitality Report 2025",
      "System Status (99.98%)",
      "Security & Cloud Architecture",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
];

export default function DemoFooter() {
  return (
    <>
      <section
        id="book-demo"
        className="bg-surface px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-5xl rounded-[28px] border border-[#e8e1d3] bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <span className="rounded-full bg-[#fff0e8] px-4 py-2 text-[10px] font-semibold text-primary">
            Setup & Training in under 48 hours
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-tight text-dark sm:text-5xl">
            Ready to simplify your restaurant?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-muted">
            Join 450+ forward-thinking food businesses across Dubai, Abu Dhabi,
            and Riyadh. Get a tailored walk-through with our GCC culinary tech
            team.
          </p>
          <form className="mx-auto mt-7 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your work email (e.g. chef@restaurant.ae)"
              className="min-w-0 flex-1 rounded-xl border border-[#e8e1d3] bg-[#faf7f2] px-4 py-3 text-xs outline-none focus:border-primary"
            />
            <button className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover">
              Book a Demo
            </button>
          </form>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] text-gray-subtle">
            <span>No long-term lock-in</span>
            <span>Free legacy hardware audit</span>
            <span>On-site team onboarding</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#f0ebe1] px-4 py-12 text-dark sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-9 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src={logo} alt="Serveo" className="h-7 w-auto" />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-gray-muted">
              The unified restaurant management operating system engineered
              specifically for GCC regulations, hospitality standards, and
              high-volume multi-branch performance.
            </p>
            <p className="mt-4 text-[10px] leading-relaxed text-gray-subtle">
              Dubai: Building 4, Dubai Design District (d3), UAE
              <br />
              Riyadh: Olaya Towers, King Fahd Road, KSA
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10px] font-bold tracking-wide">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[10px] text-gray-muted hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-9 max-w-6xl border-t border-[#e3dccf] pt-5 text-[9px] text-gray-subtle">
          Copyright 2025 Serveo Technologies FZ-LLC. All rights reserved.
          Registered in UAE & Kingdom of Saudi Arabia.
        </div>
      </footer>
    </>
  );
}
