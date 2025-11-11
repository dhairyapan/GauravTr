import Image from "next/image";
import Product1 from "@/public/coustom.png";
import Product2 from "@/public/mylti.png";
import Product3 from "@/public/caps.png";

const ProductsSection = () => {
  const products = [
    { id: 1, img: Product1, title: "Custom Designed Borosilicate", desc: "We can create custom products based on your design." },
    { id: 2, img: Product2, title: "Multi Purposes Item", desc: "You can use it anywhere for multiple purposes." },
    { id: 3, img: Product3, title: "Screw Cap And Wooden Corck", desc: "We offer multi-color screw caps and wooden corks as well." },
  ];

  return (
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
  );
};

export default ProductsSection;
