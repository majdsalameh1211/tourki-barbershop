import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const OwnerSidebar = ({ 
  isCollapsed, 
  onToggleCollapse, 
  isOpen, 
  onClose 
}) => {
  const navigate = useNavigate();

  // 1. Navigation Items (Hebrew)
  const navItems = [
    { 
      label: 'סידור', 
      path: '/owner/schedule', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 
    },
    { 
      label: 'אישור הזמנות', 
      path: '/owner/approvals', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> 
    },
    { 
      label: 'ניהול לקוחות', 
      path: '/owner/clients', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> 
    },
    { 
      label: 'ניהול מידע', 
      path: '/owner/info', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> 
    },
    { 
      label: 'הגדרות', 
      path: '/owner/settings', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> 
    }
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <>
      <aside className={`os-sidebar ${isCollapsed ? 'collapsed' : ''} ${isOpen ? 'open' : ''}`}>
        
        {/* 1. Header: Just Name (Simulated User) */}
        <div className="os-header">
          {!isCollapsed ? (
            <h2 className="os-username">שלום, טורקי</h2>
          ) : (
            <div className="os-avatar-circle">ט</div>
          )}
        </div>

        {/* 2. Navigation List */}
        <nav className="os-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `os-item ${isActive ? 'active' : ''}`}
              onClick={onClose} // Close sidebar on mobile when clicked
            >
              <span className="os-icon">{item.icon}</span>
              <span className="os-text">{item.label}</span>
              {/* Tooltip for collapsed state */}
              {isCollapsed && <span className="os-tooltip">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* 3. Footer: Collapse & Logout */}
        <div className="os-footer">
          {/* Desktop Collapse Button */}
          <button
            className="os-collapse-btn desktop-only"
            onClick={onToggleCollapse}
            title={isCollapsed ? "הרחב תפריט" : "צמצם תפריט"}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isCollapsed ? (
                // Pointing Left (Expand) in RTL
                <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
              ) : (
                // Pointing Right (Collapse) in RTL
                <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
              )}
            </svg>
          </button>

          {/* Logout (Icon Only when collapsed, Text when expanded) */}
          <button className="os-logout-btn" onClick={handleLogout} title="התנתק">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            {!isCollapsed && <span className="os-logout-text">התנתק</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      <div 
        className={`os-overlay ${isOpen ? 'show' : ''}`} 
        onClick={onClose}
      />
    </>
  );
};

export default OwnerSidebar;