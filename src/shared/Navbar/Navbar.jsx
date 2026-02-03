import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'EN', label: 'English', native: 'English' },
    { code: 'AR', label: 'Arabic', native: 'العربية' },
    { code: 'HE', label: 'Hebrew', native: 'עברית' }
  ];

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // Add logic here to actually change app language
    console.log(`Language changed to: ${langCode}`);
  };

  // Close dropdown when clicking outside
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
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* === BRAND IDENTITY === */}
        <a href="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            {/* Custom Scissors Icon */}
            <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="6" cy="6" r="3" strokeWidth="2"/>
              <circle cx="6" cy="18" r="3" strokeWidth="2"/>
              <line x1="6" y1="9" x2="20" y2="15" strokeWidth="2" strokeLinecap="round"/>
              <line x1="6" y1="15" x2="20" y2="9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-main">TOURKI</span>
            <span className="brand-tagline">Barber Shop</span>
          </div>
        </a>

        {/* === LANGUAGE DROPDOWN === */}
        <div className="lang-dropdown-container" ref={dropdownRef}>
          
          {/* Trigger Button */}
          <button 
            className={`lang-trigger-btn ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Select Language"
          >
            <svg className="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span className="selected-lang-code">{currentLang}</span>
            <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div className={`lang-menu ${isOpen ? 'visible' : ''}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="lang-label">{lang.native}</span>
                {currentLang === lang.code && (
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
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