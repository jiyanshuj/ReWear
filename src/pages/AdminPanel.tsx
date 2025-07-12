import React, { useState } from 'react';
import { Search, User, Settings, Edit, Trash2, Ban, CheckCircle, Package, ShoppingBag, Users } from 'lucide-react';

interface AdminPanelProps {
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail' | 'admin') => void;
}

export default function AdminPanel({ onNavigate }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'users' | 'orders' | 'listings'>('users');
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      location: "San Francisco, CA",
      memberSince: "March 2023",
      swaps: 24,
      rating: 4.9,
      status: "Active",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      email: "emma.rodriguez@email.com",
      location: "Los Angeles, CA",
      memberSince: "January 2023",
      swaps: 18,
      rating: 4.8,
      status: "Active",
      avatar: "ER"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      location: "Seattle, WA",
      memberSince: "June 2023",
      swaps: 12,
      rating: 4.7,
      status: "Suspended",
      avatar: "MC"
    },
    {
      id: 4,
      name: "Lisa Thompson",
      email: "lisa.thompson@email.com",
      location: "Austin, TX",
      memberSince: "February 2023",
      swaps: 31,
      rating: 5.0,
      status: "Active",
      avatar: "LT"
    }
  ];

  const orders = [
    {
      id: 1,
      orderNumber: "ORD-2024-001",
      buyer: "Sarah Johnson",
      seller: "Emma Rodriguez",
      item: "Vintage Denim Jacket",
      date: "Dec 15, 2024",
      status: "Completed",
      amount: "Swap"
    },
    {
      id: 2,
      orderNumber: "ORD-2024-002",
      buyer: "Michael Chen",
      seller: "Lisa Thompson",
      item: "Designer Silk Blouse",
      date: "Dec 14, 2024",
      status: "In Transit",
      amount: "Swap"
    },
    {
      id: 3,
      orderNumber: "ORD-2024-003",
      buyer: "Lisa Thompson",
      seller: "Sarah Johnson",
      item: "Cozy Wool Sweater",
      date: "Dec 13, 2024",
      status: "Pending",
      amount: "Swap"
    },
    {
      id: 4,
      orderNumber: "ORD-2024-004",
      buyer: "Emma Rodriguez",
      seller: "Michael Chen",
      item: "Summer Floral Dress",
      date: "Dec 12, 2024",
      status: "Disputed",
      amount: "Swap"
    }
  ];

  const listings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      owner: "Sarah Johnson",
      category: "Outerwear",
      condition: "Excellent",
      posted: "3 days ago",
      views: 127,
      likes: 23,
      status: "Active"
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      owner: "Emma Rodriguez",
      category: "Tops",
      condition: "Like New",
      posted: "1 week ago",
      views: 89,
      likes: 15,
      status: "Active"
    },
    {
      id: 3,
      title: "Cozy Wool Sweater",
      owner: "Michael Chen",
      category: "Tops",
      condition: "Good",
      posted: "2 weeks ago",
      views: 45,
      likes: 8,
      status: "Flagged"
    },
    {
      id: 4,
      title: "Summer Floral Dress",
      owner: "Lisa Thompson",
      category: "Dresses",
      condition: "Excellent",
      posted: "5 days ago",
      views: 156,
      likes: 31,
      status: "Active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Suspended':
        return 'bg-red-100 text-red-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Transit':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Disputed':
        return 'bg-red-100 text-red-700';
      case 'Flagged':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderUserCard = (user: any) => (
    <div key={user.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow" style={{ borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <div className="flex items-center space-x-4">
        {/* Profile Picture - Circle 60px */}
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold" style={{ width: '60px', height: '60px' }}>
            {user.avatar}
          </div>
        </div>

        {/* Details Box - 180x50px */}
        <div className="flex-1 bg-gray-50 rounded-lg p-3" style={{ width: '180px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="font-semibold text-gray-900 text-sm">{user.name}</div>
          <div className="text-xs text-gray-600">{user.email}</div>
          <div className="text-xs text-gray-500">{user.swaps} swaps • {user.rating}★</div>
        </div>

        {/* Action Buttons - 2 stacked 80x30px */}
        <div className="flex flex-col space-y-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center" style={{ width: '80px', height: '30px', borderRadius: '8px' }}>
            <Edit className="w-3 h-3 mr-1" />
            <span className="text-xs">Edit</span>
          </button>
          <button className={`rounded-lg font-medium transition-colors flex items-center justify-center ${
            user.status === 'Active' 
              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`} style={{ width: '80px', height: '30px', borderRadius: '8px' }}>
            {user.status === 'Active' ? (
              <>
                <Ban className="w-3 h-3 mr-1" />
                <span className="text-xs">Ban</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-3 h-3 mr-1" />
                <span className="text-xs">Restore</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderOrderCard = (order: any) => (
    <div key={order.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow" style={{ borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold" style={{ width: '60px', height: '60px' }}>
            <Package className="w-6 h-6" />
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-lg p-3" style={{ width: '180px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="font-semibold text-gray-900 text-sm">{order.orderNumber}</div>
          <div className="text-xs text-gray-600">{order.buyer} ↔ {order.seller}</div>
          <div className="text-xs text-gray-500">{order.item} • {order.date}</div>
        </div>

        <div className="flex flex-col space-y-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center" style={{ width: '80px', height: '30px', borderRadius: '8px' }}>
            <Edit className="w-3 h-3 mr-1" />
            <span className="text-xs">View</span>
          </button>
          <button className="bg-orange-100 text-orange-700 hover:bg-orange-200 rounded-lg font-medium transition-colors flex items-center justify-center" style={{ width: '80px', height: '30px', borderRadius: '8px' }}>
            <Settings className="w-3 h-3 mr-1" />
            <span className="text-xs">Resolve</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderListingCard = (listing: any) => (
    <div key={listing.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow" style={{ borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold" style={{ width: '60px', height: '60px' }}>
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-lg p-3" style={{ width: '180px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="font-semibold text-gray-900 text-sm">{listing.title}</div>
          <div className="text-xs text-gray-600">by {listing.owner}</div>
          <div className="text-xs text-gray-500">{listing.views} views • {listing.likes} likes</div>
        </div>

        <div className="flex flex-col space-y-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center" style={{ width: '80px', height: '30px', borderRadius: '8px' }}>
            <Edit className="w-3 h-3 mr-1" />
            <span className="text-xs">Edit</span>
          </button>
          <button className={`rounded-lg font-medium transition-colors flex items-center justify-center ${
            listing.status === 'Flagged' 
              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
              : 'bg-red-100 text-red-700 hover:bg-red-200'
          }`} style={{ width: '80px', height: '30px', borderRadius: '8px' }}>
            <Trash2 className="w-3 h-3 mr-1" />
            <span className="text-xs">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Outer Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden" style={{ borderRadius: '14px', padding: '24px' }}>
        
        {/* Screen 7 Label */}
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
            Screen 7
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        </div>

        {/* Top Navigation Bar */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between mb-8" style={{ borderRadius: '8px', padding: '16px' }}>
          {/* Left Box - Logo/Admin Icon */}
          <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ width: '100px', height: '30px', borderRadius: '8px' }}>
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="ml-2 text-sm font-medium text-gray-700">Admin</span>
          </div>
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          {/* Top Right Circle */}
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-200 transition-colors">
            <User className="w-4 h-4 text-indigo-600" />
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ borderRadius: '8px', padding: '8px 16px' }}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Manage Users
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'orders'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ borderRadius: '8px', padding: '8px 16px' }}
          >
            <Package className="w-4 h-4 inline mr-2" />
            Manage Orders
          </button>
          <button
            onClick={() => setActiveTab('listings')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'listings'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ borderRadius: '8px', padding: '8px 16px' }}
          >
            <ShoppingBag className="w-4 h-4 inline mr-2" />
            Manage Listings
          </button>
        </div>

        {/* Main Section */}
        <div>
          {/* Section Label */}
          <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            {activeTab === 'users' && 'Manage Users'}
            {activeTab === 'orders' && 'Manage Orders'}
            {activeTab === 'listings' && 'Manage Listings'}
          </h2>

          {/* Content based on active tab */}
          <div className="space-y-4">
            {activeTab === 'users' && users.map(renderUserCard)}
            {activeTab === 'orders' && orders.map(renderOrderCard)}
            {activeTab === 'listings' && listings.map(renderListingCard)}
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <div className="flex justify-center mt-8 pt-6 border-t border-gray-100">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}