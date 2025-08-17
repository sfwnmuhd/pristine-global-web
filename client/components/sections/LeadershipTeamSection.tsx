import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";

export default function LeadershipTeamSection() {
  return (
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
          A dynamic team of medical, technology, and business leaders committed
          to global healthcare excellence.
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
                <h3 className="text-lg font-medium text-black mb-2">
                  {member.name}
                </h3>
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
          <h3 className="text-2xl font-medium text-black mb-4">
            Ready to invest in our growing portfolio?
          </h3>
          <p className="text-xl text-pristine-text-gray mb-8">
            from the upcoming UK care home to thriving ventures worldwide.
          </p>
          <button className="flex items-center justify-center mx-auto border border-pristine-blue text-pristine-blue px-6 py-3 rounded-full text-sm font-medium hover:bg-pristine-blue hover:text-white transition-colors">
            Invest with Us
            <svg
              className="w-6 h-6 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.4383 10.5565L8.47314 19.5217L7 18.0485L15.9652 9.08333H8.06335V7H19.5217V18.4583H17.4383V10.5565Z" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
