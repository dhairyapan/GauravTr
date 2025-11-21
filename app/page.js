import Image from "next/image";
import Heroimg from "@/public/hero.png";
import BgImage from "@/public/bg.png";
import Product1 from "@/public/coustom.png";
import Product2 from "@/public/mylti.png";
import Product3 from "@/public/caps.png";
import Productbeaker from "@/public/beaker.png"
import Producttesttube from "@/public/testTube.png"
import Productmeasuring from "@/public/measuring cylinder.png"
import Link from "next/link";


export default function Home() {

  const products = [
    { id: 1, img: Product1, title: "Custom Designed Borosilicate", desc: "We can create custom products based on your design." },
    { id: 2, img: Product2, title: "Multi Purposes Item", desc: "You can use it anywhere for multiple purposes." },
    { id: 3, img: Product3, title: "Screw Cap And Wooden Corck", desc: "We offer multi-color screw caps and wooden corks as well." },
  ];

  const Popularproducts = [
    {
      id: 1,
      img: Productbeaker,
      title: "Beaker Glass",
      desc: "Durable borosil beaker suitable for lab and industrial use.",
    },
    {
      id: 2,
      img: Producttesttube,
      title: "Test Tube Set",
      desc: "High-quality glass test tubes with smooth edges and leak-proof design.",
    },
    {
      id: 3,
      img: Productmeasuring,
      title: "Measuring cylinder",
      desc: "This is a high-quality measuring cylinder, perfect for multipurpose use.",
    },
  ];

  return (
    <>
      <section className="relative min-h-[90vh] md:min-h-[60vh] flex items-center justify-center w-full overflow-hidden">
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
        <div className="md:w-1/2 mb-10">
          <h1 className="text-4xl font-extrabold mb-2 leading-snug drop-shadow-lg">
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
      <section className="bg-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">Our Key Features</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              {/* ✅ Use Next.js Image component */}
              <div className="w-full h-48 bg-gray-100 mt-6 flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-contain"
                  width={300}
                  height={200}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <strong>{item.title}</strong>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="bg-blue-300 flex flex-col items-center justify-center text-center py-10 h-[40vh]">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Contact Us
            </h2>
            <p className="text-gray-600 text-lg mb-6">
                Have questions or want to place an order? Call us now!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <p className="text-xl font-semibold text-red-700">
                    📞 +91-98182-98432
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

        </section>
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-950 mb-10">
          Popular Products
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Popularproducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-56 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/PopularProduct"
          className="text-red-600 font-semibold underline underline-offset-4 hover:text-red-800 transition"
        >
          Learn More →
        </Link>
      </div>
    </section>
      <section className="bg-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-950 mb-6">
          About Us
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {/* 👇 Replace this text with your own */}
          We are a trusted supplier of high-quality borosil glassware and lab accessories. 
          From beakers and test tubes to screw caps and wooden corks — 
          we provide everything with the best quality and packaging. 
          Our products are suitable for industrial, laboratory, and home use.
        </p>

        {/* Contact Info / Address */}
        <div className="text-gray-700 text-sm">
          <p><strong>📍 Address:</strong> 369-A, GALI NO.5, BHAGAT VIHAR, KARAWAL NAGAR, DELHI-1100G4</p>
          <p><strong>📞 Phone:</strong> +91-98182-98432</p>
        </div>
      </div>
    </section>
    </>
  );
}
