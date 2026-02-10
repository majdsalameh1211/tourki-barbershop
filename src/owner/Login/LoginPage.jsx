import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('12345678');
  
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === '12345678') {
      navigate('/owner'); 
    } else {
      alert('פרטי התחברות שגויים');
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotModal(true);
    setError('');
    setPasscode('');
  };

  const verifyPasscodeAndReveal = () => {
    if (passcode === 'test') {
      alert(`פרטי המערכת:\n\nאימייל: ${email}\nסיסמה: ${password}`);
      setShowForgotModal(false);
    } else {
      setError('קוד שגוי');
    }
  };

  return (
    // FORCE RTL
    <div className="login-page" dir="rtl">
      <div className="login-container">
        
        <div className="login-header">
          <div className="login-logo-wrapper">
             <img 
               src="/logo.png" 
               alt="Tourki Logo" 
               className="login-logo-img" 
               onError={(e) => e.target.style.display = 'none'}
             />
          </div>
          
          <h1 className="login-title">פורטל ניהול</h1>
          <p className="login-subtitle">התחבר כדי לנהל את המספרה</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          
          <div className="input-group">
            <label htmlFor="email">כתובת אימייל</label>
            <input 
              type="email" 
              id="email"
              className="luxury-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">סיסמה</label>
            <input 
              type="password" 
              id="password"
              className="luxury-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-link-wrapper">
            <button 
              type="button" 
              className="forgot-link"
              onClick={handleForgotPasswordClick}
            >
              שכחתי סיסמה?
            </button>
          </div>

          <button type="submit" className="login-btn">
            <span>התחבר</span>
            <span className="btn-shimmer"></span>
          </button>
        </form>
      </div>

      {showForgotModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">🔒</div>
            <h3 className="modal-title">בדיקת אבטחה</h3>
            <p className="modal-text">הזן קוד מנהל לחשיפת הפרטים</p>
            <input 
              type="text" 
              className="luxury-input modal-input"
              placeholder="קוד"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              autoFocus
            />
            {error && <p className="modal-error">{error}</p>}
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={() => setShowForgotModal(false)}>ביטול</button>
              <button className="modal-btn confirm" onClick={verifyPasscodeAndReveal}>אישור</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;