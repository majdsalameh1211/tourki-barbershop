import '../OwnerGlobal.css';

const ApprovalsPage = () => {
  return (
    <div className="owner-page-container">
      <header className="page-header">
        <h1 className="page-title">אישור הזמנות</h1>
        <p className="page-subtitle">בקשות תורים הממתינות לאישור שלך</p>
      </header>

      <div className="content-card">
        <div className="placeholder-content">
          <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <h3>אין בקשות חדשות</h3>
          <p>רשימת ההזמנות הממתינות תופיע כאן.</p>
        </div>
      </div>
    </div>
  );
};

export default ApprovalsPage;