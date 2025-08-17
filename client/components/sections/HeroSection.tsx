import { motion } from "framer-motion";
import { useState } from "react";
import { locations, type Location } from "@/lib/data";

export default function HeroSection() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d3d51a30b0eaf52bf76283df93b3ca90570fee1a?width=3814"
          alt="Background Grid"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* World Map Background */}
      <div className="absolute inset-0 z-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F182ebce20b994026ace85260408aef0c%2F34fe9c75c6344bc4a18af20b375a4cc6?format=webp&width=800"
          alt="World Map Background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Interactive Map Pins */}
      <div className="absolute inset-0 z-5 flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute cursor-pointer"
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
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
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-pristine-blue rounded-full opacity-30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
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
                  <h3 className="font-semibold text-pristine-blue mb-2">
                    {location.name}
                  </h3>
                  <p className="text-sm text-pristine-text-gray">
                    {location.details}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-5 pb-8 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
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
          className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto"
        >
          Enhancing lives across the UK, Qatar, and India through compassionate
          care, innovative solutions, and trusted services.
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
  );
}
