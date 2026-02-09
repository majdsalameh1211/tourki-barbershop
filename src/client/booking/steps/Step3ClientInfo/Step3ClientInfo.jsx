import { useTranslation } from 'react-i18next';
import './Step3ClientInfo.css';

const Step3ClientInfo = ({
  clientName,
  clientPhone,
  hasWhatsApp,
  onUpdateName,
  onUpdatePhone,
  onUpdateWhatsApp
}) => {
  const { t } = useTranslation();

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    
    // Format as 05X-XXX-XXXX
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    onUpdatePhone(formatted);
  };

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step3.title', 'Your Information')}</h2>
      <p className="step-subtitle">
        {t('booking.step3.subtitle', 'Almost there! Just a few more details.')}
      </p>

      <div className="info-form">
        {/* Full Name Field */}
        <div className="form-group">
          <label htmlFor="clientName" className="form-label">
            <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            {t('booking.step3.fullName', 'Full Name')}
            <span className="required">*</span>
          </label>
          <input
            id="clientName"
            type="text"
            className="form-input"
            value={clientName}
            onChange={(e) => onUpdateName(e.target.value)}
            placeholder={t('booking.step3.namePlaceholder', 'Enter your name')}
            autoComplete="name"
            required
          />
          {clientName.trim().length > 0 && clientName.trim().length < 2 && (
            <p className="field-hint error">
              {t('booking.step3.nameError', 'Name must be at least 2 characters')}
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="clientPhone" className="form-label">
            <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            {t('booking.step3.phoneNumber', 'Phone Number')}
            <span className="required">*</span>
          </label>
          <input
            id="clientPhone"
            type="tel"
            className="form-input"
            value={clientPhone}
            onChange={handlePhoneChange}
            placeholder="054-123-4567"
            autoComplete="tel"
            maxLength={12}
            required
          />
          <p className="field-hint">
            {t('booking.step3.phoneHint', 'Israeli format: 05X-XXX-XXXX')}
          </p>
        </div>

        {/* WhatsApp Checkbox */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={hasWhatsApp}
              onChange={(e) => onUpdateWhatsApp(e.target.checked)}
              id="whatsappCheck"
            />
            <span className="checkbox-custom">
              {hasWhatsApp && (
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </span>
            <span className="checkbox-text">
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t('booking.step3.whatsappCheck', 'I have WhatsApp on this number')}
            </span>
          </label>
        </div>

        {/* Warning if no WhatsApp */}
        {!hasWhatsApp && (
          <div className="warning-box">
            <svg className="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <div className="warning-content">
              <p className="warning-title">
                {t('booking.step3.warningTitle', 'Important Notice')}
              </p>
              <p className="warning-text">
                {t('booking.step3.whatsappWarn', 'Without WhatsApp, you won\'t receive booking updates and confirmations.')}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step3ClientInfo;