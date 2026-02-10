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
              <span className="bs-label-icon">              <svg className="cf-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg></span>
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