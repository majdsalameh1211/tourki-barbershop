import React, { useState, useEffect } from 'react';
import './AddAppointmentForm.css';

const AddAppointmentForm = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0], 
    time: ''
  });

  const [availableSlots, setAvailableSlots] = useState([]);

  // Mock Fetch Logic
  const fetchSlotsForDate = (dateString) => {
    const dayOfWeek = new Date(dateString).getDay();
    if (dayOfWeek === 6) return []; // Saturday Closed
    if (dayOfWeek === 5) return ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
    return [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', 
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '15:00', '15:30', '16:00', '16:30', '17:00'
    ];
  };

  useEffect(() => {
    if (formData.date) {
      const slots = fetchSlotsForDate(formData.date);
      setAvailableSlots(slots);
      setFormData(prev => ({ ...prev, time: '' })); 
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.time) {
      alert('נא למלא את כל שדות החובה');
      return;
    }
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="header-content">
            <div className="header-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="modal-title">הוספת תור חדש</h3>
          </div>
          <button type="button" className="btn-close" onClick={onClose} aria-label="סגור">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body">
          <form id="addApptForm" onSubmit={handleSubmit} className="form-grid">
            
            {/* Name Field */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                שם הלקוח
              </label>
              <input 
                type="text" 
                name="name" 
                className="input-field" 
                placeholder="ישראל ישראלי"
                value={formData.name} 
                onChange={handleChange} 
                autoFocus
                required
              />
            </div>

            {/* Phone Field */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                טלפון נייד
              </label>
              <input 
                type="tel" 
                name="phone" 
                className="input-field" 
                placeholder="050-0000000" 
                dir="ltr"
                value={formData.phone} 
                onChange={handleChange}
                required
              />
            </div>

            {/* Date Field */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                תאריך
              </label>
              <input 
                type="date" 
                name="date" 
                className="input-field"
                value={formData.date} 
                onChange={handleChange}
                required
              />
            </div>

            {/* Time Field */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                שעה פנויה
              </label>
              <div className="select-wrapper">
                <select 
                  name="time" 
                  className="input-field" 
                  value={formData.time} 
                  onChange={handleChange}
                  disabled={availableSlots.length === 0}
                  required
                >
                  <option value="" disabled>
                    {availableSlots.length === 0 ? 'אין תורים פנויים לתאריך זה' : 'בחר שעה מהרשימה...'}
                  </option>
                  {availableSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                <svg className="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button type="button" className="btn-cancel" onClick={onClose}>
            ביטול
          </button>
          
          <button type="submit" form="addApptForm" className="modal-btn-save">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            שמור תור
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddAppointmentForm;