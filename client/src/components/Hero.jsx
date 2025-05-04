import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import profilePic from '../assets/images/profile.jpg'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "I'm a passionate and dedicated software engineering student"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index])
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-16 lg:pt-24 px-4 bg-white dark:bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-black dark:text-white">
                    Ankur Chouhan
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-black dark:bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
                Software Engineer <span className="text-black dark:text-white">(in progress)</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="h-20">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                {text}
                <span className="animate-blink">|</span>
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              with strong skills in Java and JavaScript. I enjoy building full-stack web apps with tools like React.js, Node.js, and Express.js. I'm continuously learning, solving real-world problems, and working on cool projects.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.a>
              
              <div className="flex items-center space-x-6">
                <motion.a
                  href="https://github.com/AnkurChouhan123"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  <FaGithub className="w-7 h-7" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ankur-chouhan-83607a2a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  <FaLinkedin className="w-7 h-7" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={profilePic} 
                alt="Ankur Chouhan"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer group"
          onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
        >
          <FaArrowDown className="w-6 h-6 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 