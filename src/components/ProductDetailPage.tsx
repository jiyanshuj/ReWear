import React, { useState } from 'react';
import { Search, User, Upload, Image, ToggleLeft, ToggleRight, Edit, Trash2, Eye, X } from 'lucide-react';

interface ProductDetailPageProps {
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail') => void;
}

export default function ProductDetailPage({ onNavigate }: ProductDetailPageProps) {
  const [productDescription, setProductDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const previousListings = [
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024) { // 10MB limit
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setUploadedImages(prev => [...prev, result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024) { // 10MB limit
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setUploadedImages(prev => [...prev, result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Screen Tag - Top Left */}
      <div className="max-w-6xl mx-auto mb-4">
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium inline-block">
          Screen 5
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden" style={{ borderRadius: '14px', padding: '24px' }}>
        
        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Product Detail Page</h1>
        </div>

        {/* Top Navigation */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between mb-8" style={{ borderRadius: '8px', padding: '16px' }}>
          {/* Left Box - Logo/Menu */}
          <div className="w-10 h-8 bg-gray-200 rounded-md flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-400 rounded"></div>
          </div>
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ borderRadius: '8px' }}
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          {/* Right Circle - Profile */}
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
            <User className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Main Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Add Images Box - Left Column */}
          <div className="space-y-4">
            <input
              type="file"
              id="imageUpload"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            
            <div 
              className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
              style={{ 
                width: '100%', 
                height: '240px', 
                borderRadius: '10px', 
                padding: '16px',
                maxWidth: '300px'
              }}
              onClick={() => document.getElementById('imageUpload')?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 text-gray-400 mb-3" />
              <p className="text-sm font-medium text-gray-600 mb-1">Add Images</p>
              <p className="text-xs text-gray-500 text-center">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 10MB</p>
            </div>
            
            {/* Image Preview Grid */}
            <div className="grid grid-cols-2 gap-2">
              {uploadedImages.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden group">
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              
              {/* Empty slots */}
              {Array.from({ length: Math.max(0, 4 - uploadedImages.length) }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image className="w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>
            
            {/* Show count of uploaded images */}
            {uploadedImages.length > 0 && (
              <p className="text-xs text-gray-500 text-center">
                {uploadedImages.length} image{uploadedImages.length !== 1 ? 's' : ''} uploaded
                {uploadedImages.length > 4 && ` (showing first 4)`}
              </p>
            )}
          </div>

          {/* Product Description Box - Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Product Description
              </label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Describe your product in detail..."
                className="w-full h-48 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ 
                  borderRadius: '10px', 
                  padding: '12px 16px',
                  backgroundImage: `repeating-linear-gradient(
                    transparent,
                    transparent 20px,
                    #f3f4f6 20px,
                    #f3f4f6 21px
                  )`
                }}
                rows={10}
              />
            </div>
            
            {/* Status Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsAvailable(!isAvailable)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isAvailable 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
                style={{ 
                  width: '120px', 
                  height: '30px', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isAvailable ? (
                  <>
                    <ToggleRight className="w-4 h-4" />
                    <span className="text-sm">Available</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-4 h-4" />
                    <span className="text-sm">Swap</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Previous Listings Section */}
        <div style={{ paddingTop: '20px' }}>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Previous Listings:</h2>
          
          {/* Item Cards Grid */}
          <div className="flex space-x-4">
            {previousListings.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
                style={{ 
                  width: '90px', 
                  height: '90px', 
                  borderRadius: '10px',
                  minWidth: '90px'
                }}
              >
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
                    <span className={`px-1 py-0.5 rounded text-xs ${
                      item.status === 'Available' ? 'bg-green-100 text-green-700' :
                      item.status === 'Swapped' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-100">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}