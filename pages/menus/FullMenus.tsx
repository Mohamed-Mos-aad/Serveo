// ** Components
import SearchInput from "@/components/ui/SearchInput";
// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import testImage from "@/public/images/test/Cheesy Beef Burger.png";
import MenuCard from "@/components/menus/MenuCard";
import Header from "@/components/menus/Header";
import Button from "@/components/ui/Button";
import Filters from "@/components/menus/Filters";
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
    },
    {
        name: "Classic Cheeseburger",
        description: "Beef patty, cheddar, pickles",
        rating: "4.8",
        reviews: 412,
        time: "12-15 min",
        price: "$7.49",
        badge: "BESTSELLER",
    },
    {
        name: "Margherita Pizza",
        description: "San marzano tomato, fresh mozzarella",
        rating: "4.7",
        reviews: 289,
        time: "20-25 min",
        price: "$11.99",
    },
    {
        name: "Loaded Fries",
        description: "Cheese sauce, bacon bits, jalapeños",
        rating: "4.5",
        reviews: 78,
        time: "8-10 min",
        price: "$6.49",
    },
    {
        name: "Chocolate Shake",
        description: "Rich chocolate, whipped cream",
        rating: "4.9",
        reviews: 158,
        time: "5-8 min",
        price: "$5.49",
    },
    {
        name: "Spicy Chicken Sandwich",
        description: "Crispy filet, spicy mayo, slaw",
        rating: "4.7",
        reviews: 133,
        time: "14-18 min",
        price: "$8.49",
        badge: "TRENDING",
    },
    {
        name: "Chicken Sandwich",
        description: "Smoky BBQ sauce, crispy chicken",
        rating: "4.7",
        reviews: 97,
        time: "14-18 min",
        price: "$9.99",
        badge: "TRENDING",
    },
    {
        name: "Garlic Bread Sticks",
        description: "Toasted, garlic butter, parmesan",
        rating: "4.8",
        reviews: 39,
        time: "8-10 min",
        price: "$5.99",
    },
    {
        name: "Mango Lassi",
        description: "Fresh mango, yogurt, cardamom",
        rating: "4.9",
        reviews: 58,
        time: "5-8 min",
        price: "$4.99",
    },
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



export default function FullMenus() {
    return (
        <main className="flex min-h-screen w-full flex-col gap-6 p-4 sm:gap-8 sm:p-6 lg:p-8">
            <Header length={products.length.toString()}/>
            <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(200px,25%)_minmax(0,75%)]">
                <Filters />
                <section className="min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E5E4] pb-3">
                        <h2 className="text-xs font-bold sm:text-sm">
                            {products.length} Menu items
                        </h2>

                        <h3 className="flex items-center gap-2 text-xs text-[#78716C] sm:text-sm">
                            Sort by:
                            <span className="flex cursor-pointer items-center gap-2 font-bold text-gray-950 sm:gap-4">
                                Popular
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 18 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.3999 6.19995L8.9999 9.79995L12.5999 6.19995"
                                        stroke="#6B7280"
                                        strokeWidth="1.35"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 py-5 min-[420px]:grid-cols-2 md:gap-5 xl:grid-cols-3 2xl:grid-cols-4">
                        {products.map((product) => (
                            <MenuCard name={product.name} productImg={{src: testImage, alt: product.name}} badge={product.badge} rating={product.rating} description={product.description} price={product.price} reviews={product.rating} time={product.time} key={product.name+product.description}/>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}