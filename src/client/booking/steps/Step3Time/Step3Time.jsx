import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockData } from '../../../../data/mockData';
import './Step3Time.css';

const Step3Time = ({ selectedDate, selectedTimeSlot, onSelectTimeSlot }) => {
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

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step3.title')}</h2>
      {selectedDate && (
        <p className="date-subtitle">
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      )}

      {availableSlots.length > 0 ? (
        <div className="time-slots-grid">
          {availableSlots.map((slot) => (
            <button
              key={slot.id}
              className={`time-slot ${
                slot.status === 'APPROVED' ? 'booked' :
                slot.status === 'PENDING' ? 'pending' :
                selectedTimeSlot?.id === slot.id ? 'selected' :
                'available'
              }`}
              onClick={() => slot.status === 'AVAILABLE' && onSelectTimeSlot(slot)}
              disabled={slot.status !== 'AVAILABLE' && selectedTimeSlot?.id !== slot.id}
            >
              <span className="slot-time">{slot.start}</span>
              <span className="slot-indicator">
                {slot.status === 'APPROVED' ? '✕' :
                 slot.status === 'PENDING' ? '○' :
                 selectedTimeSlot?.id === slot.id ? '✓' : ''}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="no-slots-message">
          <div className="no-slots-icon">📅</div>
          <p>{t('booking.step3.noSlots')}</p>
        </div>
      )}

      {selectedTimeSlot && (
        <div className="selected-preview">
          {t('booking.step3.selected')}: {selectedTimeSlot.start} - {selectedTimeSlot.end}
        </div>
      )}
    </div>
  );
};

export default Step3Time;
