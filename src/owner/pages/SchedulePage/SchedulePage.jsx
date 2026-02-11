import { useState } from 'react';
import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar';
import DailyAppointmentsTable from './DailyAppointmentsTable/DailyAppointmentsTable';
import AppointmentCard from './AppointmentCard/AppointmentCard';
import UpdateForm from './FormsComponents/UpdateForm';
import { 
  getCalendarData, 
  getAppointmentsByDateObject 
} from '../../../utils/mockDataHelpers';
import './SchedulePage.css';

const SchedulePage = () => {
  const [currentView, setCurrentView] = useState('calendar'); // calendar, table, card, edit
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Load calendar data from mock
  const calendarData = getCalendarData();

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
    console.log('Delete appointment:', id);
    setCurrentView('table'); 
  };

  const handleSave = (updatedAppt) => {
    console.log('Update appointment:', updatedAppt);
    setSelectedAppointment(updatedAppt);
    setCurrentView('card'); 
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
          onBack={handleBack}
        />
      )}

      {currentView === 'card' && (
        <AppointmentCard 
          appointment={selectedAppointment} 
          onEdit={() => setCurrentView('edit')}
          onDelete={handleDelete}
          onBack={handleBack} // Pass back handler if Card needs it internally
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