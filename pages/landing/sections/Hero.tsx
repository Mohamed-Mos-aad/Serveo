// ** Components
import Button from './../../../components/ui/Button';
// ** Hooks && Tools 
import Image from 'next/image';
// ** Assets
import heroImage from '@/public/images/landing/Busy warm high-end restaurant dining room in Dubai.png'



export default function Hero() {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-6 text-center px-4 py-12 md:pb-40 md:px-8">
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
            
            {/* Hero Image Container */}
            <div className='w-full max-w-5xl relative mt-8 flex flex-col gap-4'>
                <div className='border border-primary/15 p-1.5 rounded-3xl relative overflow-hidden'>
                    <Image src={heroImage} alt='Busy warm high-end restaurant dining room in Dubai' className='w-full h-auto rounded-3xl object-cover'/>
                    <div className='absolute inset-1 rounded-2xl pointer-events-none z-10 bg-[linear-gradient(0deg,rgba(26,24,22,0)_0%,rgba(26,24,22,0.3)_50%,rgba(26,24,22,0.9)_100%)]'></div>
                    <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-start absolute top-0 left-0 z-20 p-4 md:p-6 text-white gap-4'>
                        <div>
                            <span className='text-[10px] md:text-[12px] text-primary-pale font-medium'>LIVE SERVICE STATUS</span>
                            <h2 className='text-sm md:text-[18px] font-semibold'>Alserkal Avenue Bistro & Lounge — Dubai</h2>
                        </div>
                        <div className='flex gap-4 sm:gap-6 items-center'>
                            <div>
                                <h2 className='text-[10px] md:text-[12px] text-[#D6D3D1] text-start sm:text-end'>Tables Occupied</h2>
                                <h3 className='text-xs md:text-sm font-bold text-[#34D399]'>92% Capacity</h3>
                            </div>
                            <span className='hidden sm:flex h-8 border-r border-white/20'></span>
                            <div>
                                <h2 className='text-[10px] md:text-[12px] text-[#D6D3D1]'>Avg Ticket Time</h2>
                                <h3 className='text-xs md:text-sm font-bold text-primary-pale'>14.2 mins</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Stats Card: Relative on mobile, Absolute on Desktop */}
                <div className='w-full md:w-5/6 flex flex-col gap-4.5 bg-white p-4 md:p-6 rounded-2xl relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:-translate-y-1/2 z-30 shadow-xl mx-auto'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
                        <h2 className='text-[10px] md:text-[12px] font-bold text-muted text-start'>SERVEO PULSE GCC — DUBAI MARINA <span className='bg-surface px-2 py-0.5 text-[10px] md:text-[11px] text-gray-muted ml-0 sm:ml-3 inline-block mt-1 sm:mt-0'>AED Currency Mode</span></h2>
                        <h3 className='text-xs md:text-sm text-muted'>Sync: Just now</h3>
                    </div>
                    <span className='flex w-full border-b border-[#E8E1D3]'></span>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start'>
                        <div className='flex flex-col gap-1 bg-surface-light rounded-xl border border-[#E8E1D3] p-3.5'>
                            <h3 className='text-gray-subtle text-xs md:text-sm'>Daily Net Sales</h3>
                            <h4 className='text-lg md:text-[20px] font-bold text-dark'>AED 42,850</h4>
                            <span className='flex items-center gap-1 text-[11px] font-bold text-[#059669]'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3.5H11V6.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                +18.4% vs last Thu
                            </span>
                        </div>
                        <div className='flex flex-col gap-1 bg-surface-light rounded-xl border border-[#E8E1D3] p-3.5'>
                            <h3 className='text-gray-subtle text-xs md:text-sm'>Active Covers</h3>
                            <h4 className='text-lg md:text-[20px] font-bold text-dark'>168 Guests</h4>
                            <span className='flex items-center gap-1 text-[11px] font-bold text-[#059669]'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10.5V9.5C8 8.39617 7.10383 7.5 6 7.5H3C1.89617 7.5 1 8.39617 1 9.5V10.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 1.564C8.88211 1.79268 9.4981 2.58873 9.4981 3.5C9.4981 4.41126 8.88211 5.20732 8 5.436" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11 10.5V9.5C10.9993 8.58856 10.3825 7.79286 9.5 7.565" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2.5 3.5C2.5 4.21453 2.8812 4.87479 3.5 5.23205C4.1188 5.58932 4.8812 5.58932 5.5 5.23205C6.1188 4.87479 6.5 4.21453 6.5 3.5C6.5 2.39617 5.60383 1.5 4.5 1.5C3.39617 1.5 2.5 2.39617 2.5 3.5H2.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                28 Tables Seated
                            </span>
                        </div>
                        <div className='flex flex-col gap-1 bg-surface-light rounded-xl border border-[#E8E1D3] p-3.5'>
                            <h3 className='text-gray-subtle text-xs md:text-sm'>Kitchen Backlog</h3>
                            <h4 className='text-lg md:text-[20px] font-bold text-dark'>4 Tickets</h4>
                            <span className='flex items-center gap-1 text-[11px] font-bold text-primary'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6_154)">
                                    <path d="M1 6C1 8.75958 3.24042 11 6 11C8.75958 11 11 8.75958 11 6C11 3.24042 8.75958 1 6 1C3.24042 1 1 3.24042 1 6V6" stroke="#D94A1F" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 3V6L8 7" stroke="#D94A1F" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_6_154">
                                    <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                Under target SLA
                            </span>
                        </div>
                        <div className='flex flex-col gap-1 bg-surface-light rounded-xl border border-[#E8E1D3] p-3.5'>
                            <h3 className='text-gray-subtle text-xs md:text-sm'>Avg Order Value</h3>
                            <h4 className='text-lg md:text-[20px] font-bold text-dark'>AED 255.00</h4>
                            <span className='flex items-center gap-1 text-[11px] font-bold text-[#059669]'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 3.5H8.5V8.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.5 8.5L8.5 3.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                +12% dessert attach
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}