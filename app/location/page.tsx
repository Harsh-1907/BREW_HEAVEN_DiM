
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Location() {
  const hours = [
    { day: 'Monday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '6:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '7:00 AM - 7:00 PM' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl font-bold mb-6">Visit Us</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Find us in the heart of Bean City. We can't wait to serve you the perfect cup!
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682156800286!2d-73.98799492414671!3d40.75666603493544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1703180000000!5m2!1sen!2sus"
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

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-map-pin-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
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
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-BREW</p>
                    <p className="text-gray-600">(555) 123-2739</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-mail-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@brewhaven.com</p>
                    <p className="text-gray-600">catering@brewhaven.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                    <i className="ri-wifi-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WiFi</h3>
                    <p className="text-gray-600">Free high-speed WiFi available</p>
                    <p className="text-gray-600 text-sm">Password: BrewHaven2024</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Getting Here</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center space-x-2 hover:text-amber-600 hover:translate-x-1 transition-all duration-300">
                    <i className="ri-car-line w-5 h-5 flex items-center justify-center"></i>
                    <span>Street parking available on Coffee Street</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-amber-600 hover:translate-x-1 transition-all duration-300">
                    <i className="ri-parking-line w-5 h-5 flex items-center justify-center"></i>
                    <span>Public parking garage 2 blocks away</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-amber-600 hover:translate-x-1 transition-all duration-300">
                    <i className="ri-bus-line w-5 h-5 flex items-center justify-center"></i>
                    <span>Bus routes 15, 22, and 45 stop nearby</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-amber-600 hover:translate-x-1 transition-all duration-300">
                    <i className="ri-subway-line w-5 h-5 flex items-center justify-center"></i>
                    <span>Metro station: Bean City Central (3 blocks)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hours of Operation</h2>
            <p className="text-xl text-gray-600">We're here to serve you fresh coffee throughout the week</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="p-8">
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 hover:bg-amber-50 hover:translate-x-2 transition-all duration-300 rounded-lg px-4" style={{animationDelay: `${index * 0.1}s`}}>
                    <span className="font-medium text-gray-900">{item.day}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors duration-300">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-amber-600 text-xl mt-1 animate-bounce"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Holiday Hours</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We observe modified hours on major holidays. Please check our social media or call ahead during holiday periods for current hours. We're closed on Christmas Day and New Year's Day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Everything you need for a comfortable visit</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                <i className="ri-wifi-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free WiFi</h3>
              <p className="text-gray-600 text-sm">High-speed internet perfect for work or study</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 hover:scale-110 transition-all duration-300">
                <i className="ri-plant-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Outdoor Seating</h3>
              <p className="text-gray-600 text-sm">Enjoy your coffee in our garden patio area</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 hover:scale-110 transition-all duration-300">
                <i className="ri-wheelchair-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accessible</h3>
              <p className="text-gray-600 text-sm">Fully wheelchair accessible with ramp entrance</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-amber-200 hover:scale-110 transition-all duration-300">
                <i className="ri-group-line text-amber-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Private Events</h3>
              <p className="text-gray-600 text-sm">Book our space for meetings and gatherings</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}