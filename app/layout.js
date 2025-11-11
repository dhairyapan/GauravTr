import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LordiconScript from "@/components/LordiconScript";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaurav Trading Co. | Premium Borosil Glassware Supplier",
  description:
    "Buy high-quality borosil glassware including beakers, test tubes, flasks, measuring cylinders, and more at best prices. Gaurav Trading Co. delivers durable, heat-resistant lab glassware with safe packaging and pan-India delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden
`}
      >
        <LordiconScript />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
