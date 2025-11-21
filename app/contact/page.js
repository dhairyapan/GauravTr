import React from 'react'

export const metadata = {
  title: "Contact Laboratory Equipment and Glassware Seller in Delhi | GauravTradingco.",
  description: "Our Phone Number 9818298432, 7982523279 ",
  keywords: ["glassware seller", "borosil glassware", "lab equipment", "beaker supplier", "test tube manufacturer"],
};

const page = () => {
  return (
    <>
      <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10"
      style={{
        backgroundImage: "url('/contactbg.jpg')", // Image in /public folder
      }}
    >
      <div className="max-w-lg w-full bg-white/90 shadow-lg rounded-lg p-8 border border-gray-100 backdrop-blur-sm">

        <div className="space-y-4 text-center">
          {/* Mobile Numbers */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">
              📞 Mobile Numbers
            </h2>
            <p className="text-gray-600 mt-1">+91 98182 98432</p>
            <p className="text-gray-600">+91 79825 23279</p>
          </div>

          <div className="border-t border-gray-200 my-4"></div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            We’ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
