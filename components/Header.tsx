
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-slide-down">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
              <i className="ri-cup-fill text-white text-lg"></i>
            </div>
            <span className="font-['Pacifico'] text-2xl text-amber-800">Brew Haven</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              Menu
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              About Us
            </Link>
            <Link href="/location" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              Location
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              Reviews
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              Contact
            </Link>
            <Link href="/order" className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform relative">
              <i className="ri-shopping-cart-line mr-2"></i>
              Order Online
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            <Link href="/" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              Home
            </Link>
            <Link href="/menu" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              Menu
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              About Us
            </Link>
            <Link href="/location" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              Location
            </Link>
            <Link href="/reviews" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              Reviews
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-amber-600 hover:pl-2 transition-all duration-300 cursor-pointer">
              Contact
            </Link>
            <Link href="/order" className="block py-2 bg-amber-600 text-white px-4 rounded-full hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform relative">
              <i className="ri-shopping-cart-line mr-2"></i>
              Order Online
              {cartCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}