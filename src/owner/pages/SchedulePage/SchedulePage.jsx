import { useState } from 'react';
import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar';
import DailyAppointmentsTable from './DailyAppointmentsTable/DailyAppointmentsTable';
import AppointmentCard from './AppointmentCard/AppointmentCard';
import UpdateForm from './UpdateForm/UpdateForm';
import { 
  getCalendarData, 
  getAppointmentsByDateObject,
  formatDateKey 
} from '../../../utils/mockDataHelpers';
import './SchedulePage.css';

const SchedulePage = () => {
  const [currentView, setCurrentView] = useState('calendar'); // calendar, table, card, edit
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Load calendar data from mock
  const calendarData = getCalendarData();

  // --- HANDLERS ---
  const handleDaySelect = (date, dayInfo) => {
    setSelectedDate(date);
    setCurrentView('table');
  };

  const handleAppointmentSelect = (appt) => {
    setSelectedAppointment(appt);
    setCurrentView('card');
  };

  const handleDelete = (id) => {
    // In real app, this would call API
    console.log('Delete appointment:', id);
    setCurrentView('table'); // Go back after delete
  };

  const handleSave = (updatedAppt) => {
    // In real app, this would call API
    console.log('Update appointment:', updatedAppt);
    setSelectedAppointment(updatedAppt);
    setCurrentView('card'); // Go back to viewer
  };

  const handleBack = () => {
    if (currentView === 'edit') setCurrentView('card');
    else if (currentView === 'card') setCurrentView('table');
    else if (currentView === 'table') setCurrentView('calendar');
  };

  // Get appointments for selected date
  const dailyAppointments = selectedDate 
    ? getAppointmentsByDateObject(selectedDate)
    : [];

  return (
    <div className="schedule-container">
      
      {/* GLOBAL BACK BUTTON */}
      {currentView !== 'calendar' && (
        <div className="back-header">
          <button className="back-btn" onClick={handleBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/> {/* Right arrow for RTL back */}
            </svg>
            חזור
          </button>
          
          {currentView === 'table' && (
            <h3>תורים לתאריך {selectedDate?.toLocaleDateString('he-IL', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</h3>
          )}
          {currentView === 'card' && <h3>פרטי תור</h3>}
          {currentView === 'edit' && <h3>עריכת תור</h3>}
        </div>
      )}

      {/* VIEW SWITCHER */}
      {currentView === 'calendar' && (
        <MonthlyCalendar 
          appointmentsData={calendarData}
          onDaySelect={handleDaySelect} 
        />
      )}

      {currentView === 'table' && (
        <DailyAppointmentsTable 
          date={selectedDate} 
          appointments={dailyAppointments}
          onSelect={handleAppointmentSelect}
        />
      )}

      {currentView === 'card' && (
        <AppointmentCard 
          appointment={selectedAppointment} 
          onEdit={() => setCurrentView('edit')}
          onDelete={handleDelete}
        />
      )}

      {currentView === 'edit' && (
        <UpdateForm 
          appointment={selectedAppointment} 
          onSave={handleSave}
          onCancel={handleBack}
        />
      )}

    </div>
  );
};

export default SchedulePage;