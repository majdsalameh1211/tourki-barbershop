import React, { useState } from 'react';
import './AttendanceTable.css';

const AttendanceTable = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'דניאל כהן', phone: '052-1234567', time: '10:00' },
    { id: 2, name: 'יוסי לוי', phone: '054-9876543', time: '11:30' },
    { id: 3, name: 'עומר אדם', phone: '050-5555555', time: '12:00' },
    { id: 4, name: 'שרה נתניהו', phone: '052-1112222', time: '14:00' },
  ]);

  const handleStatus = (id, status) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2);
  };

  if (appointments.length === 0) {
    return (
      <div className="attendance-card">
        <div style={{padding:'3rem', textAlign:'center', color:'#9CA3AF'}}>
          <h3>הכל טופל!</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="attendance-card">
      
      {/* HEADER - Explicit Alignment */}
      <div className="att-header">
        <span>לקוח</span>
        <span style={{textAlign: 'right'}}>טלפון</span>
        <span style={{textAlign: 'center'}}>שעה</span>
        <span style={{textAlign: 'left'}}>האם הגיע?</span>
      </div>

      {/* ROWS */}
      {appointments.map(appt => (
        <div key={appt.id} className="att-row">
          
          <div className="col-name-wrapper">
            <div className="att-avatar">{getInitials(appt.name)}</div>
            <div className="att-name">{appt.name}</div>
          </div>
          
          <div className="att-phone" dir="ltr">{appt.phone}</div>
          
          <div className="att-time-wrapper">
            <div className="att-time-badge">{appt.time}</div>
          </div>

          <div className="att-actions">
            <button className="btn-action btn-noshow" onClick={() => handleStatus(appt.id, 'noshow')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <button className="btn-action btn-came" onClick={() => handleStatus(appt.id, 'came')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default AttendanceTable;