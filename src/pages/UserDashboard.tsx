import React from 'react';
import { Search, User, Heart, Package, ShoppingBag, Star, Edit, Trash2, Eye } from 'lucide-react';

interface UserDashboardProps {
  userName: string;
}

export default function UserDashboard({ userName }: UserDashboardProps) {
  const userInfo = {
    name: userName,
    email: "sarah.johnson@email.com",
    location: "San Francisco, CA",
    memberSince: "March 2023",
    swapsCompleted: "24",
    rating: "4.9"
  };

  const myListings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      status: "Available",
      views: 45,
      likes: 12
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      status: "Swapped",
      views: 32,
      likes: 8
    },
    {
      id: 3,
      title: "Cozy Wool Sweater",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      status: "Available",
      views: 28,
      likes: 15
    },
    {
      id: 4,
      title: "Summer Floral Dress",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      status: "Pending",
      views: 67,
      likes: 23
    }
  ];

  const myPurchases = [
    {
      id: 1,
      title: "Classic Blazer",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      swappedWith: "Emma K.",
      date: "Dec 15, 2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "Leather Boots",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      swappedWith: "Maya P.",
      date: "Dec 10, 2024",
      status: "In Transit"
    },
    {
      id: 3,
      title: "Cashmere Scarf",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      swappedWith: "Lisa R.",
      date: "Dec 5, 2024",
      status: "Completed"
    },
    {
      id: 4,
      title: "Vintage Handbag",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      swappedWith: "Anna T.",
      date: "Nov 28, 2024",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-700';
      case 'Swapped':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Transit':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Outer Container with exact wireframe specifications */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden" style={{ borderRadius: '16px', padding: '24px' }}>
        
        {/* Header Section */}
        <div className="relative mb-6">
          {/* User Dashboard Label - Top Left Outside */}
          <div className="absolute -top-10 left-0 text-gray-700 font-medium text-sm" style={{ padding: '12px 0' }}>
            User Dashboard
          </div>
          
          {/* Screen 6 Label - Center Top */}
          <div className="flex justify-center -mt-4 mb-6">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium" style={{ width: '80px', height: '30px', borderRadius: '10px', padding: '4px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Screen 6
            </div>
          </div>

          {/* Navigation Bar with Search + Icon */}
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between" style={{ borderRadius: '8px', padding: '16px' }}>
            {/* Search Area - Left Side Rectangle */}
            <div className="relative" style={{ width: '150px', height: '30px' }}>
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-3 pr-8 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ borderRadius: '6px' }}
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
            
            {/* Circle Button - Right Side */}
            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors" style={{ width: '20px', height: '20px' }}>
              <User className="w-3 h-3 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Profile Overview Section */}
        <section className="mb-8" style={{ padding: '16px 0' }}>
          <div className="flex items-start space-x-6">
            {/* Profile Picture - Circle 120px diameter */}
            <div className="flex-shrink-0" style={{ margin: '16px 24px 16px 0' }}>
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg" style={{ width: '120px', height: '120px' }}>
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>

            {/* User Info Section */}
            <div className="flex-1">
              {/* User Info Boxes - 2 Columns, 3 Rows */}
              <div className="grid grid-cols-2 gap-3 mb-4" style={{ gap: '10px 12px' }}>
                <div className="bg-gray-50 rounded-lg p-3" style={{ width: '130px', height: '25px', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '40px' }}>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Full Name</label>
                  <div className="text-sm font-medium text-gray-900">{userInfo.name}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3" style={{ width: '130px', height: '25px', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '40px' }}>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Email</label>
                  <div className="text-sm font-medium text-gray-900">{userInfo.email}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3" style={{ width: '130px', height: '25px', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '40px' }}>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Location</label>
                  <div className="text-sm font-medium text-gray-900">{userInfo.location}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3" style={{ width: '130px', height: '25px', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '40px' }}>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Member Since</label>
                  <div className="text-sm font-medium text-gray-900">{userInfo.memberSince}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3" style={{ width: '130px', height: '25px', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '40px' }}>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Swaps Completed</label>
                  <div className="text-sm font-medium text-gray-900">{userInfo.swapsCompleted}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3" style={{ width: '130px', height: '25px', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '40px' }}>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Rating</label>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-900">{userInfo.rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>

              {/* Description Box - Bio Panel */}
              <div className="bg-gray-50 rounded-lg p-4" style={{ height: '80px', borderRadius: '10px', padding: '16px' }}>
                <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Bio</label>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Passionate about sustainable fashion and finding new homes for beautiful clothes. 
                  Love vintage pieces and unique finds. Always happy to swap and share styling tips!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Listings Section */}
        <section className="mb-8" style={{ paddingTop: '12px' }}>
          {/* Section Label */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900" style={{ padding: '12px 0 0 0' }}>My Listings</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Add New Item
            </button>
          </div>

          {/* Listing Cards - 4 items, 90x90px each */}
          <div className="flex space-x-3" style={{ gap: '12px' }}>
            {myListings.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group" style={{ width: '90px', height: '90px', borderRadius: '10px', minWidth: '90px' }}>
                <div className="aspect-square overflow-hidden relative h-16">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1 right-1 flex space-x-1">
                    <button className="bg-white/80 hover:bg-white p-0.5 rounded-full transition-colors">
                      <Edit className="w-2 h-2 text-gray-600" />
                    </button>
                    <button className="bg-white/80 hover:bg-white p-0.5 rounded-full transition-colors">
                      <Trash2 className="w-2 h-2 text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="p-1">
                  <h3 className="font-medium text-gray-900 text-xs mb-1 truncate">{item.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-2 h-2" />
                      <span className="text-xs">{item.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-2 h-2" />
                      <span className="text-xs">{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Purchases Section */}
        <section style={{ paddingTop: '16px' }}>
          {/* Section Label */}
          <h2 className="text-lg font-semibold text-gray-900 mb-6" style={{ padding: '12px 0 0 0' }}>My Purchases</h2>

          {/* Purchase Cards - 4 items, 90x90px each */}
          <div className="flex space-x-3 relative" style={{ gap: '12px' }}>
            {myPurchases.map((item, index) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group relative" style={{ width: '90px', height: '90px', borderRadius: '10px', minWidth: '90px' }}>
                <div className="aspect-square overflow-hidden h-16">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-1">
                  <h3 className="font-medium text-gray-900 text-xs mb-1 truncate">{item.title}</h3>
                  <div className="text-xs text-gray-500">
                    <div className="truncate">by {item.swappedWith}</div>
                  </div>
                </div>
                
                {/* Artistic Tag on last item */}
                {index === myPurchases.length - 1 && (
                  <div className="absolute -bottom-2 -right-2 bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium shadow-sm">
                    Artistic
                    <div className="absolute top-1 -left-1 w-0 h-0 border-l-2 border-l-transparent border-r-4 border-r-purple-100 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}