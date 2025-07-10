import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode className="text-xl" />,
      skills: ["C", "JavaScript",],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode className="text-xl" />,
      skills: ["React.js", "Next.js", "BootStrap", "Tailwind CSS", "Material-UI", "HTML5", "CSS3"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Backend",
      icon: <FaServer className="text-xl" />,
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT", "OAuth"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-xl" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL (Basic)", "Firebase", "Mongoose"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Tools/Platforms",
      icon: <FaTools className="text-xl" />,
      skills: ["Git/GitHub", "VS Code", "Vercel", "Netlify", "Adobe Photoshop", "Postman"],
      color: "from-indigo-500 to-indigo-600"
    },
    // {
    //   title: "Core Concepts",
    //   icon: <FaCode className="text-xl" />,
    //   skills: ["Data Structures & Algorithms", "OOPs", "DBMS", "Operating Systems"],
    //   color: "from-indigo-500 to-indigo-600"
    // }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 opacity-10"
            style={{
              fontSize: `${Math.random() * 50 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              rotate: [0, (Math.random() - 0.5) * 40],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {["</>", "{ }", "/* */", "=>", "() =>", "[]", "{}", "npm", "git", "API"][i % 10]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
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
              className="text-4xl md:text-5xl font-bold text-white mb-6 inline-block"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.span 
                className="text-blue-600 dark:text-purple-400 inline-block"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                  transition: { delay: 0.1, type: "spring", stiffness: 500 }
                }}
              >
                Technical
              </motion.span>{" "}
              <span className="text-white">Skills</span>
            </motion.h2>
            <div className="h-1 w-20 bg-blue-500 dark:bg-purple-500 mb-8"></div>
            <p className="text-lg text-gray-300">
              The tools and technologies I use to bring ideas to life and solve complex problems.
            </p>
          </motion.div>

          {/* Right Side - Skills Grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-md opacity-20`}></div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gray-700 rounded-full text-sm font-medium text-gray-200 hover:text-white cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                          border: "1px solid rgba(96, 165, 250, 0.3)",
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        transition={{ 
                          delay: skillIndex * 0.02 +  0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;