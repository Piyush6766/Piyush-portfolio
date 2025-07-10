import { useEffect, useRef, useState } from "react";
import profilePic from "../../assets/profile-pic.jpg";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const Home = () => {
  const imageRef = useRef(null);
  const [currentTech, setCurrentTech] = useState(null);

  const techStack = [
    { icon: <FaReact className="text-blue-500" size={28} />, name: "React" },
    {
      icon: <FaNodeJs className="text-green-500" size={28} />,
      name: "Node.js",
    },
    {
      icon: <FaJs className="text-yellow-500" size={28} />,
      name: "JavaScript",
    },
    {
      icon: <SiMongodb className="text-green-600" size={28} />,
      name: "MongoDB",
    },
    {
      icon: (
        <SiExpress className="text-gray-800 dark:text-gray-200" size={28} />
      ),
      name: "Express",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400" size={28} />,
      name: "Tailwind",
    },
  ];

  useEffect(() => {
    const animateImage = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${
          Math.sin(Date.now() / 800) * 10
        }px)`;
        requestAnimationFrame(animateImage);
      }
    };
    const animationId = requestAnimationFrame(animateImage);

    // Tech stack animation
    let techIndex = 0;
    const techInterval = setInterval(() => {
      setCurrentTech(techStack[techIndex]);
      techIndex = (techIndex + 1) % techStack.length;
    }, 2000);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(techInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-6 sm:px-12 lg:px-24 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 opacity-10 dark:opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#3B82F6"
              d="M50,-50C62.7,-36.1,69.4,-18,68.9,-0.6C68.4,16.8,60.8,33.6,48.1,45.9C35.4,58.2,17.7,66,-1.2,67.2C-20.1,68.4,-40.2,63,-52.9,50.7C-65.6,38.4,-70.9,19.2,-70.3,0.6C-69.7,-18,-63.2,-36,-50.5,-49.9C-37.8,-63.8,-18.9,-73.6,0.5,-74.1C19.9,-74.6,39.8,-65.8,50,-50Z"
              transform="translate(100 100) rotate(15)"
            />
          </svg>
        </div>
        <div className="absolute -right-20 bottom-10 w-80 h-80 opacity-10 dark:opacity-5 rotate-45">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8B5CF6"
              d="M45.1,-45.1C59.1,-31.1,71.8,-15.5,72.4,0.7C73,16.9,61.5,33.8,47.5,48.2C33.5,62.6,16.7,74.6,-1.1,75.7C-19,76.8,-38,67,-53.1,52.6C-68.1,38.2,-79.2,19.1,-79.1,0.1C-79,-18.9,-67.7,-37.8,-52.6,-51.8C-37.6,-65.8,-18.8,-74.9,-0.3,-74.6C18.2,-74.3,36.4,-64.6,45.1,-45.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-8">
            Piyush Singh
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-purple-400 flex items-center gap-5">
              Full Stack Web Developer
              {currentTech && (
                <motion.span
                  key={currentTech.name}
                  initial={{ opacity: 0, scale: 0.5, x: 10 }}
                  animate={{
                    opacity: 1,
                    scale: 1.2,
                    x: 0,
                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-700/30 backdrop-blur-md border border-blue-300 dark:border-purple-500"
                  title={currentTech.name}
                >
                  {currentTech.icon}
                </motion.span>
              )}
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Transforming ideas into elegant web solutions with clean code and
            intuitive design. I specialize in building fast, responsive
            applications that deliver seamless user experiences.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1q5kac8jW4AkeeHIAeHezuebCjDg75zNr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-purple-600 dark:to-indigo-600 text-white rounded-lg font-medium shadow-lg transition-all hover:shadow-xl flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Floating ring animation */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-300 dark:border-purple-700 opacity-70">
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-400 dark:border-purple-500"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Profile Image */}
            <div
              ref={imageRef}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl"
            >
              <img
                src={profilePic}
                alt="Piyush Singh"
                className="w-full h-full object-cover scale-110"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
