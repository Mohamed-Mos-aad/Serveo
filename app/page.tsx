// ** Components
import NavBar from "@/components/navigation/NavBar";
// ** Sections
import Hero from "@/pages/landing/sections/Hero";
import Trusted from "@/pages/landing/sections/Trusted";
import CorePillars from "@/pages/landing/sections/CorePillars";
import EditorialHeroBanner from "@/pages/landing/sections/EditorialHeroBanner";
import OperationsPreview from "@/pages/landing/sections/OperationsPreview";
import OperatorStories from "@/pages/landing/sections/OperatorStories";
import RestaurantGallery from "@/pages/landing/sections/RestaurantGallery";
import RestaurantSolutions from "@/pages/landing/sections/RestaurantSolutions";
import Demo from "@/pages/landing/sections/Demo";
import Footer from "@/pages/landing/sections/Footer";



export default function Landing() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Trusted />
      <CorePillars />
      <EditorialHeroBanner />
      <RestaurantSolutions />
      <OperationsPreview />
      <OperatorStories />
      <RestaurantGallery />
      <Demo />
      <Footer />
    </main>
  );
}
