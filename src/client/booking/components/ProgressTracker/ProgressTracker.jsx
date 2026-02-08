import { useTranslation } from 'react-i18next';
import './ProgressTracker.css';

const ProgressTracker = ({ currentStep, completedSteps }) => {
  const { t } = useTranslation();

  const steps = [
    { number: 1, label: t('booking.steps.service') },
    { number: 2, label: t('booking.steps.dateTime') },
    { number: 3, label: t('booking.steps.info') },
    { number: 4, label: t('booking.steps.confirm') }
  ];

  const getStepClass = (stepNumber) => {
    if (stepNumber <= completedSteps) return 'progress-pill completed';
    if (stepNumber === currentStep) return 'progress-pill active';
    return 'progress-pill upcoming';
  };

  return (
    <div className="progress-tracker">
      {steps.map((step) => (
        <div key={step.number} className={getStepClass(step.number)}>
          <div className="pill-number">
            {step.number <= completedSteps ? (
              <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              step.number
            )}
          </div>
          <div className="pill-label">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
