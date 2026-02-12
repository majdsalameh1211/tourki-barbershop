// client/landing/sections/MainContentSection/MainContentSection.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BusinessHub from '../../../components/BusinessHub/BusinessHub';
import DynamicSwiper from '../../../components/DynamicSwiper/DynamicSwiper';
import { mockData } from '../../../../data/mockData';
import mockObjects from '../../../../data/mockObjects';
import './MainContentSection.css';

const MainContentSection = () => {
  const { t, i18n } = useTranslation();
  
  const [workingHours, setWorkingHours] = useState([]);

  useEffect(() => {
    const hours = mockData.workingHours;
    const formattedHours = [
      { dayLabel: t('days.sunday') || 'Sunday', timeLabel: hours.sunday?.closed ? t('mainContent.closed') : `${hours.sunday?.open} - ${hours.sunday?.close}`, isClosed: hours.sunday?.closed },
      { dayLabel: t('days.monday') || 'Monday', timeLabel: hours.monday?.closed ? t('mainContent.closed') : `${hours.monday?.open} - ${hours.monday?.close}`, isClosed: hours.monday?.closed },
      { dayLabel: t('days.tuesday') || 'Tuesday', timeLabel: hours.tuesday?.closed ? t('mainContent.closed') : `${hours.tuesday?.open} - ${hours.tuesday?.close}`, isClosed: hours.tuesday?.closed },
      { dayLabel: t('days.wednesday') || 'Wednesday', timeLabel: hours.wednesday?.closed ? t('mainContent.closed') : `${hours.wednesday?.open} - ${hours.wednesday?.close}`, isClosed: hours.wednesday?.closed },
      { dayLabel: t('days.thursday') || 'Thursday', timeLabel: hours.thursday?.closed ? t('mainContent.closed') : `${hours.thursday?.open} - ${hours.thursday?.close}`, isClosed: hours.thursday?.closed },
      { dayLabel: t('days.friday') || 'Friday', timeLabel: hours.friday?.closed ? t('mainContent.closed') : `${hours.friday?.open} - ${hours.friday?.close}`, isClosed: hours.friday?.closed },
      { dayLabel: t('days.saturday') || 'Saturday', timeLabel: hours.saturday?.closed ? t('mainContent.closed') : `${hours.saturday?.open} - ${hours.saturday?.close}`, isClosed: hours.saturday?.closed }
    ];
    setWorkingHours(formattedHours);
  }, [i18n.language, t]);

  // Helper to localize names from the object
  const getLocalizedItems = (items, type) => {
    return items.map(item => ({
      ...item,
      // Ensure the card knows if it is a 'product' or 'service' for styling
      type: type, 
      title: item.name[i18n.language] || item.name.en,
      name: item.name[i18n.language] || item.name.en
    }));
  };

  return (
    <section className="main-content-section">
      <div className="content-wrapper">
        
        {/* ============================================
            ORDER 1: BUSINESS HUB (Top)
            ============================================ */}
        <div className="row row-1 hub-row">
          <BusinessHub 
            businessInfo={mockData.businessInfo} 
            hours={workingHours} 
          />
        </div>

        {/* ============================================
            ORDER 2: SERVICES SWIPER (Middle)
            ============================================ */}
        <div className="row row-2 services-row">
          <DynamicSwiper 
            title={t('mainContent.services') || 'Our Services'}
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            }
            items={getLocalizedItems(mockObjects.services, 'service')}
            cardWidth={220} /* Sleek Width */
            gap={20}
            autoPlay={true}
          />
        </div>

        {/* ============================================
            ORDER 3: PRODUCTS SWIPER (Bottom)
            ============================================ */}
        <div className="row row-3 products-row">
          <DynamicSwiper 
            title={t('mainContent.products') || 'Our Products'}
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            }
            items={getLocalizedItems(mockObjects.products, 'product')}
            cardWidth={200} /* Products are thinner -> Sleeker look */
            gap={20}
            autoPlay={true}
          />
        </div>

      </div>
    </section>
  );
};

export default MainContentSection;