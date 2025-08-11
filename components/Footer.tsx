
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSocialClick = (platform: string) => {
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
      <div class="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
        <div class="flex items-center">
          <i class="ri-information-line mr-2"></i>
          Follow us on ${platform}! Link opens externally.
        </div>
      </div>
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
  };

  const handleServiceClick = (service: string) => {
    window.location.href = '/contact?service=' + encodeURIComponent(service);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
      <div class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
        <div class="flex items-center">
          <i class="ri-check-line mr-2"></i>
          Successfully subscribed to newsletter!
        </div>
      </div>
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
    
    setEmail('');
  };

  const handlePolicyClick = (policy: string) => {
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
      <div class="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
        <div class="flex items-center">
          <i class="ri-information-line mr-2"></i>
          ${policy} information available. Contact us for details.
        </div>
      </div>
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            <Link href="/" className="flex items-center space-x-2 mb-4 hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <i className="ri-cup-fill text-white text-lg"></i>
              </div>
              <span className="font-['Pacifico'] text-2xl text-amber-400">Brew Haven</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Your neighborhood coffee shop where exceptional coffee meets warm hospitality. Every cup tells a story.
            </p>
            <div className="flex space-x-4 mt-6">
              <div onClick={() => handleSocialClick('Facebook')} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </div>
              <div onClick={() => handleSocialClick('Instagram')} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </div>
              <div onClick={() => handleSocialClick('Twitter')} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <i className="ri-twitter-line text-lg"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Home</Link></li>
              <li><Link href="/menu" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Menu</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">About Us</Link></li>
              <li><Link href="/location" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Location & Hours</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Reviews</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/order" className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Online Ordering</Link></li>
              <li><div onClick={() => handleServiceClick('Catering')} className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">Catering</div></li>
              <li><div onClick={() => handleServiceClick('Private Events')} className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">Private Events</div></li>
              <li><div onClick={() => handleServiceClick('Corporate Gifts')} className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">Corporate Gifts</div></li>
              <li><div onClick={() => handleServiceClick('Coffee Subscriptions')} className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">Coffee Subscriptions</div></li>
              <li><div onClick={() => handleServiceClick('Loyalty Program')} className="text-gray-300 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">Loyalty Program</div></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-amber-400 text-lg mt-1 flex-shrink-0"></i>
                <div className="text-gray-300 text-sm">
                  123 Coffee Street<br />
                  Bean City, BC 12345
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-amber-400 text-lg flex-shrink-0"></i>
                <span className="text-gray-300 text-sm">(555) 123-BREW</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-amber-400 text-lg flex-shrink-0"></i>
                <span className="text-gray-300 text-sm">hello@brewhaven.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-amber-400 text-lg flex-shrink-0"></i>
                <span className="text-gray-300 text-sm">Mon-Fri: 6AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mt-12 animate-fade-in-up">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-400">Subscribe to our newsletter for coffee tips and special offers</p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Brew Haven Coffee Shop. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <div onClick={() => handlePolicyClick('Privacy Policy')} className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 cursor-pointer">Privacy Policy</div>
              <div onClick={() => handlePolicyClick('Terms of Service')} className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 cursor-pointer">Terms of Service</div>
              <div onClick={() => handlePolicyClick('Cookie Policy')} className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 cursor-pointer">Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
