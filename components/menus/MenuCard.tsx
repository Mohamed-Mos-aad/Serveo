// ** Hooks && Tools
import Image, {StaticImageData} from "next/image";
// ** Interfaces
interface MenuCardProps{
    name: string;
    productImg: {
        src: StaticImageData,
        alt: string
    }
    badge?: string;
    description: string;
    rating: string;
    reviews: string;
    time: string;
    price: string;
}


export default function MenuCard({ name, productImg, badge, description, rating, reviews, time, price }:MenuCardProps) {
    return (
        <div
            key={name}
            className="flex min-w-0 flex-col gap-2 rounded-2xl bg-white p-3"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F5F5F4]">
                <Image
                    className="h-full w-full object-cover object-center"
                    src={productImg.src}
                    alt={productImg.alt}
                    sizes="(max-width: 419px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                />

                {badge && (
                    <span
                        className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] font-bold leading-none sm:text-[10px] ${
                            badge === "BESTSELLER"
                                ? "bg-[#F59E0B] text-white"
                                : badge === "TRENDING"
                                    ? "bg-[#EB5A24] text-white"
                                    : "bg-primary text-white"
                        }`}
                    >
                                            {badge}
                                        </span>
                )}
            </div>

            <h4 className="line-clamp-2 text-[13px] font-bold leading-snug sm:text-sm">
                {name}
            </h4>

            <p className="line-clamp-2 min-h-[2rem] text-[11px] leading-relaxed text-[#A8A29E] sm:text-xs">
                {description}
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
                    {rating}
                </div>

                <span>({reviews})</span>
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

                    <span>{time}</span>
                </div>
            </div>

            <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#F5F5F4] pt-3">
                                    <span className="text-sm font-bold sm:text-base">
                                        {price}
                                    </span>

                <button
                    type="button"
                    aria-label={`Add ${name} to cart`}
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
    );
}