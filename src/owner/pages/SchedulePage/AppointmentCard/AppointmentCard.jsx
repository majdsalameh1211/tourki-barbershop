import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ appointment, onEdit, onDelete, onBack }) => {
  if (!appointment) return null;

  const handleDeleteClick = () => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק תור זה?')) {
      onDelete(appointment.id);
    }
  };

  const initials = appointment.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="card-view-container">
      {/* 1. Action Bar for consistency across the module */}
      <div className="action-bar">
        <div className="ab-title-group">
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
            <div>
              <h2 className="ab-title">פרטי תור</h2>
              <span className="ab-subtitle">צפייה וניהול פרטי לקוח</span>
            </div>

            {/* Back Button matching DailyAppointmentsTable style */}
            <button className="mobile-back-btn" onClick={onBack}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="ab-actions">
           <button className="ab-btn btn-back desktop-back-btn" onClick={onBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              <span>חזור לרשימה</span>
           </button>
        </div>
      </div>

      {/* 2. The Appointment Card Content */}
      <div className="card-viewer-wrapper">
        <div className="card-header-row">
          <div className="client-avatar">{initials}</div>
          <div className="client-info-block">
            <h2>{appointment.name}</h2>
            <p>מספר סידורי: #{appointment.id}</p>
          </div>
        </div>

        <div className="data-row">
          <span className="data-label">טלפון</span>
          <span className="data-value" dir="ltr">{appointment.phone}</span>
        </div>

        <div className="data-row">
          <span className="data-label">שעת התור</span>
          <span className="data-value">{appointment.time}</span>
        </div>

        <div className="data-row">
          <span className="data-label">התראות WhatsApp</span>
          <span className={`whatsapp-badge ${appointment.whatsapp ? '' : 'off'}`}>
            {appointment.whatsapp ? 'פעיל' : 'כבוי'}
          </span>
        </div>

        <div className="card-actions">
          <button className="action-btn btn-delete" onClick={handleDeleteClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
            מחק
          </button>
          <button className="action-btn btn-edit" onClick={onEdit}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            ערוך
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;