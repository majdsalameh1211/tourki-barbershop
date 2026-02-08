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

  return (
    <div className="step-container">
      <h2 className="step-title">{t('booking.step3.title')}</h2>

      <div className="info-form">
        {/* Full Name */}
        <div className="form-group">
          <label className="form-label">{t('booking.step3.fullName')}</label>
          <input
            type="text"
            className="form-input"
            value={clientName}
            onChange={(e) => onUpdateName(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label className="form-label">{t('booking.step3.phoneNumber')}</label>
          <input
            type="tel"
            className="form-input"
            value={clientPhone}
            onChange={(e) => onUpdatePhone(e.target.value)}
            placeholder="054-123-4567"
          />
        </div>

        {/* WhatsApp Checkbox */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasWhatsApp}
              onChange={(e) => onUpdateWhatsApp(e.target.checked)}
            />
            <span className="checkbox-text">{t('booking.step3.whatsappCheckbox')}</span>
          </label>
        </div>

        {/* Warning if no WhatsApp */}
        {!hasWhatsApp && (
          <div className="whatsapp-warning">
            {t('booking.step3.whatsappWarning')}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step3ClientInfo;
