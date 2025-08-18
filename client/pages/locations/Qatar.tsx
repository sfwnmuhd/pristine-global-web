import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function Qatar() {
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
            <span className="text-pristine-blue">Qatar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-pristine-text-gray max-w-3xl mx-auto"
          >
            Healthcare and technology services in the Middle East region with
            strategic partnerships and innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Operations in Qatar
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-pristine-blue mb-4">
                Healthcare Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Providing comprehensive healthcare solutions tailored to the
                Middle East market, including medical consultancy and healthcare
                management services.
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
                  Medical Consultancy
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
                  Healthcare Management
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
                  Strategic Partnerships
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-pristine-blue mb-4">
                Technology Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Advanced technology services supporting digital transformation
                initiatives across various sectors in Qatar and the broader
                Middle East region.
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
                  Digital Transformation
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
                  IT Consulting
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
                  System Integration
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-8"
          >
            Qatar Vision 2030 Alignment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Our operations in Qatar are strategically aligned with Qatar Vision
            2030, contributing to the country's economic diversification and
            sustainable development goals through innovative healthcare and
            technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-12 text-center"
          >
            Partnership Opportunities
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pristine-blue rounded-xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-lg mb-6">
              Explore partnership opportunities with Pristine Global in Qatar.
              Let's work together to drive innovation and growth in the Middle
              East.
            </p>
            <button className="bg-white text-pristine-blue px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Contact Our Qatar Team
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
