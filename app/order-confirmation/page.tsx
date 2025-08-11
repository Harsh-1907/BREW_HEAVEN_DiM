'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OrderConfirmation() {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate random order number
    setOrderNumber(`BH${Date.now().toString().slice(-6)}`);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <i className="ri-check-line text-green-600 text-3xl"></i>
          </div>
          
          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your order. We're preparing your coffee with love and care.
          </p>
          
          {/* Order Details */}
          <div className="bg-amber-50 rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Order Number</h3>
                <p className="text-2xl font-bold text-amber-600">{orderNumber}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Estimated Ready Time</h3>
                <p className="text-lg text-gray-700" suppressHydrationWarning={true}>
                  {new Date(Date.now() + 15 * 60000).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          </div>
          
          {/* What's Next */}
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Order Received</h4>
                  <p className="text-gray-600">We've received your order and payment confirmation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Preparing Your Order</h4>
                  <p className="text-gray-600">Our skilled baristas are crafting your drinks and preparing your items.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ready for Pickup/Delivery</h4>
                  <p className="text-gray-600">You'll receive a notification when your order is ready.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
            <div className="text-center space-y-2">
              <p className="text-gray-600">
                <i className="ri-phone-line mr-2"></i>
                Call us at (555) 123-BREW
              </p>
              <p className="text-gray-600">
                <i className="ri-mail-line mr-2"></i>
                Email us at hello@brewhaven.com
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform">
              Order Again
            </Link>
            <Link href="/" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform">
              Back to Home
            </Link>
          </div>
          
          {/* Share Experience */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear about your Brew Haven experience!
            </p>
            <Link href="/reviews" className="text-amber-600 hover:text-amber-700 font-medium hover:scale-105 transition-all duration-300">
              Leave a Review →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}