// ** Hooks && Tools
import Image, {StaticImageData} from "next/image";
// ** Interfaces
interface CategoryCardProps{
    name: string;
    productImg: {
        src: StaticImageData | string,
        alt: string
    };
    itemsNumber: number
}



export default function CategoryCard({name, productImg, itemsNumber}:CategoryCardProps) {
    return (
        <div className="w-full flex flex-col gap-4 items-center border border-[#E7E5E4]/70 rounded-2xl p-4">
            <div className="w-16 h-16 rounded-full bg-[#FAFAF9]">
                <Image src={productImg.src} alt={productImg.alt}/>
            </div>
            <h2 className="text-[14px] font-bold text-[#292524]">{name}</h2>
            <h3 className="text-[13px] text-[#A8A29E] -mt-4">{itemsNumber} items</h3>
        </div>
    );
}