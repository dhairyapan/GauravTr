import HeroSection from "@/components/hero";
import AboutProduct from "@/components/aboutpro"; // Capitalized
import Aboutus from "@/components/HomeAbout"
import PopularProducts from "@/components/popularProduct";
import HomeContact from "@/components/HomeContact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutProduct /> 
      <HomeContact/>
      <PopularProducts/>
      <Aboutus/>
    </>
  );
}
