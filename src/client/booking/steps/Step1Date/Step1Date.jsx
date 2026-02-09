import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Step1Date.css';

const Step1Date = ({ selectedDate, onSelectDate }) => {
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

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const days = getDaysInMonth(currentMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="step-wrapper">
      <h2 className="step-title">{t('booking.step1.title', 'Pick Your Date')}</h2>

      <div className="calendar-wrapper">
        <div className="calendar-header">
          <button
            className="month-nav month-nav-prev"
            onClick={goToPrevMonth}
            aria-label="Previous month"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <h3 className="month-title">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          
          <button
            className="month-nav month-nav-next"
            onClick={goToNextMonth}
            aria-label="Next month"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="calendar-grid">
          {dayNames.map((day) => (
            <div key={day} className="day-label">
              {day}
            </div>
          ))}

          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                !day ? 'empty' :
                !isDateSelectable(day) ? 'past' :
                isSameDay(day, selectedDate) ? 'selected' :
                isToday(day) ? 'today' :
                'available'
              }`}
              onClick={() => day && isDateSelectable(day) && onSelectDate(day)}
              role={day && isDateSelectable(day) ? 'button' : undefined}
              tabIndex={day && isDateSelectable(day) ? 0 : undefined}
              aria-label={day ? day.toDateString() : undefined}
            >
              {day && day.getDate()}
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="selected-preview">
            <svg className="preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>
              {t('booking.step1.selected', 'Selected')}: {' '}
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step1Date;