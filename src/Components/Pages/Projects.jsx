import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../Data/data.js"
import { useEffect } from "react";

const Projects = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          opacity: [0, 0.3, 0],
          transition: { duration: 8, ease: "easeInOut" }
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q250,50 500,150 T1000,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
            animate={{
              strokeDashoffset: [0, 100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M50,300 Q300,350 550,250 T1100,300"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15 7"
            animate={{
              strokeDashoffset: [100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
          />
        </svg>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-blue-400 dark:border-purple-500"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 80],
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gray-400 dark:text-gray-600 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
              }}
              animate={{
                y: [`-20px`, `${window.innerHeight + 20}px`],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.1
            }}
            viewport={{ once: true }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">My</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.1
                }}
                viewport={{ once: true }}
              />
            </span>{" "}
            <motion.span
              className="text-blue-600 dark:text-purple-400 relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              Projects
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1 bg-blue-500 dark:bg-purple-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.1
                }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.1
            }}
            viewport={{ once: true }}
          >
            Real-world applications built with passion and modern technologies
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.allProject.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-400/30 to-purple-500/30 pointer-events-none"
                animate={controls}
              />

              {/* Project Card */}
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-lg transition-all duration-300">
                {/* Image with Loading Optimization */}
                <div className="h-48 overflow-hidden relative">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                   
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.title.includes("LIVE") 
                        ? "bg-green-500/90 text-white" 
                        : "bg-yellow-500/90 text-gray-800"
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: 0.2,
                      type: "spring"
                    }}
                    viewport={{ once: true }}
                  >
                    {project.title.includes("LIVE") ? "LIVE" : "DEV"}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-800 dark:text-white mb-2"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.1,
                      duration: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    {project.title.split("|")[0].trim()}
                    <span className="text-blue-600 dark:text-purple-400">
                      {project.title.includes("|") ? ` | ${project.title.split("|")[1].trim()}` : ""}
                    </span>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.1,
                      duration: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      delay:  0.2,
                      staggerChildren: 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    {project.teckstack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-400 rounded-full"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.3)",
                          transition: { type: "spring", stiffness: 400 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Project Links */}
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      delay:  0.2,
                      duration: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.sourcecode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub /> Code
                    </motion.a>
                    {project.livelink && !project.livelink.includes("github.com") && (
                      <motion.a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink /> Live
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;