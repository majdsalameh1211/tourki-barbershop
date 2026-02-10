import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  if (!appointment) return null;

  const handleDeleteClick = () => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק תור זה?')) {
      onDelete(appointment.id);
    }
  };

  const initials = appointment.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="card-viewer-wrapper">
      
      {/* Header */}
      <div className="card-header-row">
        <div className="client-avatar">{initials}</div>
        <div className="client-info-block">
          <h2>{appointment.name}</h2>
          <p>נוצר ב: 01/02/2026, 14:30</p>
        </div>
      </div>

      {/* Details */}
      <div className="data-row">
        <span className="data-label">טלפון</span>
        <span className="data-value" dir="ltr">{appointment.phone}</span>
      </div>

      <div className="data-row">
        <span className="data-label">תאריך התור</span>
        <span className="data-value">05/02/2026</span>
      </div>

      <div className="data-row">
        <span className="data-label">שעה</span>
        <span className="data-value">{appointment.time}</span>
      </div>

      <div className="data-row">
        <span className="data-label">התראות WhatsApp</span>
        <span className={`whatsapp-badge ${appointment.whatsapp ? '' : 'off'}`}>
          {appointment.whatsapp ? 'פעיל' : 'כבוי'}
        </span>
      </div>

      {/* Buttons */}
      <div className="card-actions">
        <button className="action-btn btn-delete" onClick={handleDeleteClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          מחק
        </button>
        <button className="action-btn btn-edit" onClick={onEdit}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          ערוך
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;