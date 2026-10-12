// ** Components
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
// ** Hooks && Tools
import Link from "next/link";



export default function HomeHero() {
    return (
        <section className="w-full flex items-center px-4 py-12 sm:px-6 md:px-8 md:py-20">
            <div className="flex w-full max-w-2xl flex-col gap-6">
                <Badge variant="primary">Delivering happiness daily</Badge>
                <h1 className="text-4xl font-bold leading-tight text-[#1C1917] sm:text-5xl md:text-6xl lg:text-[80px]">
                    Cravings,
                    <br />
                    <span className="text-primary">delivered fast.</span>
                </h1>
                <p className="max-w-lg text-sm leading-7 text-[#57534E] sm:text-base">
                    Fresh burgers, sizzling pizzas & crispy bites from our kitchen to your
                    door in under 30 minutes.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <Button variant="primary" className="!rounded-full">
                        Order Now
                    </Button>
                    <Button variant="secondary" className="!rounded-full">
                        <Link href="/home/menus">View Menu</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}