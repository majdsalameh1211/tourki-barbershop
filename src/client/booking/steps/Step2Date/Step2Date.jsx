import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Step2Date.css';

const Step2Date = ({ selectedDate, onSelectDate }) => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const isDateSelectable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.toDateString() === date2.toDateString();
  };

  const days = getDaysInMonth(currentMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step2.title')}</h2>

      <div className="calendar-wrapper">
        <div className="calendar-header">
          <button
            className="month-nav"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          >
            ←
          </button>
          <h3 className="month-title">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button
            className="month-nav"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          >
            →
          </button>
        </div>

        <div className="calendar-grid">
          <div className="day-label">S</div>
          <div className="day-label">M</div>
          <div className="day-label">T</div>
          <div className="day-label">W</div>
          <div className="day-label">T</div>
          <div className="day-label">F</div>
          <div className="day-label">S</div>

          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                !day ? 'empty' :
                !isDateSelectable(day) ? 'past' :
                isSameDay(day, selectedDate) ? 'selected' :
                'available'
              }`}
              onClick={() => day && isDateSelectable(day) && onSelectDate(day)}
            >
              {day && day.getDate()}
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="selected-preview">
            {t('booking.step2.selected')}: {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2Date;
