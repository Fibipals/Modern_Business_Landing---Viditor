import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import Faq from "@/components/sections/faq";
import Reviews from "@/components/sections/reviews";
import Download from "@/components/sections/download";
import Footer from "@/components/sections/footer";


export default function Home() {
  return (
    <div className="w-full mx-auto max-w-[1024px]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Reviews />
      <Download />
      <Footer />
    </div>
  );
}
