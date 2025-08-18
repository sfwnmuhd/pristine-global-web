import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const services = [
  {
    title: "Healthcare Services",
    description: "Comprehensive healthcare solutions including care homes, child care facilities, and medical consultancy services.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/185cc1dc08b118c8b51c0d872bbaeb16436787e2?width=336",
    features: ["Nursing Homes", "Child Care", "Medical Consultancy", "Healthcare Investments"]
  },
  {
    title: "Technology Solutions", 
    description: "Cutting-edge technology services and IT solutions to drive digital transformation across industries.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/5ad614595d2444835c98001062298ad71a787583?width=336",
    features: ["Software Development", "IT Consulting", "Digital Transformation", "System Integration"]
  },
  {
    title: "Retail & Distribution",
    description: "Strategic retail operations and distribution networks spanning multiple countries and regions.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/e9d926fb940d816d92ad26636e5408712f82af7d?width=336",
    features: ["Supply Chain Management", "Retail Operations", "Distribution Networks", "Strategic Partnerships"]
  }
];

export default function Services() {
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
            Our <span className="text-pristine-blue">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-pristine-text-gray max-w-3xl mx-auto"
          >
            Comprehensive solutions across healthcare, technology, and retail sectors to meet diverse business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-20 h-20 mx-auto mb-6 opacity-80"
                />
                <h3 className="text-2xl font-semibold text-black mb-4 text-center">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-pristine-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-6"
          >
            Ready to Partner with Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 mb-8"
          >
            Let's discuss how our services can help transform your business and achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-pristine-blue text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-pristine-blue text-pristine-blue rounded-full text-sm font-medium hover:bg-pristine-blue hover:text-white transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
