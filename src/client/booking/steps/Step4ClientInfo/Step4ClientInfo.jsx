import { useTranslation } from 'react-i18next';
import './Step4ClientInfo.css';

const Step4ClientInfo = ({
  clientName,
  clientPhone,
  hasWhatsApp,
  onUpdateName,
  onUpdatePhone,
  onUpdateWhatsApp
}) => {
  const { t } = useTranslation();

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step4.title')}</h2>

      <div className="info-form">
        <div className="form-field">
          <label className="field-label">{t('booking.step4.fullName')}</label>
          <input
            type="text"
            className="field-input"
            value={clientName}
            onChange={(e) => onUpdateName(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="form-field">
          <label className="field-label">{t('booking.step4.phoneNumber')}</label>
          <input
            type="tel"
            className="field-input"
            value={clientPhone}
            onChange={(e) => onUpdatePhone(e.target.value)}
            placeholder="054-123-4567"
          />
        </div>

        <div className="checkbox-field">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={hasWhatsApp}
              onChange={(e) => onUpdateWhatsApp(e.target.checked)}
            />
            <span className="checkbox-text">{t('booking.step4.whatsappCheck')}</span>
            <span className="checkbox-box">
              {hasWhatsApp && <span className="checkmark">✓</span>}
            </span>
          </label>
        </div>

        {!hasWhatsApp && (
          <div className="warning-box">
            {t('booking.step4.whatsappWarn')}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step4ClientInfo;
