import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-col">
          <h3 className="footer-brand">NAYLA INVEST</h3>
          <span className="brand-tagline">Groupe</span>
          <p className="brand-description">
            Partenaire de confiance pour vos investissements stratégiques.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h6 className="footer-title">Services</h6>
          <ul className="footer-links">
            <li><NavLink to="/about">À Propos</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h6 className="footer-title">Ressources</h6>
          <ul className="footer-links">
            <li><NavLink to="/careers">Carrières</NavLink></li>
            <li><NavLink to="/blog">Actualités</NavLink></li>
            <li><NavLink to="/privacy">Confidentialité</NavLink></li>
            <li><NavLink to="/legal">Mentions Légales</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h6 className="footer-title">Contact</h6>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={16} />
              <span>123 Avenue Mohammed V, Tétouan</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+212 539 123 456</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>contact@naylainvest.ma</span>
            </div>
          </div>
        </div>

        {/* Newsletter + Social */}
        <div className="footer-col">
          <h6 className="footer-title">Newsletter</h6>
          <div className="newsletter-compact">
            <input type="email" placeholder="Votre email" className="newsletter-input" />
            <button className="newsletter-btn">
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} NAYLA INVEST Groupe. Tous droits réservés.
        </p>
        <div className="bottom-links">
          <NavLink to="/terms">CGU</NavLink>
          <span className="separator">•</span>
          <NavLink to="/privacy">Confidentialité</NavLink>
          <span className="separator">•</span>
          <NavLink to="/cookies">Cookies</NavLink>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollButton ? "visible" : ""}`}
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        .footer {
          background: #000;
          color: #fff;
          padding: 2rem 1rem;
          border-top: 2px solid #333;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-brand {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .brand-tagline {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 2px;
        }

        .brand-description {
          color: #999;
          font-size: 0.85rem;
        }

        .footer-title {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.4rem;
        }

        .footer-links a {
          color: #999;
          text-decoration: none;
          font-size: 0.85rem;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #999;
        }

        .contact-item {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .contact-item svg {
          color: #fff;
        }

        .newsletter-compact {
          display: flex;
          margin-bottom: 0.75rem;
        }

        .newsletter-input {
          flex: 1;
          background: #222;
          border: 1px solid #444;
          border-right: none;
          border-radius: 4px 0 0 4px;
          padding: 0.4rem 0.6rem;
          color: #fff;
          font-size: 0.8rem;
        }

        .newsletter-btn {
          background: #fff;
          border: 1px solid #fff;
          border-radius: 0 4px 4px 0;
          padding: 0.4rem 0.6rem;
          cursor: pointer;
        }

        .social-links {
          display: flex;
          gap: 0.5rem;
        }

        .social-links a {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #444;
          color: #fff;
        }

        .social-links a:hover {
          background: #fff;
          color: #000;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
        }

        .bottom-links {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .bottom-links a {
          color: #666;
          text-decoration: none;
        }

        .bottom-links a:hover {
          color: #fff;
        }

        .separator {
          color: #444;
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #fff;
          color: #000;
          border: none;
          border-radius: 4px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          pointer-events: none;
        }

        .scroll-top-btn.visible {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </footer>
  );
}
