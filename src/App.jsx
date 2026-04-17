import React, { useState, useEffect, useCallback } from 'react';
import LoginScreen from './components/LoginScreen';
import { MenuBar, Dock, Window } from './components/OSComponents';
import Sidebar from './components/Sidebar';
import { MobileStatusBar, MobileHomeScreen, MobileDock, MobileAppView } from './components/MobileComponents';
import { appsConfig, getAppContent } from './config/AppConfig';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windows, setWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [draggingWindow, setDraggingWindow] = useState(null);
  const [resizingWindow, setResizingWindow] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStartRect, setResizeStartRect] = useState({ width: 0, height: 0, x: 0, y: 0 });
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [activeMobileApp, setActiveMobileApp] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = () => setIsLoggedIn(true);

  const openApp = (appName) => {
    if (isMobile) {
      setActiveMobileApp(appName);
      return;
    }

    if (windows.some(w => w.id === appName)) {
      setWindows(windows.map(w => w.id === appName ? { ...w, zIndex: nextZIndex } : w));
      setNextZIndex(prev => prev + 1);
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
      content: getAppContent(appName)
    };

    setWindows([...windows, newWindow]);
    setNextZIndex(prev => prev + 1);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    if (draggingWindow) {
      setWindows(prev => prev.map(w => {
        if (w.id === draggingWindow) {
          return {
            ...w,
            position: { ...w.position, x: clientX - dragOffset.x, y: clientY - dragOffset.y }
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
            position: { ...w.position, width: `${newWidth}px`, height: `${newHeight}px` }
          };
        }
        return w;
      }));
    }
  }, [draggingWindow, resizingWindow, dragOffset, resizeStartRect]);

  const handleMouseDown = (e, id) => {
    setWindows(windows.map(w => w.id === id ? { ...w, zIndex: nextZIndex } : w));
    setNextZIndex(prev => prev + 1);
    
    const windowHeader = document.getElementById(`header-${id}`);
    if (windowHeader && windowHeader.contains(e.target)) {
      const w = windows.find(win => win.id === id);
      setDraggingWindow(id);
      setDragOffset({ x: e.clientX - w.position.x, y: e.clientY - w.position.y });
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

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    const mu = () => { setDraggingWindow(null); setResizingWindow(null); };
    window.addEventListener('mouseup', mu);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', mu);
    };
  }, [handleMouseMove]);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (isMobile) {
    return (
      <div className="mobile-container">
        <div className="wallpaper-container">
          <img src="/wallpaper.png" className="wallpaper" alt="" />
        </div>
        <MobileStatusBar />
        <MobileHomeScreen apps={appsConfig} onOpenApp={openApp} />
        <MobileDock apps={[appsConfig[0], appsConfig[1], appsConfig[7], appsConfig[2]]} onOpenApp={openApp} />
        {activeMobileApp && (
          <MobileAppView 
            name={activeMobileApp} 
            content={getAppContent(activeMobileApp)} 
            onClose={() => setActiveMobileApp(null)} 
          />
        )}
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="wallpaper-container">
        <img src="/wallpaper.png" className="wallpaper" alt="" />
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
