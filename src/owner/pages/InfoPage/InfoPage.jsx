import '../OwnerGlobal.css';

const InfoPage = () => {
  return (
    <div className="owner-page-container">
      <header className="page-header">
        <h1 className="page-title">ניהול מידע</h1>
        <p className="page-subtitle">עדכון שעות פתיחה, שירותים ומחירים</p>
      </header>

      <div className="content-card">
        <div className="placeholder-content">
          <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
          <h3>פרטי העסק</h3>
          <p>טפסים לעריכת המידע המוצג באתר.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;