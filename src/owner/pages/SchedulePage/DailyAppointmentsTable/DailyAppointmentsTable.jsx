import React, { useState } from 'react';
import AddAppointmentForm from '../FormsComponents/AddAppointmentForm';
import './DailyAppointmentsTable.css';

const DailyAppointmentsTable = ({ date, appointments, onSelect, onBack }) => {
  // 1. STATE
  const [data, setData] = useState(appointments || [
    { id: 1, time: '10:00', name: 'ישראל ישראלי', phone: '050-1234567', whatsapp: true },
    { id: 2, time: '10:30', name: 'דני דנינו', phone: '052-9876543', whatsapp: false },
    { id: 3, time: '11:00', name: 'יוסי כהן', phone: '054-5555555', whatsapp: true },
    { id: 4, time: '11:30', name: 'רוני לוי', phone: '052-1112222', whatsapp: true },
  ]);

  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // 2. HANDLERS

  // Open Modal
  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  // Save new Appointment (from Modal)
  const handleSaveAppointment = (newAppt) => {
    const apptWithId = { ...newAppt, id: Date.now(), whatsapp: false }; // Mock ID
    setData(prev => [...prev, apptWithId].sort((a, b) => a.time.localeCompare(b.time)));
  };

  const toggleSelectMode = () => {
    setIsSelectMode(!isSelectMode);
    setSelectedIds(new Set());
  };

  const toggleRowSelection = (id) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedIds(newSelected);
  };

  const handleDeleteRow = (id, name) => {
    if (window.confirm(`למחוק את התור של ${name}?`)) {
      setIsUpdating(true); //
      setDeletingId(id); //

      setTimeout(() => {
        setData(prev => prev.filter(item => item.id !== id));
        setDeletingId(null); //
        setIsUpdating(false); //
      }, 300); // Matches CSS transition time
    }
  };

  const handleDeleteSelected = () => {
    if (window.confirm(`האם למחוק ${selectedIds.size} תורים שנבחרו?`)) {
      setData(prev => prev.filter(item => !selectedIds.has(item.id)));
      setSelectedIds(new Set());
      setIsSelectMode(false);
    }
  };

  const formattedDate = date
    ? date.toLocaleDateString('he-IL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'יום חמישי, 12 בפברואר 2026';

  return (
    <>
      <div className="daily-view-wrapper">

        {/* ACTION BAR */}
        <div className="action-bar">

          {/* A. TITLE & BACK (Grouped for Mobile Layout) */}
          <div className="ab-title-group">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

              {/* Title Text */}
              <div>
                <h2 className="ab-title">תורים לתאריך</h2>
                <span className="ab-subtitle">{formattedDate}</span>
              </div>

              {/* Mobile Back Button (Visible only on Mobile) */}
              <button className="mobile-back-btn" onClick={onBack}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>

            </div>
          </div>

          {/* B. ACTION BUTTONS */}
          <div className="ab-actions">

            {/* Desktop Back Button (Hidden on Mobile) */}
            <button className="ab-btn btn-back desktop-back-btn" onClick={onBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              <span>חזור</span>
            </button>

            {/* Add Button */}
            <button className="ab-btn btn-add" onClick={handleAddClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>הוסף תור</span>
            </button>

            {/* Select Mode */}
            <button className={`ab-btn btn-select ${isSelectMode ? 'active' : ''}`} onClick={toggleSelectMode}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              <span className="mobile-hidden">{isSelectMode ? 'ביטול' : 'בחירה'}</span>
            </button>

            {/* Delete Selected */}
            {isSelectMode && selectedIds.size > 0 && (
              <button className="ab-btn btn-delete-multi" onClick={handleDeleteSelected}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                <span>({selectedIds.size})</span>
              </button>
            )}
          </div>
        </div>

        {/* THE TABLE */}
        <div className="daily-table-card">
          <div className={`table-header-row ${isSelectMode ? 'selection-mode' : ''}`}>
            <div className="col-check"></div>
            <span>שעה</span>
            <span>שם לקוח</span>
            <span>טלפון</span>
            <span>WA</span>
            <span>פעולות</span>
          </div>

          <div className={`table-body ${isUpdating ? 'is-updating' : ''}`}> {/* */}
            {data.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#9CA3AF' }}>אין תורים לתאריך זה</div>
            ) : (
              data.map((appt) => (
                <div
                  key={appt.id}
                  className={`appt-row 
                    ${isSelectMode ? 'selection-mode' : ''} 
                    ${selectedIds.has(appt.id) ? 'selected' : ''}
                    ${deletingId === appt.id ? 'deleting' : ''}`} //
                  onClick={() => isSelectMode ? toggleRowSelection(appt.id) : onSelect(appt)}
                >
                  <div className="col-check">
                    {isSelectMode && (
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={selectedIds.has(appt.id)}
                        onChange={() => toggleRowSelection(appt.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                  </div>
                  <div className="col-time">{appt.time}</div>
                  <div className="col-name">{appt.name}</div>
                  <a href={`tel:${appt.phone}`} className="col-phone" onClick={(e) => e.stopPropagation()}>{appt.phone}</a>
                  <div className="col-whatsapp">
                    <svg className={`wa-icon ${appt.whatsapp ? 'active' : ''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div className="col-action">
                    <button className="icon-btn btn-view" title="צפה" onClick={(e) => { e.stopPropagation(); onSelect(appt); }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                    <button className="icon-btn btn-delete-row" title="מחק" onClick={(e) => { e.stopPropagation(); handleDeleteRow(appt.id, appt.name); }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      <AddAppointmentForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAppointment}
      />
    </>
  );
};

export default DailyAppointmentsTable;