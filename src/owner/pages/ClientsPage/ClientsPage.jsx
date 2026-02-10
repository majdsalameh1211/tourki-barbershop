import React, { useState } from 'react';
import AttendanceTable from './AttendanceTable/AttendanceTable';
import NoShowTable from './NoShowTable/NoShowTable';
import './ClientsPage.css';

const ClientsPage = () => {
  const [activeTab, setActiveTab] = useState('attendance'); // 'attendance' | 'noshow'

  return (
    <div className="clients-page-container">
      
      {/* 1. Header */}
      <div className="clients-header">
        <h1 className="clients-title">ניהול לקוחות</h1>
        <p className="clients-subtitle">מעקב הגעה יומי וטיפול בהיעדרויות</p>
      </div>

      {/* 2. Toggle Switch */}
      <div className="view-toggle-wrapper">
        <button 
          className={`toggle-option ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          סיכום יומי (נוכחות)
        </button>
        
        <button 
          className={`toggle-option ${activeTab === 'noshow' ? 'active' : ''}`}
          onClick={() => setActiveTab('noshow')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          היסטוריית הברזות
        </button>
      </div>

      {/* 3. Content Area */}
      <div className="clients-content">
        {activeTab === 'attendance' ? <AttendanceTable /> : <NoShowTable />}
      </div>

    </div>
  );
};

export default ClientsPage;