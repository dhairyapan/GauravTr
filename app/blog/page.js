import Head from "next/head";
import Image from "next/image";
import glassblogimg from "@/public/glasswareblog.png"

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Glassware Manufacturer in Delhi | Borosilicate & Customized Glassware</title>
        <meta name="description" content="Delhi's top glassware manufacturer offering premium borosilicate and customized glassware. Perfect for labs, homes, restaurants, gifting, and wholesale." />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Glassware Manufacturer in Delhi" />
        <meta property="og:description" content="Premium borosilicate and customized glassware in Delhi. Bulk, wholesale & branding options available." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/borosilicate.jpg" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Glassware Manufacturer in Delhi – Borosilicate & Customized Glassware",
              "image": "/images/borosilicate.jpg",
              "author": {
                "@type": "Organization",
                "name": "Gaurav Trading"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Gaurav Trading"
              },
              "description": "Delhi's trusted manufacturer of borosilicate and customized glassware. Bulk orders, custom branding, and high durability products."
            })
          }}
        />
      </Head>
      <main className="w-full max-w-4xl mx-auto p-5 sm:p-10 md:p-20 bg-white text-gray-800 mt-3">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
          Glassware Manufacturer in Delhi – Premium Borosilicate & Customized Glassware
        </h1>

        <p className="mb-6 text-sm sm:text-base leading-relaxed">
          Agar aap <strong>glassware manufacturer in Delhi</strong>, durable
          <strong> borosilicate glassware </strong> ya <strong>customized glassware</strong>
          ki search me ho, to yeh blog aapke liye perfect hai. Ham high-quality heat-resistant
          glassware banate hain jo lab, home, restaurant aur gifting sabke use ke liye suitable hota hai.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
          Borosilicate Glassware – Heat Resistant & Durable
        </h2>

        <p className="text-sm sm:text-base leading-relaxed">
          Borosilicate glass apni clarity, strength aur temperature resistance ke liye famous hai.
          Test tubes, beakers, flasks ya kitchen containers — sab ham premium grade borosilicate se banate hain.
        </p>

        <Image
          src={glassblogimg}
          alt="Borosilicate Glassware"
          className="rounded-lg my-4 w-full"
        />

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
          Customized Glassware – Branding, Shapes & Sizes
        </h2>

        <p className="text-sm sm:text-base leading-relaxed">
          Aap apne business, gifting ya personal use ke liye custom glassware order kar sakte ho.
          Logo printing, laser engraving, unique shapes — sab options available hain. Neeche apni images
          replace kar sakte ho.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Why Choose Our Glassware?</h2>

        <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
          <li>Delhi ka trusted glassware manufacturer</li>
          <li>Premium borosilicate material</li>
          <li>Customization options available</li>
          <li>Bulk & wholesale orders supported</li>
          <li>Affordable pricing with fast delivery</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">SEO Keywords</h2>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm">Glassware Manufacturer in Delhi</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm">Borosilicate Glassware</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm">Customized Glassware</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm">Lab Glassware Delhi</span>
        </div>

        <p className="mt-6 text-sm sm:text-base">
          Agar aap premium quality glassware chahte ho, to hume contact karke bulk ya custom order
          easily place kar sakte ho.
        </p>
      </main>

    </>
  );
}
