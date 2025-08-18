import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function About() {
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
            About <span className="text-pristine-blue">Pristine Global</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-pristine-text-gray max-w-3xl mx-auto"
          >
            A family-led enterprise committed to excellence in healthcare, retail, and technology across multiple continents.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-semibold text-black mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pristine Global is a family-led enterprise founded by visionaries Dr. Syed Sayeed Ahmed and Dr. Ahmed Rashid Shaik, both seasoned healthcare professionals with deep expertise in medical service delivery and strategic investments across multiple countries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a simple mission: to enhance lives through compassionate care, innovative solutions, and trusted services. Today, we operate across the UK, Qatar, and India, bringing world-class healthcare and technology solutions to diverse communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6c085054fd4e2a21925963961eb2184bc6d57429?width=578" 
                alt="Healthcare" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4fea0f1e5c76361010ac30345ee37ff6728cde24?width=578" 
                alt="Technology" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl font-semibold text-black mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional healthcare services, innovative technology solutions, and reliable retail operations that enhance the quality of life for communities across the UK, Qatar, and India.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-3xl font-semibold text-black mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading global provider of integrated healthcare, technology, and retail solutions, recognized for our commitment to excellence, innovation, and compassionate care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-12"
          >
            Global Presence
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h4 className="text-2xl font-semibold text-pristine-blue mb-4">United Kingdom</h4>
              <p className="text-gray-700">Three care homes and one child care facility offering specialized, person-centered care.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h4 className="text-2xl font-semibold text-pristine-blue mb-4">Qatar</h4>
              <p className="text-gray-700">Healthcare and technology services in the Middle East region with strategic partnerships.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <h4 className="text-2xl font-semibold text-pristine-blue mb-4">India</h4>
              <p className="text-gray-700">Distribution networks and healthcare investments across multiple regions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
