"use client";
import Script from "next/script";

export default function LordiconScript() {
  return (
    <Script
      src="https://cdn.lordicon.com/lordicon.js"
      strategy="beforeInteractive"
    />
  );
}
