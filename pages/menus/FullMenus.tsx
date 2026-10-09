// ** Components
import SearchInput from "@/components/ui/SearchInput";
// ** Hooks && Tools
import Image from "next/image";
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
                            78 dishes made fresh to order, delivered to your door
                        </p>
                    </div>

                    <div className="w-full lg:max-w-105">
                        <SearchInput id="menuSearch" />
                    </div>
                </div>
            </section>

            <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(200px,25%)_minmax(0,75%)]">
                <section className="hidden lg:block">
                    side
                </section>

                <section className="min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E5E4] pb-3">
                        <h2 className="text-xs font-bold sm:text-sm">
                            16 Menu items
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
                            <div
                                key={product.name}
                                className="flex min-w-0 flex-col gap-2 rounded-2xl bg-white p-3"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F5F5F4]">
                                    <Image
                                        className="h-full w-full object-cover object-center"
                                        src={testImage}
                                        alt={product.name}
                                        sizes="(max-width: 419px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                                    />

                                    {product.badge && (
                                        <span
                                            className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] font-bold leading-none sm:text-[10px] ${
                                                product.badge === "BESTSELLER"
                                                    ? "bg-[#F59E0B] text-white"
                                                    : product.badge === "TRENDING"
                                                        ? "bg-[#EB5A24] text-white"
                                                        : "bg-primary text-white"
                                            }`}
                                        >
                                            {product.badge}
                                        </span>
                                    )}
                                </div>

                                <h4 className="line-clamp-2 text-[13px] font-bold leading-snug sm:text-sm">
                                    {product.name}
                                </h4>

                                <p className="line-clamp-2 min-h-[2rem] text-[11px] leading-relaxed text-[#A8A29E] sm:text-xs">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-[#78716C] sm:text-[11px]">
                                    <div className="flex items-center gap-1 font-bold text-gray-950">
                                        <svg
                                            width="11"
                                            height="10"
                                            viewBox="0 0 10 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.14687 0.316406C5.04141 0.117188 4.87148 0.0117188 4.63711 0C4.41445 0.0117188 4.24453 0.117188 4.12734 0.316406L3.00234 2.63672L0.471094 3.02344C0.248437 3.05859 0.101953 3.18164 0.0316406 3.39258C-0.0386719 3.61523 0.00820312 3.80859 0.172266 3.97266L2.00039 5.7832L1.56094 8.34961C1.5375 8.57227 1.61367 8.75391 1.78945 8.89453C1.97695 9.02344 2.17617 9.03516 2.38711 8.92969L4.63711 7.73438L6.90469 8.92969C7.10391 9.03516 7.29727 9.02344 7.48477 8.89453C7.67227 8.75391 7.74844 8.57227 7.71328 8.34961L7.29141 5.7832L9.11953 3.97266C9.27188 3.80859 9.31875 3.61523 9.26016 3.39258C9.17813 3.18164 9.02578 3.05859 8.80313 3.02344L6.27187 2.63672L5.14687 0.316406Z"
                                                fill="#FBBF24"
                                            />
                                        </svg>
                                        {product.rating}
                                    </div>

                                    <span>({product.reviews})</span>
                                    <span>•</span>

                                    <div className="flex items-center gap-1">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.15625 4.5C8.15625 5.16797 7.99219 5.77734 7.66406 6.32812C7.34766 6.87891 6.90234 7.32422 6.32812 7.66406C5.75391 7.99219 5.14453 8.15625 4.5 8.15625C3.85547 8.15625 3.24609 7.99219 2.67188 7.66406C2.09766 7.32422 1.65234 6.87891 1.33594 6.32812C1.00781 5.77734 0.84375 5.16797 0.84375 4.5C0.84375 3.83203 1.00781 3.22266 1.33594 2.67188C1.65234 2.12109 2.09766 1.67578 2.67188 1.33594C3.24609 1.00781 3.85547 0.84375 4.5 0.84375C5.14453 0.84375 5.75391 1.00781 6.32812 1.33594C6.90234 1.67578 7.34766 2.12109 7.66406 2.67188C7.99219 3.22266 8.15625 3.83203 8.15625 4.5ZM0 4.5C0.0117188 5.32031 0.210938 6.07031 0.597656 6.75C0.996094 7.42969 1.54688 7.98047 2.25 8.40234C2.96484 8.80078 3.71484 9 4.5 9C5.28516 9 6.03516 8.80078 6.75 8.40234C7.45312 7.98047 8.00391 7.42969 8.40234 6.75C8.78906 6.07031 8.98828 5.32031 9 4.5C8.98828 3.67969 8.78906 2.92969 8.40234 2.25C8.00391 1.57031 7.45312 1.01953 6.75 0.597656C6.03516 0.199219 5.28516 0 4.5 0C3.71484 0 2.96484 0.199219 2.25 0.597656C1.54688 1.01953 0.996094 1.57031 0.597656 2.25C0.210938 2.92969 0.0117188 3.67969 0 4.5Z"
                                                fill="#78716C"
                                            />
                                            <path
                                                d="M4.07812 2.10938V4.5C4.07812 4.65234 4.14258 4.76953 4.27148 4.85156L5.95898 5.97656C6.18164 6.10547 6.375 6.06445 6.53906 5.85352C6.66797 5.63086 6.62695 5.4375 6.41602 5.27344L4.92188 4.27148V2.10938C4.89844 1.85156 4.75781 1.71094 4.5 1.6875C4.24219 1.71094 4.10156 1.85156 4.07812 2.10938Z"
                                                fill="#78716C"
                                            />
                                        </svg>

                                        <span>{product.time}</span>
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#F5F5F4] pt-3">
                                    <span className="text-sm font-bold sm:text-base">
                                        {product.price}
                                    </span>

                                    <button
                                        type="button"
                                        aria-label={`Add ${product.name} to cart`}
                                        className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary transition-opacity hover:opacity-80 sm:h-8 sm:w-8"
                                    >
                                        <svg
                                            width="11"
                                            height="11"
                                            viewBox="0 0 9 10"
                                            fill="white"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 1.8125C5 1.63021 4.94141 1.48047 4.82422 1.36328C4.70703 1.24609 4.55729 1.1875 4.375 1.1875C4.19271 1.1875 4.04297 1.24609 3.92578 1.36328C3.80859 1.48047 3.75 1.63021 3.75 1.8125V4.625H0.9375C0.755208 4.625 0.605469 4.68359 0.488281 4.80078C0.371094 4.91797 0.3125 5.06771 0.3125 5.25C0.3125 5.43229 0.371094 5.58203 0.488281 5.69922C0.605469 5.81641 0.755208 5.875 0.9375 5.875H3.75V8.6875C3.75 8.86979 3.80859 9.01953 3.92578 9.13672C4.04297 9.25391 4.19271 9.3125 4.375 9.3125C4.55729 9.3125 4.70703 9.25391 4.82422 9.13672C4.94141 9.01953 5 8.86979 5 8.6875V5.875H7.8125C7.99479 5.875 8.14453 5.81641 8.26172 5.69922C8.37891 5.58203 8.4375 5.43229 8.4375 5.25C8.4375 5.06771 8.37891 4.91797 8.26172 4.80078C8.14453 4.68359 7.99479 4.625 7.8125 4.625H5V1.8125Z"
                                                fill="#ffffff"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}