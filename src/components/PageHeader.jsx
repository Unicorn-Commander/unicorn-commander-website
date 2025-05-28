import React from 'react'
import { motion } from 'framer-motion'
import '../styles/PageHeader.css'

function PageHeader({ title, subtitle, backgroundVariant = 'default' }) {
  return (
    <header className={`page-header ${backgroundVariant}`}>
      <div className="header-content">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  )
}

export default PageHeader
