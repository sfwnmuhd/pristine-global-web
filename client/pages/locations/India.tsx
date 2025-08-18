import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function India() {
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
            <span className="text-pristine-blue">India</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-pristine-text-gray max-w-3xl mx-auto"
          >
            Distribution networks and healthcare investments across multiple
            regions with focus on innovation and sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Operations in India
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-pristine-blue mb-4">
                Distribution Networks
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Extensive distribution networks spanning multiple states,
                ensuring efficient supply chain management and market
                penetration.
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
                  Multi-State Coverage
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
                  Supply Chain Excellence
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
                  Market Penetration
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-pristine-blue mb-4">
                Healthcare Investments
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Strategic healthcare investments focused on improving
                accessibility and quality of medical services across Indian
                communities.
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
                  Medical Facilities
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
                  Healthcare Technology
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
                  Community Health
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-pristine-blue mb-4">
                Innovation Hub
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Leveraging India's technological expertise to drive innovation
                in healthcare and business solutions for global markets.
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
                  R&D Centers
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
                  Tech Solutions
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
                  Global Collaboration
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-8"
          >
            Pristine Global India Office
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 border border-gray-200"
          >
            <h4 className="text-xl font-semibold text-black mb-4">
              Corporate Headquarters
            </h4>
            <p className="text-gray-700 mb-6">
              S-359, 2nd Floor, Tower B<br />
              Ansal Corporate Plaza, Palam Vihar
              <br />
              Gurgaon, Haryana
              <br />
              Pristine Global Pvt. Ltd.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Operations</h5>
                <p className="text-gray-700">
                  Distribution & Healthcare Investments
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  Focus Areas
                </h5>
                <p className="text-gray-700">
                  Innovation & Technology Solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Vision */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-8"
          >
            Future Growth Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed mb-8"
          >
            India represents a key growth market for Pristine Global, with plans
            for significant expansion in healthcare infrastructure, technology
            development, and distribution network optimization to serve the
            growing Indian market and export globally.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-pristine-blue text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Explore Opportunities
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
