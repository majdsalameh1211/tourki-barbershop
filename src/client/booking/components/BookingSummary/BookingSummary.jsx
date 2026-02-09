import { useTranslation } from 'react-i18next';
import './BookingSummary.css';

/**
 * Reusable Booking Summary Component
 * 
 * Fills 100% width and height of its parent container.
 * All internal sizing is relative — works in any layout.
 * 
 * Props:
 *   bookingData  - { date, timeSlot, clientName, clientPhone, hasWhatsApp }
 *   showInfoBox  - boolean, show "what happens next" box (default: true)
 *   className    - string, additional CSS class
 */
const BookingSummary = ({
  bookingData,
  showInfoBox = true,
  className = ''
}) => {
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
    <div className={`bs ${className}`}>

      {/* Summary Card */}
      <div className="bs-card">
        <div className="bs-header">
          <span className="bs-header-icon">📋</span>
          <h3 className="bs-header-title">{t('booking.step4.summary', 'Booking Summary')}</h3>
        </div>

        <div className="bs-grid">
          <div className="bs-row">
            <div className="bs-label">
              <span className="bs-label-icon">📅</span>
              <span>{t('booking.step4.date', 'Date')}</span>
            </div>
            <div className="bs-value">
              {formatDate(bookingData.date)}
            </div>
          </div>

          <div className="bs-row">
            <div className="bs-label">
              <span className="bs-label-icon">⏰</span>
              <span>{t('booking.step4.time', 'Time')}</span>
            </div>
            <div className="bs-value">
              {bookingData.timeSlot?.start} - {bookingData.timeSlot?.end}
            </div>
          </div>

          <div className="bs-row">
            <div className="bs-label">
              <span className="bs-label-icon">👤</span>
              <span>{t('booking.step4.name', 'Name')}</span>
            </div>
            <div className="bs-value">
              {bookingData.clientName}
            </div>
          </div>

          <div className="bs-row">
            <div className="bs-label">
              <span className="bs-label-icon">📱</span>
              <span>{t('booking.step4.phone', 'Phone')}</span>
            </div>
            <div className="bs-value">
              {bookingData.clientPhone}
            </div>
          </div>

          <div className="bs-row">
            <div className="bs-label">
              <span className="bs-label-icon">💬</span>
              <span>{t('booking.step4.whatsapp', 'WhatsApp')}</span>
            </div>
            <div className="bs-value">
              {bookingData.hasWhatsApp ? (
                <span className="bs-badge bs-badge--success">
                  ✓ {t('booking.step4.yes', 'Yes')}
                </span>
              ) : (
                <span className="bs-badge bs-badge--warning">
                  ✕ {t('booking.step4.no', 'No')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      {showInfoBox && (
        <div className="bs-info">
          <div className="bs-info-icon">ℹ️</div>
          <div className="bs-info-content">
            <h4 className="bs-info-title">{t('booking.step4.whatNext', 'What happens next?')}</h4>
            <ul className="bs-info-list">
              <li>{t('booking.step4.reviewInfo', 'Your booking will be reviewed by the owner')}</li>
              <li>{t('booking.step4.whatsappInfo', "You'll receive a confirmation via WhatsApp shortly")}</li>
              <li>{t('booking.step4.reservedInfo', 'This time slot is now reserved for you')}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;