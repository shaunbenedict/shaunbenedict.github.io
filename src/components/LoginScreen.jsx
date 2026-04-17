import React, { useState, useEffect } from 'react';
import { Moon, RotateCcw, Power, ChevronRight } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const correct = isMobile ? password === '0000' : password.toLowerCase() === 'shaun';
    
    if (correct) {
      onLogin();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 500);
    }
  };

  // Handle mobile pincode entry
  useEffect(() => {
    if (isMobile && password.length === 4) {
      handleSubmit();
    }
  }, [password, isMobile]);

  return (
    <div className="login-screen">
      <img src="/wallpaper.png" className="login-wallpaper" alt="" />
      
      <div className={`login-card ${error ? 'shake' : ''}`}>
        <div className="avatar-container">
          <img src="/mascot.png" className="avatar" alt="S. Shaun Benedict" />
        </div>
        
        <h2 className="user-name">S. Shaun Benedict</h2>
        
        {isMobile ? (
          <div className="mobile-pincode-container">
            <div className="pincode-dots">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`pincode-dot ${password.length > i ? 'active' : ''}`}
                />
              ))}
            </div>
            
            <div className="numeric-keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button 
                  key={num} 
                  className="keypad-btn"
                  onClick={() => password.length < 4 && setPassword(prev => prev + num)}
                >
                  {num}
                </button>
              ))}
              <div className="keypad-empty"></div>
              <button 
                className="keypad-btn"
                onClick={() => password.length < 4 && setPassword(prev => prev + '0')}
              >
                0
              </button>
              <button 
                className="keypad-btn delete"
                onClick={() => setPassword(prev => prev.slice(0, -1))}
              >
                <div style={{ fontSize: '14px', fontWeight: '500' }}>DEL</div>
              </button>
            </div>

            <p style={{ color: 'white', fontSize: '11px', marginTop: '20px', opacity: 0.5 }}>Passcode: 0000</p>
          </div>
        ) : (
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
        )}
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

        .mobile-pincode-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 25px;
          position: relative;
        }

        .pincode-dots {
          display: flex;
          gap: 20px;
          margin-bottom: 35px;
        }

        .pincode-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1.5px solid white;
          transition: all 0.2s ease;
        }

        .pincode-dot.active {
          background: white;
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        .numeric-keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 10px;
        }

        .keypad-btn {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          font-size: 28px;
          font-weight: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-tap-highlight-color: transparent;
        }

        .keypad-btn:active {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(0.92);
        }

        .keypad-btn.delete {
          border: none;
          background: transparent;
          backdrop-filter: none;
          font-size: 14px;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
};

export default LoginScreen;
