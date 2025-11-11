import Image from "next/image";
import Bottles from "@/public/abpage.jpg"
import Link from "next/link";


export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6 md:px-16 overflow-x-hidden" >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        { /* Left Side Image */}
        <div className="md:w-1/2">
          <Image
            src={Bottles} // 👈 apni image ka path yahan lagao
            alt="Borosil Product seller Company || Delhi"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-950">
            About Our Company
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            We are a trusted supplier of high-quality glassware and laboratory
            products, We deliver our products across India with the best packaging quality. We prefer receiving payments in advance. Our main office is located at 369-A, Gali No. 5, Bhagat Vihar, Karawal Nagar, Delhi–110094.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            From test tubes to screw-cap bottles, every product is made with
            precision and quality assurance. We also offer custom glassware
            solutions designed as per your unique specifications.
          </p>

          <p className="text-lg mb-8 leading-relaxed">
            12 years of experience and a focus on customer satisfaction, we
            ensure timely delivery, strong packaging, and products that meet
            international standards.
          </p>

          <div className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            “Quality glassware, built to last — because your experiments deserve
            the best.”
          </div>

          <div className="mt-10">
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
      </div>
    </section>
  );
}
