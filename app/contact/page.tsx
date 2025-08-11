
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <i className="ri-check-line text-green-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    maxLength={500}
                    required
                  ></textarea>
                  <div className="text-right text-sm text-gray-500">
                    {formData.message.length}/500 characters
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transform flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you have questions about our coffee, want to book a private event, or just want to say hello, we're here to help. Visit us in person or reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-map-pin-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Our Shop</h3>
                    <p className="text-gray-600">
                      123 Coffee Street<br />
                      Bean City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-phone-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      (555) 123-BREW<br />
                      Mon-Fri: 6am-8pm<br />
                      Weekends: 7am-9pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-mail-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      hello@brewhaven.com<br />
                      catering@brewhaven.com<br />
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-time-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Thursday: 6:00 AM - 8:00 PM</div>
                      <div>Friday: 6:00 AM - 9:00 PM</div>
                      <div>Saturday: 7:00 AM - 9:00 PM</div>
                      <div>Sunday: 7:00 AM - 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <div className="w-full text-left p-3 bg-white rounded-lg hover:bg-amber-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                       onClick={() => {
                         setFormData(prev => ({ ...prev, subject: 'Private Event Booking' }));
                         document.querySelector('input[name="subject"]')?.focus();
                       }}>
                    <i className="ri-calendar-line text-amber-600 mr-3"></i>
                    Book a Private Event
                  </div>
                  <div className="w-full text-left p-3 bg-white rounded-lg hover:bg-amber-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                       onClick={() => {
                         setFormData(prev => ({ ...prev, subject: 'Catering Inquiry' }));
                         document.querySelector('input[name="subject"]')?.focus();
                       }}>
                    <i className="ri-truck-line text-amber-600 mr-3"></i>
                    Catering Inquiries
                  </div>
                  <div className="w-full text-left p-3 bg-white rounded-lg hover:bg-amber-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                       onClick={() => {
                         setFormData(prev => ({ ...prev, subject: 'Corporate Gifts' }));
                         document.querySelector('input[name="subject"]')?.focus();
                       }}>
                    <i className="ri-gift-line text-amber-600 mr-3"></i>
                    Corporate Gifts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Bean City</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682156800286!2d-73.98799492414671!3d40.75666603493544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1703180000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew Haven Coffee Shop Location"
              className="hover:brightness-110 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
