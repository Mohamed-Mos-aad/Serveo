// ** Components
import NavBar from "@/components/navigation/NavBar";
// ** Sections
import Hero from "@/pages/landing/sections/Hero";
import Trusted from "@/pages/landing/sections/Trusted";




export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Trusted />
    </main>
  );
}
