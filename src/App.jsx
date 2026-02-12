import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import LandingPage from './client/landing/LandingPage';
import BookingPage from './client/booking/BookingPage';
import LoginPage from './owner/Login/LoginPage';
import OwnerLayout from './owner/Layout/OwnerLayout';

import SchedulePage from './owner/pages/SchedulePage/SchedulePage';
import ApprovalsPage from './owner/pages/ApprovalsPage/ApprovalsPage';
import ClientsPage from './owner/pages/ClientsPage/ClientsPage';
import InfoPage from './owner/pages/InfoPage/InfoPage';
import SettingsPage from './owner/pages/SettingsPage/SettingsPage';

//import ScrollToTop from './client/components/ScrollToTop';

import './App.css';

const ClientLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>  
          {/* === CLIENT SIDE === */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Route>

          {/* === OWNER AUTH === */}
          <Route path="/login" element={<LoginPage />} />

          {/* === OWNER PORTAL === */}
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<SchedulePage />} /> {/* Default to Schedule */}
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="approvals" element={<ApprovalsPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;