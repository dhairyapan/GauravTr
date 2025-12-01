"use client";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 👈 toggle for mobile menu

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("9818298432");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* ✅ Logo */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={160}
              height={60}
              className="mt-2 cursor-pointer"
              priority
            />
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-blue-950 font-medium">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-red-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-red-600 transition">
              Blog
            </Link>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center text-blue-950 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-lg">
          <div className="px-6 py-4 flex flex-col space-y-4 text-blue-950 font-medium">
            <Link
              href="/"
              className="hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

          <Link
              href="/blog"
              className="hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
