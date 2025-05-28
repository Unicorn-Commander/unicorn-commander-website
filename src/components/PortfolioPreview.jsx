import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PortfolioPreview = () => {
  const projects = [
    {
      title: "AI Influencer Platform",
      category: "Artificial Intelligence",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Radiant Quill",
      category: "Creative Technology",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Mystic Protector",
      category: "Security Solutions",
      image: "https://via.placeholder.com/400x300"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Featured Projects</h2>
          <p className="text-gray-600">Discover our magical creations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm opacity-80">{project.category}</p>
              </div>
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
            to="/portfolio"
            className="text-primary hover:text-opacity-80 transition-all"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview
