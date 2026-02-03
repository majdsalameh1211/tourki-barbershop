import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('explore');

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Layer */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Content Layer */}
      <div className="hero-content">

        {/* 1. Main Title */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            <svg className="hero-scissors-inline scissors-left" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="6" cy="6" r="3" strokeWidth="2" />
              <circle cx="6" cy="18" r="3" strokeWidth="2" />
              <line x1="6" y1="9" x2="20" y2="15" strokeWidth="2" />
              <line x1="6" y1="15" x2="20" y2="9" strokeWidth="2" />
            </svg>

            <span className="hero-title-text">TOURKI</span>

            <svg className="hero-scissors-inline scissors-right" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="6" cy="6" r="3" strokeWidth="2" />
              <circle cx="6" cy="18" r="3" strokeWidth="2" />
              <line x1="6" y1="9" x2="20" y2="15" strokeWidth="2" />
              <line x1="6" y1="15" x2="20" y2="9" strokeWidth="2" />
            </svg>
          </h1>

          {/* 2. Subtitle */}
          <p className="hero-subtitle">
            Professional Barber Shop in Reneh Main Street
          </p>
        </div>

        {/* 3. CTA Button */}
        <div className="hero-button-container">
          <button className="hero-cta-button" onClick={handleBookNow}>
            <span className="button-text">BOOK NOW</span>
            <span className="button-arrow">→</span>
            <span className="button-shimmer"></span>
          </button>
        </div>

        {/* 4. Scroll Indicator */}
        <div
          className="hero-scroll-indicator"
          onClick={handleScrollToNextSection}
          role="button"
          tabIndex={0}
        >
          <div className="scroll-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;