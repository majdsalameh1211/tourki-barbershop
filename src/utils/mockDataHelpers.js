import mockData from '../data/Mockappointments.json';

/**
 * Mock Data Helper Utilities
 * Use these functions to integrate mock data into your components
 */

// Get all appointments
export const getAllAppointments = () => {
  return mockData.appointments;
};

// Get appointments for a specific date
export const getAppointmentsByDate = (dateString) => {
  // dateString format: "2026-02-05"
  const dateInfo = mockData.appointmentsByDate[dateString];
  
  if (!dateInfo) return [];
  
  return dateInfo.appointments.map(id => 
    mockData.appointments.find(appt => appt.id === id)
  );
};

// Get calendar data (for MonthlyCalendar component)
export const getCalendarData = () => {
  return mockData.appointmentsByDate;
};

// Get appointment by ID
export const getAppointmentById = (id) => {
  return mockData.appointments.find(appt => appt.id === id);
};

// Get pending appointments count
export const getPendingCount = () => {
  return mockData.appointments.filter(appt => appt.status === 'pending').length;
};

// Get appointments by status
export const getAppointmentsByStatus = (status) => {
  return mockData.appointments.filter(appt => appt.status === status);
};

// Format date helper
export const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Get appointments for Date object
export const getAppointmentsByDateObject = (date) => {
  const dateKey = formatDateKey(date);
  return getAppointmentsByDate(dateKey);
};

export default {
  getAllAppointments,
  getAppointmentsByDate,
  getCalendarData,
  getAppointmentById,
  getPendingCount,
  getAppointmentsByStatus,
  formatDateKey,
  getAppointmentsByDateObject
};