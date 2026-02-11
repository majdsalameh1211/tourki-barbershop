import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MonthlyCalendar.css';

const MonthlyCalendar = ({ onDaySelect, appointmentsData = {} }) => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1));

  // Calendar calculation logic
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    cellDate.setHours(0, 0, 0, 0);
    return cellDate < today;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = [
    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
    'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
  ];

  const dayNames = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'];

  // Generate date key for appointments lookup
  const getDateKey = (day) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  const renderCalendarCells = () => {
    const cells = [];
    
    // Empty spacer cells
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <div key={`empty-${i}`} className="calendar-cell calendar-cell--empty" aria-hidden="true"></div>
      );
    }

    // Actual day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = getDateKey(day);
      const dayInfo = appointmentsData[dateKey] || { count: 0, hasPending: false };
      const isPending = dayInfo.hasPending;
      const count = dayInfo.count || 0;
      const today = isToday(day);
      const past = isPastDate(day);
      
      const cellClasses = [
        'calendar-cell',
        isPending && 'calendar-cell--pending',
        today && 'calendar-cell--today',
        count > 0 && !isPending && 'calendar-cell--has-appointments',
        past && 'calendar-cell--past'
      ].filter(Boolean).join(' ');

      const isClickable = !past;

      cells.push(
        <div 
          key={day} 
          className={cellClasses}
          onClick={() => isClickable && onDaySelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), dayInfo)}
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : undefined}
          aria-label={`${day} ${monthNames[currentDate.getMonth()]}, ${count} תורים${isPending ? ', יש תורים ממתינים לאישור' : ''}`}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && isClickable) {
              e.preventDefault();
              onDaySelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), dayInfo);
            }
          }}
        >
          {/* Top Section: Date Number */}
          <div className="cell-date-section">
            <span className="cell-date">{day}</span>
            {today && <span className="cell-today-dot" aria-label="היום"></span>}
          </div>
          
          {/* Bottom Section: Appointments Info */}
          <div className="cell-info-section">
            {isPending && (
              <svg className="cell-warning-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 20h20L12 2zm0 5.5l6.5 11h-13L12 7.5zM11 10v4h2v-4h-2zm0 5v2h2v-2h-2z"/>
              </svg>
            )}

            {count > 0 && (
              <div className="cell-appointment-badge">
                <span className="badge-count">{count}</span>
                <span className="badge-text">{count === 1 ? 'תור' : 'תורים'}</span>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return cells;
  };

  // Calculate total pending count for header badge
  const totalPending = Object.values(appointmentsData).filter(d => d.hasPending).length;

  return (
    <div className="monthly-calendar" dir="rtl">
      
      {/* Header with navigation */}
      <div className="calendar-header">
        <button 
          className="calendar-nav calendar-nav--prev" 
          onClick={goToPrevMonth}
          aria-label="חודש קודם"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        
        <div className="calendar-title-wrapper">
          <h2 className="calendar-title">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          {totalPending > 0 && (
            <span className="calendar-pending-badge" title={`${totalPending} ימים עם תורים ממתינים`}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 20h20L12 2zm0 5.5l6.5 11h-13L12 7.5zM11 10v4h2v-4h-2zm0 5v2h2v-2h-2z"/>
              </svg>
              {totalPending}
            </span>
          )}
        </div>
        
        <button 
          className="calendar-nav calendar-nav--next" 
          onClick={goToNextMonth}
          aria-label="חודש הבא"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Days of week header */}
      <div className="calendar-days-header">
        {dayNames.map((day, idx) => (
          <div key={idx} className="calendar-day-label" role="columnheader">
            <span className="day-label-full">{day}</span>
            <span className="day-label-short">{day.charAt(0)}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid" role="grid">
        {renderCalendarCells()}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-icon legend-icon--pending"></div>
          <span>תור ממתין לאישור</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon legend-icon--today"></div>
          <span>היום</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCalendar;