import React, { useState } from 'react';
import './NoShowTable.css';

const NoShowTable = () => {
  // Mock Data: Added 'isSuspended' field
  const [clients, setClients] = useState([
    { id: 1, name: 'דוד כהן', phone: '052-1111111', count: 3, isSuspended: false },
    { id: 2, name: 'אבי לוי', phone: '054-2222222', count: 1, isSuspended: false },
    { id: 3, name: 'משה זוכמיר', phone: '050-3333333', count: 5, isSuspended: true }, // Already blocked
  ]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const toggleSuspend = (id) => {
    setIsUpdating(true);
    setUpdatingId(id);

    setTimeout(() => {
      setClients(prev => prev.map(client => {
        if (client.id === id) {
          return { ...client, isSuspended: !client.isSuspended };
        }
        return client;
      }));
      setUpdatingId(null);
      setTimeout(() => setIsUpdating(false), 200);
    }, 300);
  };

  return (
    <div className="noshow-card">
      {/* Header */}
      <div className="ns-header">
        <span>שם הלקוח</span>
        <span>טלפון</span>
        <span>מספר הברזות</span>
        <span style={{ textAlign: 'left' }}>פעולות</span>
      </div>

      {/* List */}
      {clients.map(client => (
        <div key={client.id}  className={`ns-row ${client.isSuspended ? 'suspended' : ''} ${updatingId === client.id ? 'updating' : ''}`}>

          <div className="ns-name">
            {client.name}
            {client.isSuspended && <span style={{ fontSize: '0.8rem', marginRight: '8px', color: '#DC2626' }}>(חסום)</span>}
          </div>

          <div className="ns-phone" dir="ltr">{client.phone}</div>

          <div className="ns-count">
            <span className={`ns-badge ${client.count >= 3 ? 'high-risk' : 'medium-risk'}`}>
              {client.count} הברזות
              {client.count >= 3 && ' ⚠️'}
            </span>
          </div>

          <div className="ns-actions">
            <button
              className={`btn-toggle-block ${client.isSuspended ? 'btn-unblock' : 'btn-block'}`}
              onClick={() => toggleSuspend(client.id)}
            >
              {client.isSuspended ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  שחרר חסימה
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                  חסימה
                </>
              )}
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default NoShowTable;