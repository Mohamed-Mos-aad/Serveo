// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import diningPhoto from "@/public/images/landing/Busy warm high-end restaurant dining room in Dubai.png";
import steakPhoto from "@/public/images/landing/Finely cooked and garnished steak dinner in a luxury Dubai dining room.png";

// ** Constants
const photos = [
  diningPhoto,
  steakPhoto,
  diningPhoto,
  steakPhoto,
  diningPhoto,
  diningPhoto,
];

export default function RestaurantGallery() {
  return (
    <section className="bg-surface-light px-4 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5 flex justify-between text-[10px] font-bold tracking-wide text-gray-subtle">
          <span>BEHIND THE PASS WITH SERVEO</span>
          <span className="text-primary">#ServeoKitchens GCC</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative h-28 overflow-hidden rounded-xl sm:h-36"
            >
              <Image
                src={photo}
                alt="Serveo restaurant and kitchen"
                fill
                sizes="(max-width: 640px) 50vw, 16vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
