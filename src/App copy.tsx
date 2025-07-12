import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LandingPageScreen3 from './components/LandingPageScreen3';
import UserDashboard from './components/UserDashboard';
import ItemListing from './components/ItemListing';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'listing' | 'screen3'>('screen3');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Sarah Johnson');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing');
  };

  const handleNavigate = (view: 'landing' | 'dashboard' | 'listing' | 'screen3') => {
    if (view === 'dashboard' && !isLoggedIn) {
      handleLogin();
    } else {
      setCurrentView(view);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden m-4">
        
        {/* Header Navigation */}
        <Header 
          currentView={currentView}
          onNavigate={handleNavigate}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
          userName={userName}
        />

        {/* Main Content */}
        {currentView === 'screen3' ? (
          <LandingPageScreen3 onNavigate={handleNavigate} onLogin={handleLogin} />
        ) : currentView === 'landing' ? (
          <LandingPage onNavigate={handleNavigate} onLogin={handleLogin} />
        ) : currentView === 'listing' ? (
          <ItemListing onNavigate={handleNavigate} />
        ) : (
          <UserDashboard userName={userName} />
        )}
      </div>
    </div>
  );
}

export default App;