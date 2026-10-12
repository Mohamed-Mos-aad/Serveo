// ** Hooks && Tools
import SearchInput from "@/components/ui/SearchInput";
// ** Interfaces
interface HeaderProps{
    length: string;
}


export default function Header({length}:HeaderProps) {
    return (
        <section className="flex flex-col gap-4">
                <span className="text-[11px] font-medium sm:text-xs">
                    Home /{" "}
                    <span className="font-semibold">Full Menu</span>
                </span>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                    <h1 className="text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-tight">
                        Full Menu
                    </h1>
                    <p className="mt-2 max-w-xl text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed text-[#78716C]">
                        {length} dishes made fresh to order, delivered to your door
                    </p>
                </div>

                <div className="w-full lg:max-w-105">
                    <SearchInput id="menuSearch" />
                </div>
            </div>
        </section>
    );
}