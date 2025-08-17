import { motion } from "framer-motion";
import { coreValues } from "@/lib/data";

export default function CoreValuesSection() {
  return (
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
  );
}
