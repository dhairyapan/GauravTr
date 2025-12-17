import BgImage from "@/public/cantactimg.png"
import callimg from "@/public/telephone.png"
import messageimg from '@/public/comment.png'
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative min-h-[90vh] md:min-h-[98vh] flex items-center justify-center w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 mt-15 min-h-[120vh]">
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
      <div className="max-w-7xl mx-auto px-2 lg:px-8 flex flex-col md:flex-row justify-between text-white z-10">
        <div className="md:w-[50vw] w-[90vw] h-[90vh] text-center pt-20 mt-14">
          <h1 className="text-amber-50 font-extrabold text-3xl md:text-5xl">Connect With a Trusted Glassware Manufacturer</h1>
          <p className="text-gray-300">Have a query, bulk requirement, or custom design in mind?</p>
          <p className="text-gray-300">Our team is ready to assist you.</p>
          <div className="flex md:gap-6 md:ml-10">
            <div className="mt-14 w-[50vw] md:w-[15vw] flex justify-center items-center flex-col gap-y-2">
              <Image className="w-[70px]" src={callimg} alt="" />
              <h2 className="my-4">Call us directly</h2>
              <p>+91-98182-98432</p>
              <p>+91-79825-23279</p>
            </div>
            <div className="mt-14 w-[50vw] md:w-[15vw] flex justify-center items-center flex-col gap-y-1.5">
              <Image className="w-[70px]" src={messageimg} alt="" />
              <h2 className="my-4">Chat with us</h2>
              <a
                href="https://wa.me/9818298432"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-2.5 py-1.5 rounded-full transition-all duration-300"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/axewyqun.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
                 Siddharth pandey
              </a>
              <a
                href="https://wa.me/7982523279"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-2.5 py-1.5 rounded-full transition-all duration-300"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/axewyqun.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
                Siddharth pandey
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50vw]"></div>
      </div>
    </div >
  );
}
