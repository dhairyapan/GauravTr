import HeroSection from "@/components/hero";
import AboutProduct from "@/components/aboutpro"; // Capitalized
import Aboutus from "@/components/HomeAbout"
import PopularProducts from "@/components/popularProduct";
import HomeContact from "@/components/HomeContact"

export const metadata = {
  title: "Gaurav Trading Co. | glassware manufacturers",
  description:
    "Buy high-quality borosil glassware including beakers, test tubes, flasks, measuring cylinders, and more at best prices. Gaurav Trading Co. delivers durable, heat-resistant lab glassware with safe packaging and pan-India delivery.",
};

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
