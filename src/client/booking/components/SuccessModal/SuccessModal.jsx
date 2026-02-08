import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SuccessModal.css';

const SuccessModal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="success-modal-overlay">
      <div className="success-modal">
        <div className="success-icon">✅</div>
        <h2 className="success-title">{t('booking.success.title')}</h2>
        <p className="success-message">{t('booking.success.message')}</p>
        <p className="success-whatsapp">{t('booking.success.whatsappSent')}</p>
        <p className="success-id">{t('booking.success.bookingId')}: #B{Math.floor(Math.random() * 10000)}</p>
        
        <button className="success-button" onClick={() => navigate('/')}>
          {t('booking.buttons.backToHome')}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
