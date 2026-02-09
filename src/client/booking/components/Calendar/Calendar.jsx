import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Calendar.css';

/**
 * Reusable Calendar Component
 * 
 * Fills 100% of its parent container (width & height).
 * All internal sizing is relative — works in any layout.
 * 
 * Props:
 *   selectedDate  - Date object or null
 *   onSelectDate  - (date: Date) => void
 *   minDate       - Date object, earliest selectable date (default: today)
 *   maxDate       - Date object, latest selectable date (default: none)
 *   showPreview   - boolean, show selected date bar (default: true)
 *   className     - string, additional CSS class for the wrapper
 */
const Calendar = ({
  selectedDate = null,
  onSelectDate,
  minDate = null,
  maxDate = null,
  showPreview = true,
  className = ''
}) => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  // Default minDate to today if not provided
  const effectiveMinDate = minDate || (() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  })();

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
    if (date < effectiveMinDate) return false;
    if (maxDate && date > maxDate) return false;
    return true;
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.toDateString() === date2.toDateString();
  };

  const isToday = (date) => {
    if (!date) return false;
    return date.toDateString() === new Date().toDateString();
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

  // Calculate number of rows for grid sizing
  const totalCells = days.length;
  const gridRows = Math.ceil(totalCells / 7);

  return (
    <div className={`cal ${className}`}>
      {/* Month Navigation */}
      <div className="cal-header">
        <button
          className="cal-nav"
          onClick={goToPrevMonth}
          aria-label={t('calendar.prevMonth', 'Previous month')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h3 className="cal-month">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>

        <button
          className="cal-nav"
          onClick={goToNextMonth}
          aria-label={t('calendar.nextMonth', 'Next month')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Day Grid */}
      <div
        className="cal-grid"
        style={{ '--grid-rows': gridRows + 1 }} /* +1 for day labels row */
      >
        {/* Day name headers */}
        {dayNames.map((day) => (
          <div key={day} className="cal-day-label">
            {day}
          </div>
        ))}

        {/* Date cells */}
        {days.map((day, index) => {
          const selectable = isDateSelectable(day);
          const selected = isSameDay(day, selectedDate);
          const today = isToday(day) && !selected;

          let cellClass = 'cal-cell';
          if (!day) cellClass += ' empty';
          else if (!selectable) cellClass += ' past';
          else if (selected) cellClass += ' selected';
          else if (today) cellClass += ' today';
          else cellClass += ' available';

          return (
            <div
              key={index}
              className={cellClass}
              onClick={() => day && selectable && onSelectDate(day)}
              role={day && selectable ? 'button' : undefined}
              tabIndex={day && selectable ? 0 : undefined}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && day && selectable) {
                  e.preventDefault();
                  onSelectDate(day);
                }
              }}
              aria-label={day ? day.toDateString() : undefined}
              aria-selected={selected || undefined}
            >
              {day && day.getDate()}
            </div>
          );
        })}
      </div>

      {/* Selected Date Preview */}
      {showPreview && selectedDate && (
        <div className="cal-preview">
          <svg className="cal-preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>
            {t('calendar.selected', 'Selected')}:{' '}
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
  );
};

export default Calendar;