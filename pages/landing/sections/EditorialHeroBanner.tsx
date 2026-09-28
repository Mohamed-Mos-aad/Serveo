// ** Components
import Button from "@/components/ui/Button";
// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import HeroPhoto from '@/public/images/landing/Finely cooked and garnished steak dinner in a luxury Dubai dining room.png'



export default function EditorialHeroBanner() {
    return (
        <section className="flex flex-col gap-16 px-4 sm:px-8 py-20 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-9 bg-linear-to-r from-[#EDE3D2] via-[#F3EADB] to-[#ECE3D5] rounded-3xl p-8 sm:p-12">
                <div className="flex flex-col gap-6 lg:col-span-7">
                    <span className="text-[12px] font-bold text-primary">HOSPITALITY EFFICIENCY BENCHMARK</span>
                    <h1 className="text-[36px] sm:text-[48px] leading-tight sm:leading-12 text-dark">
                        Less time on spreadsheets. <br />
                        <span className="text-primary">More warmth for your guests.</span>
                    </h1>
                    <p className="text-gray-muted text-[14px] sm:text-[16px]">
                        GCC operators using Serveo report an average of 35% faster table
                        turns and up to 18% reduction in kitchen shrinkage within 60 days of
                        onboarding.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white/80 border border-[#E8E1D3] rounded-xl px-4 py-2.5 text-center">
                            <h2 className="text-[24px] font-bold text-primary">35%</h2>
                            <span className="text-[12px] text-gray-muted">Faster Table Turns</span>
                        </div>
                        <div className="bg-white/80 border border-[#E8E1D3] rounded-xl px-4 py-2.5 text-center">
                            <h2 className="text-[24px] font-bold text-dark">4.2 hrs</h2>
                            <span className="text-[12px] text-gray-muted">Daily Manager Admin Saved</span>
                        </div>
                        <div className="bg-white/80 border border-[#E8E1D3] rounded-xl px-4 py-2.5 text-center">
                            <h2 className="text-[24px] font-bold text-[#059669]">99.98%</h2>
                            <span className="text-[12px] text-gray-muted">Offline Cloud Redundancy</span>
                        </div>
                    </div>
                    <Button variant="primary" className="w-fit">
                        Schedule an Operational Audit
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </div>
                <div className="lg:col-span-5 w-full border-4 border-white/90 rounded-2xl">
                    <Image src={HeroPhoto} alt="Finely cooked and garnished steak dinner in a luxury Dubai dining room" className="w-full h-auto object-cover rounded-2xl" />
                </div>
            </div>
        </section>
    )
}