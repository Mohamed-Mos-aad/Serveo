// ** Sections
import HomeHero from "@/pages/menus/home/sections/HomeHero";
import HomeCategories from "@/pages/menus/home/sections/HomeCategories";
import BestSellers from "@/pages/menus/home/sections/BestSellers";
import NewArrivals from "@/pages/menus/home/sections/NewArrivals";
import SpecialOffer from "@/pages/menus/home/sections/SpecialOffer";
import WhyChoose from "@/pages/menus/home/sections/WhyChoose";



export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeCategories />
            <BestSellers />
            <NewArrivals />
            <SpecialOffer />
            <WhyChoose />
        </main>
    );
}