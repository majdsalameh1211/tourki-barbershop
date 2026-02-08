import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProgressDots from './components/ProgressDots';
import Step1Service from './steps/Step1Service/Step1Service';
import Step2Date from './steps/Step2Date/Step2Date';
import Step3Time from './steps/Step3Time/Step3Time';
import Step4ClientInfo from './steps/Step4ClientInfo/Step4ClientInfo';
import Step5Confirm from './steps/Step5Confirm/Step5Confirm';
import SuccessModal from './components/SuccessModal';
import './BookingPage.css';

const BookingPage = () => {
  const { t } = useTranslation();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    service: null,
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
      case 1: return bookingData.service !== null;
      case 2: return bookingData.date !== null;
      case 3: return bookingData.timeSlot !== null;
      case 4:
        const nameValid = bookingData.clientName.trim().length >= 2;
        const phoneValid = /^05\d-?\d{3}-?\d{4}$/.test(bookingData.clientPhone.replace(/\s/g, ''));
        return nameValid && phoneValid;
      case 5: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < 5) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    console.log('Booking submitted:', bookingData);
    setTimeout(() => setShowSuccess(true), 500);
  };

  const renderStep = () => {
    const stepProps = {
      1: { selectedService: bookingData.service, onSelectService: (s) => updateBookingData('service', s) },
      2: { selectedDate: bookingData.date, onSelectDate: (d) => updateBookingData('date', d) },
      3: { selectedDate: bookingData.date, selectedTimeSlot: bookingData.timeSlot, onSelectTimeSlot: (t) => updateBookingData('timeSlot', t) },
      4: {
        clientName: bookingData.clientName,
        clientPhone: bookingData.clientPhone,
        hasWhatsApp: bookingData.hasWhatsApp,
        onUpdateName: (n) => updateBookingData('clientName', n),
        onUpdatePhone: (p) => updateBookingData('clientPhone', p),
        onUpdateWhatsApp: (w) => updateBookingData('hasWhatsApp', w)
      },
      5: { bookingData, onBack: handleBack }
    };

    const steps = {
      1: Step1Service,
      2: Step2Date,
      3: Step3Time,
      4: Step4ClientInfo,
      5: Step5Confirm
    };

    const StepComponent = steps[currentStep];
    return <StepComponent {...stepProps[currentStep]} />;
  };

  return (
    <div className="booking-master-container">
      {showSuccess && <SuccessModal />}

      <ProgressDots currentStep={currentStep} totalSteps={5} />

      <div className="booking-master-content">
        {renderStep()}
      </div>

      <div className="booking-master-footer">
        <button
          className={`master-btn ${validateStep(currentStep) ? 'active' : 'disabled'}`}
          onClick={currentStep === 5 ? handleSubmit : handleNext}
          disabled={!validateStep(currentStep)}
        >
          <span className="btn-text">
            {currentStep === 5 ? t('booking.buttons.confirm') : t('booking.buttons.next')}
          </span>
          <span className="btn-icon">
            {currentStep === 5 ? '✓' : (document.dir === 'rtl' ? '←' : '→')}
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
