import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGamepad, FaRocket, FaLightbulb, FaCode, FaMagic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceOption = ({ icon: Icon, title, description, metrics, features, linkTo, buttonText }) => (
  <motion.div 
    className="service-option"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="service-option-icon">
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    {metrics && (
      <div className="metrics">
        {metrics.map((metric, index) => (
          <div key={index} className="metric">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    )}
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index}>
          <FaMagic className="feature-icon" />
          {feature}
        </li>
      ))}
    </ul>
    <Link to={linkTo} className="cta-button">
      {buttonText}
    </Link>
  </motion.div>
);

export default function ServiceOptions() {
  const businessSolutions = {
    icon: FaBriefcase,
    title: "Transform Your Business",
    description: "Leverage cutting-edge AI and automation to streamline operations and drive growth",
    metrics: [
      { value: "97%", label: "Client Satisfaction" },
      { value: "45%", label: "Avg. Efficiency Gain" }
    ],
    features: [
      "Custom AI Solutions & Integration",
      "Process Automation & Optimization",
      "Data Analytics & Insights",
      "Enterprise Software Development"
    ],
    linkTo: "/services",
    buttonText: "Explore Business Solutions"
  };

  const funProjects = {
    icon: FaGamepad,
    title: "Innovate & Create",
    description: "Turn your creative ideas into reality with our experimental tech playground",
    metrics: [
      { value: "100+", label: "Projects Launched" },
      { value: "15+", label: "Tech Stacks" }
    ],
    features: [
      "Interactive Web Experiences",
      "Creative Coding Projects",
      "AI Art & Generative Design",
      "Experimental Tech Demos"
    ],
    linkTo: "/projects",
    buttonText: "Start Creating"
  };

  return (
    <div className="service-options-container">
      <ServiceOption {...businessSolutions} />
      <ServiceOption {...funProjects} />
    </div>
  );
}
