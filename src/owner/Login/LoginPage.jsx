import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  
  // Hardcoded Credentials
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('12345678');
  
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === '12345678') {
      console.log('Login Successful');
      // REDIRECT to the new Owner Layout
      navigate('/owner'); 
    } else {
      alert('Invalid credentials. Try test@test.com / 12345678');
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotModal(true);
    setError('');
    setPasscode('');
  };

  const verifyPasscodeAndReveal = () => {
    if (passcode === 'test') {
      alert(`CREDENTIALS REVEALED:\n\nEmail: ${email}\nPassword: ${password}`);
      setShowForgotModal(false);
    } else {
      setError('Incorrect passcode');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* === BRAND HEADER === */}
        <div className="login-header">
          {/* REPLACED ICON BOX WITH RECTANGULAR LOGO */}
          <div className="login-logo-wrapper">
             <img 
               src="/logo.png" 
               alt="Tourki Logo" 
               className="login-logo-img" 
               onError={(e) => e.target.style.display = 'none'}
             />
          </div>
          
          <h1 className="login-title">Owner Portal</h1>
          <p className="login-subtitle">Sign in to manage your barbershop</p>
        </div>
        {/* === LOGIN FORM === */}
        <form className="login-form" onSubmit={handleLogin}>
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="password">Password</label>
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
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="login-btn">
            <span>SIGN IN</span>
            <span className="btn-shimmer"></span>
          </button>
        </form>
      </div>

      {/* Forgot Password Modal (Unchanged) */}
      {showForgotModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">🔒</div>
            <h3 className="modal-title">Security Check</h3>
            <p className="modal-text">Enter admin passcode to reveal credentials.</p>
            <input 
              type="text" 
              className="luxury-input modal-input"
              placeholder="Enter Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              autoFocus
            />
            {error && <p className="modal-error">{error}</p>}
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={() => setShowForgotModal(false)}>Cancel</button>
              <button className="modal-btn confirm" onClick={verifyPasscodeAndReveal}>Reveal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;