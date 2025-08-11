
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [cart, setCart] = useState<any[]>([]);

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: 'ri-cup-line' },
    { id: 'teas', name: 'Teas', icon: 'ri-leaf-line' },
    { id: 'pastries', name: 'Pastries', icon: 'ri-cake-2-line' },
    { id: 'sandwiches', name: 'Sandwiches', icon: 'ri-restaurant-line' },
    { id: 'seasonal', name: 'Seasonal', icon: 'ri-star-line' }
  ];

  const menuItems = {
    coffee: [
      {
        id: 101,
        name: 'Signature Espresso',
        description: 'Rich, bold espresso with notes of dark chocolate and caramel',
        price: 3.50,
        image: 'https://readdy.ai/api/search-image?query=Double%20espresso%20shot%20in%20traditional%20ceramic%20cup%20with%20golden%20crema%2C%20roasted%20coffee%20beans%20on%20dark%20wood%20surface%2C%20vintage%20espresso%20machine%20in%20background%2C%20warm%20ambient%20lighting%2C%20professional%20coffee%20shop%20setting&width=300&height=200&seq=signature-espresso-menu&orientation=landscape',
        featured: true
      },
      {
        id: 102,
        name: 'Artisan Latte',
        description: 'Smooth espresso with velvety steamed milk and beautiful latte art',
        price: 4.75,
        image: 'https://readdy.ai/api/search-image?query=Perfect%20latte%20with%20rosetta%20foam%20art%20in%20white%20ceramic%20mug%2C%20steam%20rising%2C%20milk%20pitcher%20beside%20cup%2C%20marble%20countertop%2C%20natural%20daylight%2C%20artisan%20coffee%20craftsmanship&width=300&height=200&seq=artisan-latte-menu&orientation=landscape'
      },
      {
        id: 103,
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and milk foam',
        price: 4.25,
        image: 'https://readdy.ai/api/search-image?query=Classic%20cappuccino%20with%20thick%20foam%20layer%20and%20cocoa%20powder%20dusting%2C%20served%20in%20traditional%20cup%20and%20saucer%2C%20coffee%20beans%20scattered%20around%2C%20Italian%20cafe%20atmosphere&width=300&height=200&seq=cappuccino-classic-menu&orientation=landscape'
      },
      {
        id: 104,
        name: 'Americano',
        description: 'Bold espresso diluted with hot water for a clean, strong flavor',
        price: 3.25,
        image: 'https://readdy.ai/api/search-image?query=Black%20americano%20coffee%20in%20large%20ceramic%20mug%2C%20steam%20visible%2C%20dark%20roasted%20arabica%20beans%2C%20minimalist%20presentation%20on%20wooden%20table%2C%20coffee%20shop%20interior%20background&width=300&height=200&seq=americano-black-menu&orientation=landscape'
      },
      {
        id: 105,
        name: 'Mocha',
        description: 'Rich espresso with chocolate syrup, steamed milk, and whipped cream',
        price: 5.25,
        image: 'https://readdy.ai/api/search-image?query=Indulgent%20mocha%20with%20swirled%20whipped%20cream%20topping%2C%20chocolate%20syrup%20drizzle%2C%20served%20in%20tall%20glass%20mug%2C%20chocolate%20shavings%20garnish%2C%20cozy%20winter%20atmosphere&width=300&height=200&seq=chocolate-mocha-menu&orientation=landscape'
      },
      {
        id: 106,
        name: 'Cold Brew',
        description: 'Smooth, less acidic coffee steeped in cold water for 18 hours',
        price: 3.75,
        image: 'https://readdy.ai/api/search-image?query=Cold%20brew%20coffee%20in%20tall%20mason%20jar%20with%20ice%20cubes%2C%20metal%20straw%2C%20coffee%20beans%20on%20ice%2C%20summer%20drink%20presentation%2C%20bright%20natural%20lighting%2C%20refreshing%20beverage%20styling&width=300&height=200&seq=cold-brew-iced-menu&orientation=landscape'
      }
    ],
    teas: [
      {
        id: 201,
        name: 'Earl Grey Supreme',
        description: 'Classic bergamot tea with lavender and cornflower petals',
        price: 3.25,
        image: 'https://readdy.ai/api/search-image?query=Premium%20earl%20grey%20tea%20in%20elegant%20porcelain%20teacup%2C%20loose%20tea%20leaves%20with%20bergamot%20and%20lavender%20flowers%2C%20silver%20teaspoon%2C%20refined%20afternoon%20tea%20setting&width=300&height=200&seq=earl-grey-premium-menu&orientation=landscape'
      },
      {
        id: 202,
        name: 'Chamomile Dreams',
        description: 'Calming chamomile flowers with honey and lemon',
        price: 3.50,
        image: 'https://readdy.ai/api/search-image?query=Chamomile%20herbal%20tea%20in%20clear%20glass%20teacup%2C%20dried%20chamomile%20flowers%2C%20honey%20dipper%20with%20honey%20jar%2C%20lemon%20slice%2C%20peaceful%20spa-like%20setting%2C%20soft%20natural%20lighting&width=300&height=200&seq=chamomile-herbal-menu&orientation=landscape'
      },
      {
        id: 203,
        name: 'Green Dragon Well',
        description: 'Premium Chinese green tea with delicate, fresh flavor',
        price: 4.00,
        image: 'https://readdy.ai/api/search-image?query=High-quality%20green%20tea%20in%20traditional%20Asian%20teacup%2C%20loose%20green%20tea%20leaves%20displayed%2C%20bamboo%20tea%20utensils%2C%20zen%20meditation%20atmosphere%2C%20minimalist%20Japanese%20tea%20ceremony%20style&width=300&height=200&seq=green-dragon-well-menu&orientation=landscape'
      },
      {
        id: 204,
        name: 'Chai Spice Latte',
        description: 'Traditional Indian spices with steamed milk and foam',
        price: 4.50,
        image: 'https://readdy.ai/api/search-image?query=Aromatic%20chai%20latte%20with%20milk%20foam%20art%2C%20cinnamon%20stick%20and%20star%20anise%20garnish%2C%20warm%20spices%20including%20cardamom%20and%20cloves%20scattered%20around%2C%20cozy%20Indian-inspired%20presentation&width=300&height=200&seq=chai-spice-latte-menu&orientation=landscape',
        featured: true
      }
    ],
    pastries: [
      {
        id: 301,
        name: 'Fresh Croissant',
        description: 'Buttery, flaky pastry baked fresh daily',
        price: 2.95,
        image: 'https://readdy.ai/api/search-image?query=Perfectly%20baked%20croissant%20with%20golden%20layers%20and%20flaky%20texture%2C%20butter%20curl%20and%20apricot%20jam%20on%20side%2C%20served%20on%20rustic%20ceramic%20plate%2C%20French%20bakery%20counter%20display&width=300&height=200&seq=fresh-croissant-bakery&orientation=landscape'
      },
      {
        id: 302,
        name: 'Blueberry Muffin',
        description: 'Moist muffin loaded with fresh blueberries and lemon zest',
        price: 3.25,
        image: 'https://readdy.ai/api/search-image?query=Homemade%20blueberry%20muffin%20with%20burst%20blueberries%20on%20top%2C%20golden%20brown%20color%2C%20paper%20liner%20partially%20removed%2C%20fresh%20blueberries%20scattered%2C%20bakery%20display%20case%20lighting&width=300&height=200&seq=blueberry-muffin-fresh&orientation=landscape',
        featured: true
      },
      {
        id: 303,
        name: 'Danish Pastry',
        description: 'Flaky pastry with sweet cream cheese filling',
        price: 3.75,
        image: 'https://readdy.ai/api/search-image?query=Artisanal%20danish%20pastry%20with%20cream%20cheese%20filling%2C%20glazed%20surface%2C%20delicate%20pastry%20layers%20visible%2C%20European%20bakery%20presentation%20on%20marble%20surface&width=300&height=200&seq=danish-pastry-cream&orientation=landscape'
      },
      {
        id: 304,
        name: 'Chocolate Chip Cookie',
        description: 'Warm, chewy cookie with premium chocolate chips',
        price: 2.50,
        image: 'https://readdy.ai/api/search-image?query=Freshly%20baked%20chocolate%20chip%20cookies%20on%20wire%20cooling%20rack%2C%20melted%20chocolate%20chips%20visible%2C%20golden%20edges%2C%20homemade%20bakery%20appearance%2C%20warm%20kitchen%20lighting&width=300&height=200&seq=chocolate-chip-cookies&orientation=landscape'
      }
    ],
    sandwiches: [
      {
        id: 401,
        name: 'Grilled Panini',
        description: 'Turkey, swiss cheese, tomato, and pesto on sourdough',
        price: 8.95,
        image: 'https://readdy.ai/api/search-image?query=Grilled%20panini%20sandwich%20cut%20diagonally%20showing%20layers%20of%20turkey%2C%20melted%20swiss%20cheese%2C%20tomatoes%20and%20pesto%2C%20grill%20marks%20visible%2C%20served%20on%20wooden%20cutting%20board%20with%20side%20salad&width=300&height=200&seq=grilled-panini-turkey&orientation=landscape'
      },
      {
        id: 402,
        name: 'Avocado Toast',
        description: 'Smashed avocado on multigrain bread with everything seasoning',
        price: 7.50,
        image: 'https://readdy.ai/api/search-image?query=Gourmet%20avocado%20toast%20on%20artisan%20multigrain%20bread%2C%20perfectly%20mashed%20avocado%20with%20everything%20bagel%20seasoning%2C%20cherry%20tomatoes%2C%20microgreens%20garnish%2C%20healthy%20breakfast%20presentation&width=300&height=200&seq=avocado-toast-healthy&orientation=landscape',
        featured: true
      },
      {
        id: 403,
        name: 'Classic BLT',
        description: 'Crispy bacon, lettuce, and tomato on toasted sourdough',
        price: 8.25,
        image: 'https://readdy.ai/api/search-image?query=Traditional%20BLT%20sandwich%20with%20crispy%20bacon%20strips%2C%20fresh%20lettuce%20leaves%2C%20ripe%20tomato%20slices%2C%20toasted%20sourdough%20bread%2C%20classic%20diner%20presentation%20on%20white%20plate&width=300&height=200&seq=classic-blt-sandwich&orientation=landscape'
      }
    ],
    seasonal: [
      {
        id: 501,
        name: 'Pumpkin Spice Latte',
        description: 'Fall spices with pumpkin and steamed milk, topped with whipped cream',
        price: 5.50,
        image: 'https://readdy.ai/api/search-image?query=Seasonal%20pumpkin%20spice%20latte%20with%20whipped%20cream%20and%20cinnamon%20dusting%2C%20mini%20pumpkins%20and%20autumn%20leaves%20decoration%2C%20cozy%20fall%20atmosphere%2C%20warm%20orange%20lighting&width=300&height=200&seq=pumpkin-spice-latte-fall&orientation=landscape',
        featured: true
      },
      {
        id: 502,
        name: 'Peppermint Mocha',
        description: 'Rich chocolate and refreshing peppermint with holiday cheer',
        price: 5.75,
        image: 'https://readdy.ai/api/search-image?query=Festive%20peppermint%20mocha%20with%20whipped%20cream%20topping%2C%20candy%20cane%20stirrer%2C%20chocolate%20drizzle%2C%20Christmas%20decorations%20in%20background%2C%20holiday%20winter%20beverage%20presentation&width=300&height=200&seq=peppermint-mocha-holiday&orientation=landscape'
      },
      {
        id: 503,
        name: 'Iced Summer Berry',
        description: 'Cold brew coffee with fresh berry syrup and cream',
        price: 4.95,
        image: 'https://readdy.ai/api/search-image?query=Refreshing%20iced%20berry%20coffee%20drink%20with%20mixed%20fresh%20berries%2C%20ice%20cubes%2C%20cream%20swirl%2C%20tall%20glass%2C%20summer%20patio%20setting%2C%20bright%20colorful%20presentation&width=300&height=200&seq=iced-summer-berry&orientation=landscape'
      }
    ]
  };

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    // Show success feedback
    const button = document.activeElement;
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Added!';
      button.classList.add('bg-green-600');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-600');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee, artisanal teas, fresh pastries, and delicious food
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 bg-white border-b z-40 py-4 animate-slide-down">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-2 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform animate-fade-in-up ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <i className={`${category.icon} text-lg`}></i>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up group" style={{animationDelay: `${index * 0.1}s`}}>
                {item.featured && (
                  <div className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 inline-block animate-pulse">
                    FEATURED
                  </div>
                )}
                <div className="overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-amber-600 animate-bounce">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-amber-600 text-white py-3 rounded-full font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Place your order online for quick pickup or delivery to your location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/order'}
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform"
            >
              Order for Pickup ({cart.reduce((total, item) => total + item.quantity, 0)} items)
            </button>
            <button 
              onClick={() => window.location.href = '/order'}
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap transform"
            >
              Order for Delivery
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
