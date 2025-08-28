// import { useEffect, useState } from "react";
// import {
//   Building2,
//   Hotel,
//   Briefcase,
//   Factory,
//   Target,
//   RefreshCcw,
//   Rocket,
//   Users,
//   Star,
//   BarChart3,

// } from "lucide-react";

// export default function About() {
// const [visibleSections, setVisibleSections] = useState(new Set());

//   // Add intersection observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleSections(prev => new Set(prev).add(entry.target.id));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Observe all sections with IDs
//     document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//     });

//     // Cleanup
//     return () => observer.disconnect();
//   }, []);

//   const isVisible = (sectionId) => visibleSections.has(sectionId);

//   const services = [
//     {
//       icon: <Building2 size={40} />,
//       title: "Galeries Commerciales",
//       description:
//         "Gestion experte des centres commerciaux avec optimisation de l'expérience client et sélection rigoureuse des enseignes.",
//     },
//     {
//       icon: <Hotel size={40} />,
//       title: "Complexes Touristiques",
//       description:
//         "Développement et gestion de projets hôteliers et touristiques avec une approche sur-mesure.",
//     },
//     {
//       icon: <Briefcase size={40} />,
//       title: "Espaces de Bureaux",
//       description:
//         "Solutions flexibles et innovantes pour les entreprises modernes avec localisation stratégique.",
//     },
//     {
//       icon: <Factory size={40} />,
//       title: "Zones d'Activités",
//       description:
//         "Commercialisation et gestion optimale des espaces professionnels et industriels.",
//     },
//   ];

//   const advantages = [
//     {
//       icon: <Target size={32} />,
//       title: "Expertise Sectorielle",
//       description: "Connaissance pointue du marché local et international",
//     },
//     {
//       icon: <RefreshCcw size={32} />,
//       title: "Gestion Intégrée",
//       description: "Transparence totale du suivi administratif à la maintenance",
//     },
//     {
//       icon: <Rocket size={32} />,
//       title: "Stratégies Innovantes",
//       description: "Visibilité et attractivité renforcées de vos biens",
//     },
//     {
//       icon: <Users size={32} />,
//       title: "Accompagnement Personnalisé",
//       description: "Maximisation de la valeur de vos investissements",
//     },
//     {
//       icon: <Star size={32} />,
//       title: "Équipe Professionnelle",
//       description: "Réactivité et satisfaction client garanties",
//     },
//     {
//       icon: <BarChart3 size={32} />,
//       title: "Performance Mesurable",
//       description: "Augmentation des volumes de vente et de la rentabilité",
//     },
//   ];

//   return (
//     <div>
//       {/* HERO */}
//       <section id="hero" className="hero-about">
//         <div className="hero-overlay"></div>
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-lg-10">
//               <div
//                 className={`hero-content ${
//                   isVisible("hero") ? "animate-up" : ""
//                 }`}
//               >
//                 <h1 className="hero-title">À Propos de Nayla Invest</h1>
//                 <p className="hero-subtitle">
//                   Votre partenaire de confiance dans l'immobilier commercial et
//                   professionnel
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section id="intro" className="section">
//         <div className="container grid">
//           <div
//             className={`content-block ${
//               isVisible("intro") ? "animate-left" : ""
//             }`}
//           >
//             <div className="section-badge">Notre Expertise</div>
//             <h2 className="section-title">
//               Un Acteur Incontournable de l'Immobilier
//             </h2>
//             <p className="section-text">
//               Fort d'une expertise reconnue dans le secteur immobilier,{" "}
//               <strong>Nayla Invest</strong> se positionne aujourd'hui comme un
//               acteur incontournable dans la gestion et la commercialisation des
//               produits immobiliers.
//             </p>
//           </div>
//           <div
//             className={`image-block ${
//               isVisible("intro") ? "animate-right" : ""
//             }`}
//           >
//             <div className="image-wrapper">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
//                 alt="Nayla Invest Building"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="section light">
//         <div className="container">
//           <div className="section-header text-center">
//             <div className="section-badge">Nos Services</div>
//             <h2 className="section-title">Domaines d'Expertise</h2>
//           </div>
//           <div className="grid-2">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`card ${isVisible("services") ? "animate-up" : ""}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="icon">{service.icon}</div>
//                 <h4 className="card-title">{service.title}</h4>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ADVANTAGES */}
//       <section id="advantages" className="section">
//         <div className="container">
//           <div className="section-header text-center">
//             <div className="section-badge">Nos Avantages</div>
//             <h2 className="section-title">Pourquoi Choisir Nayla Invest</h2>
//           </div>
//           <div className="grid-3">
//             {advantages.map((adv, index) => (
//               <div
//                 key={index}
//                 className={`card ${
//                   isVisible("advantages") ? "animate-up" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="icon">{adv.icon}</div>
//                 <h5 className="card-title">{adv.title}</h5>
//                 <p>{adv.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* STYLES */}
//       <style jsx>{`
//         /* Layout */
//         .container {
//           width: 90%;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//         }
//         .grid-2 {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//         }
//         .grid-3 {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2rem;
//         }

//         /* Section */
//         .section {
//           padding: 80px 0;
//           background: #fff;
//           color: #000;
//         }
//         .section.light {
//           background: #f5f5f5;
//         }
//         .section-badge {
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: #555;
//           margin-bottom: 1rem;
//           text-transform: uppercase;
//         }
//         .section-title {
//           font-size: 2rem;
//           font-weight: 700;
//           margin-bottom: 1.5rem;
//         }
//         .section-text {
//           font-size: 1rem;
//           color: #333;
//         }

//         /* Hero */
//         .hero-about {
//           background: #000;
//           color: #fff;
//           text-align: center;
//           padding: 120px 20px 80px;
//         }
//         .hero-title {
//           font-size: 3rem;
//           font-weight: 800;
//         }
//         .hero-subtitle {
//           font-size: 1.2rem;
//           opacity: 0.8;
//         }

//         /* Cards */
//         .card {
//           background: #fff;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//           padding: 2rem;
//           text-align: center;
//           transition: all 0.3s ease;
//         }
//         .card:hover {
//           transform: translateY(-5px);
//           border-color: #000;
//         }
//         .icon {
//           margin-bottom: 1rem;
//           color: #000;
//         }
//         .card-title {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//         }

//         /* Animations */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         .animate-up {
//           animation: fadeInUp 0.8s ease forwards;
//         }
//         .animate-left {
//           animation: fadeInLeft 0.8s ease forwards;
//         }
//         .animate-right {
//           animation: fadeInRight 0.8s ease forwards;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .grid,
//           .grid-2,
//           .grid-3 {
//             grid-template-columns: 1fr;
//           }
//           .hero-title {
//             font-size: 2rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import {
  Building2,
  Hotel,
  Briefcase,
  Factory,
  Target,
  Rocket,
  Users,
  Star,

  CheckCircle2,
  Compass,
  TrendingUp,
  LayoutDashboard,
  Workflow,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

export default function About() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  const services = [
    {
      icon: <Building2 size={48} />,
      title: "Galeries Commerciales",
      description: "Gestion experte des centres commerciaux avec sélection rigoureuse des enseignes et optimisation de l'expérience client.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Hotel size={48} />,
      title: "Complexes Touristiques & Hôteliers",
      description: "Développement et gestion sur-mesure de projets hôteliers orientés performance et qualité de service.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Espaces de Bureaux",
      description: "Commercialisation innovante avec ergonomie, connectivité et localisation stratégique premium.",
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: <Factory size={48} />,
      title: "Zones d'Activités",
      description: "Gestion optimale des espaces professionnels et zones d'activité commerciales intégrées.",
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  const advantages = [
    {
      icon: <Target size={32} />,
      title: "Expertise Sectorielle",
      description: "Pointue, locale et internationale, alignée sur vos enjeux concrets.",
    },
    {
      icon: <Shield size={32} />,
      title: "Gestion Intégrée",
      description: "Transparence du suivi administratif à la maintenance technique.",
    },
    {
      icon: <Zap size={32} />,
      title: "Stratégies Innovantes",
      description: "Plans d'action commerciaux pour booster visibilité et attractivité.",
    },
    {
      icon: <Users size={32} />,
      title: "Accompagnement Personnalisé",
      description: "Maximisation durable de la valeur de vos actifs.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Équipe Professionnelle",
      description: "Engagée, réactive, orientée satisfaction client.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance Mesurable",
      description: "Volumes de vente et rentabilité en progression.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO WITH MODERN GRADIENT AND PARTICLES */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="particles">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`particle particle-${i % 5}`}></div>
            ))}
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="hero-content">
            <div className={`hero-badge ${isVisible("hero") ? "animate-up" : ""}`}>
              <Sparkles size={16} />
              Excellence Immobilière
            </div>
            <h1 className={`hero-title ${isVisible("hero") ? "animate-up" : ""}`}>
              À Propos de <span className="gradient-text">Nayla Invest</span>
            </h1>
            <p className={`hero-subtitle ${isVisible("hero") ? "animate-up" : ""}`}>
              Votre partenaire de confiance dans l'immobilier commercial et professionnel.
              Transformons ensemble vos projets en succès durables.
            </p>
            <div className={`hero-stats ${isVisible("hero") ? "animate-up" : ""}`}>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION - REDESIGNED WITH MODERN LAYOUT */}
      <section id="intro" className="intro-section">
        <div className="container">
          <div className="intro-grid">
            {/* Left Content */}
            <div className={`intro-content ${isVisible("intro") ? "animate-left" : ""}`}>
              <div className="section-header">
                <div className="section-badge">
                  <Compass size={16} />
                  Notre Expertise
                </div>
                <h2 className="section-title">
                  Un Acteur <span className="gradient-text">Incontournable</span> de l'Immobilier
                </h2>
              </div>

              <div className="content-blocks">
                <div className="content-block">
                  <div className="block-icon">
                    <LayoutDashboard size={24} />
                  </div>
                  <div className="block-content">
                    <h3>Excellence & Innovation</h3>
                    <p>
                      Fort d'une expertise reconnue, <strong>Nayla Invest</strong> se positionne 
                      comme leader dans la gestion et commercialisation des produits immobiliers 
                      haut de gamme.
                    </p>
                  </div>
                </div>

                <div className="content-block">
                  <div className="block-icon">
                    <Workflow size={24} />
                  </div>
                  <div className="block-content">
                    <h3>Approche Sur-Mesure</h3>
                    <p>
                      Nous accompagnons nos clients dans la valorisation optimale de leurs 
                      actifs grâce à une maîtrise technique pointue et une connaissance 
                      approfondie du marché.
                    </p>
                    <div className="features-grid">
                      <div className="feature-item">
                        <CheckCircle2 size={16} />
                        <span>Gestion opérationnelle</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} />
                        <span>Objectifs mesurables</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} />
                        <span>Visibilité optimisée</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} />
                        <span>Rentabilité maximale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <button className="cta-button">
                  Découvrir nos services
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`intro-visual ${isVisible("intro") ? "animate-right" : ""}`}>
              <div className="visual-card main-image">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop" 
                  alt="Modern Building"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <Building2 size={32} />
                    <span>Architecture Moderne</span>
                  </div>
                </div>
              </div>
              
              <div className="floating-cards">
                <div className="floating-card card-1">
                  <Hotel size={24} />
                  <div>
                    <div className="card-title">Tourisme</div>
                    <div className="card-subtitle">Complexes Premium</div>
                  </div>
                </div>
                
                <div className="floating-card card-2">
                  <Briefcase size={24} />
                  <div>
                    <div className="card-title">Bureaux</div>
                    <div className="card-subtitle">Espaces Innovants</div>
                  </div>
                </div>
                
                <div className="floating-card card-3">
                  <Factory size={24} />
                  <div>
                    <div className="card-title">Activités</div>
                    <div className="card-subtitle">Zones Intégrées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - MODERN CARD DESIGN */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <Rocket size={16} />
              Nos Services
            </div>
            <h2 className="section-title">
              Domaines d'<span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle">
              Des solutions complètes et innovantes pour tous vos projets immobiliers
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${isVisible("services") ? "animate-up" : ""}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`service-icon bg-gradient-to-r ${service.gradient}`}>
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-link">
                    En savoir plus <ArrowRight size={16} />
                  </div>
                </div>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES - MODERN GRID */}
      <section id="advantages" className="advantages-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <Star size={16} />
              Nos Avantages
            </div>
            <h2 className="section-title">
              Pourquoi Choisir <span className="gradient-text">Nayla Invest</span>
            </h2>
          </div>
          
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div onClick={mousePosition}
                key={index}
                className={`advantage-card ${isVisible("advantages") ? "animate-up" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="advantage-icon">
                  {advantage.icon}
                </div>
                <h4 className="advantage-title">{advantage.title}</h4>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
/* Global Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #666666, #999999);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #555555, #777777);
          bottom: -150px;
          right: -150px;
          animation-delay: -10s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #444444, #888888);
          top: 50%;
          right: 10%;
          animation-delay: -5s;
        }

        .particles {
          position: absolute;
          inset: 0;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        .particle-0 { top: 20%; left: 10%; animation-delay: 0s; }
        .particle-1 { top: 40%; left: 80%; animation-delay: 0.6s; }
        .particle-2 { top: 60%; left: 30%; animation-delay: 1.2s; }
        .particle-3 { top: 80%; left: 70%; animation-delay: 1.8s; }
        .particle-4 { top: 30%; left: 50%; animation-delay: 2.4s; }

        .hero-content {
          text-align: center;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #666666, #999999, #cccccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Intro Section */
        .intro-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #333333, #666666);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .content-blocks {
          display: grid;
          gap: 2rem;
        }

        .content-block {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.5rem;
          padding: 2rem;
          background: white;
          border-radius: 20px;
          border: 1px solid #e8e8e8;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .content-block:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .block-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #333333, #666666);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .block-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
        }

        .block-content p {
          color: #666666;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #555555;
        }

        .cta-section {
          margin-top: 3rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #333333, #666666);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(51, 51, 51, 0.4);
        }

        /* Visual Section */
        .intro-visual {
          position: relative;
        }

        .visual-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .main-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
          display: flex;
          align-items: end;
          padding: 2rem;
        }

        .overlay-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .floating-cards {
          position: absolute;
          inset: 0;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .card-1 {
          top: 20%;
          right: -10%;
          animation-delay: 0s;
        }

        .card-2 {
          bottom: 30%;
          left: -15%;
          animation-delay: -2s;
        }

        .card-3 {
          top: 60%;
          right: -5%;
          animation-delay: -4s;
        }

        .card-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: #1a1a1a;
        }

        .card-subtitle {
          font-size: 0.8rem;
          color: #666666;
        }

        /* Services Section */
        .services-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
        }

        .services-section .section-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .services-section .section-title {
          color: white;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .service-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #cccccc;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .service-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover .service-glow {
          opacity: 1;
        }

        /* Advantages Section */
        .advantages-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f1f1f1 0%, #e8e8e8 100%);
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .advantage-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e8e8e8;
        }

        .advantage-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border-color: #666666;
        }

        .advantage-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #333333, #666666);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 1.5rem;
        }

        .advantage-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
        }

        .advantage-description {
          color: #666666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-up {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-left {
          animation: fadeInLeft 1s ease forwards;
        }

        .animate-right {
          animation: fadeInRight 1s ease forwards;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .intro-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }
          .advantages-grid {
            grid-template-columns: 1fr 1fr;
          }
          .hero-stats {
            gap: 2rem;
          }
        }
        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .stat-number {
            font-size: 2rem;
          }
          .stat-label {
            font-size: 0.8rem;
          }
          .floating-card {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}