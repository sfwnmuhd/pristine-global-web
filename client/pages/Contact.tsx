import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-instrument">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold text-black mb-6"
          >
            Contact <span className="text-pristine-blue">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-pristine-text-gray max-w-3xl mx-auto"
          >
            Get in touch with our team. We're here to help with any inquiries
            you may have.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-semibold text-black mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pristine-blue rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 30 30"
                    >
                      <path d="M26.25 20.525V24.9451C26.25 25.6014 25.7426 26.1459 25.0881 26.1921C24.5414 26.2307 24.0954 26.25 23.75 26.25C12.7042 26.25 3.75 17.2958 3.75 6.25C3.75 5.90464 3.76931 5.45859 3.80794 4.91188C3.85421 4.25735 4.39867 3.75 5.05482 3.75H9.47513C9.79598 3.75 10.0647 3.99303 10.0969 4.31225C10.1258 4.59884 10.1527 4.82892 10.1776 5.00252C10.4304 6.7684 10.9469 8.4492 11.6859 10.0038C11.8045 10.2533 11.7271 10.552 11.5023 10.7126L8.80444 12.6398C10.4469 16.4764 13.5236 19.5531 17.3602 21.1956L19.2839 18.5024C19.4465 18.2749 19.7487 18.1966 20.0012 18.3165C21.5557 19.0549 23.2364 19.5708 25.002 19.823C25.1745 19.8477 25.4031 19.8744 25.6877 19.9031C26.007 19.9354 26.25 20.2041 26.25 20.525Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black">Phone</h3>
                    <p className="text-gray-700">07868 751 907</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pristine-blue rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 30 30"
                    >
                      <path d="M3.75 3.75H26.25C26.9404 3.75 27.5 4.30965 27.5 5V25C27.5 25.6904 26.9404 26.25 26.25 26.25H3.75C3.05965 26.25 2.5 25.6904 2.5 25V5C2.5 4.30965 3.05965 3.75 3.75 3.75ZM15.0758 14.6036L7.05903 7.79712L5.44097 9.70288L15.0914 17.8964L24.568 9.6952L22.932 7.8048L15.0758 14.6036Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black">Email</h3>
                    <p className="text-gray-700">sayeed@pristine-global.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pristine-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 30 30"
                    >
                      <path d="M27.8908 12.7189L26.123 14.4867L25.2391 13.6028L19.9358 18.9061L19.0519 23.3256L17.2841 25.0933L11.9808 19.7899L5.79365 25.9772L4.02588 24.2094L10.2131 18.0222L4.90977 12.7189L6.67753 10.9511L11.097 10.0673L16.4003 4.76395L15.5164 3.88008L17.2841 2.1123L27.8908 12.7189Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Offices
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          UK Headquarters
                        </h4>
                        <p className="text-gray-700">
                          Hawthorne House, 17a Hawthorne Drive,
                          <br />
                          Leicester, England, LE5 6DL
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          India Office
                        </h4>
                        <p className="text-gray-700">
                          S-359, 2nd Floor, Tower B,
                          <br />
                          Ansal Corporate Plaza, Palam Vihar,
                          <br />
                          Gurgaon, Haryana – Pristine Global Pvt. Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-black mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pristine-blue focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pristine-blue focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pristine-blue focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pristine-blue focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pristine-blue focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pristine-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
