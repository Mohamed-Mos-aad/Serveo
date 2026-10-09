// ** Components
import SearchInput from "@/components/ui/SearchInput";



export default function FullMenus() {
    return (
        <main className="w-full min-h-screen flex flex-col gap-8 p-8">
            <section className="flex flex-col gap-4">
                <span className="text-[12px] font-medium">Home / <span className="font-semibold">Full Menu</span></span>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-[36px] font-extrabold">
                            Full Menu
                        </h1>
                        <p className="text-[14px]">
                            78 dishes made fresh to order, delivered to your door
                        </p>
                    </div>
                    <div className="w-105">
                        <SearchInput id="menuSearch"/>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-[25%_75%]">
                <section>
                    side
                </section>
                <section>
                    table
                </section>
            </div>
        </main>
    );
}
