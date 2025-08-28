import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdowns({});
  };

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
<nav className={`modern-navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
  <div className="nav-container">
    {/* Brand */}
    <NavLink className="nav-brand" to="/" onClick={() => setIsMobileMenuOpen(false)}>
      <div className="brand-container">
        <div className="brand-text-group">
          <span className="brand-main">NAYLA INVEST</span>
          <span className="brand-sub">Groupe</span>
        </div>
      </div>
    </NavLink>

    {/* Desktop Navigation */}
    <div className="nav-desktop">
      <div className="nav-links">
        <NavLink className="nav-link" to="/qui-sommes-nous">
          <span className="link-text">Qui sommes nous</span>
        </NavLink>

        {/* Produits Dropdown */}
        <div className={`nav-dropdown ${activeDropdown === 'produits' ? 'active' : ''}`}>
          <button
            className="nav-link dropdown-trigger"
            onClick={() => handleDropdownClick('produits')}
            onMouseEnter={() => setActiveDropdown('produits')}
          >
            <span className="link-text drop-down-name">Produits</span>
            <ChevronDown size={16} className="dropdown-icon" />
          </button>
          <div
            className="dropdown-menu"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="dropdown-submenu">
              <button className="dropdown-item has-submenu">
                Zone d'activité intégrée
                <ChevronDown size={14} />
              </button>
              <div className="submenu">
                <NavLink className="dropdown-item" to="/produits/zone-activite/gallerie-commerciale-urbaine">
                  Gallerie commerciale urbaine
                </NavLink>
                <NavLink className="dropdown-item" to="/produits/zone-activite/gallerie-commerciale-extra-urbain">
                  Gallerie commerciale extra urbain
                </NavLink>
              </div>
            </div>

            <div className="dropdown-submenu">
              <button className="dropdown-item has-submenu">
                Hotel et complexe touristique
                <ChevronDown size={14} />
              </button>
              <div className="submenu">
                <NavLink className="dropdown-item" to="/produits/hotel-complexe/hotellerie">
                  Hotellerie
                </NavLink>
                <NavLink className="dropdown-item" to="/produits/hotel-complexe/residence-touristique">
                  Residence touristique
                </NavLink>
                <NavLink className="dropdown-item" to="/produits/hotel-complexe/animation-touristique">
                  Animation touristique
                </NavLink>
              </div>
            </div>

            <div className="dropdown-submenu">
              <button className="dropdown-item has-submenu">
                Immobilier Résidentiel et professionnel
                <ChevronDown size={14} />
              </button>
              <div className="submenu">
                <NavLink className="dropdown-item" to="/produits/immobilier/espace-bureau">
                  Espace Bureau
                </NavLink>
                <NavLink className="dropdown-item" to="/produits/immobilier/appartement-villa">
                  Appartement et villa
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className={`nav-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
          <button
            className="nav-link dropdown-trigger"
            onClick={() => handleDropdownClick('services')}
            onMouseEnter={() => setActiveDropdown('services')}
          >
            <span className="link-text drop-down-name">Services</span>
            <ChevronDown size={16} className="dropdown-icon" />
          </button>
          <div
            className="dropdown-menu"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavLink className="dropdown-item" to="/services/conseil-placement">
              Conseil en placement et investissement immobilier
            </NavLink>
            <NavLink className="dropdown-item" to="/services/etude-marche">
              Etude de marché
            </NavLink>
            <NavLink className="dropdown-item" to="/services/maitrise-ouvrage">
              Maîtrise d'ouvrage déléguée
            </NavLink>
            <NavLink className="dropdown-item" to="/services/viabilisation">
              Viabilisation des projets
            </NavLink>
            <NavLink className="dropdown-item" to="/services/property-management">
              Property management
            </NavLink>
            <NavLink className="dropdown-item" to="/services/facility-management">
              Facility management
            </NavLink>
            <NavLink className="dropdown-item" to="/services/commercialisation">
              Commercialisation des projets immobiliers
            </NavLink>
          </div>
        </div>

        <NavLink className="nav-link" to="/publication-media">
          <span className="link-text">Publication et Média</span>
        </NavLink>

        <NavLink className="nav-link" to="/contactez-nous">
          <span className="link-text">Contactez nous</span>
        </NavLink>
      </div>
    </div>

    {/* Mobile Menu Button */}
    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Navigation */}
  <div className={`nav-mobile ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
    <div className="mobile-links">
      <NavLink
        className="mobile-nav-link"
        to="/qui-sommes-nous"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Qui sommes nous
      </NavLink>

      {/* Mobile Produits */}
      <div className="mobile-dropdown">
        <button
          className="mobile-nav-link mobile-drop-down-name dropdown-trigger"
          onClick={() => toggleDropdown('produits')}
        >
          Produits
          <ChevronDown size={16} className={`dropdown-icon ${openDropdowns.produits ? 'open' : ''}`} />
        </button>
        <div className={`mobile-dropdown-content ${openDropdowns.produits ? 'open' : ''}`}>
          <div className="mobile-submenu">
            <button
              className="mobile-submenu-trigger"
              onClick={() => toggleDropdown('zone-activite')}
            >
              Zone d'activité intégrée
              <ChevronDown size={14} className={`dropdown-icon ${openDropdowns['zone-activite'] ? 'open' : ''}`} />
            </button>
            <div className={`mobile-submenu-content ${openDropdowns['zone-activite'] ? 'open' : ''}`}>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/zone-activite/gallerie-commerciale-urbaine"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallerie commerciale urbaine
              </NavLink>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/zone-activite/gallerie-commerciale-extra-urbain"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallerie commerciale extra urbain
              </NavLink>
            </div>
          </div>

          <div className="mobile-submenu">
            <button
              className="mobile-submenu-trigger"
              onClick={() => toggleDropdown('hotel-complexe')}
            >
              Hotel et complexe touristique
              <ChevronDown size={14} className={`dropdown-icon ${openDropdowns['hotel-complexe'] ? 'open' : ''}`} />
            </button>
            <div className={`mobile-submenu-content ${openDropdowns['hotel-complexe'] ? 'open' : ''}`}>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/hotel-complexe/hotellerie"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hotellerie
              </NavLink>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/hotel-complexe/residence-touristique"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Residence touristique
              </NavLink>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/hotel-complexe/animation-touristique"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Animation touristique
              </NavLink>
            </div>
          </div>

          <div className="mobile-submenu">
            <button
              className="mobile-submenu-trigger"
              onClick={() => toggleDropdown('immobilier')}
            >
              Immobilier Résidentiel et professionnel
              <ChevronDown size={14} className={`dropdown-icon ${openDropdowns['immobilier'] ? 'open' : ''}`} />
            </button>
            <div className={`mobile-submenu-content ${openDropdowns['immobilier'] ? 'open' : ''}`}>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/immobilier/espace-bureau"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Espace Bureau
              </NavLink>
              <NavLink
                className="mobile-submenu-link"
                to="/produits/immobilier/appartement-villa"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Appartement et villa
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Services */}
      <div className="mobile-dropdown">
        <button
          className="mobile-nav-link mobile-drop-down-name dropdown-trigger"
          onClick={() => toggleDropdown('services')}
        >
          Services
          <ChevronDown size={16} className={`dropdown-icon ${openDropdowns.services ? 'open' : ''}`} />
        </button>
        <div className={`mobile-dropdown-content ${openDropdowns.services ? 'open' : ''}`}>
          <NavLink
            className="mobile-submenu-link"
            to="/services/conseil-placement"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Conseil en placement et investissement immobilier
          </NavLink>
          <NavLink
            className="mobile-submenu-link"
            to="/services/etude-marche"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Etude de marché
          </NavLink>
          <NavLink
            className="mobile-submenu-link"
            to="/services/maitrise-ouvrage"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Maîtrise d'ouvrage déléguée
          </NavLink>
          <NavLink
            className="mobile-submenu-link"
            to="/services/viabilisation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Viabilisation des projets
          </NavLink>
          <NavLink
            className="mobile-submenu-link"
            to="/services/property-management"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Property management
          </NavLink>
          <NavLink
            className="mobile-submenu-link"
            to="/services/facility-management"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Facility management
          </NavLink>
          <NavLink
            className="mobile-submenu-link"
            to="/services/commercialisation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Commercialisation des projets immobiliers
          </NavLink>
        </div>
      </div>

      <NavLink
        className="mobile-nav-link"
        to="/publication-media"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Publication et Média
      </NavLink>

      <NavLink
        className="mobile-nav-link"
        to="/contactez-nous"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contactez nous
      </NavLink>
    </div>
  </div>
</nav>
      <style jsx="true">{`
        /* Modern Navbar Styles */
        .modern-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #000000;
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-scrolled {
          background: rgba(0, 0, 0, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Container */
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          transition: all 0.3s ease;
        }

        /* Brand Styling */
        .nav-brand {
          text-decoration: none;
          z-index: 10;
        }

        .brand-container {
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .brand-text-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }

        .brand-main {
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .brand-sub {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 2px;
          margin-top: 2px;
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .nav-link,
        .dropdown-trigger {
          color: #FFFFFF;
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.9rem;
          position: relative;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;
        }

        .dropdown-icon {
          transition: transform 0.3s ease;
        }

        .nav-dropdown.active .dropdown-icon,
        .nav-dropdown:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .nav-link:hover,
        .dropdown-trigger:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .nav-link.active {
          color: #FFFFFF;
          border-bottom: 2px solid #FFFFFF;
        }
        .drop-down-name {
          font-weight: 550;
          font-size: 0.81rem;
          color: #FFFFFF;
        }

        /* Dropdown Styles - IMPROVED TIMING */
        .nav-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem 0;
          min-width: 300px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }

        /* Enhanced dropdown hover with delay */
        .nav-dropdown:hover .dropdown-menu,
        .nav-dropdown.active .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Add safe hover zone between dropdown trigger and menu */
        .nav-dropdown::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
          z-index: 999;
        }

        .dropdown-item {
          color: #FFFFFF;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          display: block;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          position: relative;
        }

        /* FIXED: Better hover for dropdown items */
        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          padding-left: 2rem;
        }
        .mobile-drop-down-name{
          font-weight: 550;
          font-size: 0.95rem;
          color: #FFFFFF;
          padding-left: 80 !important;
        }
        /* Submenu Styles - IMPROVED WITH STRONGER CSS */
        .dropdown-submenu {
          position: relative;
        }

        .submenu {
          position: absolute;
          top: 0;
          left: calc(100% + 5px);
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem 0;
          min-width: 250px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          z-index: 1001;
          display: none;
        }

        /* FORCE SUBMENU VISIBILITY - Multiple approaches */
        .dropdown-submenu:hover .submenu {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
        }

        .dropdown-submenu:hover > .submenu {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
        }

        /* Keep submenu visible when hovering over the submenu itself */
        .submenu:hover {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
        }

        .has-submenu {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .has-submenu svg {
          transform: rotate(-90deg);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: 2px solid #FFFFFF;
          color: #FFFFFF;
          padding: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Mobile Navigation */
        .nav-mobile {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #000000;
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-mobile.mobile-open {
          max-height: 70vh;
          overflow-y: auto;
          padding: 1rem 0;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-link {
          color: #FFFFFF;
          text-decoration: none;
          padding: 1rem 2rem;
          font-weight: 500;
          font-size: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link.active {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Mobile Dropdown */
        .mobile-dropdown {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-dropdown-content.open {
          max-height: 500px;
        }

        .mobile-submenu {
          position: relative;
        }

        .mobile-submenu-trigger {
          color: rgba(255, 255, 255, 0.9);
          padding: 0.75rem 2rem 0.75rem 3rem;
          font-size: 0.95rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }

        .mobile-submenu-trigger:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-submenu-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: rgba(0, 0, 0, 0.3);
        }

        .mobile-submenu-content.open {
          max-height: 300px;
        }

        .mobile-submenu-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.75rem 2rem 0.75rem 4rem;
          display: block;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.2s ease;
        }

        .mobile-submenu-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
        }

        .dropdown-icon.open {
          transform: rotate(180deg);
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .nav-container {
            padding: 1rem 1.5rem;
          }

          .nav-link,
          .dropdown-trigger {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 991px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-mobile {
            display: block;
          }

          .brand-main {
            font-size: 1.25rem;
          }

          .brand-sub {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 576px) {
          .nav-container {
            padding: 0.75rem 1rem;
          }

          .brand-main {
            font-size: 1.1rem;
          }

          .brand-sub {
            font-size: 0.7rem;
            letter-spacing: 1.5px;
          }

          .mobile-nav-link {
            padding: 0.875rem 1.5rem;
            font-size: 0.95rem;
          }

          .mobile-submenu-trigger {
            padding: 0.75rem 1.5rem 0.75rem 2rem;
            font-size: 0.9rem;
          }

          .mobile-submenu-link {
            padding: 0.75rem 1.5rem 0.75rem 3rem;
            font-size: 0.85rem;
          }
        }

        /* Animation for page load */
        @keyframes navSlideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modern-navbar {
          animation: navSlideDown 0.6s ease-out;
        }

        /* Accessibility improvements */
        .nav-link:focus-visible,
        .dropdown-trigger:focus-visible,
        .mobile-menu-btn:focus-visible,
        .dropdown-item:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* Smooth scrollbar for mobile menu */
        .nav-mobile::-webkit-scrollbar {
          width: 4px;
        }

        .nav-mobile::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-mobile::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .nav-mobile::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* Brand hover effect */
        .nav-brand:hover .brand-main {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        /* Mobile menu animation */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-nav-link {
          animation: slideIn 0.3s ease forwards;
        }

        /* CRITICAL: Proper hover states for submenus */
        @media (hover: hover) {
          .nav-dropdown:hover .dropdown-menu,
          .nav-dropdown.active .dropdown-menu,
          .dropdown-menu:hover {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .dropdown-submenu:hover > .submenu,
          .submenu:hover {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }

          /* Keep submenus visible when hovering over them */
          .dropdown-submenu:hover .submenu {
            display: block;
            opacity: 1;
            visibility: visible;
          }
        }

        /* Force submenu display on hover - FALLBACK */
        .dropdown-submenu:hover .submenu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </>
  );
}