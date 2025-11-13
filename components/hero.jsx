import Image from "next/image";
import Heroimg from "@/public/hero.png";
import BgImage from "@/public/bg.png"; // 👈 Background image import

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[60vh] flex items-center justify-center w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 md:min-h-[60vh]">
        <Image
          src={BgImage}
          alt="Background"
          fill
          priority
        />
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white z-10">

        {/* Left Side */}
        <div className="md:w-1/2 mb-10 md:my-2">
          <h1 className="text-4xl font-extrabold mb-4 leading-snug drop-shadow-lg">
            Best Borosilicate Glassware 
            Seller in India | <strong><span className="text-red-500">Gaurav</span><span className="text-blue-950">Trading </span></strong>
          </h1>
          <p className="text-lg mb-6 drop-shadow-md">
            We provide customized <strong> Borosilicate glassware</strong> products at the best prices.
            We also offer <strong> test tubes, beakers,</strong> and similar lab items with excellent packaging quality — along with <strong>screw caps and wooden corks.</strong>
          </p>
          <a
            href="https://wa.me/9818298432"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <lord-icon
              src="https://cdn.lordicon.com/axewyqun.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
            WhatsApp Me
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={Heroimg}
            alt="Measuring Cylinder"
            width={600}
            height={600}
            className="hidden md:block rounded-2xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
