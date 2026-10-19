// ** Components
import CategoryCard from "@/components/menus/CategoryCard";



export default function HomeCategories() {
    return (
        <section className="w-full flex flex-col items-center gap-10 bg-[#FFFFFF]/50 px-4 py-12 sm:px-6 md:px-8 md:py-20 border-y border-[#E7E5E4]/50">
            <h1 className="text-[30px] font-bold text-[#1C1917]">Featured Categories</h1>
            <p className="text-[14px] text-[#78716C] -mt-9">Browse our most-loved food categories</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <CategoryCard name="Burgers" productImg={{src: "", alt: ""}} itemsNumber={18}/>
                <CategoryCard name="Pizza" productImg={{src: "", alt: ""}} itemsNumber={14}/>
                <CategoryCard name="Chicken" productImg={{src: "", alt: ""}} itemsNumber={22}/>
                <CategoryCard name="Drinks" productImg={{src: "", alt: ""}} itemsNumber={16}/>
                <CategoryCard name="Desserts" productImg={{src: "", alt: ""}} itemsNumber={12}/>
                <CategoryCard name="Sides" productImg={{src: "", alt: ""}} itemsNumber={10}/>
            </div>
        </section>
    );
}