import { motion } from "framer-motion";

export default function DivisionByCountrySection() {
  return (
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
  );
}
