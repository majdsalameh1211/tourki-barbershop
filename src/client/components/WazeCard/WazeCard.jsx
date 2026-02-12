import { useTranslation } from 'react-i18next';
import { Navigation } from 'lucide-react';
import './WazeCard.css';

const WazeCard = ({ wazeCoordinates }) => {
  const { t } = useTranslation();

  const handleWazeClick = () => {
    if (wazeCoordinates) {
      window.open(`https://waze.com/ul?ll=${wazeCoordinates.lat},${wazeCoordinates.lng}&navigate=yes`, "_blank");
    }
  };

  return (
    <div className="waze-card" onClick={handleWazeClick}>
      <div className="wc-content">
        <div className="wc-info">
          <h3 className="wc-title">{t('mainContent.navigate', 'Navigate')}</h3>
          <p className="wc-subtitle">{t('mainContent.startNavigation', 'Start Navigation')}</p>
        </div>
        
        <div className="wc-icon-wrapper">
           {/* Ensure Waze.svg exists in your public folder */}
           <img src="/Waze.svg" alt="Waze" className="wc-waze-logo" />
        </div>
      </div>
      
      {/* Decorative Background Icon */}
      <div className="wc-bg-icon">
        <Navigation size={100} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default WazeCard;