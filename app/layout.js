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
  title: "Laboratory Glassware Manufacturer in India | Gaurav Trading",
  description:
    "Laboratory glassware manufacturer in India offering lowest price and customized glassware solutions. Gaurav Trading supplies Class A & Class B glassware for pharmaceutical, educational, and industrial laboratories.",
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
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
