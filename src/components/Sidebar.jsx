import React, { useState, useEffect } from 'react';
import { Link, Mail, Share2, Globe, Cloud, Battery, Wifi, Clock, Calendar } from 'lucide-react';

const Sidebar = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: '--', condition: 'Loading...' });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    // Fetch Weather Data (Chennai, IN)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current_weather=true')
      .then(res => res.json())
      .then(data => {
        if (data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            condition: 'Clear Sky'
          });
        }
      })
      .catch(err => console.error('Weather fetch error:', err));

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sidebar">
      {/* Profile Card */}
      <div className="glass widget clay" style={{ borderRadius: '24px' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <img src="/mascot.png" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid white' }} alt="" />
          <div>
            <div style={{ fontWeight: '700', fontSize: '16px' }}>S. Shaun Benedict</div>
            <div style={{ opacity: 0.6, fontSize: '12px' }}>@shaunbenedict</div>
          </div>
        </div>
        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
          <a href="https://github.com/shaunbenedict" target="_blank" rel="noreferrer" className="clay-button" style={{ padding: '8px', borderRadius: '12px' }}><Globe size={18} /></a>
          <a href="https://www.linkedin.com/in/shaunbenedict/" target="_blank" rel="noreferrer" className="clay-button" style={{ padding: '8px', borderRadius: '12px' }}><Link size={18} /></a>
          <a href="mailto:s.shaunbenedict@gmail.com" className="clay-button" style={{ padding: '8px', borderRadius: '12px' }}><Mail size={18} /></a>
        </div>
      </div>


      {/* Clock & Calendar Widget */}
      <div className="glass widget clay" style={{ borderRadius: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <Clock size={20} color="#8b5a2b" style={{ margin: '0 auto 5px' }} />
          <div style={{ fontSize: '20px', fontWeight: '700' }}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Calendar size={20} color="#8b5a2b" style={{ margin: '0 auto 5px' }} />
          <div style={{ fontSize: '20px', fontWeight: '700' }}>
            {time.getDate()}
          </div>
          <div style={{ fontSize: '10px', opacity: 0.6 }}>{time.toLocaleString('default', { month: 'short' })}</div>
        </div>
      </div>

      {/* Weather Module */}
      <div className="glass widget clay" style={{ borderRadius: '24px', background: 'linear-gradient(135deg, #f9f4f0 0%, #ecd9c6 100%)', minHeight: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '28px', fontWeight: '800', lineHeight: '1' }}>{weather.temp}°</div>
            <div style={{ fontSize: '11px', opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Chennai, IN</div>
          </div>
          <Cloud size={32} color="#8b5a2b" style={{ flexShrink: 0 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '10px', opacity: 0.6 }}>
          <span>{weather.condition}</span>
          <span style={{ fontWeight: '600' }}>Live Data</span>
        </div>
      </div>



      {/* Social Feed / Quote Module */}
      <div className="glass widget clay" style={{ borderRadius: '24px' }}>
        <div style={{ fontSize: '12px', fontStyle: 'italic', marginBottom: '10px', opacity: 0.8 }}>
          "Code is like humor. When you have to explain it, it’s bad."
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <span className="glass" style={{ padding: '2px 8px', borderRadius: '5px', fontSize: '9px' }}>AI/ML</span>
          <span className="glass" style={{ padding: '2px 8px', borderRadius: '5px', fontSize: '9px' }}>OS Dev</span>
          <span className="glass" style={{ padding: '2px 8px', borderRadius: '5px', fontSize: '9px' }}>Rust</span>
        </div>
      </div>

      {/* Social Feed Simulation (Modules) */}
      <div className="glass widget clay" style={{ borderRadius: '24px' }}>
        <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '10px' }}>Recent Status</div>
        <div className="glass" style={{ padding: '10px', borderRadius: '12px', fontSize: '12px', marginBottom: '8px' }}>
          Building <strong>bearOS</strong> portfolio... 🚀
        </div>
        <div className="glass" style={{ padding: '10px', borderRadius: '12px', fontSize: '12px' }}>
          CTO @ MicIoT: Scaling server solutions.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
