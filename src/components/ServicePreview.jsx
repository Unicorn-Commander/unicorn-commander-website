import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ServicePreview = () => {
  const services = [
    {
      icon: <FiCpu size={24} />,
      title: "AI & Automation",
      description: "Cutting-edge AI solutions to automate and enhance your business processes."
    },
    {
      icon: <FiLayers size={24} />,
      title: "Creative Tech",
      description: "Innovative lighting installations and interactive digital experiences."
    },
    {
      icon: <FiCode size={24} />,
      title: "Custom Solutions",
      description: "Tailored software solutions that bring your ideas to life."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Our Services</h2>
          <p className="text-gray-600">Transforming ideas into magical solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="text-primary hover:text-opacity-80 transition-all"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePreview
