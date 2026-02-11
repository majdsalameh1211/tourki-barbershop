import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProgressDots from './components/ProgressDots/ProgressDots';
import Step1Date from './steps/Step1Date/Step1Date';
import Step2Time from './steps/Step2Time/Step2Time';
import Step3ClientInfo from './steps/Step3ClientInfo/Step3ClientInfo';
import Step4Confirm from './steps/Step4Confirm/Step4Confirm';
import NavigationButtons from './components/NavigationButtons/NavigationButtons';
import SuccessModal from './components/SuccessModal/SuccessModal';
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
        // Strip non-digits to validate the core number length and prefix
        const phoneDigits = bookingData.clientPhone.replace(/\D/g, '');
        // Valid if: Starts with 05 (10 digits total) OR Starts with 972 (12 digits total)
        const phoneValid = /^05\d{8}$/.test(phoneDigits) || /^9725\d{8}$/.test(phoneDigits);
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
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Allow clicking dots to navigate
  const handleStepClick = (step) => {
    // 1. Don't do anything if clicking the current step
    if (step === currentStep) return;

    // 2. If going back, always allow
    if (step < currentStep) {
      setCurrentStep(step);
      return;
    }

    // 3. If going forward, ensure ALL previous steps are valid
    // (e.g. can't jump to Step 3 if Step 1 is invalid)
    let canProceed = true;
    for (let i = 1; i < step; i++) {
      if (!validateStep(i)) {
        canProceed = false;
        break;
      }
    }

    if (canProceed) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async () => {
    console.log('Booking submitted:', bookingData);
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
    <div className="bp">
      {showSuccess && <SuccessModal />}

      {/* ── ZONE 1: NAVBAR CONTAINER (10%) ── */}
      {/* Navbar is rendered outside BookingPage via App.jsx,
          but we reserve 10% for it here */}
      <div className="bp-navbar-zone" />

      {/* ── ZONE 2: PROGRESS DOTS (15% = 2.5 + 10 + 2.5) ── */}
      <div className="bp-progress-zone">
        <div className="bp-progress-inner">
          <ProgressDots
            currentStep={currentStep}
            totalSteps={4}
            onStepClick={handleStepClick} // <--- Pass the new handler
          />
        </div>
      </div>

      {/* ── ZONE 3: TITLE (10% = 2.5 + 5 + 2.5) ── */}
      <div className="bp-title-zone">
        <div className="bp-title-inner">
          <h2 className="bp-step-title">
            {currentStep === 1 && t('booking.step1.title', 'Pick Your Date')}
            {currentStep === 2 && t('booking.step2.title', 'Pick Your Time')}
            {currentStep === 3 && t('booking.step3.title', 'Your Details')}
            {currentStep === 4 && t('booking.step4.title', 'Almost Done!')}
          </h2>
        </div>
      </div>

      {/* ── ZONE 4: STEP CONTENT (65% = 50 + 15) ── */}
      <div className="bp-content-zone">

        {/* Sub-zone A: Real step content (50%) */}
        <div className="bp-content-data">
          {renderStep()}
        </div>

        {/* Sub-zone B: Buttons (15% = 2.5 + 10 + 2.5) */}
        <div className="bp-content-buttons">
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={4}
            isValid={validateStep(currentStep)}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmit={handleSubmit}
          />
        </div>

      </div>
    </div>
  );
};

export default BookingPage;