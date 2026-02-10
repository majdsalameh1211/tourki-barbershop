import React, { useState } from 'react';
import './ApprovalsPage.css';

const ApprovalsPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'דניאל כהן',
      phone: '052-1234567',
      apptDate: '2026-02-12',
      apptTime: '10:00',
      createdDate: '2026-02-10',
      createdTime: '08:30'
    },
    {
      id: 2,
      name: 'עומר אדם',
      phone: '054-9876543',
      apptDate: '2026-02-12',
      apptTime: '11:30',
      createdDate: '2026-02-09',
      createdTime: '22:15'
    },
    {
      id: 3,
      name: 'רוני לוי',
      phone: '050-5555555',
      apptDate: '2026-02-13',
      apptTime: '15:00',
      createdDate: '2026-02-10',
      createdTime: '12:00'
    }
  ]);

  const handleApprove = (id) => {
    setAppointments(prev => prev.filter(appt => appt.id !== id));
  };

  const handleReject = (id) => {
    if (window.confirm('האם אתה בטוח שברצונך לדחות בקשה זו?')) {
      setAppointments(prev => prev.filter(appt => appt.id !== id));
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2);
  };

  return (
    <div className="approvals-container">
      
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">אישור הזמנות</h1>
        <p className="page-subtitle">ניהול בקשות תורים הממתינות לאישור שלך</p>
      </div>

      {/* Content */}
      <div className="approvals-table-card">
        
        {appointments.length > 0 && (
          <div className="table-header">
            <span>פרטי לקוח</span>
            <span>טלפון</span>
            <span>מועד התור</span>
            <span>נוצר בתאריך</span>
            <span style={{textAlign: 'left'}}>פעולות</span>
          </div>
        )}

        {appointments.length === 0 ? (
          <div className="empty-state">
            <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3>אין בקשות ממתינות</h3>
            <p>כל התורים אושרו או נדחו. עבודה מצוינת!</p>
          </div>
        ) : (
          <div className="approvals-list">
            {appointments.map((appt) => (
              <div key={appt.id} className="approval-row">
                
                {/* Client */}
                <div className="col-client">
                  <div className="client-avatar">{getInitials(appt.name)}</div>
                  <div className="client-name">{appt.name}</div>
                </div>

                {/* Phone */}
                <div className="col-phone">
                  <span className="data-text" dir="ltr">{appt.phone}</span>
                </div>

                {/* Date */}
                <div className="col-date">
                  <div className="data-text">{appt.apptDate}</div>
                  <span className="data-sub">{appt.apptTime}</span>
                </div>

                {/* Created */}
                <div className="col-created">
                  <div className="data-text">{appt.createdDate}</div>
                  <span className="data-sub">{appt.createdTime}</span>
                </div>

                {/* Actions (Responsive CSS handles the layout) */}
                <div className="col-actions">
                  <button 
                    className="action-btn btn-reject" 
                    onClick={() => handleReject(appt.id)}
                    title="דחה"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  
                  <button 
                    className="action-btn btn-approve" 
                    onClick={() => handleApprove(appt.id)}
                    title="אשר"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovalsPage;