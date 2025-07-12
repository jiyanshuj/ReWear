import React, { useState } from 'react';
import { Search, Heart, Share2, MessageCircle, Star, ArrowLeft, User, MapPin, Calendar, Package } from 'lucide-react';

interface ItemListingProps {
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail') => void;
}

export default function ItemListing({ onNavigate }: ItemListingProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentItem = {
    id: 1,
    title: "Vintage Denim Jacket",
    description: "Beautiful vintage denim jacket from the 90s. This piece has been lovingly worn and has that perfect broken-in feel. Features classic button closure, chest pockets, and a timeless silhouette that works with everything.",
    fullDescription: "This stunning vintage denim jacket is a true wardrobe staple. Made from high-quality cotton denim, it features the classic button-front closure with metal buttons, two chest pockets with button flaps, and side pockets. The jacket has been pre-loved which gives it that perfect vintage character with subtle fading and softness that only comes with time. The fit is relaxed and comfortable, perfect for layering over t-shirts, sweaters, or dresses. This piece has been carefully maintained and is in excellent condition with no stains, tears, or significant wear. It's a versatile piece that can be dressed up or down and will be a beloved addition to any wardrobe.",
    size: "Medium",
    condition: "Excellent",
    brand: "Levi's",
    color: "Classic Blue",
    material: "100% Cotton Denim",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    owner: {
      name: "Sarah M.",
      rating: 4.9,
      swaps: 24,
      location: "San Francisco, CA",
      memberSince: "March 2023"
    },
    stats: {
      views: 127,
      likes: 23,
      posted: "3 days ago"
    }
  };

  const relatedItems = [
    {
      id: 2,
      title: "Designer Silk Blouse",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1",
      size: "S",
      condition: "Like New",
      owner: "Emma K."
    },
    {
      id: 3,
      title: "Cozy Wool Sweater",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1",
      size: "L",
      condition: "Good",
      owner: "Lisa R."
    },
    {
      id: 4,
      title: "Summer Floral Dress",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1",
      size: "M",
      condition: "Excellent",
      owner: "Maya P."
    },
    {
      id: 5,
      title: "Classic Blazer",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1",
      size: "M",
      condition: "Very Good",
      owner: "Anna T."
    }
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Like New':
        return 'bg-green-100 text-green-700';
      case 'Excellent':
        return 'bg-emerald-100 text-emerald-700';
      case 'Very Good':
        return 'bg-blue-100 text-blue-700';
      case 'Good':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* Screen 5 Label */}
      <div className="flex justify-center pt-4">
        <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
          Screen 4
        </div>
      </div>

      {/* Header Section */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => onNavigate('browse')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Item Listing</h1>
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
            <User className="w-4 h-4 text-purple-600" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-all ${
                  isLiked 
                    ? 'bg-red-100 text-red-600 border border-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Liked' : 'Like'}
              </button>
              <button className="flex-1 flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Owner
              </button>
              <button className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            
            {/* Basic Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentItem.title}</h1>
              <p className="text-gray-600 mb-4">{currentItem.description}</p>
              
              {/* Stats */}
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>{currentItem.stats.views} views</span>
                <span>{currentItem.stats.likes} likes</span>
                <span>Posted {currentItem.stats.posted}</span>
              </div>
            </div>

            {/* Item Details */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Item Details</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Size</span>
                  <div className="font-medium text-gray-900">{currentItem.size}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Condition</span>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(currentItem.condition)}`}>
                    {currentItem.condition}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Brand</span>
                  <div className="font-medium text-gray-900">{currentItem.brand}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Color</span>
                  <div className="font-medium text-gray-900">{currentItem.color}</div>
                </div>
                <div className="col-span-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Material</span>
                  <div className="font-medium text-gray-900">{currentItem.material}</div>
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Owner Information</h3>
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">{currentItem.owner.name}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{currentItem.owner.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {currentItem.owner.location}
                    </div>
                    <div className="flex items-center">
                      <Package className="w-3 h-3 mr-1" />
                      {currentItem.owner.swaps} successful swaps
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Member since {currentItem.owner.memberSince}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Full Description</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {currentItem.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="px-6 py-6 border-t border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Related Items</h2>
        
        <div className="grid grid-cols-4 gap-4">
          {relatedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm mb-2 truncate">{item.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Size: {item.size}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item.condition)}`}>
                    {item.condition}
                  </span>
                </div>
                <div className="text-xs text-gray-500">by {item.owner}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}