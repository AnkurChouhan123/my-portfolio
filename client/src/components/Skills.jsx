import { motion } from 'framer-motion'
import { FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'Java Core', icon: FaJava, level: 75 },
        { name: 'JavaScript', icon: FaJs, level: 70 },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: FaHtml5, level: 70 },
        { name: 'CSS', icon: FaCss3, level: 65 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 60 },
        { name: 'React.js', icon: FaReact, level: 70 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: FaNodeJs, level: 75 },
        { name: 'Express.js', icon: SiExpress, level: 70 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: SiMongodb, level: 70 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="skills" className="relative w-full py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white inline-block relative">
            Skills & Technologies
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-black dark:bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white relative inline-block">
                {skillGroup.category}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
                        >
                          <skill.icon className="w-5 h-5 text-black dark:text-white" />
                        </motion.div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 