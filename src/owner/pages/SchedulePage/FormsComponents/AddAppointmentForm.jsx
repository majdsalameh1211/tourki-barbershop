import React, { useState, useEffect } from 'react';
import './Forms.css';

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
    if (dayOfWeek === 6) return []; // Saturday
    if (dayOfWeek === 5) return ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
    return ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
  };

  useEffect(() => {
    if (formData.date) {
      setAvailableSlots(fetchSlotsForDate(formData.date));
      setFormData(prev => ({ ...prev, time: '' })); 
    }
  }, [formData.date]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
      <div className="form-card modal-mode" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="form-header">
          <h3 className="form-title">הוספת תור חדש</h3>
          <button type="button" className="btn-close-icon" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Body */}
        <div className="form-body">
          <form id="addForm" onSubmit={handleSubmit} className="form-grid">
            
            <div className="input-group">
              <label className="input-label">שם הלקוח</label>
              <input type="text" name="name" className="input-field" placeholder="test test" value={formData.name} onChange={handleChange} autoFocus required />
            </div>

            <div className="input-group">
              <label className="input-label">טלפון נייד</label>
              <input type="tel" name="phone" className="input-field" placeholder="050-0000000" dir="ltr" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label className="input-label">תאריך</label>
              <input type="date" name="date" className="input-field" value={formData.date} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label className="input-label">שעה פנויה</label>
              <div className="select-wrapper">
                <select name="time" className="input-field" value={formData.time} onChange={handleChange} disabled={availableSlots.length === 0} required>
                  <option value="" disabled>{availableSlots.length === 0 ? 'אין תורים' : 'בחר שעה...'}</option>
                  {availableSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="form-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>ביטול</button>
          <button type="submit" form="addForm" className="btn btn-primary">
            שמור תור
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddAppointmentForm;