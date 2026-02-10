import { Outlet } from 'react-router-dom';
import './OwnerLayout.css';

const OwnerLayout = () => {
  return (
    <div className="owner-layout">
      {/* This is the Shell. 
        Later, we will add <Sidebar /> here.
      */}
      
      <div className="owner-content-wrapper">
        {/* <Header /> goes here later */}
        
        <main className="owner-main-area">
          {/* This is where specific page content (Dashboard, Settings) renders */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;