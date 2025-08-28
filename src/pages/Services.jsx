import React, { useEffect, useState } from 'react';

export default function Services() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Add Bootstrap CSS dynamically
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(bootstrapLink);
    };
  }, []);

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  const mainServices = [
    {
      id: 1,
      icon: "🏬",
      title: "Galeries Commerciales",
      subtitle: "Gestion & Commercialisation",
      description: "Expertise complète dans la gestion des centres commerciaux, de la sélection des enseignes à l'optimisation de l'expérience client.",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=500&fit=crop",
      features: [
        "Sélection rigoureuse des enseignes",
        "Optimisation des flux clients",
        "Gestion des espaces communs",
        "Animation commerciale",
        "Maintenance technique",
        "Stratégies marketing intégrées"
      ],
      stats: { projects: "50+", surface: "500k m²", satisfaction: "98%" }
    },
    {
      id: 2,
      icon: "🏨",
      title: "Complexes Touristiques & Hôteliers",
      subtitle: "Développement & Management",
      description: "Accompagnement complet des projets touristiques et hôteliers, du concept à l'exploitation opérationnelle.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      features: [
        "Étude de faisabilité",
        "Conception architecturale",
        "Gestion hôtelière",
        "Services de conciergerie",
        "Marketing touristique",
        "Optimisation des revenus"
      ],
      stats: { projects: "25+", rooms: "2000+", occupancy: "85%" }
    },
    {
      id: 3,
      icon: "🏢",
      title: "Espaces de Bureaux",
      subtitle: "Solutions Professionnelles",
      description: "Création d'environnements de travail modernes et flexibles adaptés aux besoins des entreprises contemporaines.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
      features: [
        "Design ergonomique",
        "Technologies intégrées",
        "Espaces modulables",
        "Services partagés",
        "Sécurité avancée",
        "Certification environnementale"
      ],
      stats: { projects: "100+", surface: "200k m²", clients: "500+" }
    },
    {
      id: 4,
      icon: "🏭",
      title: "Zones d'Activités Professionnelles",
      subtitle: "Développement Industriel",
      description: "Aménagement et gestion de zones d'activités optimisées pour les besoins industriels et logistiques.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop",
      features: [
        "Aménagement sur-mesure",
        "Infrastructure technique",
        "Logistique optimisée",
        "Services aux entreprises",
        "Conformité réglementaire",
        "Développement durable"
      ],
      stats: { projects: "30+", surface: "1M m²", companies: "200+" }
    }
  ];

  const additionalServices = [
    {
      icon: "📊",
      title: "Conseil Stratégique",
      description: "Analyse de marché et conseil en investissement immobilier",
      color: "#005F73"
    },
    {
      icon: "💼",
      title: "Gestion Patrimoniale",
      description: "Optimisation et valorisation de vos actifs immobiliers",
      color: "#2A9D8F"
    },
    {
      icon: "🔧",
      title: "Facility Management",
      description: "Maintenance et gestion technique complète",
      color: "#E76F51"
    },
    {
      icon: "📈",
      title: "Marketing Immobilier",
      description: "Stratégies de commercialisation innovantes",
      color: "#F4A261"
    },
    {
      icon: "⚖️",
      title: "Assistance Juridique",
      description: "Accompagnement juridique et réglementaire",
      color: "#264653"
    },
    {
      icon: "🌱",
      title: "Développement Durable",
      description: "Solutions éco-responsables et certifications",
      color: "#2A9D8F"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse & Diagnostic",
      description: "Étude approfondie de votre projet et du marché",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Stratégie Personnalisée",
      description: "Élaboration d'une approche sur-mesure",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Mise en Œuvre",
      description: "Déploiement opérationnel avec suivi constant",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Optimisation Continue",
      description: "Amélioration permanente des performances",
      icon: "📈"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="services-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className={`hero-content ${isVisible('hero') ? 'animate-up' : ''}`}>
                <div className="hero-badge">Nos Services</div>
                <h1 className="hero-title">
                  Solutions Immobilières
                  <span className="text-gradient"> Sur-Mesure</span>
                </h1>
                <p className="hero-subtitle">
                  De la conception à l'exploitation, nous accompagnons vos projets immobiliers 
                  avec expertise et innovation pour maximiser leur potentiel.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>200+</h3>
                    <p>Projets Réalisés</p>
                  </div>
                  <div className="stat-item">
                    <h3>15+</h3>
                    <p>Années d'Expérience</p>
                  </div>
                  <div className="stat-item">
                    <h3>98%</h3>
                    <p>Satisfaction Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Main Services */}
      <section id="main-services" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className={`section-header ${isVisible('main-services') ? 'animate-up' : ''}`}>
                <div className="section-badge">Expertises Principales</div>
                <h2 className="section-title">Nos Domaines d'Excellence</h2>
                <p className="section-subtitle">
                  Quatre secteurs d'activité où notre expertise fait la différence
                </p>
              </div>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="service-tabs">
                {mainServices.map((service, index) => (
                  <button
                    key={service.id}
                    className={`service-tab ${activeService === index ? 'active' : ''}`}
                    onClick={() => setActiveService(index)}
                  >
                    <span className="tab-icon">{service.icon}</span>
                    <span className="tab-title">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Service Content */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={`service-content ${isVisible('main-services') ? 'animate-left' : ''}`}>
                <div className="service-header">
                  <div className="service-icon-large">
                    {mainServices[activeService].icon}
                  </div>
                  <div>
                    <h3 className="service-title">{mainServices[activeService].title}</h3>
                    <p className="service-subtitle">{mainServices[activeService].subtitle}</p>
                  </div>
                </div>
                <p className="service-description">
                  {mainServices[activeService].description}
                </p>
                <div className="service-features">
                  <h5>Services Inclus:</h5>
                  <ul className="features-list">
                    {mainServices[activeService].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-stats-mini">
                  {Object.entries(mainServices[activeService].stats).map(([key, value]) => (
                    <div key={key} className="stat-mini">
                      <strong>{value}</strong>
                      <span>{key === 'projects' ? 'Projets' : key === 'surface' ? 'Surface' : key === 'satisfaction' ? 'Satisfaction' : key === 'rooms' ? 'Chambres' : key === 'occupancy' ? 'Taux d\'occupation' : key === 'clients' ? 'Clients' : key === 'companies' ? 'Entreprises' : key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`service-image ${isVisible('main-services') ? 'animate-right' : ''}`}>
                <div className="image-container">
                  <img 
                    src={mainServices[activeService].image} 
                    alt={mainServices[activeService].title}
                    className="img-fluid rounded-3"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h4>Excellence & Innovation</h4>
                      <p>Solutions personnalisées</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional-services" className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className={`section-header ${isVisible('additional-services') ? 'animate-up' : ''}`}>
                <div className="section-badge">Services Complémentaires</div>
                <h2 className="section-title">Un Accompagnement Complet</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className={`additional-service-card ${isVisible('additional-services') ? 'animate-up' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-icon-bg" style={{ backgroundColor: service.color }}>
                    <span className="service-icon">{service.icon}</span>
                  </div>
                  <h5 className="service-name">{service.title}</h5>
                  <p className="service-desc">{service.description}</p>
                  <button className="service-btn" style={{ borderColor: service.color, color: service.color }}>
                    En Savoir Plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className={`section-header ${isVisible('process') ? 'animate-up' : ''}`}>
                <div className="section-badge">Notre Méthodologie</div>
                <h2 className="section-title">Un Processus Éprouvé</h2>
                <p className="section-subtitle">
                  Quatre étapes clés pour garantir le succès de vos projets immobiliers
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {processSteps.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className={`process-card ${isVisible('process') ? 'animate-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="process-number">{step.number}</div>
                  <div className="process-icon">{step.icon}</div>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-description">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="process-arrow">→</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-5 cta-section">
        <div className="cta-background"></div>
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className={`cta-content ${isVisible('cta') ? 'animate-up' : ''}`}>
                <h2 className="cta-title">Prêt à Concrétiser Vos Projets ?</h2>
                <p className="cta-description">
                  Contactez nos experts pour une consultation personnalisée et découvrez 
                  comment nous pouvons transformer vos ambitions immobilières en réalité.
                </p>
                <div className="cta-buttons">
                  <button className="btn btn-primary btn-lg me-3">
                    Consultation Gratuite
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    Télécharger la Brochure
                  </button>
                </div>
                <div className="cta-contact">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+212 5XX XX XX XX</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <span>contact@nayla-invest.ma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        /* Global Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Hero Section */
        .services-hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop');
          background-size: cover;
          background-position: center;
          filter: blur(1px);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,95,115,0.9) 0%, rgba(42,157,143,0.8) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(233, 216, 166, 0.2);
          border: 1px solid #E9D8A6;
          color: #E9D8A6;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .text-gradient {
          background: linear-gradient(135deg, #E9D8A6, #F4E4BC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 300;
          margin-bottom: 3rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-item h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #E9D8A6;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          font-size: 1rem;
          opacity: 0.8;
          margin: 0;
        }

        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .scroll-indicator {
          width: 2px;
          height: 50px;
          background: linear-gradient(to bottom, #E9D8A6, transparent);
          animation: scrollPulse 2s infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        /* Section Common Styles */
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #005F73, #2A9D8F);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: #005F73;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Service Tabs */
        .service-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .service-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .service-tab:hover {
          border-color: #2A9D8F;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(42, 157, 143, 0.2);
        }

        .service-tab.active {
          background: linear-gradient(135deg, #005F73, #2A9D8F);
          border-color: #005F73;
          color: white;
          box-shadow: 0 5px 20px rgba(0, 95, 115, 0.3);
        }

        .tab-icon {
          font-size: 1.2rem;
        }

        .tab-title {
          font-size: 0.9rem;
          white-space: nowrap;
        }

        /* Service Content */
        .service-content {
          padding: 2rem 0;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .service-icon-large {
          font-size: 4rem;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #005F73, #2A9D8F);
          border-radius: 20px;
          color: white;
        }

        .service-title {
          font-size: 2rem;
          font-weight: 700;
          color: #005F73;
          margin: 0;
        }

        .service-subtitle {
          color: #2A9D8F;
          font-weight: 500;
          margin: 0;
        }

        .service-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 2rem;
        }

        .service-features h5 {
          color: #005F73;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .features-list li {
          padding: 0.5rem 0;
          padding-left: 2rem;
          position: relative;
          color: #666;
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #2A9D8F;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .service-stats-mini {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-mini {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          min-width: 100px;
        }

        .stat-mini strong {
          font-size: 1.5rem;
          color: #005F73;
          font-weight: 700;
        }

        .stat-mini span {
          font-size: 0.8rem;
          color: #666;
          text-transform: capitalize;
        }

        /* Service Image */
        .service-image {
          padding: 1rem 0;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .image-container img {
          transition: transform 0.3s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,95,115,0.8), rgba(42,157,143,0.8));
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .image-container:hover img {
          transform: scale(1.05);
        }

        .overlay-content {
          text-align: center;
          color: white;
        }

        .overlay-content h4 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .overlay-content p {
          margin: 0;
          opacity: 0.9;
        }

        /* Additional Services */
        .additional-service-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          height: 100%;
          border: 2px solid transparent;
        }

        .additional-service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,95,115,0.15);
          border-color: rgba(42, 157, 143, 0.3);
        }

        .service-icon-bg {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          position: relative;
        }

        .service-icon-bg .service-icon {
          font-size: 2rem;
          color: white;
        }

        .service-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #005F73;
          margin-bottom: 1rem;
        }

        .service-desc {
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .service-btn {
          background: transparent;
          border: 2px solid;
          padding: 0.8rem 2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-btn:hover {
          background: currentColor;
          color: white !important;
          transform: translateY(-2px);
        }

        /* Process Section */
        .process-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          position: relative;
          height: 100%;
          transition: all 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,95,115,0.15);
        }

        .process-number {
          position: absolute;
          top: -20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #005F73, #2A9D8F);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .process-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .process-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #005F73;
          margin-bottom: 1rem;
        }

        .process-description {
          color: #666;
          line-height: 1.6;
        }
                /* Process Arrow */
        .process-arrow {
          position: absolute;
          right: -15%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2rem;
          color: #2A9D8F;
          display: none;
        }

        @media (min-width: 992px) {
          .process-arrow {
            display: block;
          }
        }

        /* CTA Section */
        .cta-section {
          position: relative;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop');
          background-size: cover;
          background-position: center;
          filter: blur(2px);
        }

        .cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,95,115,0.95) 0%, rgba(42,157,143,0.9) 100%);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: 4rem 0;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-buttons {
          margin-bottom: 2.5rem;
        }

        .btn-primary {
          background: #E9D8A6;
          border-color: #E9D8A6;
          color: #005F73;
          font-weight: 600;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #F4A261;
          border-color: #F4A261;
          transform: translateY(-2px);
        }

        .btn-outline-light:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .cta-contact {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-icon {
          font-size: 1.2rem;
        }

        /* Animation Classes */
        .animate-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.6s ease forwards;
        }

        .animate-left {
          opacity: 0;
          transform: translateX(-30px);
          animation: fadeLeft 0.6s ease forwards;
        }

        .animate-right {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeRight 0.6s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Styles */
        @media (max-width: 991.98px) {
          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .service-tabs {
            flex-direction: column;
          }

          .service-tab {
            width: 100%;
            justify-content: center;
          }

          .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 767.98px) {
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .service-content {
            text-align: center;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .service-features {
            text-align: left;
          }

          .service-stats-mini {
            justify-content: center;
          }

          .cta-contact {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
    );
}