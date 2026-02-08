import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockData } from '../../../../data/mockData';
import './Step2DateTime.css';

const Step2DateTime = ({ selectedDate, selectedTimeSlot, onSelectDate, onSelectTimeSlot }) => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  // Check if date is selectable
  const isDateSelectable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  // Format date as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Load available slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      const dateStr = formatDate(selectedDate);
      // Filter out booked slots
      const bookedSlotIds = mockData.bookedSlots
        .filter(b => b.date === dateStr)
        .map(b => b.slotId);
      
      const available = mockData.timeSlots.default
        .filter(slot => slot.isBookable && !bookedSlotIds.includes(slot.id));
      
      setAvailableSlots(available);
    }
  }, [selectedDate]);

  return (
    <div className="step-container">
      <h2 className="step-title">{t('booking.step2.title')}</h2>

      {/* Calendar */}
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
            ←
          </button>
          <h3>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
          <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
            →
          </button>
        </div>

        <div className="calendar-grid">
          <div className="day-label">Su</div>
          <div className="day-label">Mo</div>
          <div className="day-label">Tu</div>
          <div className="day-label">We</div>
          <div className="day-label">Th</div>
          <div className="day-label">Fr</div>
          <div className="day-label">Sa</div>

          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                !day ? 'empty' :
                !isDateSelectable(day) ? 'past' :
                selectedDate && formatDate(day) === formatDate(selectedDate) ? 'selected' :
                'available'
              }`}
              onClick={() => day && isDateSelectable(day) && onSelectDate(day)}
            >
              {day && day.getDate()}
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="time-slots-container">
          <h3 className="time-slots-title">
            {t('booking.step2.availableTimes')} ({selectedDate.toLocaleDateString()})
          </h3>
          
          {availableSlots.length > 0 ? (
            <div className="time-slots-grid">
              {availableSlots.map((slot) => (
                <button
                  key={slot.id}
                  className={`time-slot ${selectedTimeSlot?.id === slot.id ? 'selected' : ''}`}
                  onClick={() => onSelectTimeSlot(slot)}
                >
                  {slot.start}
                </button>
              ))}
            </div>
          ) : (
            <p className="no-slots-message">{t('booking.step2.noSlotsAvailable')}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Step2DateTime;
