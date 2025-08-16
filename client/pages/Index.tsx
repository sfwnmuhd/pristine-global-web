import { motion } from "framer-motion";
import { useState } from "react";

// Location data for the interactive map
const locations = [
  { 
    id: 'uk', 
    name: 'United Kingdom', 
    coordinates: { x: 45, y: 33 }, 
    details: 'Three care homes and one child care facility offering specialized, person-centered care.' 
  },
  { 
    id: 'qatar', 
    name: 'Qatar', 
    coordinates: { x: 60, y: 45 }, 
    details: 'Healthcare and technology services in the Middle East region.' 
  },
  { 
    id: 'india', 
    name: 'India', 
    coordinates: { x: 73, y: 48 }, 
    details: 'Distribution networks and healthcare investments across multiple regions.' 
  }
];

const teamMembers = [
  {
    name: "Dr. Mohsin Ditta",
    role: "Family Medicine specialist | co-founder of Pristine Care Homes",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  },
  {
    name: "Dr. Syed Sayeed Ahmed", 
    role: "Consultant Pediatrician | MBA | leader across our UK, Middle East, and Indian healthcare ventures",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  },
  {
    name: "Dr. Ahmed Rashid Shaik",
    role: "Family Physician | Academic Faculty | co-founder | overseeing IT and healthcare investments across regions",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  },
  {
    name: "Tanveer Mohamed",
    role: "CEO of Precedence Technologies | driving strategy and long-term planning for our IT and investment arm",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  }
];

const coreValues = [
  {
    title: "Patient-Centric Care",
    description: "We prioritize comfort, respect, and holistic well-being in every service we offer.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/185cc1dc08b118c8b51c0d872bbaeb16436787e2?width=336"
  },
  {
    title: "Compassion & Professionalism", 
    description: "From our caregiving homes in the UK to staffing services that bring warmth and reliability, our ethos spans continents.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/e9d926fb940d816d92ad26636e5408712f82af7d?width=336"
  },
  {
    title: "Innovation & Expansion",
    description: "Whether scaling healthcare facilities in the UK or optimizing distribution networks in India and Qatar, we continuously pursue excellence.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/5ad614595d2444835c98001062298ad71a787583?width=336"
  }
];

export default function Index() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5c37caed7063a838654dd75d93f7e77c7bb8d299?width=288" 
            alt="Pristine Global Logo" 
            className="w-24 h-24 rounded-lg"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Original Background */}
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d3d51a30b0eaf52bf76283df93b3ca90570fee1a?width=3814"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        {/* Map Overlay with 50% opacity */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F182ebce20b994026ace85260408aef0c%2F34fe9c75c6344bc4a18af20b375a4cc6?format=webp&width=800"
            alt="World Map Overlay"
            className="w-50 h-50 object-cover opacity-50"
          />
        </div>

        {/* Interactive Map Pins */}
        <div className="absolute inset-0">
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute cursor-pointer"
              style={{ 
                left: `${location.coordinates.x}%`, 
                top: `${location.coordinates.y}%` 
              }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pulse Animation */}
              <motion.div
                className="w-4 h-4 bg-pristine-blue rounded-full relative"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-pristine-blue rounded-full opacity-30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Hover Popup */}
              {hoveredLocation === location.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg border min-w-[250px] z-10"
                >
                  <h3 className="font-semibold text-pristine-blue mb-2">{location.name}</h3>
                  <p className="text-sm text-pristine-text-gray">{location.details}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold leading-tight mb-6"
          >
            Global Excellence in{" "}
            <span className="text-pristine-blue font-bold">
              Healthcare, Retail & Technology
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-black mb-12 tracking-wide"
          >
            Enhancing lives across the UK, Qatar, and India through compassionate care, innovative solutions, and trusted services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-pristine-blue text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
              Explore Our Services
            </button>
            <button className="px-8 py-3 border border-pristine-blue text-pristine-blue rounded-full text-sm font-medium hover:bg-pristine-blue hover:text-white transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Division by Country Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-black mb-4"
          >
            Our Division by Country
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-pristine-text-gray mb-12"
          >
            Expanding across continents with excellence in care, technology, and distribution
          </motion.p>

          {/* Country Selector */}
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center bg-pristine-blue text-white px-6 py-3 rounded-lg">
              <div className="w-8 h-6 bg-white rounded mr-3"></div>
              <span className="text-lg">UK</span>
            </div>
            <div className="flex items-center bg-pristine-bg-light text-black px-6 py-3 rounded-lg">
              <div className="w-8 h-6 bg-red-600 rounded mr-3"></div>
              <span className="text-lg">Qatar</span>
            </div>
            <div className="flex items-center bg-pristine-bg-light text-black px-6 py-3 rounded-lg">
              <div className="w-8 h-6 bg-orange-500 rounded mr-3"></div>
              <span className="text-lg">India</span>
            </div>
          </div>

          {/* UK Division Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b9bc235f1adeb19209ec3398e8fbca66d5117640?width=996" 
                alt="Pristine Care Homes" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="text-left">
                <h3 className="text-3xl font-normal text-black mb-6">Pristine Care Homes</h3>
                <p className="text-2xl text-pristine-text-gray leading-relaxed mb-8">
                  We operate three care homes and one child care facility in the UK, each offering specialised, person-centered care. Our flagship properties include Willoughby Grange Nursing Home and Broom Lane Care Home, designed to foster warmth, dignity, and community.
                </p>
                
                <div className="flex items-center mb-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/208071ab056e786dd092d3478b2227af68444683?width=92" 
                    alt="Project Icon" 
                    className="w-12 h-12 mr-4"
                  />
                  <h4 className="text-2xl text-black">Upcoming Project</h4>
                </div>
                <p className="text-2xl text-pristine-text-gray">
                  A new 50-bed nursing home in Stoke-on-Trent is in development, underscoring our growth ambitions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-black mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center"
              >
                <img 
                  src={value.icon} 
                  alt={value.title}
                  className="w-42 h-42 mx-auto mb-6 opacity-80"
                />
                <h3 className="text-3xl font-normal text-black mb-6">{value.title}</h3>
                <p className="text-xl text-pristine-text-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-black mb-4"
          >
            Our Leadership Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-pristine-text-gray mb-16"
          >
            A dynamic team of medical, technology, and business leaders committed to global healthcare excellence.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-black mb-2">{member.name}</h3>
                  <p className="text-sm text-pristine-text-gray leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-medium text-black mb-4">Ready to invest in our growing portfolio?</h3>
            <p className="text-xl text-pristine-text-gray mb-8">
              from the upcoming UK care home to thriving ventures worldwide.
            </p>
            <button className="flex items-center justify-center mx-auto border border-pristine-blue text-pristine-blue px-6 py-3 rounded-full text-sm font-medium hover:bg-pristine-blue hover:text-white transition-colors">
              Invest with Us
              <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.4383 10.5565L8.47314 19.5217L7 18.0485L15.9652 9.08333H8.06335V7H19.5217V18.4583H17.4383V10.5565Z" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-7xl font-semibold text-black mb-8 flex items-center">
                Reach out
                <svg className="w-32 h-28 ml-4" fill="currentColor" viewBox="0 0 127 111">
                  <path d="M53.0267 43.5407L7.48353 83.3462L0 76.8055L45.5432 37H5.40184V27.75H63.61V78.625H53.0267V43.5407Z" />
                </svg>
              </h2>
              
              <p className="text-xl text-pristine-text-gray mb-12 leading-relaxed">
                Have a question or need assistance?<br />
                Reach Out to our dedicated support team.<br />
                We're here to help with any inquiries you<br />
                may have.
              </p>

              <div className="space-y-8">
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 30 30">
                    <path d="M26.25 20.525V24.9451C26.25 25.6014 25.7426 26.1459 25.0881 26.1921C24.5414 26.2307 24.0954 26.25 23.75 26.25C12.7042 26.25 3.75 17.2958 3.75 6.25C3.75 5.90464 3.76931 5.45859 3.80794 4.91188C3.85421 4.25735 4.39867 3.75 5.05482 3.75H9.47513C9.79598 3.75 10.0647 3.99303 10.0969 4.31225C10.1258 4.59884 10.1527 4.82892 10.1776 5.00252C10.4304 6.7684 10.9469 8.4492 11.6859 10.0038C11.8045 10.2533 11.7271 10.552 11.5023 10.7126L8.80444 12.6398C10.4469 16.4764 13.5236 19.5531 17.3602 21.1956L19.2839 18.5024C19.4465 18.2749 19.7487 18.1966 20.0012 18.3165C21.5557 19.0549 23.2364 19.5708 25.002 19.823C25.1745 19.8477 25.4031 19.8744 25.6877 19.9031C26.007 19.9354 26.25 20.2041 26.25 20.525Z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-medium text-black">Call us</h3>
                    <p className="text-lg text-pristine-text-gray tracking-widest">07868 751 907</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 30 30">
                    <path d="M3.75 3.75H26.25C26.9404 3.75 27.5 4.30965 27.5 5V25C27.5 25.6904 26.9404 26.25 26.25 26.25H3.75C3.05965 26.25 2.5 25.6904 2.5 25V5C2.5 4.30965 3.05965 3.75 3.75 3.75ZM15.0758 14.6036L7.05903 7.79712L5.44097 9.70288L15.0914 17.8964L24.568 9.6952L22.932 7.8048L15.0758 14.6036Z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-medium text-black">Mail us</h3>
                    <p className="text-lg text-pristine-text-gray">sayeed@pristine-global.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-8 h-8 mr-4 mt-1" fill="currentColor" viewBox="0 0 30 30">
                    <path d="M27.8908 12.7189L26.123 14.4867L25.2391 13.6028L19.9358 18.9061L19.0519 23.3256L17.2841 25.0933L11.9808 19.7899L5.79365 25.9772L4.02588 24.2094L10.2131 18.0222L4.90977 12.7189L6.67753 10.9511L11.097 10.0673L16.4003 4.76395L15.5164 3.88008L17.2841 2.1123L27.8908 12.7189Z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2">Find us</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl text-gray-700 font-medium">UK Headquarters:</h4>
                        <p className="text-lg text-pristine-text-gray">
                          Hawthorne House, 17a Hawthorne Drive, Leicester, England, LE5 6DL
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl text-gray-700 font-medium">India Office:</h4>
                        <p className="text-lg text-pristine-text-gray">
                          S-359, 2nd Floor, Tower B, Ansal Corporate Plaza, Palam Vihar, Gurgaon, Haryana – Pristine Global Pvt. Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-pristine-bg-contact bg-opacity-65 border border-gray-300 rounded-xl p-12"
            >
              <h3 className="text-3xl font-medium text-pristine-blue mb-12">Get in touch.</h3>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg text-black mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-pristine-text-gray placeholder-pristine-text-gray"
                    />
                  </div>
                  <div>
                    <label className="block text-lg text-black mb-2">Your Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-pristine-text-gray placeholder-pristine-text-gray"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg text-black mb-2">Your company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-pristine-text-gray placeholder-pristine-text-gray"
                    />
                  </div>
                  <div>
                    <label className="block text-lg text-black mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-pristine-text-gray placeholder-pristine-text-gray"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg text-black mb-2">Message</label>
                  <div className="relative">
                    <textarea
                      rows={6}
                      placeholder="Type here...."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-pristine-text-gray placeholder-pristine-text-gray resize-none"
                    ></textarea>
                    <span className="absolute bottom-3 right-3 text-xs text-pristine-text-gray">0/250</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-pristine-blue text-white rounded-full text-lg hover:bg-opacity-90 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-pristine-blue rounded-xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4d4f369a455a13efb2cd4c4da62c8e30c059f8f5?width=2604" 
                alt="Gradient Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-medium text-white mb-4">Ready to Make an Impact?</h2>
                <p className="text-xl text-white leading-relaxed">
                  Join us in our mission or partner to deliver exceptional services across<br />
                  healthcare, technology, and trading hubs.
                </p>
              </div>
              <button className="border border-white border-opacity-50 text-white px-8 py-3 rounded-2xl text-xl font-medium hover:bg-white hover:text-pristine-blue transition-colors">
                Join or partner now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pristine-bg-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/5b4fde4484574caf3846a18ef5c7b08382e97d32?width=338" 
                alt="Pristine Global Logo" 
                className="w-42 h-42 rounded-lg mb-6"
              />
              <p className="text-sm text-black leading-relaxed mb-6">
                Delivering innovative solutions across healthcare, technology, and trading, connecting communities and creating lasting impact worldwide.
              </p>
              <div className="flex space-x-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.8333 18.6667H21.6667V2.33333H5.33333V18.6667H13.5V12.8333H11.1667V10.5H13.5V8.5701C13.5 7.00998 13.6624 6.44422 13.9675 5.87385C14.2726 5.30348 14.7201 4.85585 15.2905 4.55082C15.737 4.31205 16.2909 4.16794 17.2586 4.10613C17.6428 4.08159 18.1399 4.11288 18.75 4.2V6.41667H18.1667C17.0965 6.41667 16.6549 6.46721 16.3909 6.60838C16.2272 6.69595 16.1126 6.81051 16.025 6.97425C15.8838 7.23821 15.8333 7.49995 15.8333 8.5701V10.5H18.75L18.1667 12.8333H15.8333V18.6667Z" />
                </svg>
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10C10.3426 10 9 11.3431 9 13C9 14.6573 10.3431 16 12 16C13.6573 16 15 14.6569 15 13C15 11.3427 13.6569 10 12 10ZM12 8C14.7604 8 17 10.2371 17 13C17 15.7605 14.7629 18 12 18C9.23953 18 7 15.7629 7 13C7 10.2395 9.2371 8 12 8Z" />
                </svg>
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3Z" />
                </svg>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-medium text-black mb-6">Quick links</h3>
              <ul className="space-y-3 text-sm text-pristine-text-black">
                <li>Home</li>
                <li>About us</li>
                <li>Locations</li>
                <li>Services</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-medium text-black mb-6">Legal</h3>
              <ul className="space-y-3 text-sm text-pristine-text-black">
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
