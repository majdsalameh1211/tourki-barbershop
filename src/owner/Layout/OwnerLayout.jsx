import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import OwnerSidebar from '../components/OwnerSidebar/OwnerSidebar';
import './OwnerLayout.css';

const OwnerLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // FORCE RTL for the entire owner section
    <div className="owner-layout" dir="rtl">
      
      {/* 1. SIDEBAR COMPONENT */}
      <OwnerSidebar 
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* 2. MAIN CONTENT AREA */}
      <div className={`owner-main ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        
        {/* Mobile Header (Visible only < 768px) */}
        <header className="owner-mobile-header">
          <button 
            className="owner-hamburger" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <span className="owner-mobile-brand">TOURKI</span>
        </header>

        {/* Page Content */}
        <div className="owner-content-scroll">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default OwnerLayout;