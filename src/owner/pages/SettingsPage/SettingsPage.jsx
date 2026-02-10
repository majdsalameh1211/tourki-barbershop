import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  // State for Profile Form
  const [profile, setProfile] = useState({
    name: 'ישראל ישראלי',
    email: 'owner@tourki.com'
  });

  // State for Password Form
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const saveProfile = (e) => {
    e.preventDefault();
    // API Call logic here
    alert('הפרטים עודכנו בהצלחה!');
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert('הסיסמאות החדשות אינן תואמות');
      return;
    }
    // API Call logic here
    alert('הסיסמא שונתה בהצלחה!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="settings-container">
      
      {/* HEADER */}
      <div className="settings-header">
        <h1 className="settings-title">הגדרות חשבון</h1>
        <p className="settings-subtitle">ניהול פרטים אישיים ואבטחה</p>
      </div>

      {/* SECTION 1: PROFILE DETAILS */}
      <div className="settings-section">
        <h2 className="section-title">
          <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          פרטים אישיים
        </h2>
        
        <form onSubmit={saveProfile} className="form-grid">
          
          {/* Name Input */}
          <div className="input-group">
            <label className="input-label">שם מלא</label>
            <div className="input-wrapper">
              <input 
                type="text" 
                name="name"
                className="input-field"
                value={profile.name}
                onChange={handleProfileChange}
              />
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label className="input-label">כתובת אימייל</label>
            <div className="input-wrapper">
              <input 
                type="email" 
                name="email"
                className="input-field"
                value={profile.email}
                onChange={handleProfileChange}
                dir="ltr"
              />
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn secondary">
              שמור שינויים
            </button>
          </div>
        </form>
      </div>

      {/* SECTION 2: PASSWORD & SECURITY */}
      <div className="settings-section">
        <h2 className="section-title">
          <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          אבטחה וסיסמא
        </h2>

        <form onSubmit={updatePassword} className="form-grid">
          
          {/* Current Password */}
          <div className="input-group">
            <label className="input-label">סיסמא נוכחית</label>
            <div className="input-wrapper">
              <input 
                type="password" 
                name="current"
                className="input-field"
                value={passwords.current}
                onChange={handlePasswordChange}
                dir="ltr"
                placeholder="••••••••"
              />
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
          </div>

          {/* New Password */}
          <div className="input-group">
            <label className="input-label">סיסמא חדשה</label>
            <div className="input-wrapper">
              <input 
                type="password" 
                name="new"
                className="input-field"
                value={passwords.new}
                onChange={handlePasswordChange}
                dir="ltr"
                placeholder="••••••••"
              />
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label className="input-label">אימות סיסמא חדשה</label>
            <div className="input-wrapper">
              <input 
                type="password" 
                name="confirm"
                className="input-field"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                dir="ltr"
                placeholder="••••••••"
              />
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn">
              עדכן סיסמא
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default SettingsPage;