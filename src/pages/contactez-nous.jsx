import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Notre Adresse",
      details: ["11 Bis Lotissement NAHDA rue 31 etage 01 apt 03", "Tanger, Maroc, 90000"]
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      details: ["+212 661-383661", "+212 661-040636", "+212 659-317088"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["contact@nayla-invest.com", "press@nayla-invest.com"]
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contactez-Nous</h1>
          <p>Parlons de votre prochain projet immobilier</p>
        </motion.div>
      </section>

      {/* Main Content */}

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="company-info">
                <img src="/naylalogo.png" alt="Nayla Invest Logo" className="company-logo" />
                <p className="company-description">
                  Leader dans le développement immobilier et la gestion de projets innovants au Maroc
                </p>
              </div>
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="info-icon">{info.icon}</span>
                    <h3>{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <a href="https://facebook.com" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://twitter.com" aria-label="Twitter"><Twitter size={18} /></a>
                <a href="https://instagram.com" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group naming">
                    <label htmlFor="name">Nom Complet</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="5"
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer le Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #fff;
        }

        .contact-hero {
          height: 40vh;
          min-height: 300px;
          background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop') center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .contact-content {
          padding: 5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }

        .company-info {
          margin-bottom: 3rem;
        }

        .company-logo {
          width: 150px;
          height: auto;
          margin-bottom: 1.5rem;
        }

        .company-description {
          color: #666;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .info-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-card {
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .info-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .info-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #000;
        }

        .info-card p {
          color: #666;
          margin: 0.3rem 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          padding: 0.8rem 1.5rem;
          border: 2px solid #000;
          border-radius: 25px;
          color: #000;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #000;
          color: #fff;
        }

        .contact-form-wrapper {
          background: #f8f9fa;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #000;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          
        }
        .naming {
            grid-column: span 2;    
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #000;
          outline: none;
        }

        button {
          width: 100%;
          padding: 1rem;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background: #333;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-content {
            padding: 3rem 0;
          }

          .contact-form-wrapper {
            padding: 2rem;
          }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border: 2px solid #000;
          border-radius: 25px;
          color: #000;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .form-group label {
          font-weight: 600;
          color: #000;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .contact-form > .form-group {
          grid-column: 1 / -1;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .social-links {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}