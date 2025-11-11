"use client";
import React from "react";
import Image from "next/image";
import Product1 from "@/public/beaker.png"
import Product2 from "@/public/testTube.png"
import Product3 from "@/public/measuring cylinder.png"
import Link from "next/link";

const PopularProducts = () => {
  // 👇 Your products array (you can add more items anytime)
  const products = [
    {
      id: 1,
      img: Product1,
      title: "Beaker Glass",
      desc: "Durable borosil beaker suitable for lab and industrial use.",
    },
    {
      id: 2,
      img: Product2,
      title: "Test Tube Set",
      desc: "High-quality glass test tubes with smooth edges and leak-proof design.",
    },
    {
      id: 3,
      img: Product3,
      title: "Measuring cylinder",
      desc: "This is a high-quality measuring cylinder, perfect for multipurpose use.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-950 mb-10">
          Popular Products
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
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
      </div>
    </section>
  );
};

export default PopularProducts;
