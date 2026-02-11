import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MonthlyCalendar.css';

const MonthlyCalendar = ({ onDaySelect, appointmentsData = {} }) => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());

  // === DATE HELPERS ===
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Helper to check if a day is strictly in the past (yesterday or before)
  const isPastDate = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to midnight
    
    const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    cellDate.setHours(0, 0, 0, 0);
    
    return cellDate < today;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  // === NAVIGATION ===
  const goToPrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const goToNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const monthNames = [
    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
    'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
  ];
  const dayNames = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'];

  // === KEY GENERATOR ===
  const getDateKey = (day) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  // === RENDER LOGIC ===
  const renderCalendarCells = () => {
    const cells = [];
    
    // 1. Empty Spacers
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-cell calendar-cell--empty"></div>);
    }

    // 2. Day Cells
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = getDateKey(day);
      const dayInfo = appointmentsData[dateKey] || { count: 0, hasPending: false };
      
      const count = dayInfo.count || 0;
      const hasPending = dayInfo.hasPending;
      const past = isPastDate(day);
      const today = isToday(day);

      // === DETERMINE STATE CLASS (Priority Order) ===
      let stateClass = '';
      
      if (past) {
        // 1. Past -> Gray
        stateClass = 'state-passed';
      } else if (hasPending) {
        // 2. Pending -> Light Yellow
        stateClass = 'state-pending';
      } else if (count > 0) {
        // 3. Booked (No pending, but count > 0) -> Light Green
        stateClass = 'state-booked';
      } else {
        // 4. Empty/Future -> White
        stateClass = 'state-empty';
      }

      // Only clickable if not past
      const isClickable = !past;

      cells.push(
        <div 
          key={day} 
          className={`calendar-cell ${stateClass}`}
          onClick={() => isClickable && onDaySelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), dayInfo)}
        >
          {today && <div className="cell-today-marker" title="היום"></div>}
          
          {/* Top Section: Day Number */}
          <div className="cell-top">
            {day}
          </div>
          
          {/* Bottom Section: Appointments Count */}
          <div className="cell-bottom">
            {count > 0 ? count : '-'}
          </div>
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="monthly-calendar" dir="rtl">
      {/* Header */}
      <div className="calendar-header">
        <button className="calendar-nav" onClick={goToPrevMonth}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <h2 className="calendar-title">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button className="calendar-nav" onClick={goToNextMonth}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      </div>

      {/* Days Names */}
      <div className="calendar-days-header">
        {dayNames.map((d, i) => <div key={i} className="calendar-day-label">{d}</div>)}
      </div>

      {/* Grid */}
      <div className="calendar-grid">
        {renderCalendarCells()}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="legend-item">
            <div className="legend-dot" style={{background: 'var(--bg-pending)', border: '2px solid var(--border-pending)'}}></div>
            <span>ממתין לאישור</span>
        </div>
        <div className="legend-item">
            <div className="legend-dot" style={{background: 'var(--bg-booked)', border: '2px solid var(--border-booked)'}}></div>
            <span>תורים קיימים</span>
        </div>
        <div className="legend-item">
            <div className="legend-dot" style={{background: 'var(--bg-empty)', border: '1px solid var(--border-empty)'}}></div>
            <span>פנוי</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCalendar;