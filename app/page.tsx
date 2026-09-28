// ** Components
import NavBar from "@/components/navigation/NavBar";
// ** Sections
import Hero from "@/pages/landing/sections/Hero";
import Trusted from "@/pages/landing/sections/Trusted";
import CorePillars from "@/pages/landing/sections/CorePillars";
import EditorialHeroBanner from "@/pages/landing/sections/EditorialHeroBanner";




export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Trusted />
      <CorePillars />
      <EditorialHeroBanner />
    </main>
  );
}
