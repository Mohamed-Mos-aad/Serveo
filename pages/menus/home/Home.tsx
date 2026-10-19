// ** Sections
import HomeHero from "@/pages/menus/home/sections/HomeHero";
import HomeCategories from "@/pages/menus/home/sections/HomeCategories";
import BestSellers from "@/pages/menus/home/sections/BestSellers";



export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeCategories />
            <BestSellers />
        </main>
    );
}