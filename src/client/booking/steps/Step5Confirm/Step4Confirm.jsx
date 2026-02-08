import { useTranslation } from 'react-i18next';
import './Step4Confirm.css';

const Step4Confirm = ({ bookingData, onBack }) => {
  const { t } = useTranslation();

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">{t('booking.step4.title')}</h2>

      {/* Summary Card */}
      <div className="summary-card">
        <h3 className="summary-header">📅 {t('booking.step4.summary')}</h3>
        
        <div className="summary-content">
          <div className="summary-row">
            <span className="summary-label">{t('booking.step4.service')}:</span>
            <span className="summary-value">
              {t(`serviceNames.${bookingData.service?.name}`, bookingData.service?.name)}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-label">{t('booking.step4.date')}:</span>
            <span className="summary-value">{formatDate(bookingData.date)}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">{t('booking.step4.time')}:</span>
            <span className="summary-value">
              {bookingData.timeSlot?.start} - {bookingData.timeSlot?.end}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-label">{t('booking.step4.name')}:</span>
            <span className="summary-value">{bookingData.clientName}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">{t('booking.step4.phone')}:</span>
            <span className="summary-value">{bookingData.clientPhone}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">{t('booking.step4.whatsapp')}:</span>
            <span className="summary-value">
              {bookingData.hasWhatsApp ? t('booking.step4.yes') : t('booking.step4.no')}
            </span>
          </div>
        </div>
      </div>

      {/* What Happens Next */}
      <div className="info-card">
        <h3 className="info-header">ℹ️ {t('booking.step4.whatNext')}</h3>
        <ul className="info-list">
          <li>{t('booking.step4.reviewInfo')}</li>
          <li>{t('booking.step4.whatsappInfo')}</li>
          <li>{t('booking.step4.reservedInfo')}</li>
        </ul>
      </div>

      {/* Back to Edit Link */}
      <button className="back-link" onClick={onBack}>
        {t('booking.step4.backToEdit')}
      </button>
    </div>
  );
};

export default Step4Confirm;
