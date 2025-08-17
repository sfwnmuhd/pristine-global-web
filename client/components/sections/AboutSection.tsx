import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl p-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6c085054fd4e2a21925963961eb2184bc6d57429?width=578" 
                  alt="Care" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl p-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/930f6bb796c6460350f0d03c800c2cfaf383552e?width=810" 
                  alt="Technology" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl p-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4fea0f1e5c76361010ac30345ee37ff6728cde24?width=578" 
                  alt="Business" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl p-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a39cb7b5bf22b784a165ef30c9aa757ab3d568cb?width=598" 
                  alt="Healthcare" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-pristine-text-dark mb-6">About</h2>
            <h3 className="text-xl text-pristine-text-gray mb-8">
              Global Excellence in Healthcare, Retail & Technology
            </h3>
            <p className="text-2xl text-black leading-relaxed">
              Pristine Global is a family-led enterprise founded by visionaries Dr. Syed Sayeed Ahmed and Dr. Ahmed Rashid Shaik, both seasoned healthcare professionals with deep expertise in medical service delivery and strategic investments across multiple countries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
