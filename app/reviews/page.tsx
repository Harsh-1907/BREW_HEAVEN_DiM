
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Reviews() {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Sarah Martinez',
      rating: 5,
      comment: "The best coffee in town! The baristas really know their craft, and the atmosphere is perfect for both work and relaxation. My daily latte is always perfect.",
      date: '2024-01-15',
      avatar: 'SM'
    },
    {
      id: 2,
      name: 'David Liu',
      rating: 5,
      comment: "I love how they source their beans ethically and roast them fresh. You can really taste the difference. Plus, the pastries are incredible!",
      date: '2024-01-10',
      avatar: 'DL'
    },
    {
      id: 3,
      name: 'Emily Parker',
      rating: 5,
      comment: "Great place to meet friends or get work done. Fast WiFi, comfortable seating, and the staff is always friendly and welcoming.",
      date: '2024-01-08',
      avatar: 'EP'
    },
    {
      id: 4,
      name: 'Michael Johnson',
      rating: 4,
      comment: "Excellent coffee and great atmosphere. The only downside is it can get quite busy during peak hours, but that's a testament to how good it is!",
      date: '2024-01-05',
      avatar: 'MJ'
    },
    {
      id: 5,
      name: 'Lisa Chen',
      rating: 5,
      comment: "Their seasonal drinks are amazing! The pumpkin spice latte was the best I've ever had. The staff remembers my order every time I come in.",
      date: '2024-01-02',
      avatar: 'LC'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      rating: 5,
      comment: "As a coffee connoisseur, I can say Brew Haven serves some of the finest coffee in the city. Their single-origin beans are exceptional.",
      date: '2023-12-28',
      avatar: 'RW'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message and reset form
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
      <div class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
        <div class="flex items-center">
          <i class="ri-check-line mr-2"></i>
          Review submitted successfully!
        </div>
      </div>
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
    
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            See what our amazing customers have to say about their Brew Haven experience
          </p>
        </div>
      </section>

      {/* Reviews Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-amber-600 mb-2">250+</div>
              <p className="text-gray-600 mb-2">Happy Customers</p>
              <p className="text-sm text-gray-500">Reviews this month</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <p className="text-gray-600 mb-2">Satisfaction Rate</p>
              <p className="text-sm text-gray-500">Would recommend us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in-up">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`${i < review.rating ? 'ri-star-fill text-amber-400' : 'ri-star-line text-gray-300'} text-lg`}></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-3 hover:bg-amber-300 transition-colors duration-300">
                      <span className="font-semibold text-amber-800 text-sm">{review.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Share Your Experience</h2>
            
            <form id="review-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`text-2xl hover:scale-110 transition-all duration-300 ${
                          star <= newReview.rating ? 'text-amber-400' : 'text-gray-300'
                        }`}
                      >
                        <i className="ri-star-fill"></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                  placeholder="Tell us about your experience at Brew Haven..."
                  maxLength={500}
                  required
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {newReview.comment.length}/500 characters
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
