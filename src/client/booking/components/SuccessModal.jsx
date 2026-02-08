import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SuccessModal.css';

const SuccessModal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="success-overlay">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>{t('booking.success.title')}</h2>
        <p>{t('booking.success.message')}</p>
        <p className="success-sub">{t('booking.success.whatsapp')}</p>
        <p className="booking-id">
          {t('booking.success.bookingId')}: #B{Math.floor(Math.random() * 10000)}
        </p>
        <button className="success-btn" onClick={() => navigate('/')}>
          {t('booking.buttons.backHome')}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
