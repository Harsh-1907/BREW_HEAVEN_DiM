
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center animate-fade-in"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Artisan%20coffee%20roasting%20facility%20with%20vintage%20roasting%20equipment%2C%20coffee%20beans%20in%20burlap%20sacks%2C%20warm%20industrial%20lighting%2C%20coffee%20roasting%20process%2C%20rustic%20wooden%20beams%2C%20authentic%20coffee%20craftsmanship%20atmosphere&width=1920&height=600&seq=brew-haven-about-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl font-bold text-white mb-4">About Brew Haven</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Where passion meets perfection in every cup
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Brew Haven began as a dream shared by two coffee enthusiasts who traveled the world in search of the perfect cup. After years of exploring coffee plantations from Ethiopia to Colombia, we returned home with a mission: to bring exceptional, ethically-sourced coffee to our community.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2018, our coffee shop has grown from a small neighborhood gathering place to a beloved community hub where quality, sustainability, and human connection come together.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every bean tells a story, and we're honored to share those stories with you, one cup at a time.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <img 
                src="https://readdy.ai/api/search-image?query=Coffee%20shop%20founders%20working%20together%2C%20man%20and%20woman%20examining%20coffee%20beans%2C%20coffee%20cupping%20session%2C%20professional%20coffee%20tasting%2C%20warm%20natural%20lighting%2C%20authentic%20coffee%20expertise%2C%20passionate%20coffee%20entrepreneurs&width=600&height=400&seq=brew-haven-founders&orientation=landscape"
                alt="Brew Haven Founders"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-amber-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to environmental stewardship through ethical sourcing, minimal waste practices, and supporting regenerative agriculture.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-amber-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                From bean selection to brewing technique, we never compromise on quality. Every cup represents our dedication to coffee perfection.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-amber-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of community. Our space is designed to bring people together, foster connections, and support local initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your perfect cup</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="mb-6 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20coffee%20shop%20owner%2C%20middle-aged%20man%20with%20beard%2C%20wearing%20apron%2C%20holding%20coffee%20cup%2C%20warm%20smile%2C%20coffee%20shop%20background%2C%20natural%20lighting%2C%20friendly%20approachable%20demeanor&width=300&height=400&seq=alex-founder-portrait&orientation=portrait"
                  alt="Alex Rodriguez"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Alex Rodriguez</h3>
              <p className="text-amber-600 font-medium mb-4">Co-Founder & Head Roaster</p>
              <p className="text-gray-600 leading-relaxed">
                With 15 years of coffee expertise, Alex oversees our roasting process and maintains relationships with our farming partners worldwide.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="mb-6 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20female%20barista%20with%20long%20dark%20hair%2C%20bright%20smile%2C%20wearing%20coffee%20shop%20uniform%2C%20creating%20latte%20art%2C%20coffee%20equipment%20in%20background%2C%20natural%20lighting%2C%20skilled%20coffee%20artisan&width=300&height=400&seq=maria-cofounder-portrait&orientation=portrait"
                  alt="Maria Santos"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maria Santos</h3>
              <p className="text-amber-600 font-medium mb-4">Co-Founder & Operations Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Maria brings her business acumen and passion for hospitality to create the welcoming atmosphere that makes Brew Haven feel like home.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="mb-6 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20professional%20barista%20with%20short%20hair%2C%20concentrated%20expression%2C%20preparing%20espresso%20shot%2C%20precise%20coffee%20brewing%20technique%2C%20modern%20coffee%20equipment%2C%20artistic%20coffee%20preparation&width=300&height=400&seq=david-barista-portrait&orientation=portrait"
                  alt="David Kim"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">David Kim</h3>
              <p className="text-amber-600 font-medium mb-4">Master Barista</p>
              <p className="text-gray-600 leading-relaxed">
                David's precision and artistry behind the espresso machine ensures every drink is crafted to perfection. He also leads our barista training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sourcing */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img 
                src="https://readdy.ai/api/search-image?query=Coffee%20plantation%20in%20mountainous%20region%2C%20coffee%20farmers%20harvesting%20ripe%20red%20coffee%20cherries%2C%20terraced%20coffee%20fields%2C%20lush%20green%20landscape%2C%20sustainable%20farming%20practices%2C%20traditional%20coffee%20cultivation&width=600&height=400&seq=coffee-plantation-sourcing&orientation=landscape"
                alt="Coffee Plantation"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ethical Sourcing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We work directly with small-scale farmers and cooperatives who share our commitment to quality and sustainability. Our partnerships ensure fair compensation for growers while preserving traditional farming methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-line text-amber-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fair Trade Certified</h4>
                    <p className="text-gray-600">Ensuring fair wages and working conditions for all farmers in our supply chain.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-line text-amber-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Organic Practices</h4>
                    <p className="text-gray-600">Supporting farming methods that protect soil health and biodiversity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-line text-amber-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Direct Relationships</h4>
                    <p className="text-gray-600">Building long-term partnerships that benefit farmers and improve quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
