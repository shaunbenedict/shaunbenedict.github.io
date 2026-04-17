import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, ChevronLeft, Award, Briefcase, GraduationCap, Code2, Globe, Search, Monitor, User } from 'lucide-react';

export const MobileStatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    if ('getBattery' in navigator) {
      navigator.getBattery().then(bat => {
        setBatteryLevel(Math.round(bat.level * 100));
        bat.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(bat.level * 100));
        });
      });
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ios-status-bar">
      <div style={{ fontWeight: '700' }}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
      <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        <Signal size={16} />
        <Wifi size={16} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          {batteryLevel !== null && <span style={{ fontSize: '12px', fontWeight: '600' }}>{batteryLevel}%</span>}
          <Battery size={16} />
        </div>
      </div>
    </div>
  );
};

export const MobileAppIcon = ({ name, icon: Icon, onClick }) => (
  <div className="mobile-app-icon" onClick={onClick}>
    <div className="mobile-icon-box">
      <Icon size={32} color="#8b5a2b" />
    </div>
    <div className="mobile-app-label">{name}</div>
  </div>
);

export const MobileHomeScreen = ({ apps, onOpenApp }) => (
  <div className="ios-home-screen">
    <div className="app-grid">
      {apps.map((app, index) => (
        <MobileAppIcon 
          key={index} 
          name={app.name} 
          icon={app.iconComponent} 
          onClick={() => onOpenApp(app.name)} 
        />
      ))}
    </div>
  </div>
);

export const MobileDock = ({ apps, onOpenApp }) => (
  <div className="ios-dock-wrapper">
    <div className="ios-dock">
      {apps.map((app, index) => (
        <div key={index} className="mobile-app-icon" onClick={() => onOpenApp(app.name)}>
          <div className="mobile-icon-box" style={{ width: '55px', height: '55px', borderRadius: '12px' }}>
            <app.iconComponent size={28} color="#8b5a2b" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const MobileAppView = ({ name, content, onClose }) => (
  <div className="mobile-app-layer">
    <div className="app-header-mobile">
      <div onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#8b5a2b' }}>
        <ChevronLeft size={24} />
        <span style={{ fontWeight: '500' }}>Home</span>
      </div>
      <div style={{ fontWeight: '700', fontSize: '18px' }}>{name}</div>
      <div style={{ width: '40px' }} />
    </div>
    <div className="app-content-mobile">
      {content}
    </div>
    <div className="home-indicator" onClick={onClose} />
  </div>
);
