import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function UnitedKingdom() {
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
            United <span className="text-pristine-blue">Kingdom</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-pristine-text-gray max-w-3xl mx-auto"
          >
            Three care homes and one child care facility offering specialized,
            person-centered care across the UK.
          </motion.p>
        </div>
      </section>

      {/* Care Homes Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-12 text-center"
          >
            Pristine Care Homes
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b9bc235f1adeb19209ec3398e8fbca66d5117640?width=996"
                alt="Pristine Care Homes"
                className="w-full h-80 object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-black mb-6">
                Compassionate Care Services
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We operate three care homes and one child care facility in the
                UK, each offering specialised, person-centered care. Our
                flagship properties include Willoughby Grange Nursing Home and
                Broom Lane Care Home, designed to foster warmth, dignity, and
                community.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-pristine-blue mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  24/7 Professional Care
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-pristine-blue mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Person-Centered Approach
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-pristine-blue mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Family-Oriented Environment
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border border-gray-200"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/208071ab056e786dd092d3478b2227af68444683?width=92"
                alt="Project Icon"
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-3xl font-semibold text-black">
                Upcoming Project
              </h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              A new 50-bed nursing home in Stoke-on-Trent is in development,
              underscoring our growth ambitions and commitment to expanding
              quality care services across the UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-8"
          >
            Contact Our UK Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h4 className="text-xl font-semibold text-black mb-4">
              UK Headquarters
            </h4>
            <p className="text-gray-700 mb-4">
              Hawthorne House, 17a Hawthorne Drive
              <br />
              Leicester, England, LE5 6DL
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> 07868 751 907
              <br />
              <strong>Email:</strong> sayeed@pristine-global.com
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
