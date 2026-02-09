import { useTranslation } from 'react-i18next';
import './Step4Confirm.css';

const Step4Confirm = ({ bookingData }) => {
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
      <h2 className="step-title">{t('booking.step4.title', 'Almost Done!')}</h2>

      {/* Summary Card */}
      <div className="summary-card">
        <div className="summary-header">
          <span className="summary-icon">📋</span>
          <h3>{t('booking.step4.summary', 'Booking Summary')}</h3>
        </div>

        <div className="summary-grid">
          {/* Date */}
          <div className="summary-row">
            <div className="summary-label">
              <span className="label-icon">📅</span>
              <span>{t('booking.step4.date', 'Date')}</span>
            </div>
            <div className="summary-value">
              {formatDate(bookingData.date)}
            </div>
          </div>

          {/* Time */}
          <div className="summary-row">
            <div className="summary-label">
              <span className="label-icon">⏰</span>
              <span>{t('booking.step4.time', 'Time')}</span>
            </div>
            <div className="summary-value">
              {bookingData.timeSlot?.start} - {bookingData.timeSlot?.end}
            </div>
          </div>

          {/* Name */}
          <div className="summary-row">
            <div className="summary-label">
              <span className="label-icon">👤</span>
              <span>{t('booking.step4.name', 'Name')}</span>
            </div>
            <div className="summary-value">
              {bookingData.clientName}
            </div>
          </div>

          {/* Phone */}
          <div className="summary-row">
            <div className="summary-label">
              <span className="label-icon">📱</span>
              <span>{t('booking.step4.phone', 'Phone')}</span>
            </div>
            <div className="summary-value">
              {bookingData.clientPhone}
            </div>
          </div>

          {/* WhatsApp */}
          <div className="summary-row">
            <div className="summary-label">
              <span className="label-icon">💬</span>
              <span>{t('booking.step4.whatsapp', 'WhatsApp')}</span>
            </div>
            <div className="summary-value">
              {bookingData.hasWhatsApp ? (
                <span className="badge badge-success">
                  ✓ {t('booking.step4.yes', 'Yes')}
                </span>
              ) : (
                <span className="badge badge-warning">
                  ✕ {t('booking.step4.no', 'No')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="info-box">
        <div className="info-icon">ℹ️</div>
        <div className="info-content">
          <h4 className="info-title">{t('booking.step4.whatNext', 'What happens next?')}</h4>
          <ul className="info-list">
            <li>{t('booking.step4.reviewInfo', 'Your booking will be reviewed by the owner')}</li>
            <li>{t('booking.step4.whatsappInfo', 'You\'ll receive a confirmation via WhatsApp shortly')}</li>
            <li>{t('booking.step4.reservedInfo', 'This time slot is now reserved for you')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step4Confirm;