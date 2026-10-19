// ** Components
import Button from "@/components/ui/Button";



export default function SpecialOffer() {
    return (
        <section className="w-full flex flex-col gap-8  px-4 py-12 sm:px-6 md:px-8 md:py-20">
            <div className="w-full flex flex-col gap-12 lg:flex-row justify-between items-center bg-[#FAEDE1] rounded-3xl border border-[#FDE68A]/50 p-12">
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-[48px] font-bold text-[#1C1917]">Special Offer!</h1>
                    <p className="text-[14px] text-[#57534E]">Browse our most-loved food categories</p>
                    <Button variant="primary">Order Now</Button>
                </div>
                <h2 className="text-[60px] font-bold text-primary -rotate-30">30% Off</h2>
            </div>
        </section>
    );
}