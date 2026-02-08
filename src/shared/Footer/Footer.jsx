import { useTranslation } from 'react-i18next'; // Import Hook
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation(); // Init Hook
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* === TOP DECK: CONTENT === */}
        <div className="footer-content">
          
          {/* 1. BRAND IDENTITY */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <div className="footer-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 3L5 7L9 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3L19 7L15 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="18" r="2" strokeWidth="2"/>
                </svg>
              </div>
              <div className="footer-brand-text">
                <h2>TOURKI</h2>
                <p>{t('footer.tagline')}</p>
              </div>
            </div>
            
            <div className="footer-address">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{t('footer.address')}</span>
            </div>
          </div>

          {/* 2. SOCIAL CONNECTIVITY */}
          <div className="footer-social-section">
            <span className="social-title">{t('footer.followUs')}</span>
            <div className="social-icons-grid">
              
              {/* Instagram */}
              <a href="#" className="social-tile" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="social-tile" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="social-tile" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* === LOWER DECK: COPYRIGHT === */}
        <div className="footer-bottom">
          <span className="copyright-text">
             {/* Using interpolation for the year */}
            {t('footer.copyright', { year: currentYear })}
          </span>
          <div className="footer-legal-links">
            <span className="legal-link">{t('footer.privacy')}</span>
            <span className="legal-link">{t('footer.terms')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;  