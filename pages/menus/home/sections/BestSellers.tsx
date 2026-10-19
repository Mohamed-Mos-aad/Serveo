// ** Hooks && Tools
import Link from "next/link";
// ** Components
import MenuCard from "@/components/menus/MenuCard";
// ** Assets
import testImage from "@/public/images/test/Cheesy Beef Burger.png";
// ** Constants
const products = [
    {
        name: "Cheesy Beef Burger",
        description: "Double patty, cheddar, house sauce",
        rating: "4.7",
        reviews: 86,
        time: "12-15 min",
        price: "$8.99",
        badge: "NEW",
    },
    {
        name: "Pepperoni Supreme",
        description: "Loaded pepperoni, mozzarella, basil",
        rating: "4.8",
        reviews: 64,
        time: "18-22 min",
        price: "$12.49",
        badge: "NEW",
    },
    {
        name: "Crispy Wing Box",
        description: "6pc spicy buffalo wings, ranch dip",
        rating: "4.6",
        reviews: 102,
        time: "15-18 min",
        price: "$9.99",
        badge: "NEW",
    },
    {
        name: "Cold Brew Cooler",
        description: "Iced cold brew, vanilla foam",
        rating: "4.9",
        reviews: 45,
        time: "5-8 min",
        price: "$4.49",
        badge: "NEW",
    }
];



export default function BestSellers() {
    return (
        <section className="w-full flex flex-col gap-8  px-4 py-12 sm:px-6 md:px-8 md:py-20">
            <div>
                <h1 className="text-[24px] font-bold text-[#1C1917]">Best Sellers</h1>
                <div className="w-full flex justify-between items-center">
                    <p className="text-[12px] font-bold text-[#78716C]">Loved by thousands of customers</p>
                    <Link href="/home/menus" className="border border-[#D6D3D1] rounded-full px-4 py-1.5 text-[12px] text-[#27272A] cursor-pointer">See All</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 py-5 min-[420px]:grid-cols-2 md:gap-5 xl:grid-cols-3 2xl:grid-cols-4">
                {products.map((product) => (
                    <MenuCard name={product.name} productImg={{src: testImage, alt: product.name}} badge={product.badge} rating={product.rating} description={product.description} price={product.price} reviews={product.rating} time={product.time} key={product.name+product.description}/>
                ))}
            </div>
        </section>
    );
}