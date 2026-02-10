import { useTranslation } from 'react-i18next';
import './NavigationButtons.css';

/**
 * Reusable Navigation Buttons Component
 * 
 * Fills 100% width and height of its parent container.
 * All internal sizing is relative — works in any layout.
 * 
 * Props:
 *   currentStep   - number (1-4), controls which left button shows
 *   totalSteps    - number, total steps (default: 4)
 *   isValid       - boolean, enables/disables the right button
 *   onNext        - () => void, called when Next is clicked
 *   onPrev        - () => void, called when Back is clicked
 *   onSubmit      - () => void, called when Confirm is clicked (last step)
 *   homeHref      - string, URL for Home button (default: '/')
 *   className     - string, additional CSS class
 */
const NavigationButtons = ({
  currentStep = 1,
  totalSteps = 4,
  isValid = false,
  onNext,
  onPrev,
  onSubmit,
  homeHref = '/',
  className = ''
}) => {
  const { t } = useTranslation();
  const isRTL = typeof document !== 'undefined' && document.dir === 'rtl';
  const isLastStep = currentStep === totalSteps;
  const isFirstStep = currentStep === 1;

  const handleRightClick = () => {
    if (!isValid) return;
    if (isLastStep && onSubmit) {
      onSubmit();
    } else if (onNext) {
      onNext();
    }
  };

  return (
    <div className={`navbtns ${isLastStep ? 'navbtns--confirm' : ''} ${className}`}>

      {/* LEFT BUTTON: Home (first step) or Back (other steps) */}
      {isFirstStep ? (
        <a
          href={homeHref}
          className="navbtns-btn navbtns-home"
          aria-label={t('booking.buttons.home', 'Back to Home')}
        >
          <span className="navbtns-icon">

          </span>
          <span className="navbtns-text">{t('booking.buttons.home', 'cancel')}</span>
        </a>
      ) : (
        <button
          className="navbtns-btn navbtns-prev"
          onClick={onPrev}
          aria-label={t('booking.buttons.prev', 'Back')}
        >
          <span className="navbtns-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points={isRTL ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} />
            </svg>
          </span>
          <span className="navbtns-text">{t('booking.buttons.prev', 'Back')}</span>
        </button>
      )}

      {/* RIGHT BUTTON: Next or Confirm */}
      <button
        className={`navbtns-btn navbtns-next ${isValid ? 'navbtns-next--active' : 'navbtns-next--disabled'} ${isLastStep ? 'navbtns-next--confirm' : ''}`}
        onClick={handleRightClick}
        disabled={!isValid}
        aria-label={isLastStep ? t('booking.buttons.confirm', 'Confirm Booking') : t('booking.buttons.next', 'Continue')}
      >
        <span className="navbtns-text">
          {isLastStep
            ? t('booking.buttons.confirm', 'Confirm Booking')
            : t('booking.buttons.next', 'Continue')
          }
        </span>
        <span className="navbtns-icon">
          {isLastStep ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points={isRTL ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
            </svg>
          )}
        </span>
      </button>

    </div>
  );
};

export default NavigationButtons;