import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaChartLine } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating tech elements */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-16 h-16 opacity-10 dark:opacity-5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#3B82F6" 
              d="M50,-50C62.7,-36.1,69.4,-18,68.9,-0.6C68.4,16.8,60.8,33.6,48.1,45.9C35.4,58.2,17.7,66,-1.2,67.2C-20.1,68.4,-40.2,63,-52.9,50.7C-65.6,38.4,-70.9,19.2,-70.3,0.6C-69.7,-18,-63.2,-36,-50.5,-49.9C-37.8,-63.8,-18.9,-73.6,0.5,-74.1C19.9,-74.6,39.8,-65.8,50,-50Z" 
              transform="translate(100 100) rotate(15)" 
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 opacity-10 dark:opacity-5"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#6366F1" 
              d="M39.9,-39.9C53.8,-25.9,68.5,-12.9,70.7,2.3C72.9,17.5,62.7,35,48.8,50.8C34.9,66.6,17.5,80.7,-1.3,82C-20,83.3,-40.1,71.8,-54.9,56C-69.7,40.1,-79.3,20.1,-79.1,0.2C-78.9,-19.7,-69,-39.4,-54.2,-53.4C-39.4,-67.4,-19.7,-75.7,-2.3,-73.4C15,-71.1,30,-58.2,39.9,-39.9Z" 
              transform="translate(100 100)" 
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Side - Heading */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Work <span className="text-blue-600 dark:text-purple-400">Experience</span>
            </motion.h2>
            <div className="h-1 w-20 bg-blue-500 dark:bg-purple-500 mb-5"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My professional journey through innovative companies and impactful projects.
            </p>
          </motion.div>

          {/* Right Side - Experience Items */}
          <div className="md:w-2/3 space-y-12">
            {/* Experience 1 */}
            <motion.div
              className="relative pl-8 border-l-2 border-blue-400 dark:border-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-purple-500"></div>
              
              <motion.div 
                className="flex items-center gap-3 mb-2"
                whileHover={{ x: 5 }}
              >
                <FaLaptopCode className="text-blue-500 dark:text-purple-400 text-xl" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Backend Developer Intern</h3>
              </motion.div>
              
              <motion.p 
                className="text-blue-600 dark:text-purple-400 mb-4 font-medium"
                whileHover={{ x: 3 }}
              >
                Startup World  • Apr 2025 - Ongoing 
              </motion.p>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "Developed AICTE Feedback API using Node.js, Express.js, and MongoDB for a real-world web platform.",
                  "Created backend routes for feedback submission, admin access, and analytics.",
                  "Integrated JWT authentication for secure user and admin roles.",
                  "Used Postman for API testing and deployed with MongoDB Atlas."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-500 dark:text-purple-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              className="relative pl-8 border-l-2 border-blue-400 dark:border-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-purple-500"></div>
              
              <motion.div 
                className="flex items-center gap-3 mb-2"
                whileHover={{ x: 5 }}
              >
                <FaChartLine className="text-blue-500 dark:text-purple-400 text-xl" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">AI Intern– TechSaksham Program</h3>
              </motion.div>
              
              <motion.p 
                className="text-blue-600 dark:text-purple-400 mb-4 font-medium"
                whileHover={{ x: 3 }}
              >
                Microsoft and SAP Joint CSR Initiative (Remote) • Jan 2025 - Feb 2025 (1 Month)
              </motion.p>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "Built a Text-to-Image Generator using Stable Diffusion to convert prompts into AI-generated images.",
                  "Handled prompt engineering, image rendering, and UI output display.",
                  "Implemented image download and auto-save feature for generated results.",
                  "Participated in AI mentorship sessions by TechSaksham focused on ethical and practical AI use."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-500 dark:text-purple-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;