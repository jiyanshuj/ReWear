import React from 'react';
import { ArrowRight, Shirt, Users, Recycle, Star } from 'lucide-react';

interface WelcomePageProps {
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail') => void;
  onLogin: () => void;
}

export default function WelcomePage({ onNavigate, onLogin }: WelcomePageProps) {
  return (
    <>
      {/* Screen 1 Label */}
      <div className="flex justify-center pt-4">
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Screen 1
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to
            <span className="text-blue-600"> ReWear</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The sustainable fashion marketplace where you can swap, share, and discover amazing clothing pieces 
            while reducing fashion waste and building community connections.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate('landing')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => onNavigate('browse')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Browse Items
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ReWear?</h2>
          <p className="text-gray-600">Join the sustainable fashion revolution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shirt className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Items</h3>
            <p className="text-gray-600">Discover high-quality, pre-loved clothing from verified community members</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Connect with like-minded fashion enthusiasts in your area</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable</h3>
            <p className="text-gray-600">Reduce fashion waste and environmental impact through circular fashion</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-4 italic">
              "ReWear has completely transformed how I think about fashion. I've discovered amazing pieces 
              and made great connections in my community while being more sustainable."
            </blockquote>
            <cite className="text-gray-600 font-medium">— Sarah Johnson, ReWear Member</cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sustainable Fashion Journey?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of fashion lovers making a difference</p>
        <button 
          onClick={onLogin}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Join ReWear Today
        </button>
      </section>
    </>
  );
}