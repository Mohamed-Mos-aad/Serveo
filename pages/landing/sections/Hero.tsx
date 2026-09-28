// ** Components
import Button from './../../../components/ui/Button';



export default function Hero() {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-6 text-center px-4 md:px-8">
            <span className="text-primary font-bold text-xs md:text-sm tracking-wider">BUILT FOR GCC HOSPITALITY</span>
            <h1 className="text-4xl md:text-[60px] leading-tight text-dark font-bold">
                Run your restaurant <br className="hidden md:block" />
                with <span className="text-primary">less chaos.</span>
            </h1>
            <p className="text-base md:text-[20px] text-muted max-w-2xl">
                The complete operating system for modern GCC restaurants, cafés, and <br className="hidden md:block" />
                food chains. Centralize orders, floor plans, real-time inventory, and <br className="hidden md:block" />
                multi-branch operations in one warm, intuitive workspace.
            </p>
            <div className='flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center'>
                <Button variant='primary' className="w-full sm:w-auto justify-center">
                    Book a Demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33301 8H12.6663" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
                <Button className='bg-white border border-[#E8E1D3] w-full sm:w-auto justify-center'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6_63)">
                        <path d="M7.50001 7.50247C7.4991 7.20136 7.6607 6.92318 7.92272 6.77481C8.18474 6.62644 8.50643 6.63096 8.76417 6.78664L12.9283 9.28414C13.1805 9.43445 13.335 9.70638 13.335 9.99997C13.335 10.2936 13.1805 10.5655 12.9283 10.7158L8.76417 13.2133C8.5063 13.3691 8.18444 13.3735 7.92236 13.2249C7.66028 13.0764 7.4988 12.7979 7.50001 12.4966V7.50247" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.66699 10C1.66699 14.5993 5.40103 18.3334 10.0003 18.3334C14.5996 18.3334 18.3337 14.5993 18.3337 10C18.3337 5.40073 14.5996 1.66669 10.0003 1.66669C5.40103 1.66669 1.66699 5.40073 1.66699 10V10" stroke="#D94A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6_63">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    Explore Live Platform
                </Button>
            </div>
        </section>
    )
}