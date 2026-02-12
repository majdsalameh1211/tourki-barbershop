import HeroSection from './sections/HeroSection/HeroSection';
import MainContentSection from './sections/MainContentSection/MainContentSection';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar is already handled in App.jsx */}
      
      <HeroSection />
      
      {/* ADD THIS ID HERE so the scroll target exists */}
      <div id="explore">
        <MainContentSection />
      </div>
      
      {/* Footer is already handled in App.jsx */}
    </div>
  );
};

export default LandingPage;