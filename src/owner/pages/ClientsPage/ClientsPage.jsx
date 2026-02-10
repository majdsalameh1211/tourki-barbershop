import '../OwnerGlobal.css';

const ClientsPage = () => {
  return (
    <div className="owner-page-container">
      <header className="page-header">
        <h1 className="page-title">ניהול לקוחות</h1>
        <p className="page-subtitle">מאגר הלקוחות והיסטוריית הטיפולים</p>
      </header>

      <div className="content-card">
        <div className="placeholder-content">
          <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <h3>טבלת לקוחות</h3>
          <p>כאן תוכל לחפש, לערוך ולחסום לקוחות.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;