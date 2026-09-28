'use client'



export default function Trusted() {
    // ** Constants
    const items = [
        {
            name: "Maison Du Liban",
            svg: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 1.66666V7.49999C2.5 8.41666 3.25 9.16666 4.16667 9.16666H7.5C8.42047 9.16666 9.16667 8.42046 9.16667 7.49999V1.66666" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83301 1.66666V18.3333" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.4997 12.5V1.66666C15.2 1.66666 13.333 3.53368 13.333 5.83332V10.8333C13.333 11.75 14.083 12.5 14.9997 12.5H17.4997V12.5M17.4997 12.5V18.3333" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            name: "Caffeine & Co. DIFC",
            svg: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33301 1.66666V3.33332" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.667 1.66666V3.33332" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 6.66666C13.7936 6.66666 14.1667 7.03975 14.1667 7.49999V14.1667C14.1667 16.0076 12.6743 17.5 10.8333 17.5H5.83333C3.99238 17.5 2.5 16.0076 2.5 14.1667V7.49999C2.5 7.03975 2.8731 6.66666 3.33333 6.66666H15C16.8397 6.66666 18.3333 8.16027 18.3333 9.99999C18.3333 11.8397 16.8397 13.3333 15 13.3333H14.1667" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 1.66666V3.33332" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            name: "Nawaab Grill Riyadh",
            svg: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0003 2.5C10.5559 4.72222 11.667 6.52778 13.3337 7.91667C15.0003 9.30556 15.8337 10.8333 15.8337 12.5C15.8337 15.7195 13.2198 18.3333 10.0003 18.3333C6.78082 18.3333 4.16699 15.7195 4.16699 12.5C4.16699 11.5985 4.4594 10.7212 5.00033 10C5.00033 11.1498 5.93384 12.0833 7.08366 12.0833C8.23348 12.0833 9.16699 11.1498 9.16699 10C9.16699 8.33333 7.91699 7.5 7.91699 5.83333C7.91699 4.72222 8.61144 3.61111 10.0003 2.5" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            name: "The Palms Bistro",
            svg: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1669 17.5C14.6271 17.5 15.0002 17.1269 15.0002 16.6667V12.2083C15.0002 11.8275 15.2636 11.505 15.6061 11.3408C17.0701 10.6424 17.8189 8.9915 17.3798 7.42996C16.9407 5.86842 15.4412 4.84968 13.8277 5.01666C13.1699 3.48747 11.6649 2.49661 10.0002 2.49661C8.33555 2.49661 6.83061 3.48747 6.17274 5.01666C4.56003 4.85085 3.06189 5.86941 2.62298 7.43008C2.18406 8.99075 2.93168 10.6409 4.39441 11.34C4.73691 11.505 5.00024 11.8275 5.00024 12.2075V16.6667C5.00024 17.1269 5.37333 17.5 5.83357 17.5H14.1669" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 14.1667H15" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            name: "CloudKitchens GCC",
            svg: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.1812 2.345C9.25487 1.95059 9.59914 1.66467 10.0004 1.66467C10.4016 1.66467 10.7459 1.95059 10.8195 2.345L11.6954 6.97667C11.8227 7.65057 12.3498 8.1777 13.0237 8.305L17.6554 9.18083C18.0498 9.2545 18.3357 9.59877 18.3357 10C18.3357 10.4012 18.0498 10.7455 17.6554 10.8192L13.0237 11.695C12.3498 11.8223 11.8227 12.3494 11.6954 13.0233L10.8195 17.655C10.7459 18.0494 10.4016 18.3353 10.0004 18.3353C9.59914 18.3353 9.25487 18.0494 9.1812 17.655L8.30537 13.0233C8.17806 12.3494 7.65094 11.8223 6.97703 11.695L2.34537 10.8192C1.95096 10.7455 1.66504 10.4012 1.66504 10C1.66504 9.59877 1.95096 9.2545 2.34537 9.18083L6.97703 8.305C7.65094 8.1777 8.17806 7.65057 8.30537 6.97667L9.1812 2.345" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.667 1.66666V4.99999" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3333 3.33334H15" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66699 16.6667C1.66699 17.5865 2.4138 18.3333 3.33366 18.3333C4.25352 18.3333 5.00033 17.5865 5.00033 16.6667C5.00033 15.7468 4.25352 15 3.33366 15C2.4138 15 1.66699 15.7468 1.66699 16.6667H1.66699" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ];


    
    return (
        <section className='flex flex-col items-center gap-8 bg-white/40 border-y border-[#E8E1D3] py-12 overflow-hidden'>
            <h1 className="text-[12px] text-gray-subtle text-center px-4">TRUSTED BY OVER 450+ PREMIER RESTAURANTS AND CULINARY GROUPS ACROSS DUBAI, ABU DHABI & RIYADH</h1>
            <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-[18px] text-charcoal whitespace-nowrap">
                            {item.svg}
                            {item.name}
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {items.map((item, index) => (
                        <li key={`dup-${index}`} className="flex items-center gap-2 text-[18px] text-charcoal whitespace-nowrap">
                            {item.svg}
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx global>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 25s linear infinite;
                }
            `}</style>
        </section>
    )
}