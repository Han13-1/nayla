import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import promoVideo from "./presentation.mp4";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const navigate = useNavigate();

  const teamMembers = [
    { name: "Mohamed Bennani", role: "Directeur Général", img: "/logo192.png" },
    { name: "Fatima Zahra El Amrani", role: "Directrice des Opérations", img: "/logo192.png" },
    { name: "Ahmed Tazi", role: "Directeur Commercial", img: "/logo192.png" },
    { name: "Leila Berrada", role: "Directrice Financière", img: "/logo192.png" }
  ];

  const features = [
    {
      title: "Zone d'Activité Intégrée",
      description: "Développement de galeries commerciales urbaines et extra-urbaines innovantes pour dynamiser l'économie locale et offrir des espaces commerciaux modernes.",
      img: "/logo192.png",
      link: "/produits/zone-activite/gallerie-commerciale-urbaine",
    },
    {
      title: "Complexes Touristiques",
      description: "Création d'hôtels, résidences touristiques et espaces d'animation pour offrir des expériences uniques et contribuer au développement touristique.",
      img: "/logo192.png",
      link: "/produits/hotel-complexe/hotellerie",
    },
    {
      title: "Immobilier Résidentiel",
      description: "Construction d'espaces de bureaux modernes, d'appartements et de villas alliant confort, design et durabilité pour répondre à tous vos besoins.",
      img: "/logo192.png",
      link: "/produits/immobilier/appartement-villa",
    }
  ];

  const services = [
    {
      title: "Conseil en Investissement",
      description: "Expertise en placement et investissement immobilier pour optimiser votre patrimoine.",
      icon: "📊"
    },
    {
      title: "Property Management",
      description: "Gestion complète de vos biens immobiliers avec professionnalisme et efficacité.",
      icon: "🏢"
    },
    {
      title: "Commercialisation",
      description: "Stratégies de commercialisation innovantes pour vos projets immobiliers.",
      icon: "📈"
    }
  ];

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.warn('Video failed to load. Using fallback background.');
    setIsVideoLoaded(false);
  };

  const handleLearnMore = (link) => {
    navigate(link);
  };

  return (
    <div className="home-wrapper">
      {/* ================= Hero Section ================= */}
      <section className="hero-section-home">
        <video 
          className="background-video-home" 
          autoPlay 
          loop 
          muted 
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src={promoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {!isVideoLoaded && (
          <div className="video-fallback-home"></div>
        )}
        
        <div className="video-overlay-home"></div>

        <div className="hero-content-home">
          <h1 className="brand-text-hero">NAYLA INVEST</h1>
          <p className="hero-tagline-home">Votre Vision, Notre Innovation</p>
        </div>
      </section>

      {/* ================= About Us Section ================= */}
      <section className="about-section-home">
        <div className="container-home">
          <div className="row-home">
            <div className="col-lg-6-home about-image-col">
              <div className="about-image-wrapper">
                <img src="/logo192.png" alt="Nayla Invest - À propos" className="about-image" />
                <div className="about-image-overlay"></div>
              </div>
            </div>
            <div className="col-lg-6-home about-content-col">
              <div className="about-content">
                <h2 className="section-heading-about">
                  <span>À Propos de Nous</span>
                </h2>
                <div className="about-text">
                  <p className="about-intro">
                    Nayla Invest est une société leader dans le développement immobilier et la gestion de projets innovants au Maroc. Avec une expertise reconnue dans divers secteurs, nous nous engageons à transformer vos visions en réalité.
                  </p>
                  <p className="about-description">
                    Notre approche intégrée combine excellence technique, innovation architecturale et durabilité environnementale pour créer des espaces qui marquent leur époque et enrichissent les communautés.
                  </p>
                  <div className="about-stats">
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Années d'Expérience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Projets Réalisés</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Satisfaction Client</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn-about-primary"
                  onClick={() => navigate('/qui-sommes-nous')}
                >
                  En Savoir Plus Sur Nous
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Features/Products Section ================= */}
      <section className="features-section-home">
        <div className="container-home">
          <h2 className="section-heading-home">
            <span>Nos Produits</span>
          </h2>
          <div className="feature-container-home">
            {features.map((feature, index) => (
              <div key={index} className={`feature-item-home ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="feature-image-home">
                  <img src={feature.img} alt={feature.title} />
                </div>
                <div className="feature-content-home">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <button 
                    className="btn-feature-home"
                    onClick={() => handleLearnMore(feature.link)}
                  >
                    En Savoir Plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Services Section ================= */}
      <section className="services-section-home">
        <div className="container-home">
          <h2 className="section-heading-hometext-center">Nos Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-home">
                <div className="service-icon-home">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <button 
                  className="btn-service-home"
                  onClick={() => navigate('/services/conseil-placement')}
                >
                  Découvrir →
                </button>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <button 
              className="btn-primary-custom-home"
              onClick={() => navigate('/services/conseil-placement')}
            >
              Voir Tous Nos Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= Meet the Team ================= */}
      <section className="team-section-home">
        <div className="container-home">
          <h2 className="section-heading-home text-center">Notre Équipe</h2>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div className="team-card-home" key={i}>
                <div className="team-img-wrapper-home">
                  <img src={member.img} alt={member.name} className="team-img-home" />
                </div>
                <div className="team-info-home">
                  <h5 className="team-name-home">{member.name}</h5>
                  <p className="team-role-home">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Partners Slider ================= */}
      <section className="partners-section-home">
        <div className="container-home">
          <h2 className="section-heading-home text-center">Nos Partenaires de Confiance</h2>
          <div className="partners-slider-home">
            <div className="slide-track-home">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="slide-home">
                  <img src="/logo192.png" alt={`Partner ${(i % 5) + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section className="contact-section-home">
        <div className="container-home">
          <h2 className="section-heading-home text-center">Contactez Nous</h2>
          <div className="contact-wrapper">
            <div className="contact-form-wrapper-home">
              <div className="contact-form-home">
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="name" className="form-label-home">Nom Complet</label>
                    <input 
                      type="text" 
                      className="form-control-home" 
                      id="name" 
                      placeholder="Entrez votre nom complet"
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="email" className="form-label-home">Adresse Email</label>
                    <input 
                      type="email" 
                      className="form-control-home" 
                      id="email" 
                      placeholder="Entrez votre email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label-home">Sujet</label>
                  <input 
                    type="text" 
                    className="form-control-home" 
                    id="subject" 
                    placeholder="Entrez le sujet"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label-home">Message</label>
                  <textarea 
                    className="form-control-home" 
                    id="message" 
                    rows="5" 
                    placeholder="Tapez votre message ici..."
                  ></textarea>
                </div>
                <div className="form-submit">
                  <button 
                    type="button" 
                    className="btn-contact-home"
                    onClick={() => {
                      const name = document.getElementById('name').value;
                      const email = document.getElementById('email').value;
                      const subject = document.getElementById('subject').value;
                      const message = document.getElementById('message').value;
                      
                      if (name && email && subject && message) {
                        alert('Message envoyé avec succès! Nous vous contacterons bientôt.');
                        document.getElementById('name').value = '';
                        document.getElementById('email').value = '';
                        document.getElementById('subject').value = '';
                        document.getElementById('message').value = '';
                      } else {
                        alert('Veuillez remplir tous les champs.');
                      }
                    }}
                  >
                    Envoyer Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Styles ================= */}
      <style jsx>{`
        /* Reset and base styles specific to home page */
        .home-wrapper {
          width: 100%;
          overflow-x: hidden;
        }

        .home-wrapper * {
          box-sizing: border-box;
        }

        /* Container system */
        .container-home {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .row-home {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
        }

        .col-lg-6-home {
          flex: 1;
          min-width: 300px;
        }

        /* HERO SECTION */
        .hero-section-home {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #fff;
          padding-top: 80px;
        }

        .background-video-home {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.8) contrast(1.1);
        }

        .video-fallback-home {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          z-index: 1;
        }

        .video-overlay-home {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
          z-index: 2;
        }

        .hero-content-home {
          position: relative;
          z-index: 3;
          max-width: 800px;
          padding: 0 20px;
          animation: heroEnter 1.5s ease-out;
        }

        @keyframes heroEnter {
          from { 
            opacity: 0;
            transform: translateY(50px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .brand-text-hero {
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          color: #FFFFFF;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
          letter-spacing: -2px;
          line-height: 1;
        }

        .hero-tagline-home {
          font-size: clamp(1.2rem, 3vw, 2rem);
          letter-spacing: 4px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          font-weight: 300;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
          text-transform: uppercase;
        }

        .hero-cta-home {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.8s forwards;
        }

        .btn-hero-primary-home,
        .btn-hero-outline-home {
          padding: 16px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 30px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          border: 2px solid #FFFFFF;
        }

        .btn-hero-primary-home {
          background: #FFFFFF;
          color: #000000;
        }

        .btn-hero-primary-home:hover {
          background: transparent;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        .btn-hero-outline-home {
          background: transparent;
          color: #FFFFFF;
        }

        .btn-hero-outline-home:hover {
          background: #FFFFFF;
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        /* ABOUT SECTION */
        .about-section-home {
          padding: 8rem 0;
          background: #FFFFFF;
          position: relative;
        }

        .about-image-col {
          display: flex;
          justify-content: center;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          max-width: 500px;
          width: 100%;
        }

        .about-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .about-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
          transition: opacity 0.3s ease;
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.05);
        }

        .about-image-wrapper:hover .about-image-overlay {
          opacity: 0.5;
        }

        .about-content-col {
          display: flex;
          align-items: center;
        }

        .about-content {
          padding: 2rem 0;
        }

        .section-heading-about {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          text-transform: uppercase;
          color: #000000;
          margin-bottom: 2rem;
          position: relative;
          letter-spacing: -1px;
        }

        .section-heading-about span {
          position: relative;
        }

        .section-heading-about span::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 4px;
          background: #000000;
          border-radius: 2px;
        }

        .about-text {
          margin-bottom: 3rem;
        }

        .about-intro {
          font-size: 1.3rem;
          color: #000000;
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .about-description {
          font-size: 1.1rem;
          color: #666666;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .about-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
          flex: 1;
          min-width: 120px;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .btn-about-primary {
          background: #000000;
          color: #FFFFFF;
          border: none;
          padding: 16px 40px;
          border-radius: 30px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-about-primary:hover {
          background: #333333;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* SECTION HEADINGS */
        .section-heading-home {
          display: flex;
          align-items: center;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          text-transform: uppercase;
          color: #000000;
          margin-bottom: 5rem;
          position: relative;
          letter-spacing: -1px;
        }

        .section-heading-home span {
          white-space: nowrap;
          padding-right: 3rem;
          position: relative;
        }

        .section-heading-home::after {
          content: "";
          flex: 1;
          height: 4px;
          background: linear-gradient(90deg, #000000 0%, #333333 50%, transparent 100%);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .section-heading-home.text-center {
          justify-content: center;
          text-align: center;
        }

        .section-heading-home.text-center::after {
          display: none;
        }

        /* FEATURES SECTION */
        .features-section-home {
          padding: 7rem 0;
          background: #f8f9fa;
          position: relative;
        }

        .feature-container-home {
          display: flex;
          flex-direction: column;
          gap: 6rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-item-home {
          display: flex;
          align-items: center;
          gap: 4rem;
          padding: 3rem 0;
          opacity: 0;
          animation: slideIn 0.8s ease forwards;
        }

        .feature-item-home:nth-child(1) { animation-delay: 0.1s; }
        .feature-item-home:nth-child(2) { animation-delay: 0.2s; }
        .feature-item-home:nth-child(3) { animation-delay: 0.3s; }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        .feature-item-home.reverse {
          flex-direction: row-reverse;
          animation-name: slideInReverse;
        }

        @keyframes slideInReverse {
          to {
            opacity: 1;
            transform: translateX(0);
          }
          from {
            opacity: 0;
            transform: translateX(50px);
          }
        }

        .feature-image-home {
          flex: 1;
          text-align: center;
        }

        .feature-image-home img {
          max-width: 100%;
          width: 400px;
          height: 300px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
        }

        .feature-image-home img:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
        }

        .feature-content-home {
          flex: 1;
          padding: 1rem;
        }

        .feature-content-home h3 {
          font-size: clamp(2rem, 3vw, 2.8rem);
          color: #000000;
          margin-bottom: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          position: relative;
          display: inline-block;
        }

        .feature-content-home h3::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: #000000;
          border-radius: 2px;
        }

        .feature-content-home p {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }

        .btn-feature-home {
          padding: 14px 35px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          border: 2px solid #000000;
          background: transparent;
          color: #000000;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .btn-feature-home::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #000000;
          transition: left 0.4s ease;
          z-index: -1;
        }

        .btn-feature-home:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-feature-home:hover::before {
          left: 0;
        }

        /* SERVICES SECTION */
        .services-section-home {
          padding: 7rem 0;
          background: #FFFFFF;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card-home {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .service-card-home::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: #000000;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .service-card-home:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          border-color: #000000;
        }

        .service-card-home:hover::before {
          transform: scaleX(1);
        }

        .service-icon-home {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          transition: transform 0.4s ease;
        }

        .service-card-home:hover .service-icon-home {
          transform: scale(1.2);
        }

        .service-card-home h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 1rem;
        }

        .service-card-home p {
          color: #666;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .btn-service-home {
          background: transparent;
          color: #000000;
          border: none;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          position: relative;
          padding-right: 20px;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .btn-service-home::after {
          content: "→";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }

        .btn-service-home:hover {
          color: #000000;
        }

        .btn-service-home:hover::after {
          transform: translateY(-50%) translateX(5px);
        }

        .services-cta {
          text-align: center;
        }

        .btn-primary-custom-home {
          background: #000000;
          color: #FFFFFF;
          border: none;
          padding: 16px 40px;
          border-radius: 30px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary-custom-home:hover {
          background: #333333;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* TEAM SECTION */
        .team-section-home {
          padding: 7rem 0;
          background: #f8f9fa;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .team-card-home {
          background: #FFFFFF;
          border-radius: 20px;
          text-align: center;
          padding: 2rem 1rem 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .team-card-home::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: #000000;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .team-card-home:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #000000;
        }

        .team-card-home:hover::before {
          transform: scaleX(1);
        }

        .team-img-wrapper-home {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease;
        }

        .team-card-home:hover .team-img-wrapper-home {
          transform: scale(1.1);
        }

        .team-img-home {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-name-home {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 0.3rem;
        }

        .team-role-home {
          font-size: 0.95rem;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* PARTNERS SECTION */
        .partners-section-home {
          padding: 7rem 0;
          background: #FFFFFF;
        }

        .partners-slider-home {
          overflow: hidden;
          position: relative;
          margin-top: 4rem;
        }

        .slide-track-home {
          display: flex;
          width: calc(250px * 20);
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 10)); }
        }

        .slide-home {
          width: 250px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        .slide-home img {
          max-width: 150px;
          max-height: 80px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .slide-home img:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        /* CONTACT SECTION */
        .contact-section-home {
          padding: 7rem 0;
          background: #f8f9fa;
        }

        .contact-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        }

        .contact-form-wrapper-home {
          background: #FFFFFF;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .contact-form-home .form-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .contact-form-home .form-col {
          flex: 1;
          min-width: 200px;
        }

        .contact-form-home .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label-home {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #000000;
        }

        .form-control-home {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-control-home:focus {
          border-color: #000000;
          outline: none;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        }

        .form-control-home::placeholder {
          color: #aaa;
        }

        textarea.form-control-home {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          text-align: center;
          margin-top: 2rem;
        }

        .btn-contact-home {
          background: #000000;
          color: #FFFFFF;
          border: none;
          padding: 16px 40px;
          border-radius: 30px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-contact-home:hover {
          background: #333333;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .container-home {
            max-width: 960px;
          }
        }

        @media (max-width: 992px) {
          .row-home {
            flex-direction: column;
          }

          .col-lg-6-home {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .feature-item-home,
          .feature-item-home.reverse {
            flex-direction: column;
            text-align: center;
          }

          .feature-image-home,
          .feature-content-home {
            width: 100%;
          }

          .feature-image-home img {
            width: 100%;
            max-width: 500px;
            height: auto;
          }

          .feature-content-home h3::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .section-heading-about span::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .about-content {
            text-align: center;
          }

          .btn-about-primary {
            margin: 0 auto;
            display: block;
          }
        }

        @media (max-width: 768px) {
          .hero-section-home {
            padding-top: 60px;
          }

          .brand-text-hero {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }

          .hero-tagline-home {
            font-size: clamp(1rem, 3vw, 1.5rem);
            letter-spacing: 2px;
          }

          .section-heading-home {
            font-size: clamp(2rem, 6vw, 3rem);
            margin-bottom: 3rem;
          }

          .section-heading-home::after {
            display: none;
          }

          .section-heading-home span {
            padding-right: 0;
          }

          .about-stats {
            justify-content: center;
          }

          .stat-item {
            min-width: 100px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto 4rem;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .container-home {
            padding: 0 15px;
          }

          .hero-cta-home {
            flex-direction: column;
            align-items: center;
          }

          .btn-hero-primary-home,
          .btn-hero-outline-home {
            width: 100%;
            max-width: 300px;
            margin: 0.5rem 0;
          }

          .about-section-home,
          .features-section-home,
          .services-section-home,
          .team-section-home,
          .partners-section-home,
          .contact-section-home {
            padding: 4rem 0;
          }

          .about-intro {
            font-size: 1.1rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .feature-content-home h3 {
            font-size: 1.8rem;
          }

          .feature-content-home p {
            font-size: 1rem;
          }

          .contact-form-home .form-row {
            flex-direction: column;
          }

          .contact-form-home .form-col {
            width: 100%;
          }

          .slide-track-home {
            animation-duration: 30s;
          }

          .slide-home {
            width: 200px;
          }

          .slide-home img {
            max-width: 120px;
            max-height: 60px;
          }
        }

        @media (max-width: 400px) {
          .brand-text-hero {
            font-size: 2.5rem;
          }

          .btn-hero-primary-home,
          .btn-hero-outline-home {
            padding: 12px 30px;
            font-size: 1rem;
          }

          .section-heading-home {
            font-size: 1.8rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .team-card-home {
            max-width: 280px;
            margin: 0 auto;
          }
        }

        /* Print styles */
        @media print {
          .background-video-home,
          .video-overlay-home {
            display: none;
          }

          .hero-section-home {
            background: #f8f9fa;
            color: #000000;
            height: auto;
            padding: 2rem 0;
          }

          .brand-text-hero,
          .hero-tagline-home {
            color: #000000;
          }

          .btn-hero-primary-home,
          .btn-hero-outline-home {
            display: none;
          }

          .partners-slider-home {
            overflow: visible;
          }

          .slide-track-home {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}