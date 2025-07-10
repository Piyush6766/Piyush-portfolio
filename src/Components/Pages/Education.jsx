import { motion } from "framer-motion";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const Education = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management",
    "Object Oriented Programming",
    "Computer Networking",
  ];

  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-b from-indigo-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating academic elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 opacity-10 dark:opacity-5"
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
              fill="#4F46E5"
              d="M50,-50C62.7,-36.1,69.4,-18,68.9,-0.6C68.4,16.8,60.8,33.6,48.1,45.9C35.4,58.2,17.7,66,-1.2,67.2C-20.1,68.4,-40.2,63,-52.9,50.7C-65.6,38.4,-70.9,19.2,-70.3,0.6C-69.7,-18,-63.2,-36,-50.5,-49.9C-37.8,-63.8,-18.9,-73.6,0.5,-74.1C19.9,-74.6,39.8,-65.8,50,-50Z"
              transform="translate(100 100) rotate(15)"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/5 w-20 h-20 opacity-10 dark:opacity-5"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
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

        {/* Floating icons */}
        <motion.div
          className="absolute top-1/4 right-20 text-3xl text-indigo-300 dark:text-purple-700 opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaGraduationCap />
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
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-blue-600 dark:text-purple-400">
                Education
              </span>
            </motion.h2>
            <div className="h-1 w-20 bg-blue-500 dark:bg-purple-500 mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My academic journey and specialized coursework in Information
              Technology.
            </p>
          </motion.div>

          {/* Right Side - Education Content */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* University */}
            <div className="mb-8">
              <motion.div
                className="flex items-center gap-3 mb-2"
                whileHover={{ x: 5 }}
              >
                <FaGraduationCap className="text-blue-500 dark:text-purple-400 text-xl" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Dr. Ram Manohar Lohia Avadh University, Ayodhya
                </h3>
              </motion.div>

              <motion.p
                className="text-blue-600 dark:text-purple-400 mb-6 font-medium"
                whileHover={{ x: 3 }}
              >
                B.Tech, Information Technology • Aug 2021 - Aug 2025
              </motion.p>

              {/* Coursework Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 3 }}
                >
                  <FaBook className="text-blue-500 dark:text-purple-400" />
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                    Coursework
                  </h4>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm cursor-default relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        transition: { duration: 0.2 },
                      }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Hover effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-purple-900/30 dark:to-blue-900/30 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Border animation on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-transparent"
                        whileHover={{
                          borderColor: "rgba(99, 102, 241, 0.5)",
                          transition: { duration: 0.3 },
                        }}
                      />

                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 relative z-10">
                        {course}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
