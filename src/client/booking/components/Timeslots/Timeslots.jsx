import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockData } from '../../../../data/mockData';
import './Timeslots.css';

/**
 * Reusable TimeSlots Component
 * 
 * Fills 100% width and height of its parent container.
 * All internal sizing is relative — works in any layout.
 * 
 * Props:
 *   selectedDate      - Date object (required)
 *   selectedTimeSlot  - slot object or null
 *   onSelectTimeSlot  - (slot) => void
 *   showDateBadge     - boolean, show date at top (default: true)
 *   showPreview       - boolean, show selected time bar (default: true)
 *   className         - string, additional CSS class
 */
const TimeSlots = ({
  selectedDate,
  selectedTimeSlot = null,
  onSelectTimeSlot,
  showDateBadge = true,
  showPreview = true,
  className = ''
}) => {
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
    <div className={`ts ${className}`}>

      {/* Date Badge */}
      {showDateBadge && selectedDate && (
        <div className="ts-date-badge">
          <svg className="ts-date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="ts-date-text">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
      )}

      {/* Slots Grid or Empty Message */}
      {availableSlots.length > 0 ? (
        <div className="ts-grid">
          {availableSlots.map((slot) => {
            const isSelected = selectedTimeSlot?.id === slot.id;
            const isDisabled = slot.status !== 'AVAILABLE' && !isSelected;

            let cellClass = 'ts-slot';
            if (slot.status === 'APPROVED') cellClass += ' booked';
            else if (slot.status === 'PENDING') cellClass += ' pending';
            else if (isSelected) cellClass += ' selected';
            else cellClass += ' available';

            return (
              <button
                key={slot.id}
                className={cellClass}
                onClick={() => !isDisabled && onSelectTimeSlot(slot)}
                disabled={isDisabled}
                aria-label={`${slot.start} to ${slot.end}`}
                aria-selected={isSelected || undefined}
              >
                <span className="ts-slot-time">{slot.start}</span>
                <span className="ts-slot-status">
                  {isSelected ? (
                    <svg className="ts-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
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
        <div className="ts-empty">
          <div className="ts-empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className="ts-empty-text">
            {t('booking.step2.noSlots', 'No available time slots for this date')}
          </p>
          <p className="ts-empty-hint">
            {t('booking.step2.tryAnother', 'Please select a different date')}
          </p>
        </div>
      )}

      {/* Selected Time Preview */}
      {showPreview && selectedTimeSlot && (
        <div className="ts-preview">
          <svg className="ts-preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>
            {t('booking.step2.selected', 'Selected')}:{' '}
            <strong>{selectedTimeSlot.start} - {selectedTimeSlot.end}</strong>
          </span>
        </div>
      )}
    </div>
  );
};

export default TimeSlots;