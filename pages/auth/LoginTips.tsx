// ** Components
import Button from "@/components/ui/Button";
// ** Interfaces
interface LoginTipsProps{
    handleToggle: ()=> void
}


export default function LoginTips({handleToggle}: LoginTipsProps) {
    return (
        <div className="h-full flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">
            <div className="w-full min-h-fit flex flex-col items-start gap-15 p-4 sm:p-6 lg:p-8">
                <div>
                    <h1 className="text-[36px] font-bold text-white">
                        Already Managing with Serveo?
                    </h1>
                    <p className="text-white/80">
                        Sign back in to access real-time KDS line routing, floor
                        statuses, live shift reconciliation, and automated inventory
                        run-outs.
                    </p>
                </div>
                <ul className="flex flex-col gap-2.5 bg-white/10 border border-white/15 rounded-2xl p-5">
                    <li className="flex items-center gap-2.5 text-[12px] text-white/90">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_27_122)">
                                <path d="M8.55364 1.45331C8.20216 1.29299 7.79844 1.29299 7.44697 1.45331L1.73363 4.05331C1.49192 4.15989 1.33594 4.39914 1.33594 4.66331C1.33594 4.92748 1.49192 5.16673 1.73363 5.27331L7.45364 7.87997C7.80511 8.04029 8.20883 8.04029 8.5603 7.87997L14.2803 5.27997C14.522 5.17339 14.678 4.93414 14.678 4.66997C14.678 4.4058 14.522 4.16655 14.2803 4.05997L8.55364 1.45331" stroke="#FCD34D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.33301 8C1.33237 8.26038 1.48337 8.49731 1.71968 8.60667L7.45301 11.2133C7.80259 11.3716 8.20343 11.3716 8.55301 11.2133L14.273 8.61333C14.5141 8.50496 14.6684 8.26435 14.6663 8" stroke="#FCD34D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.33301 11.3333C1.33237 11.5937 1.48337 11.8306 1.71968 11.94L7.45301 14.5466C7.80259 14.7049 8.20343 14.7049 8.55301 14.5466L14.273 11.9466C14.5141 11.8383 14.6684 11.5977 14.6663 11.3333" stroke="#FCD34D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_27_122">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        UNIFIED ARCHITECTURE
                    </li>
                    <li className="flex items-center gap-2.5 text-[12px] text-white/90">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Instant Multi-Venue Switching (Marina, Downtown, Jumeirah)
                    </li>
                    <li className="flex items-center gap-2.5 text-[12px] text-white/90">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Role-based PIN lockouts for Cashier, Runner, & Chef
                    </li>
                    <li className="flex items-center gap-2.5 text-[12px] text-white/90">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Offline Cloud Fallback with zero dropped orders
                    </li>
                </ul>
                <div>
                    <span className="text-[12px] text-white/80">
                        Have your credentials ready?
                    </span>
                    <Button className="bg-white !text-[#D94A1F] font-semibold mt-3" onClick={handleToggle}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99967 12.6667L3.33301 8.00001L7.99967 3.33334" stroke="#B83B18" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.6663 8H3.33301" stroke="#B83B18" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Sign Up Instead
                    </Button>
                </div>
            </div>
        </div>
    );
}