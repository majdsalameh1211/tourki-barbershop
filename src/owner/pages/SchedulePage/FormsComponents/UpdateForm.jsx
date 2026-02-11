import React, { useState } from 'react';
import './Forms.css';

const UpdateForm = ({ appointment, onSave, onCancel }) => {
  const [formData, setFormData] = useState(appointment);
  const [selectedSlot, setSelectedSlot] = useState(appointment.time);

  // Mock data for example
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
  const takenSlots = ['09:30', '11:30']; 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, time: selectedSlot });
  };

  return (
    <div className="form-card page-mode">
      
      <div className="form-header">
        <h2 className="form-title">עריכת פרטי תור</h2>
      </div>
      
      <div className="form-body">
        <form id="updateForm" onSubmit={handleSubmit} className="form-grid">
          
          <div className="input-group">
            <label className="input-label">שם הלקוח</label>
            <input type="text" className="input-field" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          </div>

          <div className="input-group">
            <label className="input-label">טלפון נייד</label>
            <input type="tel" className="input-field" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} dir="ltr" required />
          </div>

          <div className="input-group">
            <label className="input-label">תאריך</label>
            <input type="date" className="input-field" defaultValue="2026-02-05" />
          </div>

          <div className="input-group">
            <label className="input-label">בחר שעה חדשה</label>
            <div className="select-wrapper">
              <select className="input-field" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
                {timeSlots.map(time => {
                  const isTaken = takenSlots.includes(time) && time !== appointment.time;
                  return <option key={time} value={time} disabled={isTaken}>{time} {isTaken ? '(תפוס)' : ''}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Full width span for toggle */}
          <div className="input-group span-full">
            <label className="input-label">התראות</label>
            <div className="toggle-wrapper" onClick={() => setFormData({...formData, whatsapp: !formData.whatsapp})}>
              <input type="checkbox" className="toggle-input" checked={formData.whatsapp} readOnly />
              <span className="toggle-text">שלח תזכורת ב-WhatsApp</span>
            </div>
          </div>

        </form>
      </div>

      <div className="form-footer">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          ביטול
        </button>
        
        <button type="submit" form="updateForm" className="btn btn-primary">
          עדכן תור
        </button>
      </div>

    </div>
  );
};

export default UpdateForm;