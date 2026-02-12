// client/components/DynamicSwiper/DynamicSwiper.jsx
import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SwiperCard from '../Swipercard/Swipercard';
import './DynamicSwiper.css';

const DynamicSwiper = ({ 
  items = [], 
  title, 
  icon,
  autoPlay = true,
  autoPlayInterval = 3000,
  cardWidth = 320,
  gap = 24
}) => {
  const swiperRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  
  // Detect RTL
  useEffect(() => {
    const checkRTL = () => {
      const dir = document.documentElement.dir || document.body.dir || 'ltr';
      setIsRTL(dir === 'rtl');
    };
    checkRTL();
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    return () => observer.disconnect();
  }, []);

  // Calculate visibility and toggle centering
  const checkScrollable = useCallback(() => {
    if (swiperRef.current) {
      const containerWidth = swiperRef.current.clientWidth;
      // Calculate how many cards fit fully
      const cardsCanFit = Math.floor((containerWidth + gap) / (cardWidth + gap));
      // Show arrows (and disable centering) only if we have more items than fit
      setShowArrows(items.length > cardsCanFit);
    }
  }, [items.length, cardWidth, gap]);

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [checkScrollable]);

  // Auto-scroll logic (Only if arrows are shown)
  useEffect(() => {
    if (!autoPlay || isPaused || !showArrows) return;

    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        const scrollAmount = cardWidth + gap;
        const maxScroll = swiperRef.current.scrollWidth - swiperRef.current.clientWidth;
        const currentScroll = isRTL 
          ? Math.abs(swiperRef.current.scrollLeft)
          : swiperRef.current.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          swiperRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const direction = isRTL ? -1 : 1;
          swiperRef.current.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
        }
      }
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [isPaused, showArrows, autoPlay, autoPlayInterval, cardWidth, gap, isRTL]);

  const scroll = (direction) => {
    if (swiperRef.current) {
      const scrollAmount = cardWidth + gap;
      const multiplier = direction === 'left' ? -1 : 1;
      const rtlMultiplier = isRTL ? -1 : 1;
      swiperRef.current.scrollBy({ left: scrollAmount * multiplier * rtlMultiplier, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="dynamic-swiper-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="swiper-header">
        <div className="swiper-title-group">
          {icon && <span className="swiper-icon">{icon}</span>}
          <h3 className="swiper-title">{title}</h3>
        </div>
        
        {showArrows && (
          <div className="swiper-nav">
            <button onClick={() => scroll('left')} className="nav-btn nav-btn-prev" aria-label="Previous">
              {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button onClick={() => scroll('right')} className="nav-btn nav-btn-next" aria-label="Next">
              {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        )}
      </div>

      {/* CHANGED: Added logic to center cards if they don't overflow */}
      <div 
        className={`swiper-track ${!showArrows ? 'centered' : ''}`} 
        ref={swiperRef}
      >
        {items.map((item, index) => (
          <div 
            key={item.id || index} 
            className="swiper-slide"
            style={{ width: `${cardWidth}px` }}
          >
            <SwiperCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicSwiper;