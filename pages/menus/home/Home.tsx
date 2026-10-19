// ** Sections
import HomeHero from "@/pages/menus/home/sections/HomeHero";
import HomeCategories from "@/pages/menus/home/sections/HomeCategories";
import BestSellers from "@/pages/menus/home/sections/BestSellers";
import NewArrivals from "@/pages/menus/home/sections/NewArrivals";
import SpecialOffer from "@/pages/menus/home/sections/SpecialOffer";
import WhyChoose from "@/pages/menus/home/sections/WhyChoose";
import Footer from "@/pages/landing/sections/Footer";



export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeCategories />
            <BestSellers />
            <NewArrivals />
            <SpecialOffer />
            <WhyChoose />
            <div className="w-full flex flex-col items-center py-8">
                <h1 className="font-bold text-[#1C1917]">@Serveo.official</h1>
                <p className="text-[12px] text-[#78716C]">Follow us for daily specials & behind the scenes</p>
            </div>
            <Footer />
        </main>
    );
}