import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import LandingPage from './client/landing/LandingPage';
import BookingPage from './client/booking/BookingPage';
import LoginPage from './owner/Login/LoginPage';
import OwnerLayout from './owner/Layout/OwnerLayout'; 
import './App.css';

// Client Layout (Navbar + Footer)
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

          {/* === OWNER PORTAL (Protected Shell) === */}
          <Route path="/owner" element={<OwnerLayout />}>
            {/* For now, a temporary empty page. 
               Later, this will be your Dashboard component. 
            */}
            <Route index element={<h1 style={{color: '#D4AF37'}}>Owner Dashboard (Coming Soon)</h1>} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;