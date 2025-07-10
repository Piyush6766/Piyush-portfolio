import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiMongodb, SiAdobephotoshop, SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-200 dark:bg-purple-900 opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-indigo-200 dark:bg-purple-800 opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Floating tech icons */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-4xl text-blue-300 dark:text-purple-700 opacity-50"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <FaReact />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 text-3xl text-indigo-300 dark:text-purple-600 opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <SiJavascript />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
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
              About{" "}
              <span className="text-blue-600 dark:text-purple-400">Me</span>
              <div className="h-1 w-28 bg-blue-500 dark:bg-purple-500 mt-4"></div>
            </motion.h2>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                {
                  icon: <SiJavascript className="text-yellow-500 text-xl" />,
                  text: "JavaScript",
                },
                {
                  icon: <FaReact className="text-blue-500 text-xl" />,
                  text: "React",
                },
                {
                  icon: <FaNodeJs className="text-green-500 text-xl" />,
                  text: "Node.js",
                },
                {
                  icon: <SiMongodb className="text-green-600 text-xl" />,
                  text: "MongoDB",
                },
                {
                  icon: <SiAdobephotoshop className="text-blue-400 text-" />,
                  text: "Graphic Designer",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg cursor-default"
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="md:w-2/3 space-y-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              <span className="text-2xl font-bold text-blue-600 dark:text-purple-400">
                Hey there! 👋
              </span>{" "}
              I'm PiyushSingh — a passionate full-stack developer who crafts
              digital experiences with clean UI, elegant logic, and plenty of
              tea breaks ☕.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              With{" "}
              <span className="font-semibold text-blue-600 dark:text-purple-400">
                1+ year
              </span>{" "}
              of hands-on experience building full-stack applications, I
              specialize in turning complex challenges into scalable,
              user-friendly solutions using modern JavaScript technologies.
            </motion.p>

            <motion.div
              className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 dark:border-purple-500"
              whileHover={{ y: -3 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -left-4 text-3xl p-2 bg-blue-100 dark:bg-purple-900 text-blue-400 dark:text-purple-400 rounded-full"
              >
                <SiAdobephotoshop />
              </motion.div>
              <p className="text-lg leading-relaxed">
                Hi! I'm a passionate freelance{" "}
                <span className="font-semibold">Graphic Designer </span>with
                over{" "}
                <span className="font-semibold">
                  1+ years of hands-on experience
                </span>
                . creating visually compelling and brand-consistent designs for
                clients across various industries.
                <br />
                <span className="font-semibold">
                  🎨 Logo Design | 🖼️ Social Media Graphics | 🧾 Business Cards
                </span>
              </p>
            </motion.div>

            <motion.p
              className="text-lg leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              My toolkit includes{" "}
              <span className="font-semibold">
                JavaScript, React, Node.js, Express.js, Adobe Photoshop and MongoDB
              </span>{" "}
              — technologies I use daily to bring ideas to life.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              I'm always excited to collaborate on innovative projects, learn
              new technologies, or simply geek out about the latest in web
              development. Let's build something amazing together!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
