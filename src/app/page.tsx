import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Featured from "@/components/Featured";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Featured />
      <Menu />
      <BrandStory />
      <Footer />
    </main>
  );
}
