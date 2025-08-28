import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  FileText,
  Newspaper,
  Video,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PressMedia() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaSlides = [
    {
      title: "Featured Interview",
      description: "Our CEO discusses investment strategies in Morocco.",
      img: "logo192.png",
      date: "Jan 15, 2024",
      type: "interview",
    },
    {
      title: "TV Coverage",
      description: "Coverage of our latest investment initiative.",
      img: "logo192.png",
      date: "Jan 10, 2024",
      type: "video",
    },
    {
      title: "Magazine Feature",
      description: "We were featured in Morocco's top business magazine.",
      img: "  logo192.png",
      date: "Dec 28, 2023",
      type: "article",
    },
  ];

  const articles = [
    {
      title: "Growth in Tetouan Investments",
      description: "How our projects are boosting the local economy.",
      img: "logo192.png",
      date: "2 days ago",
      readTime: "5 min read",
      category: "Investment",
    },
    {
      title: "Sustainable Investment Strategies",
      description: "Our approach to responsible finance.",
      img: "logo192.png",
      date: "1 week ago",
      readTime: "7 min read",
      category: "Sustainability",
    },
    {
      title: "Market Insights 2025",
      description: "Expert analysis of the Moroccan investment market.",
      img: "logo192.png",
      date: "2 weeks ago",
      readTime: "10 min read",
      category: "Analysis",
    },
  ];

  const pressReleases = [
    {
      title: "Q4 2023 Financial Results",
      date: "Jan 20, 2024",
      excerpt: "NAYLA Investments reports strong Q4 performance...",
    },
    {
      title: "New Partnership Announcement",
      date: "Jan 15, 2024",
      excerpt: "Strategic alliance with leading tech firm...",
    },
    {
      title: "Expansion into New Markets",
      date: "Jan 5, 2024",
      excerpt: "NAYLA Investments enters renewable energy sector...",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [mediaSlides.length]);

  return (
    <main className="press-media">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <div className="hero__grid-pattern"></div>
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <span className="badge">Press & Media</span>
          <h1 className="hero__title">
            Making Headlines,<br />
            <span>Shaping Tomorrow</span>
          </h1>
          <p className="hero__description">
            Discover our latest news, media coverage, and insights into the future of investment
          </p>
        </div>
      </section>

      {/* Featured Media Slider */}
      <section className="featured">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Featured Stories</h2>
            <nav className="slider-nav">
              <button onClick={() => setCurrentSlide((prev) => (prev - 1 + mediaSlides.length) % mediaSlides.length)}>
                <ChevronLeft size={24} />
              </button>
              <span>{currentSlide + 1}/{mediaSlides.length}</span>
              <button onClick={() => setCurrentSlide((prev) => (prev + 1) % mediaSlides.length)}>
                <ChevronRight size={24} />
              </button>
            </nav>
          </header>

          <div className="media-slider">
            {mediaSlides.map((slide, idx) => (
              <article 
                key={idx}
                className={`media-slide ${idx === currentSlide ? 'active' : ''}`}
                style={{ transform: `translateX(${(idx - currentSlide) * 100}%)` }}
              >
                <div className="media-slide__image">
                  <img src={slide.img} alt={slide.title} />
                  <div className="media-slide__type">
                    {slide.type === "video" && <Video />}
                    {slide.type === "article" && <FileText />}
                    {slide.type === "interview" && <Newspaper />}
                    <span>{slide.type}</span>
                  </div>
                </div>
                <div className="media-slide__content">
                  <time>{slide.date}</time>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button className="btn-primary">
                    View Full Story
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, idx) => (
              <article key={idx} className="article-card">
                <div className="article-card__image">
                  <img src={article.img} alt={article.title} />
                  <span className="article-card__category">{article.category}</span>
                </div>
                <div className="article-card__content">
                  <div className="article-card__meta">
                    <time>
                      <Calendar size={14} />
                      {article.date}
                    </time>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href="/" className="article-card__link">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="press-releases">
        <div className="container">
          <h2 className="section-title">Latest Press Releases</h2>
          <div className="timeline">
            {pressReleases.map((release, idx) => (
              <article key={idx} className="timeline-item">
                <div className="timeline-item__marker"></div>
                <div className="timeline-item__content">
                  <time>{release.date}</time>
                  <h3>{release.title}</h3>
                  <p>{release.excerpt}</p>
                  <button className="btn-secondary">
                    <FileText size={14} />
                    Download PDF
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .press-media {
          background-color: #ffffff;
          color: #1a1a1a;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Badge Styles */
        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #f0f0f0;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Button Styles */
        .btn-primary {
          background: #1a1a1a;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .btn-primary:hover {
          background: #333;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #ddd;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .btn-secondary:hover {
          border-color: #1a1a1a;
          background: #f9f9f9;
        }

        /* Typography */
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        /* Hero Styles */
        .hero {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero__background {
          position: absolute;
          inset: 0;
          background: black;
        }

        .hero__grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.95),
            rgba(255,255,255,0.7)
          );
        }

        .hero__content {
          position: relative;
          text-align: center;
          max-width: 800px;
          padding: 0 2rem;
        }

        .hero__title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin: 1.5rem 0;
          font-weight: 700;
        }

        .hero__title span {
          color: #666;
        }

        .hero__description {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Featured Slider */
        .featured {
          padding: 6rem 0;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .slider-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 500;
        }

        .slider-nav button {
          background: none;
          border: 1px solid #1a1a1a;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-nav button:hover {
          background: #1a1a1a;
          color: #ffffff;
        }

        .media-slider {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          height: 500px;
        }

        .media-slide {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          transition: transform 0.6s ease;
          width: 100%;
          height: 100%;
        }

        .media-slide.active {
          position: relative;
        }

        .media-slide__image {
          position: relative;
          height: 500px;
        }

        .media-slide__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .media-slide__type {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .media-slide__content {
          padding: 3rem;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .media-slide__content time {
          color: #666;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .media-slide__content h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .media-slide__content p {
          color: #666;
          font-size: 1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        /* Articles Grid */
        .articles {
          padding: 6rem 0;
          background: #f9f9f9;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .article-card {
          background: #ffffff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .article-card:hover {
          transform: translateY(-5px);
        }

        .article-card__image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .article-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-card__category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #1a1a1a;
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .article-card__content {
          padding: 1.5rem;
        }

        .article-card__meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #666;
        }

        .article-card__meta time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .article-card__content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #1a1a1a;
        }

        .article-card__content p {
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .article-card__link {
          color: #1a1a1a;
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .article-card__link:hover {
          color: #666;
        }

        /* Press Releases */
        .press-releases {
          padding: 6rem 0;
          background: #ffffff;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: #eee;
        }

        .timeline-item {
          margin: 3rem 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          position: relative;
        }

        .timeline-item:nth-child(even) .timeline-item__content {
          grid-column: 1;
          text-align: right;
        }

        .timeline-item:nth-child(odd) .timeline-item__content {
          grid-column: 2;
          text-align: left;
        }

        .timeline-item__marker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: #1a1a1a;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-item__content {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 10px;
        }

        .timeline-item__content time {
          color: #666;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .timeline-item__content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0.75rem 0;
          color: #1a1a1a;
        }

        .timeline-item__content p {
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .hero__content {
            padding: 0 1rem;
          }

          .section-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .media-slide {
            grid-template-columns: 1fr;
          }

          .media-slide__image {
            height: 250px;
          }

          .media-slide__content {
            padding: 2rem;
          }

          .articles-grid {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 2rem;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            padding-left: 4rem;
            gap: 0;
          }

          .timeline-item__content {
            grid-column: 1 !important;
            text-align: left !important;
            margin-left: 2rem;
          }

          .timeline-item__marker {
            left: 2rem;
          }

          .featured,
          .articles,
          .press-releases {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 500px;
          }

          .hero__title {
            font-size: 2rem;
          }

          .media-slide__content {
            padding: 1.5rem;
          }

          .timeline-item__content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}