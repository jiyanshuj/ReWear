import React, { useState } from 'react';
import { Search, Filter, Heart, Star, MapPin, Grid, List } from 'lucide-react';

interface BrowseItemsProps {
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail') => void;
}

export default function BrowseItems({ onNavigate }: BrowseItemsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const categories = ['all', 'tops', 'bottoms', 'dresses', 'outerwear', 'accessories'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL'];

  const items = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      size: "M",
      condition: "Excellent",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Sarah M.",
      location: "San Francisco, CA",
      rating: 4.9,
      category: "outerwear",
      likes: 23,
      isLiked: false
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      size: "S",
      condition: "Like New",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Emma K.",
      location: "Los Angeles, CA",
      rating: 4.8,
      category: "tops",
      likes: 18,
      isLiked: true
    },
    {
      id: 3,
      title: "Cozy Wool Sweater",
      size: "L",
      condition: "Good",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Lisa R.",
      location: "Seattle, WA",
      rating: 4.7,
      category: "tops",
      likes: 15,
      isLiked: false
    },
    {
      id: 4,
      title: "Summer Floral Dress",
      size: "M",
      condition: "Excellent",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Maya P.",
      location: "Austin, TX",
      rating: 5.0,
      category: "dresses",
      likes: 31,
      isLiked: false
    },
    {
      id: 5,
      title: "Classic Blazer",
      size: "M",
      condition: "Very Good",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Anna T.",
      location: "New York, NY",
      rating: 4.9,
      category: "outerwear",
      likes: 27,
      isLiked: true
    },
    {
      id: 6,
      title: "High-Waisted Jeans",
      size: "S",
      condition: "Excellent",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Zoe L.",
      location: "Portland, OR",
      rating: 4.8,
      category: "bottoms",
      likes: 19,
      isLiked: false
    }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSize = selectedSize === 'all' || item.size === selectedSize;
    return matchesSearch && matchesCategory && matchesSize;
  });

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
      {/* Screen 3 Label */}
      <div className="flex justify-center pt-4">
        <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
          Screen 3
        </div>
      </div>

      {/* Header Section */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Browse Items</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          {/* Size Filter */}
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {sizes.map(size => (
              <option key={size} value={size}>
                {size === 'all' ? 'All Sizes' : size}
              </option>
            ))}
          </select>

          <button className="flex items-center px-4 py-3 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} of {items.length} items
          </p>
        </div>

        {/* Items Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group cursor-pointer ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              onClick={() => onNavigate('listing')}
            >
              <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'aspect-square'} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <button className={`text-red-500 hover:text-red-600 transition-colors ${item.isLiked ? 'fill-current' : ''}`}>
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">Size: {item.size}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item.condition)}`}>
                    {item.condition}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{item.likes} likes</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-purple-600">{item.owner.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.owner}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location.split(',')[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Items
          </button>
        </div>
      </div>
    </>
  );
}