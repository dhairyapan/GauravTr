import React from "react";

const ContactSection = () => {
    return (
        <section className="bg-blue-300 flex flex-col items-center justify-center text-center py-10 h-[40vh]">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Contact Us
            </h2>
            <p className="text-gray-600 text-lg mb-6">
                Have questions or want to place an order? Call us now!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <p className="text-xl font-semibold text-red-700">
                    📞 +91-98182-98432
                </p>

                <a
                    href="https://wa.me/9818298432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/axewyqun.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                    WhatsApp Me
                </a>
            </div>

        </section>
    );
};

export default ContactSection;
