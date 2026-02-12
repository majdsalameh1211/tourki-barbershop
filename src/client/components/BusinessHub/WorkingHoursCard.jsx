import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import './WorkingHoursCard.css';

const WorkingHoursCard = ({ hours }) => {
  const { t } = useTranslation();
  const todayIndex = new Date().getDay(); // 0=Sun, 1=Mon...

  return (
    <div className="hours-card">
      <div className="hc-header">
        <div className="hc-icon-box">
          <Clock className="hc-icon" />
        </div>
        <h3 className="hc-title">{t('mainContent.openHours', 'Opening Hours')}</h3>
      </div>

      <div className="hc-list">
        {hours.map((group, i) => {
          const isToday = i === todayIndex;
          return (
            <div 
              key={i} 
              className={`hc-row ${isToday ? 'today' : ''} ${group.isClosed ? 'closed' : ''}`}
            >
              <div className="hc-day-wrapper">
                {isToday && <span className="hc-dot"></span>}
                <span className="hc-day">{group.dayLabel}</span>
              </div>
              
              <div className="hc-time">
                {group.isClosed ? (
                  <span className="hc-badge-closed">{t('mainContent.closed', 'Closed')}</span>
                ) : (
                  <span className="hc-time-text">{group.timeLabel}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkingHoursCard;