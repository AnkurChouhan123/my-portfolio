import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const API_URL = 'http://localhost:5000'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setError(error.message || 'Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(30deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(150deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(30deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(150deg,#000_12%,transparent_12.5%,transparent_87%,#000_87.5%,#000),linear-gradient(60deg,#77777777_25%,transparent_25.5%,transparent_75%,#77777777_75%,#77777777),linear-gradient(60deg,#77777777_25%,transparent_25.5%,transparent_75%,#77777777_75%,#77777777)] bg-[size:80px_140px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white inline-block relative">
            Contact Me
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-black dark:bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's get in touch! Feel free to reach out through the form below or connect with me on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 dark:text-white transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 dark:text-white transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </motion.button>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center font-medium"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Feel free to reach out to me through any of these platforms. I'll get back to you as soon as possible!
              </p>
            </div>
            <div className="space-y-6">
              <motion.a
                href="mailto:ankurchouhan265@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors">
                  <FaEnvelope className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <span className="font-medium">ankurchouhan265@gmail.com</span>
              </motion.a>
            
            
              
              <motion.a
                href="https://github.com/AnkurChouhan123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors">
                  <FaGithub className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <span className="font-medium">Github</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ankur-chouhan-83607a2a6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors">
                  <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 