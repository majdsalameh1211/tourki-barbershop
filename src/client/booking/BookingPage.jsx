import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProgressDots from './components/ProgressDots';
import Step1Date from './steps/Step1Date/Step1Date';
import Step2Time from './steps/Step2Time/Step2Time';
import Step3ClientInfo from './steps/Step3ClientInfo/Step3ClientInfo';
import Step4Confirm from './steps/Step4Confirm/Step4Confirm';
import SuccessModal from './components/SuccessModal';
import './BookingPage.css';

const BookingPage = () => {
  const { t } = useTranslation();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: null,
    timeSlot: null,
    clientName: '',
    clientPhone: '',
    hasWhatsApp: true
  });

  const updateBookingData = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1: 
        return bookingData.date !== null;
      case 2: 
        return bookingData.timeSlot !== null;
      case 3:
        const nameValid = bookingData.clientName.trim().length >= 2;
        const phoneValid = /^05\d-?\d{3}-?\d{4}$/.test(bookingData.clientPhone.replace(/\s/g, ''));
        return nameValid && phoneValid;
      case 4: 
        return true;
      default: 
        return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Booking submitted:', bookingData);
    // API call logic here
    setTimeout(() => setShowSuccess(true), 500);
  };

  const isRTL = typeof document !== 'undefined' && document.dir === 'rtl';

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Date
            selectedDate={bookingData.date}
            onSelectDate={(date) => updateBookingData('date', date)}
          />
        );
      case 2:
        return (
          <Step2Time
            selectedDate={bookingData.date}
            selectedTimeSlot={bookingData.timeSlot}
            onSelectTimeSlot={(slot) => updateBookingData('timeSlot', slot)}
          />
        );
      case 3:
        return (
          <Step3ClientInfo
            clientName={bookingData.clientName}
            clientPhone={bookingData.clientPhone}
            hasWhatsApp={bookingData.hasWhatsApp}
            onUpdateName={(name) => updateBookingData('clientName', name)}
            onUpdatePhone={(phone) => updateBookingData('clientPhone', phone)}
            onUpdateWhatsApp={(has) => updateBookingData('hasWhatsApp', has)}
          />
        );
      case 4:
        return (
          <Step4Confirm bookingData={bookingData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="booking-page-container">
      {showSuccess && <SuccessModal />}

      {/* 1. Progress Dots */}
      <div className="booking-progress-section">
        <ProgressDots currentStep={currentStep} totalSteps={4} />
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="booking-content-wrapper">
        
        {/* Step Content */}
        <div className="booking-step-content">
          {renderStep()}
        </div>

        {/* 3. Navigation Buttons - Always 2 buttons for balanced layout */}
        <div className="booking-navigation-section">
          <div className={`nav-buttons-container ${currentStep === 4 ? 'confirm-step' : ''}`}>
            
            {/* LEFT BUTTON: Home (Step 1) or Back (Steps 2-4) */}
            {currentStep === 1 ? (
              <a
                href="/"
                className="nav-btn nav-btn-home"
                aria-label={t('booking.buttons.home', 'Back to Home')}
              >
                <span className="btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span className="btn-text">{t('booking.buttons.home', 'Home')}</span>
              </a>
            ) : (
              <button
                className="nav-btn nav-btn-prev"
                onClick={handlePrev}
              >
                <span className="btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points={isRTL ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} />
                  </svg>
                </span>
                <span className="btn-text">{t('booking.buttons.prev', 'Back')}</span>
              </button>
            )}
            
            {/* RIGHT BUTTON: Next (Steps 1-3) or Confirm (Step 4) */}
            <button
              className={`nav-btn nav-btn-next ${validateStep(currentStep) ? 'active' : 'disabled'} ${currentStep === 4 ? 'confirm' : ''}`}
              onClick={currentStep === 4 ? handleSubmit : handleNext}
              disabled={!validateStep(currentStep)}
            >
              <span className="btn-text">
                {currentStep === 4 
                  ? t('booking.buttons.confirm', 'Confirm Booking') 
                  : t('booking.buttons.next', 'Continue')
                }
              </span>
              <span className="btn-icon">
                {currentStep === 4 ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points={isRTL ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
                  </svg>
                )}
              </span>
            </button>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BookingPage;