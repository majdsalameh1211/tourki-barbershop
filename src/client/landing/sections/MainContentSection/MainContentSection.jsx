import { useRef, useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import Hook
import { mockData } from '../../../../data/mockData';
import './MainContentSection.css';

const MainContentSection = () => {
  const { t } = useTranslation(); // Init Hook
  const swiperRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // --- 1. Check if Scrolling is Needed ---
  useEffect(() => {
    const checkScrollable = () => {
      if (swiperRef.current) {
        const isScrollable = swiperRef.current.scrollWidth > swiperRef.current.clientWidth;
        setShowArrows(isScrollable);
      }
    };
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  // --- 2. AUTO-SWIPE LOGIC ---
  useEffect(() => {
    let intervalId;
    if (!isPaused && showArrows) {
      intervalId = setInterval(() => {
        if (swiperRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = swiperRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
          if (isAtEnd) {
            swiperRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Adjust scroll direction based on document direction (RTL/LTR)
            const direction = document.dir === 'rtl' ? -1 : 1;
            swiperRef.current.scrollBy({ left: 240 * direction, behavior: 'smooth' });
          }
        }
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPaused, showArrows]);

  // --- Manual Scroll ---
  const scrollSwiper = (direction) => {
    if (swiperRef.current) {
      const scrollAmount = 240;
      // In RTL, 'left' button should move -scrollAmount (visually right), 
      // but technically scrollLeft logic is reversed or negative in some browsers.
      // Standard approach:
      const modifier = document.dir === 'rtl' ? -1 : 1; 
      // If direction is 'left', we subtract. If 'right', we add.
      const sign = direction === 'left' ? -1 : 1;
      
      swiperRef.current.scrollBy({
        left: sign * scrollAmount * modifier,
        behavior: 'smooth'
      });
    }
  };

  // --- Group Hours Logic ---
  const groupedHours = useMemo(() => {
    const hoursEntries = Object.entries(mockData.workingHours);
    const groups = [];
    if (hoursEntries.length === 0) return [];

    let currentGroup = {
      startDay: hoursEntries[0][0],
      endDay: hoursEntries[0][0],
      hours: hoursEntries[0][1]
    };

    for (let i = 1; i < hoursEntries.length; i++) {
      const [day, hours] = hoursEntries[i];
      const prevHours = currentGroup.hours;
      const isSameHours =
        hours.closed === prevHours.closed &&
        hours.open === prevHours.open &&
        hours.close === prevHours.close;

      if (isSameHours) {
        currentGroup.endDay = day;
      } else {
        groups.push(currentGroup);
        currentGroup = { startDay: day, endDay: day, hours: hours };
      }
    }
    groups.push(currentGroup);
    return groups;
  }, []);

  // Helper to translate day keys
  const fmtDay = (d) => t(`days.${d}`);

  return (
    <section className="main-content-section" id="explore">
      <div className="main-content-container">

        {/* === BUSINESS HUB === */}
        <div className="business-hub-card">
          {/* Left Side: Contact */}
          <div className="hub-section">
            <div className="hub-header">
              <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" fill="currentColor">
                {/* Waze Icon Path ... */}
                <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z" />
              </svg>
              <h3 className="hub-title">{t('mainContent.visitUs')}</h3>
            </div>

            <div className="contact-grid">
              {/* Phone and Address block */}
              <div className="contact-details">
                <a href={`tel:${mockData.businessInfo.phone}`} className="contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {mockData.businessInfo.phone}
                </a>
                <div className="contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{mockData.businessInfo.address}</span>
                </div>
              </div>

              <button
                className="waze-logo-btn"
                onClick={() => window.open("https://waze.com/ul?ll=32.0853,34.7818&navigate=yes", "_blank", "noopener,noreferrer")}
              >
                <img src="/Waze.svg" alt="Waze" />
              </button>
            </div>
          </div>

          <div className="hub-divider"></div>

          {/* Right Side: Hours */}
          <div className="hub-section">
            <div className="hub-header">
              <svg className="hub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <h3 className="hub-title">{t('mainContent.openHours')}</h3>
            </div>

            <div className="hours-container">
              {groupedHours.map((group, index) => {
                const isRange = group.startDay !== group.endDay;
                const dayLabel = isRange
                  ? `${fmtDay(group.startDay)} - ${fmtDay(group.endDay)}`
                  : fmtDay(group.startDay);

                return (
                  <div key={index} className="hours-line">
                    <span className="days-span">{dayLabel}</span>
                    {group.hours.closed ? (
                      <span className="closed-span">{t('mainContent.closed')}</span>
                    ) : (
                      <span className="time-span">
                        {group.hours.open} - {group.hours.close}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* === SERVICES SWIPER === */}
        <div
          className="services-section-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="services-header">
            <div className="hub-header">
              <svg className="hub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <line x1="6" y1="9" x2="20" y2="15" />
                <line x1="6" y1="15" x2="20" y2="9" />
              </svg>
              <h3 className="hub-title">{t('mainContent.services')}</h3>
            </div>

            {/* Navigation Arrows */}
            <div className={`swiper-nav ${showArrows ? 'visible' : ''}`}>
              <button className="nav-arrow" onClick={() => scrollSwiper('left')}>←</button>
              <button className="nav-arrow" onClick={() => scrollSwiper('right')}>→</button>
            </div>
          </div>

          <div className="services-swiper" ref={swiperRef}>
            {mockData.services.map((service) => (
              <div key={service.id} className="service-tile">
                <div className="tile-icon">{service.icon}</div>
                {/* Translate service name using key or fallback to original name */}
                <h4 className="tile-name">{t(`serviceNames.${service.name}`, service.name)}</h4>
                <div className="tile-meta">{service.duration} {t('mainContent.min')}</div>
                <div className="tile-price">₪{service.price}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainContentSection;