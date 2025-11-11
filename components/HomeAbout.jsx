"use client";
import React from "react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
