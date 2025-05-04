import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'LNCTE, Bhopal',
      period: '2nd Year, 4th Semester',
      description: 'Currently pursuing my B.Tech degree with a focus on computer science and software engineering.',
    },
  ]

  return (
    <section id="education" className="relative w-full py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(60deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(120deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(180deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000)] bg-[size:40px_70px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white inline-block relative">
            Education
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-black dark:bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey in the field of Computer Science
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black dark:bg-white origin-top"
          />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full border-4 border-black dark:border-white shadow-lg flex items-center justify-center"
              >
                <FaGraduationCap className="w-6 h-6 text-black dark:text-white" />
              </motion.div>

              {/* Content */}
              <div className="ml-auto w-1/2 pl-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="text-black dark:text-white font-medium mb-2">{item.institution}</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                    <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mr-2" />
                    {item.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 