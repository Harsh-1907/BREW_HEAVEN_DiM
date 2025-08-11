
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function BlogPostClient({ post }) {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-amber-600 font-medium">{post.category}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{post.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{post.readTime}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-600">By {post.author}</p>
          </div>
          
          <div className="mb-12 overflow-hidden rounded-2xl animate-fade-in-up">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none animate-fade-in-up">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-amber-100 mb-8">
            Subscribe to our newsletter for more coffee insights and brewing tips
          </p>
          
          {showSuccess ? (
            <div className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold max-w-md mx-auto">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium hover:scale-105 transition-all duration-300 cursor-pointer">
            <i className="ri-arrow-left-line mr-2 w-5 h-5 flex items-center justify-center"></i>
            Back to All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
