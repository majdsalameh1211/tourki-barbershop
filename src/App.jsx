import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import LandingPage from './client/landing/LandingPage';
import BookingPage from './client/booking/BookingPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;