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

export default function Footer() {
    return (
        <>
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
