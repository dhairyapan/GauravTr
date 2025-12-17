import Image from "next/image";
import Heroimg from "@/public/hero.png";
import BgImage from "@/public/bg.png";
import Productbeaker from "@/public/beaker.png";
import Productmeasuring from "@/public/measuring cylinder.png";
import coustomglass from "@/public/coustom glass.webp";
import bestcoutosupport from "@/public/best coustomer support.webp";
import blukorder from "@/public/bulk order.webp";
import alloverindia from "@/public/all over india.png";
import aboutusbg from "@/public/aboutusbg.png"
import Link from "next/link";


export default function Home() {

  const Popularproducts = [
    {
      id: 1,
      img: Productbeaker,
      title: "Beaker Glass",
      desc: "Durable borosil beaker suitable for lab and industrial use.",
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
      <section className="relative min-h-[90vh] md:min-h-[98vh] flex items-center justify-center w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={BgImage}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center text-white z-10">

          {/* Left Side */}
          <div className="md:w-[80vw] text-center">
            <h1 className="text-3xl font-extrabold mb-2 leading-snug drop-shadow-lg md:text-4xl">
              Top Laboratory Equipment and Glassware Manufacturers in India
            </h1>
            <p className="md:text-lg mb-2 drop-shadow-md">
              Looking for high-quality and durable glassware? We are a trusted glassware manufacturer offering premium borosilicate products, laboratory glassware, and fully customized glass solutions. Our focus is on top-class finishing, long-lasting strength, and designs made exactly for your needs, so you get the perfect glass products for your business.
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
        </div>
      </section>
      <section className="bg-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 flex flex-col gap-6">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 text-center">
            Laboratory Glassware Manufacturer in India – Gaurav Trading
          </h2>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Gaurav Trading is a trusted laboratory glassware manufacturer in India, supplying high-quality and precision-engineered glassware for pharmaceutical, educational, and industrial laboratories. Our laboratory glassware is designed to meet strict quality standards while ensuring accuracy, safety, and long-term durability.
          </p>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Laboratory glassware is manufactured in a wide range of sizes and shapes, each developed for specific laboratory applications. High transparency allows clear observation of chemical reactions and measurements, while heat-resistant and chemically resistant glass ensures safe performance under extreme laboratory conditions.
          </p>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Our laboratory glassware is widely used in pharmaceutical industries, educational institutions, research centers, and industrial laboratories. Gaurav Trading glassware is known for its durability and reliability when handled and stored properly using dedicated laboratory storage systems.
          </p>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            We offer both Class A and Class B laboratory glassware, calibrated using high-precision automated calibration machines to deliver consistent and accurate results. Our product range includes beakers, flasks, burettes, pipettes, and measuring cylinders suitable for professional laboratory use.
          </p>

        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold text-blue-950 mb-10">Our Services</h3>
          <div className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">

              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={coustomglass}
                  alt="Custom Glassware Manufacturing"
                  className="w-full h-[340px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
                <h4 className="text-3xl font-bold text-blue-950 leading-tight">
                  Custom Laboratory Glassware Manufacturing Services
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  We specialize in custom glassware manufacturing to meet the unique needs of laboratories,
                  research centers, educational institutions, and industries. Our team designs and produces
                  high-quality glass products based on customer drawings, samples, and specifications.
                  Using premium borosilicate glass and modern production techniques, we ensure high precision,
                  durability, and safety in every product.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We are committed to delivering reliable, accurate, and tailor-made glassware solutions for our clients.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Link href="" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300">
                    Learn more
                  </Link>
                </div>

              </div>

            </div>
          </div>
          <div className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 md:px-10">

              {/* Content - Left on desktop, bottom on mobile */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left order-2 lg:order-1">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 leading-tight">
                  24/7 Customer Support for Laboratory Glassware Solutions
                </h4>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We provide reliable and best customer support for all types of laboratory glassware and equipment. Our expert support team is available to help you with product inquiries, custom manufacturing support, bulk order assistance, fast response, and after-sales services.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We focus on quick communication, quality service, and customer satisfaction to deliver a smooth and trustworthy experience.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300">
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Image - Right on desktop, top on mobile */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <Image
                  src={bestcoutosupport}
                  alt="Custom Glassware Manufacturing"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover rounded-2xl shadow-lg"
                />
              </div>

            </div>
          </div>
          <div className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">

              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={blukorder}
                  alt="Custom Glassware Manufacturing"
                  className="w-full h-[340px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
                <h4 className="text-3xl font-bold text-blue-950 leading-tight">
                  Bulk Manufacturing Services for Laboratory Glassware Products
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  We offer reliable bulk manufacturing services for laboratory glassware to meet large-scale business and industrial requirements. Our production unit is capable of handling high-volume orders with consistent quality, accurate specifications, and timely delivery.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We provide customized designs, packaging, and private labeling as per client requirements. Our focus is on strict quality control, cost-effective production, and long-term business partnerships.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300">
                    Place Bulk Order
                  </Link>
                </div>

              </div>

            </div>
          </div>
          <div className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 md:px-10">

              {/* Content - Left on desktop, bottom on mobile */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left order-2 lg:order-1">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 leading-tight">
                  Pan India Delivery for Laboratory Glassware & Lab Equipment
                </h4>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We provide fast and reliable all over India delivery for laboratory glassware and equipment. Our strong logistics network ensures safe packaging, secure handling, and timely dispatch to every state and major city across India.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We are committed to delivering high-quality products at your doorstep with safe transportation and complete customer satisfaction.
                </p>
              </div>

              {/* Image - Right on desktop, top on mobile */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <Image
                  src={alloverindia}
                  alt="Custom Glassware Manufacturing"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-fit rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="relative max-w-full mx-auto px-6 text-center bg-cover bg-center bg-no-repeat py-16 rounded-2xl overflow-hidden"
          style={{ backgroundImage: `url(${aboutusbg.src})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Heading */}
            <h4 className="text-3xl font-bold text-blue-200 mb-6">
              About Us
            </h4>

            {/* Description */}
            <div className="max-w-3xl mx-auto leading-relaxed mb-8 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-gray-700 p-4">
                Gaurav Trading is a trusted manufacturer of borosilicate glassware and a reliable supplier of laboratory accessories.
                We produce and deliver high-quality beakers, test tubes, measuring cylinders, screw caps, wooden corks, and a wide range of essential lab products.
              </p>

              <p className="text-gray-700 p-4">
                Our products are designed for industrial, laboratory, and home use, ensuring durability, precision, and excellent performance.
                We focus on superior quality, accurate craftsmanship, and secure packaging so our customers receive only the best.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}
