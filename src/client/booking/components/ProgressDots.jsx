import { useTranslation } from 'react-i18next';
import './ProgressDots.css';

const ProgressDots = ({ currentStep, totalSteps = 4 }) => {
  const { t } = useTranslation();
  
  const steps = [
    { num: 1, label: t('booking.steps.date', 'Date'), icon: '📅' },
    { num: 2, label: t('booking.steps.time', 'Time'), icon: '⏰' },
    { num: 3, label: t('booking.steps.info', 'Info'), icon: '📝' },
    { num: 4, label: t('booking.steps.confirm', 'Confirm'), icon: '✓' }
  ];

  const getStepClass = (stepNum) => {
    if (stepNum < currentStep) return 'completed';
    if (stepNum === currentStep) return 'active';
    return 'upcoming';
  };

  return (
    <div className="progress-dots-wrapper">
      <div className="progress-dots-container">
        {steps.map((step, index) => (
          <div key={step.num} className="progress-item">
            {/* Dot */}
            <div className={`progress-dot ${getStepClass(step.num)}`}>
              <div className="dot-inner">
                {step.num < currentStep ? (
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <span className="dot-number">{step.num}</span>
                )}
              </div>
            </div>

            {/* Label */}
            <span className={`progress-label ${getStepClass(step.num)}`}>
              {step.label}
            </span>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`progress-line ${step.num < currentStep ? 'completed' : ''}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDots;