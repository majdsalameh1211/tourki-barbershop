import { useTranslation } from 'react-i18next';
import { mockData } from '../../../../data/mockData';
import './Step1Service.css';

const Step1Service = ({ selectedService, onSelectService }) => {
  const { t } = useTranslation();

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step1.title')}</h2>
      
      <div className="services-grid">
        {mockData.services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
            onClick={() => onSelectService(service)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">
              {t(`serviceNames.${service.name}`, service.name)}
            </h3>
            <div className="service-radio">
              <div className={`radio-dot ${selectedService?.id === service.id ? 'active' : ''}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1Service;
