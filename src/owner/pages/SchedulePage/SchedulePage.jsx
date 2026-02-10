import { useState } from 'react';
import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar';
import DailyAppointmentsTable from './DailyAppointmentsTable/DailyAppointmentsTable';
import AppointmentCard from './AppointmentCard/AppointmentCard';
import UpdateForm from './UpdateForm/UpdateForm';
import './SchedulePage.css';

const SchedulePage = () => {
  const [currentView, setCurrentView] = useState('calendar'); // calendar, table, card, edit
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // --- MOCK DATA ---
  const [appointments, setAppointments] = useState([
    { id: 1, time: '10:00', name: 'ישראל ישראלי', phone: '050-1234567', whatsapp: true },
    { id: 2, time: '10:30', name: 'דני דנינו', phone: '052-9876543', whatsapp: false },
    { id: 3, time: '11:00', name: 'יוסי כהן', phone: '054-5555555', whatsapp: true },
  ]);

  // --- HANDLERS ---
  const handleDaySelect = (date) => {
    setSelectedDate(date);
    setCurrentView('table');
  };

  const handleAppointmentSelect = (appt) => {
    setSelectedAppointment(appt);
    setCurrentView('card');
  };

  const handleDelete = (id) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
    setCurrentView('table'); // Go back after delete
  };

  const handleSave = (updatedAppt) => {
    setAppointments(prev => prev.map(a => a.id === updatedAppt.id ? updatedAppt : a));
    setSelectedAppointment(updatedAppt); // Update local view
    setCurrentView('card'); // Go back to viewer
  };

  const handleBack = () => {
    if (currentView === 'edit') setCurrentView('card');
    else if (currentView === 'card') setCurrentView('table');
    else if (currentView === 'table') setCurrentView('calendar');
  };

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
          
          {currentView === 'table' && <h3>תורים לתאריך {selectedDate?.toLocaleDateString('he-IL')}</h3>}
          {currentView === 'card' && <h3>פרטי תור</h3>}
          {currentView === 'edit' && <h3>עריכת תור</h3>}
        </div>
      )}

      {/* VIEW SWITCHER */}
      {currentView === 'calendar' && (
        <MonthlyCalendar onDaySelect={handleDaySelect} />
      )}

      {currentView === 'table' && (
        <DailyAppointmentsTable 
          date={selectedDate} 
          appointments={appointments}
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
        />
      )}

    </div>
  );
};

export default SchedulePage;