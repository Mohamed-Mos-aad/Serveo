// ** Components
import NavBar from "@/components/navigation/NavBar";
// ** Sections
import Hero from "@/pages/landing/sections/Hero";
import Trusted from "@/pages/landing/sections/Trusted";
import CorePillars from "@/pages/landing/sections/CorePillars";
import EditorialHeroBanner from "@/pages/landing/sections/EditorialHeroBanner";
import DemoFooter from "@/pages/landing/sections/DemoFooter";
import OperationsPreview from "@/pages/landing/sections/OperationsPreview";
import OperatorStories from "@/pages/landing/sections/OperatorStories";
import RestaurantGallery from "@/pages/landing/sections/RestaurantGallery";
import RestaurantSolutions from "@/pages/landing/sections/RestaurantSolutions";




export default function Home() {
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
      <DemoFooter />
    </main>
  );
}
