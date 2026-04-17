import React, { useState, useEffect, useCallback } from 'react';
import LoginScreen from './components/LoginScreen';
import { MenuBar, Dock, Window } from './components/OSComponents';
import { AboutApp, MicIoTApp, SRMApp, SkillsApp, ProjectsApp, SocialApp, CertificationsApp } from './components/Apps';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windows, setWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [draggingWindow, setDraggingWindow] = useState(null);
  const [resizingWindow, setResizingWindow] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStartRect, setResizeStartRect] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const handleLogin = () => setIsLoggedIn(true);

  const openApp = (appName) => {
    // Check if window already open
    if (windows.some(w => w.id === appName)) {
      focusWindow(appName);
      return;
    }

    const isSocial = ['LinkedIn', 'GitHub', 'Instagram'].includes(appName);
    const newWindow = {
      id: appName,
      title: appName,
      zIndex: nextZIndex,
      position: { 
        x: 100 + (windows.length * 30), 
        y: 80 + (windows.length * 30),
        width: isSocial ? '800px' : '600px',
        height: isSocial ? '600px' : '400px'
      },
      content: appName === 'About' ? <AboutApp /> : 
               appName === 'Experience' ? <MicIoTApp /> : 
               appName === 'Education' ? <SRMApp /> : 
               appName === 'Projects' ? <ProjectsApp /> :
               appName === 'Certifications' ? <CertificationsApp /> :
               appName === 'Skills' ? <SkillsApp /> :
               appName === 'LinkedIn' ? <SocialApp url="https://www.linkedin.com/in/shaunbenedict/" name="LinkedIn" /> :
               appName === 'GitHub' ? <SocialApp url="https://github.com/shaunbenedict" name="GitHub" /> :
               <SocialApp url="https://www.instagram.com/" name="Instagram" />
    };

    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const focusWindow = (id) => {
    setWindows(windows.map(w => {
      if (w.id === id) {
        return { ...w, zIndex: nextZIndex };
      }
      return w;
    }));
    setNextZIndex(nextZIndex + 1);
  };

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });

    if (draggingWindow) {
      setWindows(prev => prev.map(w => {
        if (w.id === draggingWindow) {
          return {
            ...w,
            position: {
              ...w.position,
              x: clientX - dragOffset.x,
              y: clientY - dragOffset.y
            }
          };
        }
        return w;
      }));
    } else if (resizingWindow) {
      setWindows(prev => prev.map(w => {
        if (w.id === resizingWindow) {
          const newWidth = Math.max(300, resizeStartRect.width + (clientX - resizeStartRect.x));
          const newHeight = Math.max(200, resizeStartRect.height + (clientY - resizeStartRect.y));
          return {
            ...w,
            position: {
              ...w.position,
              width: `${newWidth}px`,
              height: `${newHeight}px`
            }
          };
        }
        return w;
      }));
    }
  }, [draggingWindow, resizingWindow, dragOffset, resizeStartRect]);

  const handleMouseDown = (e, id) => {
    focusWindow(id);
    const windowHeader = document.getElementById(`header-${id}`);
    if (windowHeader && windowHeader.contains(e.target)) {
      const w = windows.find(win => win.id === id);
      setDraggingWindow(id);
      setDragOffset({
        x: e.clientX - w.position.x,
        y: e.clientY - w.position.y
      });
    }
  };

  const handleResizeDown = (e, id) => {
    const w = windows.find(win => win.id === id);
    setResizingWindow(id);
    setResizeStartRect({
      width: parseInt(w.position.width),
      height: parseInt(w.position.height),
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseUp = () => {
    setDraggingWindow(null);
    setResizingWindow(null);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Static Background (Movement removed as per request)
  const bgTransform = `translate(0px, 0px)`;
  const blob1Transform = `translate(0px, 0px)`;
  const blob2Transform = `translate(0px, 0px)`;

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background */}
      <div className="wallpaper-container">
        <img src="/wallpaper.png" className="wallpaper" style={{ transform: bgTransform }} alt="" />
      </div>
      
      <MenuBar />
      
      <Sidebar />

      {windows.map(win => (
        <Window 
          key={win.id}
          id={win.id}
          title={win.title}
          isOpen={true}
          zIndex={win.zIndex}
          position={win.position}
          onClose={closeWindow}
          onMouseDown={handleMouseDown}
          onResizeDown={handleResizeDown}
        >
          {win.content}
        </Window>
      ))}

      <Dock onOpenApp={openApp} />
    </div>
  );
}

export default App;
