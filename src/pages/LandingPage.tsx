import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shirt, Users, Recycle, Star, ArrowRight, Heart, ShoppingBag } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: 'welcome' | 'landing' | 'browse' | 'dashboard' | 'listing' | 'product-detail') => void;
  onLogin: () => void;
}

export default function LandingPage({ onNavigate, onLogin }: LandingPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      size: "M",
      condition: "Excellent",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Sarah M."
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      size: "S",
      condition: "Like New",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Emma K."
    },
    {
      id: 3,
      title: "Cozy Wool Sweater",
      size: "L",
      condition: "Good",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Lisa R."
    },
    {
      id: 4,
      title: "Summer Floral Dress",
      size: "M",
      condition: "Excellent",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Maya P."
    },
    {
      id: 5,
      title: "Classic Blazer",
      size: "M",
      condition: "Very Good",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      owner: "Anna T."
    }
  ];

  const testimonials = [
    {
      name: "Jessica Chen",
      text: "I've swapped over 20 items and saved hundreds of dollars while refreshing my wardrobe sustainably!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      text: "The quality of items is amazing. It's like having access to everyone's closet in the community.",
      rating: 5
    },
    {
      name: "Priya Patel",
      text: "Love the environmental impact. I've given new life to clothes I never wore anymore.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, featuredItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, featuredItems.length - 2)) % Math.max(1, featuredItems.length - 2));
  };

  return (
    <>
      {/* Screen 4 Label */}
      <div className="flex justify-center pt-4">
        <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
          Screen 2
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Swap, Share, and Sustain Your
            <span className="text-emerald-600"> Wardrobe</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our community of fashion-forward individuals who believe in sustainable style. 
            Exchange clothes, discover unique pieces, and reduce fashion waste together.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onLogin}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Start Swapping
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => onNavigate('browse')}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center"
            >
              Browse Items
              <ShoppingBag className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Items</h2>
          <p className="text-gray-600">Discover amazing pieces from our community</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {featuredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="w-1/3 flex-shrink-0 px-3 cursor-pointer"
                  onClick={() => onNavigate('listing')}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                        <span>Size: {item.size}</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {item.condition}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">by {item.owner}</span>
                        <button className="text-red-500 hover:text-red-600 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-gray-600">Together, we're making fashion more sustainable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shirt className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12,500+</div>
            <div className="text-gray-600">Items Exchanged</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">8,200+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Waste Reduction</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-gray-600">Real stories from real swappers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="font-semibold text-gray-900">— {testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 text-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Wardrobe?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of fashion lovers making sustainable choices</p>
        <button 
          onClick={onLogin}
          className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Get Started Today
        </button>
      </section>
    </>
  );
}