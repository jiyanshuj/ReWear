import React from 'react';
import { Shirt, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  currentView: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail' | 'admin';
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail' | 'admin') => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  userName?: string;
  isAdmin?: boolean;
}

export default function Header({ currentView, onNavigate, isLoggedIn, onLogin, onLogout, userName, isAdmin }: HeaderProps) {
  return (
    <header className="px-6 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('welcome')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Shirt className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ReWear</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('welcome')}
            className={`font-medium transition-colors ${
              currentView === 'welcome' 
                ? 'text-emerald-600' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            Screen 1
          </button>
          <button 
            onClick={() => onNavigate('landing')}
            className={`font-medium transition-colors ${
              currentView === 'landing' 
                ? 'text-emerald-600' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            Screen 2
          </button>
          <button 
            onClick={() => onNavigate('browse')}
            className={`font-medium transition-colors ${
              currentView === 'browse' 
                ? 'text-emerald-600' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            Screen 3
          </button>
          <button 
            onClick={() => onNavigate('listing')}
            className={`font-medium transition-colors ${
              currentView === 'listing' 
                ? 'text-emerald-600' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            Screen 4
          </button>
          <button 
            onClick={() => onNavigate('product-detail')}
            className={`font-medium transition-colors ${
              currentView === 'product-detail' 
                ? 'text-emerald-600' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            Screen 5
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`font-medium transition-colors ${
              currentView === 'dashboard' 
                ? 'text-emerald-600' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            Screen 6
          </button>
          
          {/* Admin Panel - Only show if user is admin */}
          {isAdmin && (
            <button 
              onClick={() => onNavigate('admin')}
              className={`font-medium transition-colors ${
                currentView === 'admin' 
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Screen 7
            </button>
          )}
          
          {isLoggedIn ? (
            <>
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">Welcome, {userName}</span>
                {isAdmin && (
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
                    Admin
                  </span>
                )}
                <button 
                  onClick={onLogout}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  Logout
                </button>
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition-colors">
                  <User className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </>
          ) : (
            <>
              <button 
                onClick={onLogin}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Login
              </button>
              <button 
                onClick={onLogin}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Sign Up
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}