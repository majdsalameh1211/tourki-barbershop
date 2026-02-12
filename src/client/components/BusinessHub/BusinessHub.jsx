// client/components/BusinessHub/BusinessHub.jsx
import ContactCard from './ContactCard';
import WazeCard from './WazeCard';
import WorkingHoursCard from './WorkingHoursCard';
import './BusinessHub.css';

const BusinessHub = ({ businessInfo, hours }) => {
  return (
    <div className="business-hub-container">
      
      {/* LEFT COLUMN (50% Width) */}
      <div className="hub-left-col">
        
        {/* ROW 1: Contact (70% Height) */}
        <div className="hub-row-large">
          <ContactCard businessInfo={businessInfo} />
        </div>

        {/* ROW 2: Waze (30% Height) */}
        <div className="hub-row-small">
          <WazeCard wazeCoordinates={businessInfo.wazeCoordinates} />
        </div>

      </div>

      {/* RIGHT COLUMN (50% Width, 100% Height) */}
      <div className="hub-right-col">
        <WorkingHoursCard hours={hours} />
      </div>

    </div>
  );
};

export default BusinessHub;