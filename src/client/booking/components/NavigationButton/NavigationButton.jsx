import { useTranslation } from 'react-i18next';
import './NavigationButton.css';

const NavigationButton = ({ currentStep, isValid, onNext, onSubmit }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (currentStep === 4) {
      onSubmit();
    } else {
      onNext();
    }
  };

  const getButtonText = () => {
    if (currentStep === 4) {
      return t('booking.buttons.confirm');
    }
    return t('booking.buttons.next');
  };

  const getButtonIcon = () => {
    if (currentStep === 4) {
      return '✓';
    }
    return document.dir === 'rtl' ? '←' : '→';
  };

  return (
    <div className="navigation-button-container">
      <button
        className={`nav-button ${isValid ? 'enabled' : 'disabled'}`}
        onClick={handleClick}
        disabled={!isValid}
      >
        <span className="button-text">{getButtonText()}</span>
        <span className="button-icon">{getButtonIcon()}</span>
      </button>
    </div>
  );
};

export default NavigationButton;
