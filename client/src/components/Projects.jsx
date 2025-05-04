import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack App Coming Soon',
      description: 'An exciting full-stack application that will showcase my MERN stack skills. Stay tuned!',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://via.placeholder.com/600x400?text=Coming+Soon',
      githubLink: 'https://github.com/AnkurChouhan123',
      liveLink: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with user authentication, product management, and shopping cart functionality.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://via.placeholder.com/600x400?text=E-Commerce',
      githubLink: 'https://github.com/AnkurChouhan123',
      liveLink: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A responsive social media dashboard with real-time analytics and data visualization.',
      tags: ['React.js', 'Chart.js', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400?text=Dashboard',
      githubLink: 'https://github.com/AnkurChouhan123',
      liveLink: '#',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="relative w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(0deg,#000_2px,transparent_2px),linear-gradient(90deg,#000_2px,transparent_2px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white inline-block relative">
            Projects In Progress
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-black dark:bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Check back soon to see my latest work! I'm currently working on exciting projects that showcase my skills in web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative group aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/80 dark:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
                  >
                    <FaGithub className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-7 h-7" />
                  </motion.a>
                </div>
                {/* In Progress Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/60 dark:bg-white/60 px-6 py-3 rounded-lg">
                    <span className="text-white dark:text-black font-semibold text-lg">In Progress</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 