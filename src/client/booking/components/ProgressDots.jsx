import { useTranslation } from 'react-i18next';
import './ProgressDots.css';

const ProgressDots = ({ currentStep, totalSteps = 5 }) => {
  const { t } = useTranslation();
  
  const steps = [
    { num: 1, label: t('booking.steps.service') },
    { num: 2, label: t('booking.steps.date') },
    { num: 3, label: t('booking.steps.time') },
    { num: 4, label: t('booking.steps.info') },
    { num: 5, label: t('booking.steps.confirm') }
  ];

  return (
    <div className="progress-dots-container">
      {steps.map((step) => (
        <div
          key={step.num}
          className={`progress-dot ${
            step.num < currentStep ? 'completed' :
            step.num === currentStep ? 'active' :
            'upcoming'
          }`}
        >
          <div className="dot-circle">
            {step.num < currentStep ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              step.num
            )}
          </div>
          <span className="dot-label">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressDots;
