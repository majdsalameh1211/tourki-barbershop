import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../data/mockData'; // Import languages from data
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Sync direction (RTL/LTR) with language
  useEffect(() => {
    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
  }, [i18n.language]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" dir="ltr">
      <div className="navbar-container">

        {/* === BRAND === */}
        <a href="/" className="navbar-brand">

          {/* --- NEW WRAPPER DIV START --- */}
          <div className="brand-logo-container">
            <img src="/logo.png" alt="Tourki" className="navbar-logo-img" />
          </div>
          {/* --- NEW WRAPPER DIV END --- */}

          <div className="brand-text">
            <span className="brand-main">TOURKI</span>
            <span className="brand-tagline">{t('navbar.tagline')}</span>
          </div>
        </a>

        {/* === LANGUAGE SWITCHER === */}
        <div className="lang-dropdown-container" ref={dropdownRef}>
          <button
            className={`lang-trigger-btn ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('navbar.selectLanguage')}
          >
            <svg className="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="selected-lang-code">
              {i18n.language ? i18n.language.toUpperCase() : 'EN'}
            </span>
            <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div className={`lang-menu ${isOpen ? 'visible' : ''}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="lang-label">{lang.native}</span>
                {i18n.language === lang.code && (
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;