import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { database } from "../../firebaseConfig.js";
import { ref, onValue, set, get } from "firebase/database";

const Footer = () => {
  const [likeCount, setLikeCount] = useState(0);

  const [showBackToTop, setShowBackToTop] = useState(false);


  const [liked, setLiked] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolioLiked") === "true";
    }
    return false;
  });

  useEffect(() => {
    const likesRef = ref(database, "portfolioLikes");

    get(likesRef).then((snapshot) => {
      if (snapshot.exists()) {
        setLikeCount(snapshot.val());
      } else {
        set(likesRef, 5);
        setLikeCount(5);
      }
    });

    //realtime listener
    const unsubscribe = onValue(likesRef, (snapshot) => {
      if (snapshot.exists()) {
        setLikeCount(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolioLiked", liked.toString());
    }
  }, [liked]);

  const handleLike = () => {
    if (!liked) {
      const likesRef = ref(database, "portfolioLikes");

      // Update Firebase
      set(likesRef, likeCount + 1);
      setLiked(true);

      setTimeout(() => {
        const likeButton = document.querySelector(".like-button");
        if (likeButton) {
          likeButton.classList.add("animate-ping");
          setTimeout(() => {
            likeButton.classList.remove("animate-ping");
          }, 500);
        }
      }, 200);
    }
  };


    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/piyush-singh-03a1a1243/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/PiyushSing81238",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

    {
      name: "GitHub",
      url: "https://github.com/Piyush6766",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:singhpiyush6766@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    // {
    //   name: "LeetCode",
    //   url: "https://leetcode.com/u/Anuj_011/",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
<footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 dark:border-gray-800 py-12 relative">
  {/* Back to Top Button */}
  <motion.div
    className={`fixed right-2 bottom-6 z-50 ${showBackToTop ? 'block' : 'hidden'}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
    transition={{ duration: 0.3 }}
  >
    <motion.button
      onClick={scrollToTop}
      className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-800/80 hover:bg-purple-600/90 backdrop-blur-sm transition-colors duration-300 group shadow-lg"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(124, 58, 237, 0.9)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          className="w-5 h-5 text-gray-300 group-hover:text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.span>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white hidden sm:inline">
        Back to Top
      </span>
    </motion.button>
  </motion.div>
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:ml-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium text-gray-300 dark:text-gray-300">
              Connect with me:
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all "
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center w-6 h-6 text-gray-300 group-hover:text-white">
                    {link.icon}
                  </span>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-purple-300 transition-opacity duration-300 whitespace-nowrap">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Like Button */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleLike}
              className={`like-button flex items-center gap-2 px-4 py-2 rounded-full ${
                liked ? "bg-pink-500/20" : "bg-gray-800"
              } hover:bg-pink-500/20 transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={liked}
            >
              <motion.span
                animate={{
                  scale: liked ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                {liked ? (
                  <svg
                    className="w-6 h-6 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </motion.span>
              <span
                className={`text-sm font-medium ${
                  liked ? "text-pink-500" : "text-gray-400"
                }`}
              >
                {likeCount} {likeCount === 1 ? "Like" : "Likes"}
              </span>
            </motion.button>
            <p className="text-xs text-gray-500 mt-1">
              {liked ? "Thank you!" : "Like this portfolio?"}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 border-t border-gray-800 dark:border-gray-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Piyush Singh | Crafted with{" "}
          <span className="text-pink-500">💖</span> | All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
