
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Pour-Over: Mastering Manual Brewing",
      excerpt: "Discover the secrets behind the perfect pour-over coffee and elevate your morning ritual with these expert techniques.",
      image: "https://readdy.ai/api/search-image?query=Professional%20barista%20performing%20pour-over%20coffee%20brewing%20technique%2C%20V60%20dripper%2C%20gooseneck%20kettle%2C%20precise%20circular%20pouring%20motion%2C%20steam%20rising%2C%20coffee%20grounds%20blooming%2C%20artisan%20coffee%20preparation%20process&width=600&height=300&seq=pourover-brewing-blog&orientation=landscape",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Brewing Tips"
    },
    {
      id: 2,
      title: "From Farm to Cup: Our Ethiopian Coffee Journey",
      excerpt: "Follow our recent trip to Ethiopian coffee farms and learn about the origins of our newest single-origin offering.",
      image: "https://readdy.ai/api/search-image?query=Ethiopian%20coffee%20farm%20landscape%20with%20traditional%20coffee%20trees%2C%20farmers%20in%20traditional%20clothing%20harvesting%20coffee%20cherries%2C%20mountainous%20terrain%2C%20traditional%20coffee%20processing%20methods%2C%20cultural%20heritage&width=600&height=300&seq=ethiopian-farm-journey&orientation=landscape",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Origin Stories"
    },
    {
      id: 3,
      title: "Latte Art Fundamentals: Creating Beautiful Designs",
      excerpt: "Learn the basics of steaming milk and creating stunning latte art patterns that will impress your friends and family.",
      image: "https://readdy.ai/api/search-image?query=Detailed%20close-up%20of%20barista%20hands%20creating%20intricate%20latte%20art%20rosetta%20pattern%2C%20steamed%20milk%20being%20poured%20into%20espresso%2C%20beautiful%20foam%20design%20formation%2C%20artistic%20coffee%20presentation&width=600&height=300&seq=latte-art-tutorial&orientation=landscape",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Tutorials"
    },
    {
      id: 4,
      title: "Sustainable Coffee: Our Environmental Commitment",
      excerpt: "Explore how we're reducing our carbon footprint and supporting eco-friendly practices throughout our supply chain.",
      image: "https://readdy.ai/api/search-image?query=Eco-friendly%20coffee%20shop%20with%20solar%20panels%2C%20recyclable%20packaging%2C%20reusable%20cups%2C%20green%20plants%20throughout%20space%2C%20sustainable%20coffee%20roasting%20equipment%2C%20environmental%20responsibility%20concept&width=600&height=300&seq=sustainable-coffee-practices&orientation=landscape",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "Cold Brew vs. Iced Coffee: What's the Difference?",
      excerpt: "Uncover the key differences between cold brew and iced coffee, and discover which method produces your preferred taste profile.",
      image: "https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison%20of%20cold%20brew%20and%20iced%20coffee%20in%20tall%20glasses%2C%20ice%20cubes%2C%20coffee%20beans%2C%20brewing%20equipment%20for%20both%20methods%2C%20refreshing%20summer%20beverages%20presentation&width=600&height=300&seq=coldbrew-vs-iced-coffee&orientation=landscape",
      date: "February 22, 2024",
      readTime: "4 min read",
      category: "Coffee Science"
    },
    {
      id: 6,
      title: "Community Coffee Cupping: Tasting Notes Workshop",
      excerpt: "Join us for our monthly coffee cupping session where we explore flavor profiles and develop our palate together.",
      image: "https://readdy.ai/api/search-image?query=Coffee%20cupping%20session%20with%20multiple%20small%20cups%20arranged%20in%20rows%2C%20people%20tasting%20coffee%20with%20spoons%2C%20notebook%20for%20tasting%20notes%2C%20professional%20coffee%20evaluation%20setup%2C%20community%20learning%20atmosphere&width=600&height=300&seq=coffee-cupping-workshop&orientation=landscape",
      date: "February 18, 2024",
      readTime: "3 min read",
      category: "Events"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
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
    
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl font-bold mb-6">Brew Haven Blog</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Stories, tips, and insights from the world of specialty coffee
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="grid lg:grid-cols-2">
              <div className="overflow-hidden">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-amber-600 font-medium">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-amber-600 transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest coffee trends and brewing techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-amber-600 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-amber-600 hover:text-amber-700 font-medium hover:scale-105 transition-all duration-300">
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-xl text-amber-100 mb-8">
            Subscribe to our newsletter for the latest coffee tips, brewing guides, and shop updates
          </p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
