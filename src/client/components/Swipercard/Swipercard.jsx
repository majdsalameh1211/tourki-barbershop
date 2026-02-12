import './Swipercard.css';

const SwiperCard = ({ item }) => {
  // Detect item type based on properties
  const getItemType = () => {
    if (item.type) return item.type;
    if (item.duration) return 'service';
    return 'product';
  };

  const itemType = getItemType();

  // Get display name (already localized from parent component)
  const displayName = item.title || item.name || '';

  const handleClick = () => {
    if (item.onClick) {
      item.onClick(item);
    } else if (item.link) {
      window.location.href = item.link;
    }
  };

  return (
    <div className={`swiper-card ${itemType}-card`} onClick={handleClick}>
      
      {/* Image Section */}
      {item.image && (
        <div className="card-image-wrapper">
          <img src={item.image} alt={displayName} className="card-image" />
          {item.badge && (
            <span className="card-badge">{item.badge}</span>
          )}
          {item.discount && (
            <span className="card-discount">-{item.discount}%</span>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="card-content">
        {/* Title */}
        <h4 className="card-title">{displayName}</h4>

        {/* Duration for services */}
        {item.duration && (
          <div className="card-duration">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{item.duration} min</span>
          </div>
        )}
      </div>

      {/* Hover Overlay Effect */}
      <div className="card-hover-overlay"></div>
    </div>
  );
};

export default SwiperCard;