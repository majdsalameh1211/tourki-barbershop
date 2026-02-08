import { useTranslation } from 'react-i18next';
import './Step5Confirm.css';

const Step5Confirm = ({ bookingData, onBack }) => {
  const { t } = useTranslation();

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step5.title')}</h2>

      <div className="confirm-card">
        <h3 className="confirm-header">📋 {t('booking.step5.summary')}</h3>

        <div className="confirm-grid">
          <div className="confirm-row">
            <span className="confirm-label">{t('booking.step5.service')}:</span>
            <span className="confirm-value">
              {bookingData.service?.icon} {t(`serviceNames.${bookingData.service?.name}`, bookingData.service?.name)}
            </span>
          </div>

          <div className="confirm-row">
            <span className="confirm-label">{t('booking.step5.date')}:</span>
            <span className="confirm-value">{formatDate(bookingData.date)}</span>
          </div>

          <div className="confirm-row">
            <span className="confirm-label">{t('booking.step5.time')}:</span>
            <span className="confirm-value">
              {bookingData.timeSlot?.start} - {bookingData.timeSlot?.end}
            </span>
          </div>

          <div className="confirm-row">
            <span className="confirm-label">{t('booking.step5.name')}:</span>
            <span className="confirm-value">{bookingData.clientName}</span>
          </div>

          <div className="confirm-row">
            <span className="confirm-label">{t('booking.step5.phone')}:</span>
            <span className="confirm-value">{bookingData.clientPhone}</span>
          </div>

          <div className="confirm-row">
            <span className="confirm-label">{t('booking.step5.whatsapp')}:</span>
            <span className="confirm-value">
              {bookingData.hasWhatsApp ? `✓ ${t('booking.step5.yes')}` : `✕ ${t('booking.step5.no')}`}
            </span>
          </div>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">ℹ️</div>
        <p>{t('booking.step5.info')}</p>
      </div>

      <button className="back-link" onClick={onBack}>
        {t('booking.step5.back')}
      </button>
    </div>
  );
};

export default Step5Confirm;
