import React, { useState } from 'react';
import { Moon, RotateCcw, Power, ChevronRight } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'shaun') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="login-screen">
      <img src="/wallpaper.png" className="login-wallpaper" alt="" />
      
      <div className={`login-card ${error ? 'shake' : ''}`}>
        <div className="avatar-container">
          <img src="/mascot.png" className="avatar" alt="S. Shaun Benedict" />
        </div>
        
        <h2 className="user-name">S. Shaun Benedict</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="password-input-container">
            <input
              type="password"
              className="password-input"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button 
              type="submit" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white', 
                padding: '0 10px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div style={{ 
            fontSize: '11px', 
            color: 'white', 
            opacity: 0.6, 
            marginTop: '10px',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)'
          }}>
            Hint: shaun
          </div>
        </form>
      </div>

      <div className="login-footer">
        <div className="footer-item">
          <div className="footer-icon"><Moon size={18} /></div>
          <span>Sleep</span>
        </div>
        <div className="footer-item">
          <div className="footer-icon"><RotateCcw size={18} /></div>
          <span>Restart</span>
        </div>
        <div className="footer-item">
          <div className="footer-icon"><Power size={18} /></div>
          <span>Shut Down</span>
        </div>
      </div>
      
      <style>{`
        .shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default LoginScreen;
