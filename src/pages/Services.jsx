import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaMagic, FaRobot, FaCode, FaChartLine, FaPalette, FaCogs } from 'react-icons/fa'
import '../styles/Services.css'

function Services() {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      description: "Intelligent systems that learn, adapt, and evolve to meet your needs",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Machine Learning Integration",
        "Predictive Analytics"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Automation",
      description: "Streamline your workflows with our custom automation solutions",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Integration Services",
        "Performance Monitoring"
      ]
    },
    {
      icon: <FaCode />,
      title: "Custom Development",
      description: "Tailored software solutions designed to solve your unique challenges",
      features: [
        "Web Applications",
        "Mobile Development",
        "API Integration",
        "Cloud Solutions"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Performance Metrics",
        "Custom Reporting"
      ]
    },
    {
      icon: <FaPalette />,
      title: "Creative Tech",
      description: "Innovative solutions that combine art and technology",
      features: [
        "Interactive Experiences",
        "Digital Art Integration",
        "Creative Coding",
        "Experimental Tech"
      ]
    },
    {
      icon: <FaMagic />,
      title: "Innovation Lab",
      description: "Explore cutting-edge technologies and experimental solutions",
      features: [
        "Proof of Concepts",
        "R&D Projects",
        "Technology Exploration",
        "Innovation Workshops"
      ]
    }
  ];

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Our Services" 
        subtitle="Discover our magical solutions tailored to your needs"
        backgroundVariant="services"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaMagic className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Services
