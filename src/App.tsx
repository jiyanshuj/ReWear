import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import LandingPage from './pages/LandingPage';
import BrowseItems from './pages/BrowseItems';
import UserDashboard from './pages/UserDashboard';
import ItemListing from './pages/ItemListing';
import ProductDetailPage from './components/ProductDetailPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [currentView, setCurrentView] = useState<'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail' | 'admin'>('welcome');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Sarah Johnson');
  const [isAdmin, setIsAdmin] = useState(true); // For demo purposes

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('browse');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('welcome');
  };

  const handleNavigate = (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail' | 'admin') => {
    if (view === 'dashboard' && !isLoggedIn) {
      handleLogin();
    } else if (view === 'admin' && !isAdmin) {
      // Only allow admin access if user is admin
      return;
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
          isAdmin={isAdmin}
        />

        {/* Main Content */}
        {currentView === 'product-detail' ? (
          <ProductDetailPage onNavigate={handleNavigate} />
        ) : currentView === 'admin' ? (
          <AdminPanel onNavigate={handleNavigate} />
        ) : currentView === 'welcome' ? (
          <WelcomePage onNavigate={handleNavigate} onLogin={handleLogin} />
        ) : currentView === 'landing' ? (
          <LandingPage onNavigate={handleNavigate} onLogin={handleLogin} />
        ) : currentView === 'browse' ? (
          <BrowseItems onNavigate={handleNavigate} />
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
