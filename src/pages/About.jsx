import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaRocket, FaUsers, FaCode, FaHeart, FaLock, FaCubes, FaGlobe, FaBrain, FaTools, FaUserLock, FaBriefcase, FaCheckCircle, FaCompass, FaWrench, FaGlobeAmericas, FaLightbulb, FaShoppingCart, FaTimes } from 'react-icons/fa'
import '../styles/About.css'
import LazyImage from '../components/LazyImage'

function About() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const ucFeatures = [
    {
      icon: <FaLock />,
      title: "Your Data. Your Models. Your Rules.",
      description: "Operate fully offline, hybrid, or cloud-connected—UC-1 respects your boundaries and privacy."
    },
    {
      icon: <FaCubes />,
      title: "Modular by Design",
      description: "Upgrade hardware, swap software stacks, deploy custom AI agents—without vendor lock-in."
    },
    {
      icon: <FaGlobe />,
      title: "Open Source & Community Powered",
      description: "Built on open standards and fueled by a vibrant community of creators and innovators."
    }
  ]

  const targetAudience = [
    {
      icon: <FaBrain />,
      title: "Thinkers & Tinkerers",
      description: "Who want control over their AI"
    },
    {
      icon: <FaCode />,
      title: "Developers & Agencies",
      description: "Needing production-grade tools"
    },
    {
      icon: <FaUserLock />,
      title: "Privacy Advocates",
      description: "Who don't trust the cloud"
    },
    {
      icon: <FaBriefcase />,
      title: "Enterprises & Teams",
      description: "Looking for edge deployment"
    }
  ]

  const roadmapPhases = [
    {
      icon: <FaCheckCircle />,
      phase: "Phase 0",
      title: "The Core is Forged",
      timeframe: "Completed: May 2025",
      description: "We've built the foundation. Unicorn Commander now ships with:",
      features: [
        "96GB RAM, 2TB NVMe, external mic support",
        "Fully local AI with LLMs, image generation, embeddings, and fast search",
        "Powerful agent tools with memory, autonomy, and task chaining",
        "KDE Plasma desktop experience with real-time voice interaction"
      ],
      quote: "UC-1 is no longer a concept—it's a battlefield-tested AI system you own."
    },
    {
      icon: <FaCompass />,
      phase: "Phase 1",
      title: "Your Squad, Your Rules",
      timeframe: "June – September 2025",
      description: "We're shipping units, opening the gates, and putting power in your hands:",
      features: [
        "First UC-1 units ship in early June",
        "Launch of Agent Marketplace (share or sell your custom agents!)",
        "New tutorials and 'Plug & Play' workflows for creators, entrepreneurs, and developers",
        "Community forums, Discord, and feedback loops go live"
      ],
      quote: "Create your own AI squad. Train it. Command it. Sell it if you want."
    },
    {
      icon: <FaWrench />,
      phase: "Phase 2",
      title: "Pro Features & Team Mode",
      timeframe: "Oct 2025 – March 2026",
      description: "We'll unlock collaborative tools and enterprise-grade options:",
      features: [
        "Build advanced multi-function agents",
        "Enhanced privacy, security, and offline compliance (HIPAA, GDPR)",
        "Team collaboration features for agencies and power users",
        "Developer APIs and SDKs for deeper customization"
      ],
      quote: "Whether you're solo or building for clients, UC-1 scales with you."
    },
    {
      icon: <FaGlobeAmericas />,
      phase: "Phase 3",
      title: "Take It Everywhere",
      timeframe: "Spring – Winter 2026",
      description: "Unicorn Commander goes mobile, global, and cloud-flexible:",
      features: [
        "Mobile Companion App: Command your AI from anywhere",
        "Multi-agent workflows with smart orchestration",
        "Cloud+Local Hybrid Options (your choice, your data)",
        "Strategic integrations & global partner ecosystem"
      ],
      quote: "Your unicorn squad—at home, on your phone, or anywhere you go."
    }
  ]

  // UC-1 product images
  const productImages = [
    {
      src: "/images/UC-1_on_table.jpeg",
      alt: "UC-1 Command Center - Front View",
      caption: "The UC-1 Command Center features a sleek, minimalist design with OcuLink for expandability."
    },
    {
      src: "/images/uc-1_hardware_specs.jpg",
      alt: "UC-1 Internal Hardware", 
      caption: "Powerful internal components include high-performance GPU, 96GB RAM, and 2TB NVMe storage."
    },
    {
      src: "/images/UC-1_desktop2.png",
      alt: "UC-1 in Action - Desktop View",
      caption: "A customized desktop based on KDE Plasma provides an intuitive interface for managing your AI workflows."
    }
  ]

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="About" 
        subtitle="Your Command Center for AI"
        backgroundVariant="about"
      />
      
      <main className="page-content">
        <div className="container">
          <motion.div 
            className="about-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>Unicorn Commander is your command center for AI—built for creators, entrepreneurs, and renegades who want to own their tools, customize their workflows, and crush cloud dependence.</p>
            <p>Developed by the imaginative minds at Magic Unicorn Unconventional Technology & Stuff Inc., UC-1 is a modular, fully local AI powerhouse wrapped in a slick, battle-tested shell. It combines the best of open source, cutting-edge automation, and military-grade design metaphors—all with a touch of unicorn magic.</p>
          </motion.div>

          {/* Product Image Gallery */}
          <motion.section 
            className="product-gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="gallery-grid">
              {productImages.map((image, index) => (
                <motion.div 
                  key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="image-container" onClick={() => openImageModal(image)}>
                    <img src={image.src} alt={image.alt} className="product-image clickable-image" />
                    <div className="image-overlay">
                      <span className="click-to-expand">Click to expand</span>
                    </div>
                  </div>
                  <p className="image-caption">{image.caption}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <section className="what-it-is-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="icon-title"><FaTools /> What It Is</span>
            </motion.h2>
            
            <motion.div 
              className="what-it-is-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>Unicorn Commander is a curated AI operating environment. It combines:</p>
              <ul className="feature-list">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Local LLM inference with GPU acceleration
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Lightning-fast vector search & reranking
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Embedded agents with memory and task autonomy
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Seamless support for image generation, research, speech-to-text, and more
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Modular services you own, not rent
                </motion.li>
              </ul>
              <p className="feature-conclusion">Whether you're building an empire, automating your life, or just refusing to be surveilled by Big Tech, UC-1 has your six.</p>
            </motion.div>
          </section>

          <div className="grid grid-2">
            <motion.div 
              className="card no-subscription-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <FaLock className="card-icon" />
                <h3>No Subscriptions. No Lock-In.</h3>
              </div>
              <div className="card-content">
                <p>Forget monthly fees. Unicorn Commander is a one-time purchase. Once you own it, it's yours—offline, private, and fully customizable. Like a digital homestead with serious firepower.</p>
              </div>
            </motion.div>

            <motion.div 
              className="card built-different-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-header">
                <FaCubes className="card-icon" />
                <h3>Built Different</h3>
              </div>
              <div className="card-content">
                <p>We don't chase trends—we define them. From KDE integration and ROCm GPU support to human-like AI agents and open graph RAG systems, UC-1 is a manifesto wrapped in a minicomputer.</p>
              </div>
            </motion.div>
          </div>

          <section className="who-its-for-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="icon-title"><FaUsers /> Who It's For</span>
            </motion.h2>
            <div className="audience-grid">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  className="audience-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="audience-icon">
                    {audience.icon}
                  </div>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="uc-features-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose UC-1?
            </motion.h2>
            <div className="values-grid">
              {ucFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="value-card feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="value-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="roadmap-section">
            <motion.div
              className="roadmap-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="icon-title"><FaRocket /> Roadmap: Where Unicorn Commander Is Going</span>
              </h2>
              <p className="roadmap-subtitle">...and How You Can Ride Along</p>
            </motion.div>

            <div className="roadmap-timeline">
              {roadmapPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  className={`roadmap-phase phase-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="phase-icon-container">
                    <div className="phase-icon">
                      {phase.icon}
                    </div>
                    <div className="phase-connector"></div>
                  </div>
                  
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">
                        <span className="phase-number">{phase.phase}</span> – {phase.title}
                      </h3>
                      <div className="phase-timeframe">{phase.timeframe}</div>
                    </div>
                    
                    <p className="phase-description">{phase.description}</p>
                    
                    <ul className="phase-features">
                      {phase.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + (featureIndex * 0.1) }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <blockquote className="phase-quote">
                      {phase.quote}
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="roadmap-next"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="next-icon">
                <FaLightbulb />
              </div>
              <h3>What's Next?</h3>
              <p>We're not building a product. We're building a movement. A rebellion against Big Cloud. A platform where you control the magic—and profit from it.</p>
              
              <div className="roadmap-cta">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/specs"
                    className="cta-button learn-more-button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Learn More About UC-1
                  </Link>
                </motion.div>
                
                <motion.a 
                  href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button order-now-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShoppingCart className="button-icon" /> Order Now - $1500
                </motion.a>
              </div>
            </motion.div>
          </section>

          <section className="philosophy-section">
            <motion.div
              className="philosophy-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Philosophy</h2>
              <div className="philosophy-content">
                <motion.p
                  className="philosophy-quote"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  "Clouds belong in the sky—not around your data."
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We believe AI should be transparent, adaptable, and yours to command. Unicorn Commander exists to restore digital autonomy, foster innovation, and challenge the status quo.
                </motion.p>
              </div>
            </motion.div>
          </section>

          <section className="join-section">
            <motion.div
              className="join-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Join the Movement</h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                UC-1 isn't just a machine—it's a mission. Whether you're a researcher, developer, creator, or privacy advocate, Unicorn Commander gives you the power to innovate without compromise. This is AI—on your terms.
              </motion.p>
              <motion.div
                className="cta-button-container"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Order Now - $1500
                </a>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <motion.div 
            className="image-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeImageModal}>
              <FaTimes />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <div className="modal-caption">
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default About
