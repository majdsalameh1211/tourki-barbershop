import { useState } from 'react';
import './MonthlyCalendar.css'; // Importing the separated CSS

const MonthlyCalendar = ({ onDaySelect }) => {
  // Current Date State (Starting Feb 2026 as per your request)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); 

  // MOCK DATA (In real app, fetch this from API)
  const monthData = {
    5: { count: 3, hasPending: false },
    12: { count: 8, hasPending: true }, // Alert
    18: { count: 5, hasPending: false },
    24: { count: 2, hasPending: true }, // Alert
  };

  // --- Calendar Logic ---
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate); // 0 = Sunday

  // Navigation
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

  // --- Render Grid ---
  const renderCalendarCells = () => {
    const cells = [];
    
    // 1. Empty slots (Spacer for previous month)
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    // 2. Actual Days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayInfo = monthData[day];
      const isPending = dayInfo?.hasPending;
      const count = dayInfo?.count || 0;
      
      cells.push(
        <div 
          key={day} 
          className={`calendar-cell ${isPending ? 'has-pending' : ''}`}
          onClick={() => onDaySelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
          role="button"
          tabIndex={0}
        >
          <span className="cell-date">{day}</span>
          
          {/* Badge Logic: Only show if there are appointments */}
          {count > 0 && (
            <div className="appt-badge">
              {count} <span>תורים</span>
              {isPending && " ⚠️"}
            </div>
          )}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="calendar-wrapper">
      
      {/* Header */}
      <div className="calendar-header">
        <button className="nav-btn" onClick={goToPrevMonth} title="חודש קודם">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        
        <h3 className="month-title">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        
        <button className="nav-btn" onClick={goToNextMonth} title="חודש הבא">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Week Header */}
      <div className="days-header">
        <span className="day-label">א׳</span>
        <span className="day-label">ב׳</span>
        <span className="day-label">ג׳</span>
        <span className="day-label">ד׳</span>
        <span className="day-label">ה׳</span>
        <span className="day-label">ו׳</span>
        <span className="day-label">ש׳</span>
      </div>

      {/* Days Grid */}
      <div className="calendar-grid">
        {renderCalendarCells()}
      </div>
    </div>
  );
};

export default MonthlyCalendar;