import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: 'ישראל ישראלי',
    email: 'owner@tourki.com',
    phone: '050-1234567',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert('הסיסמאות החדשות אינן תואמות');
      return;
    }

    // Success
    console.log('Saving settings:', formData);
    alert('ההגדרות נשמרו בהצלחה! ✓');
  };

  return (
    <div className="settings-container">
      
      {/* PAGE HEADER */}
      <div className="settings-header">
        <h1 className="settings-title">הגדרות חשבון</h1>
        <p className="settings-subtitle">ניהול פרטים אישיים, אבטחה והעדפות מערכת</p>
      </div>

      {/* SINGLE FORM CARD */}
      <form onSubmit={handleSubmit} className="settings-form-card">
        
        {/* SECTION 1: PERSONAL INFO */}
        <div className="form-section">
          <div className="section-header">
            <div className="section-icon-wrapper">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="section-title">פרטים אישיים</h2>
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                שם מלא
              </label>
              <div className="input-wrapper">
                <input 
                  type="text"
                  name="name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="הזן שם מלא"
                  required
                />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                כתובת אימייל
              </label>
              <div className="input-wrapper">
                <input 
                  type="email"
                  name="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  dir="ltr"
                  placeholder="email@example.com"
                  required
                />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                טלפון נייד
              </label>
              <div className="input-wrapper">
                <input 
                  type="tel"
                  name="phone"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                  dir="ltr"
                  placeholder="050-0000000"
                  required
                />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="form-divider"></div>

        {/* SECTION 2: SECURITY */}
        <div className="form-section">
          <div className="section-header">
            <div className="section-icon-wrapper">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h2 className="section-title">אבטחה וסיסמה</h2>
          </div>

          <div className="info-banner">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p className="info-text">השאר שדות ריקים אם אינך רוצה לשנות את הסיסמה</p>
          </div>

          <div className="input-grid">
            
            {/* Current Password */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                סיסמה נוכחית
              </label>
              <div className="input-wrapper">
                <input 
                  type="password"
                  name="currentPassword"
                  className="input-field"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  dir="ltr"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>

            {/* New Password */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zM12 2L2 12"></path>
                </svg>
                סיסמה חדשה
              </label>
              <div className="input-wrapper">
                <input 
                  type="password"
                  name="newPassword"
                  className="input-field"
                  value={formData.newPassword}
                  onChange={handleChange}
                  dir="ltr"
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zM12 2L2 12"></path>
                </svg>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label className="input-label">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                אימות סיסמה חדשה
              </label>
              <div className="input-wrapper">
                <input 
                  type="password"
                  name="confirmPassword"
                  className="input-field"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  dir="ltr"
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="form-footer">
          <button type="submit" className="btn-save">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            שמור שינויים
          </button>
        </div>

      </form>

    </div>
  );
};

export default SettingsPage;