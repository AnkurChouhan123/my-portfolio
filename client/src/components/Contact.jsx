import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    emailjs.sendForm(
      'service_u1ewt6h',
      'template_hwkfmgu',
      formRef.current,
      'D1la4F5N4aLOAgscw'
    ).then(
      () => {
        setStatus('success')
        formRef.current.reset()
      },
      (error) => {
        console.error('EmailJS Error:', error)
        setStatus('error')
        setError('Failed to send message. Please try again.')
      }
    )
  }

  return (
    <section id="contact" className="relative w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(...)] bg-[size:80px_140px]" />

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
            <motion.span className="absolute bottom-0 left-0 w-full h-1 bg-black dark:bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }} />
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="input-style text-zinc-800 p-2 w-4/5 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="input-style text-zinc-800 p-2 w-4/5 rounded-md"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="input-style resize-none w-4/5 text-zinc-800 p-2 rounded-md"
                  placeholder="Your message..."
                />
              </div>
              {/* Hidden Time Field */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="submit-button border-neutral-900 bg-blue-600"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
              {status === 'success' && (
                <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">{error}</p>
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
              <h3 className="text-2xl font-semibold text-black dark:text-white">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Feel free to reach out to me through any of these platforms. I'll get back to you as soon as possible!
              </p>
            </div>
            <div className="space-y-6">
              <motion.a href="mailto:ankurchouhan265@gmail.com" whileHover={{ x: 10 }} className="contact-link flex items-center gap-4">
                <div className="contact-icon"><FaEnvelope /></div>
                <span>ankurchouhan265@gmail.com</span>
              </motion.a>
              <motion.a href="https://github.com/AnkurChouhan123" target="_blank" rel="noopener noreferrer" whileHover={{ x: 10 }} className="contact-link flex items-center gap-4">
                <div className="contact-icon"><FaGithub /></div>
                <span>Github</span>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/ankur-chouhan-83607a2a6" target="_blank" rel="noopener noreferrer" whileHover={{ x: 10 }} className="contact-link flex items-center gap-4">
                <div className="contact-icon"><FaLinkedin /></div>
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
