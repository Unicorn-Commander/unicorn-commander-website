import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaLock, FaCogs, FaGlobe, FaRocket, FaSearch, 
  FaTools, FaBolt, FaExchangeAlt, FaShieldAlt, 
  FaSlack, FaChartLine, FaWrench, FaLeaf 
} from 'react-icons/fa'
import { FiSliders } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import '../styles/Features.css'

function Features() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 'privacy',
      icon: <FaLock />,
      title: "Privacy & Full Local Control",
      emoji: "🔐",
      description: "Your data stays with you—always. UC-1 runs powerful AI models locally with no mandatory cloud dependency, ensuring maximum privacy and compliance for sensitive workflows."
    },
    {
      id: 'modular',
      icon: <FaCogs />,
      title: "Modular Hardware & Software Stack",
      emoji: "⚙️",
      description: "Future-proof your AI setup with easy-to-upgrade, swappable components. Need more GPU power or storage? Swap or expand without replacing your entire system. Software is containerized for effortless updates and customizations."
    },
    {
      id: 'providers',
      icon: <FaGlobe />,
      title: "Supports All Top AI Providers",
      emoji: "🌐",
      description: "Seamlessly integrate with OpenAI, Anthropic, Google Gemini, Mistral, Cohere, Hugging Face, Together.ai, and more. Use your favorite cloud APIs or run open-source models locally—all on one platform."
    },
    {
      id: 'setup',
      icon: <FaRocket />,
      title: "One-Click AI & RAG Setup",
      emoji: "🚀",
      description: "Deploy AI agents, retrieval-augmented generation (RAG), and embeddings with a single click. No PhD required. UC-1 streamlines complex AI workflows into accessible, powerful tools."
    },
    {
      id: 'search',
      icon: <FaSearch />,
      title: "Advanced Search & Deep Data Retrieval",
      emoji: "🔍",
      description: "Leverage Qdrant-powered vector search to find exactly what you need in your data. Perfect for research, knowledge management, and content discovery."
    },
    {
      id: 'tools',
      icon: <FaTools />,
      title: "Custom Tools & Function Servers",
      emoji: "🛠️",
      description: "Run your own custom microservices and function servers locally via Docker containers. UC-1 gives developers full control to extend and tailor AI capabilities to fit unique workflows."
    },
    {
      id: 'performance',
      icon: <FaBolt />,
      title: "High-Performance Local GPU Acceleration",
      emoji: "⚡",
      description: "Harness dedicated GPU hardware optimized for AI inference and media generation, delivering blazing-fast performance without the latency of cloud calls."
    },
    {
      id: 'hybrid',
      icon: <FaExchangeAlt />,
      title: "Hybrid Local-Cloud Flexibility",
      emoji: "🔄",
      description: "Choose when to run models locally or tap into cloud providers seamlessly. UC-1 adapts to your workload and preferences, balancing speed, cost, and access to the latest models."
    },
    {
      id: 'security',
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      emoji: "🛡️",
      description: "Built with encrypted data storage and secure API key management to meet stringent compliance requirements like HIPAA and GDPR, ensuring your sensitive data stays protected."
    },
    {
      id: 'ease',
      icon: <FiSliders />,
      title: "Ease of Use & Setup",
      emoji: "🎛️",
      description: "Pre-configured Docker Compose containers and intuitive interfaces make setup and management effortless—even for users without deep technical expertise."
    },
    {
      id: 'scalability',
      icon: <FaChartLine />,
      title: "Scalability & Future-Proof Design",
      emoji: "📈",
      description: "UC-1's modular architecture and open-source core enable you to upgrade hardware or software, add new AI models, and expand capabilities as your needs grow."
    },
    {
      id: 'developer',
      icon: <FaWrench />,
      title: "Developer-Friendly APIs & Extensibility",
      emoji: "🔧",
      description: "Designed for innovators, UC-1 supports custom AI agents, API integrations, and workflow automation to adapt and evolve with your projects."
    },
    {
      id: 'sustainable',
      icon: <FaLeaf />,
      title: "Energy Efficient & Sustainable",
      emoji: "🌱",
      description: "Optimized for lower power consumption without sacrificing performance, UC-1 is designed with sustainability in mind."
    }
  ];

  const handleFeatureClick = (id) => {
    setActiveFeature(activeFeature === id ? null : id);
  };

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Features" 
        subtitle="Unleash the Power of Unicorn Commander"
        backgroundVariant="features"
      />
      
      <main className="page-content">
        <div className="container">
          <section className="features-hero-section">
            <motion.p
              className="features-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Unicorn Commander UC-1 combines cutting-edge AI technologies with a modular, privacy-first design to deliver an unmatched user experience. Here's what makes UC-1 the ultimate AI command center:
            </motion.p>
          </section>

          <section className="key-features-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div className="feature-header">
                    <div className="feature-emoji">{feature.emoji}</div>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                  </div>
                  <motion.div 
                    className="feature-description"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeFeature === feature.id ? 'auto' : 0,
                      opacity: activeFeature === feature.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{feature.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="visual-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The UC-1 Advantage
            </motion.h2>
            
            <div className="comparison-container">
              <motion.div 
                className="comparison-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="comparison-header">
                  <h3>UC-1</h3>
                  <div className="comparison-badge">Recommended</div>
                </div>
                <ul className="comparison-list">
                  <li><span className="check">✓</span> Full data privacy & control</li>
                  <li><span className="check">✓</span> No mandatory cloud dependency</li>
                  <li><span className="check">✓</span> Modular, upgradable hardware</li>
                  <li><span className="check">✓</span> Local & cloud model support</li>
                  <li><span className="check">✓</span> One-click AI deployment</li>
                  <li><span className="check">✓</span> No subscription fees</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="comparison-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="comparison-header">
                  <h3>Cloud-Only Solutions</h3>
                </div>
                <ul className="comparison-list">
                  <li><span className="cross">✗</span> Data leaves your control</li>
                  <li><span className="cross">✗</span> Requires internet connection</li>
                  <li><span className="cross">✗</span> Limited hardware control</li>
                  <li><span className="cross">✗</span> Vendor lock-in</li>
                  <li><span className="cross">✗</span> Complex setup for advanced features</li>
                  <li><span className="cross">✗</span> Ongoing subscription costs</li>
                </ul>
              </motion.div>
            </div>
          </section>

          <section className="architecture-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Modular Architecture
            </motion.h2>
            
            <motion.div 
              className="architecture-diagram"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="diagram-layer hardware-layer">
                <div className="layer-label">Hardware Layer</div>
                <div className="layer-items">
                  <div className="diagram-item">GPU</div>
                  <div className="diagram-item">CPU</div>
                  <div className="diagram-item">RAM</div>
                  <div className="diagram-item">Storage</div>
                </div>
              </div>
              
              <div className="diagram-connector"></div>
              
              <div className="diagram-layer software-layer">
                <div className="layer-label">Software Layer</div>
                <div className="layer-items">
                  <div className="diagram-item">Docker</div>
                  <div className="diagram-item">Unicorn OS</div>
                  <div className="diagram-item">Model Hub</div>
                </div>
              </div>
              
              <div className="diagram-connector"></div>
              
              <div className="diagram-layer api-layer">
                <div className="layer-label">API Layer</div>
                <div className="layer-items">
                  <div className="diagram-item">Local Models</div>
                  <div className="diagram-item">Cloud APIs</div>
                  <div className="diagram-item">Custom Tools</div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="cta-section">
            <motion.div
              className="cta-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Ready to Take Command?</h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Experience the future of AI with Unicorn Commander UC-1. Powerful, private, and built for innovators.
              </motion.p>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button className="cta-button primary">Pre-Order UC-1</button>
                <button className="cta-button secondary">Download Specs</button>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Features
