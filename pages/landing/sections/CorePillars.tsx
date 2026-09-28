export default function CorePillars() {
    // ** Constants
    const pillars = [
        {
            title: "Orders & Kitchen KDS",
            description: "Instant order synchronization from\nhandheld server devices to grill,\npastry, and bar stations with zero\ndropped tickets.",
            stat: "1.2s Average Ticket Speed",
            subtext: "Supports multi-course firing and split checks",
            svg: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Live Table Floorplans",
            description: "Interactive real-time floor plans\nwith seated timer rings, server zone\nassignments, and immediate\nreservation matching.",
            stat: "+35% Table Turnover",
            subtext: "Color alerts for course delays & checks",
            svg: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21M9 21V9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Recipe & Inventory",
            description: "Automated ingredient deduction\nright down to the gram. Real-time\nCOGS tracking, supplier POs, and\npredictive low-stock warnings.",
            stat: "18% Less Food Waste",
            subtext: "Automated supplier re-ordering triggers",
            svg: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69752 20.3037 6.44534 20 6.27L13 2.27C12.696 2.09446 12.3513 2.00195 12 2.00195C11.6487 2.00195 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44534 3.44403 6.69752 3.26846 7.00116C3.0929 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.0929 16.6952 3.26846 16.9988C3.44403 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9055 11.6487 21.998 12 21.998C12.3513 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Multi-Branch GCC Hub",
            description: "predictive low-stock warnings.\nManage menus, tax policies (UAE\nVAT & KSA ZATCA compliant), and\nconsolidated P&L across Downtown,\nMarina, and Riyadh.",
            stat: "One Single Login",
            subtext: "Cross-location menu & price pushes",
            svg: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D94A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ];



    return (
        <section className="flex flex-col gap-16 px-4 sm:px-8 py-20 sm:py-28">
            <div className="text-center">
                <span className="text-[12px] text-primary">BUILT FROM THE PASS UP</span>
                <h1 className="text-[28px] sm:text-[36px] text-dark my-2.5">
                    Everything your team touches,
                    engineered without friction.
                </h1>
                <p className="text-gray-muted max-w-2xl mx-auto">
                    Replace five disjointed legacy tools with one beautifully coordinated platform designed for
                    hospitality speed.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((item, index) => (
                    <div key={index} className="flex flex-col gap-5 bg-white border border-[#E8E1D3] rounded-3xl p-6">
                        <div className="max-w-fit bg-surface-warm border border-[#F9E7DD] rounded-2xl p-2.75">
                            {item.svg}
                        </div>
                        <h2 className="text-[20px] font-bold text-dark">{item.title}</h2>
                        <p className="text-[14px] text-gray-muted -mt-5 whitespace-pre-line">
                            {item.description}
                        </p>
                        <h3 className="text-[12px] font-bold text-charcoal">{item.stat}</h3>
                        <p className="text-[14px] text-gray-subtle -mt-5">{item.subtext}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}