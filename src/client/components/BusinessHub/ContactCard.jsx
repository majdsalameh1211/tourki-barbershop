import { useTranslation } from 'react-i18next';
import { Phone, MapPin } from 'lucide-react';
import './ContactCard.css';

const ContactCard = ({ businessInfo }) => {
  const { t } = useTranslation();

  const handlePhoneClick = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleMapClick = () => {
    // Encodes address for Google Maps URL
    const encodedAddress = encodeURIComponent(businessInfo.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
  };

  return (
    <div className="contact-card">
      <div className="cc-header">
        <div className="cc-icon-box">
          <Phone className="cc-icon" size={20} />
        </div>
        <h3 className="cc-title">{t('mainContent.getInTouch', 'Get in Touch')}</h3>
      </div>

      <div className="cc-body">
        <button className="cc-action-btn" onClick={handlePhoneClick}>
          <span className="cc-btn-label">{t('mainContent.call', 'Call')}</span>
          <span className="cc-btn-value">{businessInfo.phone}</span>
          <div className="cc-btn-icon">
            <Phone size={20} />
          </div>
        </button>

        <button className="cc-action-btn" onClick={handleMapClick}>
          <span className="cc-btn-label">{t('mainContent.location', 'Location')}</span>
          {/* Truncate address visually if it's too long, handled by block display */}
          <span className="cc-btn-value">{businessInfo.address}</span>
          <div className="cc-btn-icon">
            <MapPin size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;