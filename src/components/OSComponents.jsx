import React, { useState, useEffect } from 'react';
import { X, Minus, Maximize2, Monitor, Wifi, Battery, Search, Briefcase, GraduationCap, Code2, Globe, Award } from 'lucide-react';

export const MenuBar = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    // Battery Status
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

  const menuItems = ['About', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];

  return (
    <div className="glass" style={{ 
      height: '32px', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '0 15px',
      fontSize: '13px',
      fontWeight: '500',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.2)'
    }}>
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <div className="menu-item" style={{ marginRight: '10px' }}>
          <img src="/mascot.png" style={{ height: '20px', borderRadius: '50%' }} alt="" />
        </div>
        {menuItems.map(item => (
          <div key={item} className="menu-item">{item}</div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Wifi size={14} />
        </div>
        <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Battery size={14} />
          {batteryLevel !== null && <span>{batteryLevel}%</span>}
        </div>
        <div className="menu-item" style={{ display: 'flex', alignItems: 'center' }}>
          <Search size={14} />
        </div>
        <div className="menu-item" style={{ fontWeight: '600', marginLeft: '2px' }}>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export const Window = ({ title, children, onClose, isOpen, id, zIndex, position, onMouseDown, onResizeDown }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="glass window" 
      onMouseDown={(e) => onMouseDown(e, id)}
      style={{ 
        zIndex,
        left: position.x,
        top: position.y,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'windowOpen 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        border: '1px solid rgba(255,255,255,0.7)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
        width: position.width,
        height: position.height,
        position: 'absolute'
      }}
    >
      <div className="clay window-header" 
        id={`header-${id}`}
        style={{ 
          height: '45px', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0 15px',
          borderRadius: '0',
          cursor: 'default',
          background: 'rgba(249,244,240,0.5)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(139, 90, 43, 0.1)'
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <div onClick={(e) => { e.stopPropagation(); onClose(id); }} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56', cursor: 'pointer' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
        </div>
        <span style={{ fontWeight: '600', fontSize: '14px', opacity: 0.8 }}>{title}</span>
        <div style={{ width: '50px' }}></div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', background: 'rgba(255,255,255,0.15)', padding: '10px' }}>
        {children}
      </div>

      {/* Resize Handle */}
      <div 
        onMouseDown={(e) => { e.stopPropagation(); onResizeDown(e, id); }}
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '15px',
          height: '15px',
          cursor: 'nwse-resize',
          zIndex: 100,
          background: 'linear-gradient(135deg, transparent 50%, rgba(139, 90, 43, 0.2) 50%)',
          borderRadius: '0 0 16px 0'
        }}
      />
    </div>
  );
};

const AppIcon = ({ icon, name }) => {
  if (icon.startsWith('/')) {
    return <img src={icon} style={{ width: '30px', height: '30px', borderRadius: '8px' }} alt={name} />;
  }
  
  // Custom mapping for Lucide icons that don't exist as brands
  const IconMap = {
    'Briefcase': <Briefcase size={26} color="#8b5a2b" />,
    'GraduationCap': <GraduationCap size={26} color="#8b5a2b" />,
    'Github': <Monitor size={26} color="#8b5a2b" />, // Use Monitor as Github substitute
    'Code2': <Code2 size={26} color="#8b5a2b" />,
    'Award': <Award size={26} color="#8b5a2b" />,
    'Linkedin': <Globe size={26} color="#8b5a2b" />, // Use Globe as Linkedin substitute
    'Instagram': <Search size={26} color="#8b5a2b" /> // Use Search as Instagram substitute
  };

  return IconMap[icon] || <Monitor size={26} color="#8b5a2b" />;
};

export const Dock = ({ onOpenApp }) => {
  const apps = [
    { name: 'About', icon: '/bear_icon.png' },
    { name: 'Experience', icon: 'Briefcase' },
    { name: 'Education', icon: 'GraduationCap' },
    { name: 'Projects', icon: 'Code2' },
    { name: 'Certifications', icon: 'Award' },
    { name: 'Skills', icon: 'Code2' },
    { name: 'LinkedIn', icon: 'Linkedin' },
    { name: 'GitHub', icon: 'Github' },
    { name: 'Instagram', icon: 'Instagram' }
  ];

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      zIndex: 100
    }}>
      <div className="glass" style={{ 
        padding: '10px 15px', 
        borderRadius: '24px', 
        display: 'flex', 
        gap: '15px',
        alignItems: 'center',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow: '0 10px 30px rgba(139, 90, 43, 0.15)'
      }}>
        {apps.map((app) => (
          <div 
            key={app.name} 
            className="dock-icon"
            onClick={() => onOpenApp(app.name)}
            title={app.name}
          >
            <div className="clay" style={{ 
              width: '50px', 
              height: '50px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
               <AppIcon icon={app.icon} name={app.name} />
            </div>
          </div>
        ))}

        <div style={{ width: '1px', height: '30px', background: 'rgba(139, 90, 43, 0.2)' }}></div>
        <div className="dock-icon" onClick={() => window.location.reload()}>
           <div className="clay" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
             <Monitor size={24} color="#8b5a2b" />
           </div>
        </div>
      </div>
      
      <style>{`
        .dock-icon:hover {
          transform: scale(1.3) translateY(-10px);
          margin: 0 10px;
        }
        .dock-icon {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};
