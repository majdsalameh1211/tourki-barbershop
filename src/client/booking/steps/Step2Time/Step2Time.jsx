import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockData } from '../../../../data/mockData';
import './Step2Time.css';

const Step2Time = ({ selectedDate, selectedTimeSlot, onSelectTimeSlot }) => {
  const { t } = useTranslation();
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const dateStr = selectedDate.toISOString().split('T')[0];
      const bookedSlotIds = mockData.bookedSlots
        .filter(b => b.date === dateStr)
        .map(b => ({ id: b.slotId, status: b.status }));
      
      const slots = mockData.timeSlots.default.map(slot => {
        const booked = bookedSlotIds.find(b => b.id === slot.id);
        return {
          ...slot,
          status: booked ? booked.status : slot.isBookable ? 'AVAILABLE' : 'BREAK'
        };
      });
      
      setAvailableSlots(slots.filter(s => s.isBookable));
    }
  }, [selectedDate]);

  const getSlotStatusIcon = (status) => {
    switch (status) {
      case 'APPROVED': return '✕';
      case 'PENDING': return '○';
      default: return '';
    }
  };

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step2.title', 'Pick Your Time')}</h2>
      
      {selectedDate && (
        <div className="date-display">
          <svg className="date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span className="date-text">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
      )}

      {availableSlots.length > 0 ? (
        <div className="time-slots-grid">
          {availableSlots.map((slot) => {
            const isSelected = selectedTimeSlot?.id === slot.id;
            const isDisabled = slot.status !== 'AVAILABLE' && !isSelected;
            
            return (
              <button
                key={slot.id}
                className={`time-slot ${
                  slot.status === 'APPROVED' ? 'booked' :
                  slot.status === 'PENDING' ? 'pending' :
                  isSelected ? 'selected' :
                  'available'
                }`}
                onClick={() => !isDisabled && onSelectTimeSlot(slot)}
                disabled={isDisabled}
                aria-label={`${slot.start} to ${slot.end}`}
              >
                <span className="slot-time">{slot.start}</span>
                <span className="slot-status">
                  {isSelected ? (
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    getSlotStatusIcon(slot.status)
                  )}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="no-slots-message">
          <div className="no-slots-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <p className="no-slots-text">
            {t('booking.step2.noSlots', 'No available time slots for this date')}
          </p>
          <p className="no-slots-hint">
            {t('booking.step2.tryAnother', 'Please select a different date')}
          </p>
        </div>
      )}

      {selectedTimeSlot && (
        <div className="selected-preview">
          <svg className="preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>
            {t('booking.step2.selected', 'Selected')}: {' '}
            <strong>{selectedTimeSlot.start} - {selectedTimeSlot.end}</strong>
          </span>
        </div>
      )}
    </div>
  );
};

export default Step2Time;