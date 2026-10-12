// ** Components
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";



export default function Home() {
    return (
        <div>
            <section className="w-full min-h-screen flex  items-center gap-6 px-4 py-12 md:pb-40 md:px-8">
                <div className="flex flex-col gap-6">
                    <Badge variant="primary">Delivering happiness daily</Badge>
                    <h1 className="text-[80px] font-bold text-[#1C1917]">
                        Cravings,
                        <br/>
                        <span className="text-primary">delivered fast.</span>
                    </h1>
                    <p className="text-[#57534E]">
                        Fresh burgers, sizzling pizzas & crispy bites from our kitchen to your
                        door in under 30 minutes.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="primary" className="!rounded-full">Order Now</Button>
                        <Button variant="secondary" className="!rounded-full">
                            <Link href="/home/menus">View Menu</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}