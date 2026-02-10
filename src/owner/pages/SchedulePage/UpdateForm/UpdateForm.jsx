import React, { useState } from 'react';
import './UpdateForm.css';

const UpdateForm = ({ appointment, onSave, onCancel }) => {
  const [formData, setFormData] = useState(appointment);
  const [selectedSlot, setSelectedSlot] = useState(appointment.time);

  // Mock available slots logic
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
  const takenSlots = ['09:30', '11:30']; // Example disabled slots

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated data back up
    onSave({ 
      ...formData, 
      time: selectedSlot 
    });
  };

  return (
    <div className="update-form-container">
      <h2 className="form-title">עריכת פרטי תור</h2>
      
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <div className="form-group">
          <label className="form-label">שם הלקוח</label>
          <input 
            type="text" 
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            placeholder="הזן שם מלא"
          />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label className="form-label">מספר טלפון</label>
          <input 
            type="tel" 
            className="form-input"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            dir="ltr"
            required
            placeholder="050-0000000"
          />
        </div>

        {/* WhatsApp Toggle */}
        <div className="form-group">
          <label className="form-label">התראות</label>
          <div className="wa-toggle-wrapper" onClick={() => setFormData({...formData, whatsapp: !formData.whatsapp})}>
            <input 
              type="checkbox" 
              className="wa-checkbox"
              checked={formData.whatsapp}
              readOnly
            />
            <span className="wa-label">שלח תזכורת ב-WhatsApp</span>
          </div>
        </div>

        {/* Date Selection (Mock) */}
        <div className="form-group">
          <label className="form-label">תאריך</label>
          <input 
            type="date" 
            className="form-input" 
            defaultValue="2026-02-05" 
          />
        </div>

        {/* Time Slots Selection */}
        <div className="form-group">
          <label className="form-label">בחר שעה חדשה</label>
          <div className="slots-grid">
            {timeSlots.map(time => {
              // Logic: Slot is taken AND it's not the current appointment's original time
              const isTaken = takenSlots.includes(time) && time !== appointment.time;
              const isSelected = selectedSlot === time;
              
              return (
                <div 
                  key={time}
                  className={`time-slot ${isSelected ? 'selected' : ''} ${isTaken ? 'disabled' : ''}`}
                  onClick={() => !isTaken && setSelectedSlot(time)}
                >
                  {time}
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button type="button" className="btn-base cancel-btn" onClick={onCancel}>
            ביטול
          </button>
          
          <button type="submit" className="btn-base update-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17 21 17 13 7 13 7 21"/>
              <polyline points="7 3 7 8 15 8"/>
            </svg>
            עדכן תור
          </button>
        </div>

      </form>
    </div>
  );
};

export default UpdateForm;