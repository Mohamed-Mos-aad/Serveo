// ** Hooks && Tools
import Link from "next/link";
// ** Components
import MenuCard from "@/components/menus/MenuCard";
// ** Assets
import testImage from "@/public/images/test/Cheesy Beef Burger.png";
// ** Constants
const products = [
    {
        name: "Four Cheese Pizza",
        description: "Mozzarella, gouda, parmesan, blue",
        rating: "4.6",
        reviews: 45,
        time: "18-22 min",
        price: "$13.49",
        badge: "NEW",
    },
    {
        name: "Grilled Chicken Wrap",
        description: "Grilled filet, lettuce, garlic sauce",
        rating: "4.7",
        reviews: 69,
        time: "12-15 min",
        price: "$7.99",
    },
    {
        name: "Choco Lava Cake",
        description: "Warm molten center, vanilla scoop",
        rating: "4.8",
        reviews: 39,
        time: "10-12 min",
        price: "$6.99",
    },
    {
        name: "Onion Rings",
        description: "Crispy battered, chipotle dip",
        rating: "4.5",
        reviews: 52,
        time: "8-10 min",
        price: "$4.99",
    },
];



export default function NewArrivals() {
    return (
        <section className="w-full flex flex-col gap-8  px-4 py-12 sm:px-6 md:px-8 md:py-20">
            <div>
                <h1 className="text-[24px] font-bold text-[#1C1917]">New Arrivals</h1>
                <div className="w-full flex justify-between items-center">
                    <p className="text-[12px] font-bold text-[#78716C]">Fresh off the grill this week</p>
                    <Link href="/home/menus" className="border border-[#D6D3D1] rounded-full px-4 py-1.5 text-[12px] text-[#27272A] cursor-pointer">See All</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 py-5 min-[420px]:grid-cols-2 md:gap-5 2xl:grid-cols-4">
                {products.map((product) => (
                    <MenuCard name={product.name} productImg={{src: testImage, alt: product.name}} badge={product.badge} rating={product.rating} description={product.description} price={product.price} reviews={product.rating} time={product.time} key={product.name+product.description}/>
                ))}
            </div>
        </section>
    );
}