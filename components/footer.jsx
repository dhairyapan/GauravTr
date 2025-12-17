"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-3">

        {/* Website Name */}
        <h3 className="text-lg font-semibold text-white">Gaurav Trading co.</h3>

        {/* Address */}
        <p className="text-sm text-gray-400">
          📍 123 Industrial Area, Delhi, India
        </p>

        {/* Contact Info */}
        <p className="text-sm text-gray-400">
          📞 9818298432 | 7982523279
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2">
          Website Made by Dhairya Pandey || Phone no. 7210292782
        </p>
      </div>
    </footer>
  );
};

export default Footer;
