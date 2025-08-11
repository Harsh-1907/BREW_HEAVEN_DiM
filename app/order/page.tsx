
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Order() {
  const [orderType, setOrderType] = useState('pickup');
  const [cart, setCart] = useState<any[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const menuItems = [
    {
      id: 1001,
      name: 'Signature Espresso',
      price: 3.50,
      category: 'Coffee',
      image: 'https://readdy.ai/api/search-image?query=Premium%20double%20espresso%20shot%20with%20rich%20golden%20crema%2C%20served%20in%20small%20porcelain%20cup%2C%20whole%20coffee%20beans%20scattered%20on%20dark%20slate%20surface%2C%20professional%20coffee%20photography%2C%20dramatic%20side%20lighting&width=200&height=150&seq=espresso-order-page&orientation=landscape'
    },
    {
      id: 1002,
      name: 'Artisan Latte',
      price: 4.75,
      category: 'Coffee',
      image: 'https://readdy.ai/api/search-image?query=Skillfully%20crafted%20latte%20with%20tulip%20foam%20art%20in%20white%20ceramic%20mug%2C%20steamed%20milk%20texture%20visible%2C%20barista%20workspace%20background%2C%20morning%20sunlight%2C%20artisan%20coffee%20making%20process&width=200&height=150&seq=latte-order-page&orientation=landscape'
    },
    {
      id: 1003,
      name: 'Cappuccino Deluxe',
      price: 4.25,
      category: 'Coffee',
      image: 'https://readdy.ai/api/search-image?query=Perfect%20cappuccino%20with%20thick%20milk%20foam%20layer%2C%20cocoa%20powder%20dusting%2C%20traditional%20Italian%20cup%20and%20saucer%2C%20coffee%20beans%20around%20cup%2C%20authentic%20European%20cafe%20setting&width=200&height=150&seq=cappuccino-order-page&orientation=landscape'
    },
    {
      id: 1004,
      name: 'Cold Brew Special',
      price: 3.95,
      category: 'Coffee',
      image: 'https://readdy.ai/api/search-image?query=Cold%20brew%20coffee%20in%20tall%20glass%20with%20large%20ice%20cubes%2C%20condensation%20droplets%20on%20glass%2C%20coffee%20beans%20on%20ice%2C%20summer%20beverage%20styling%2C%20bright%20refreshing%20presentation&width=200&height=150&seq=coldbrew-order-page&orientation=landscape'
    },
    {
      id: 1005,
      name: 'Fresh Croissant',
      price: 2.95,
      category: 'Pastry',
      image: 'https://readdy.ai/api/search-image?query=Freshly%20baked%20croissant%20with%20visible%20flaky%20layers%2C%20golden%20brown%20color%2C%20butter%20and%20strawberry%20preserves%20on%20side%2C%20artisan%20bakery%20display%2C%20warm%20morning%20lighting&width=200&height=150&seq=croissant-order-page&orientation=landscape'
    },
    {
      id: 1006,
      name: 'Blueberry Muffin',
      price: 3.25,
      category: 'Pastry',
      image: 'https://readdy.ai/api/search-image?query=Homestyle%20blueberry%20muffin%20with%20plump%20berries%20bursting%20from%20top%2C%20golden%20dome%2C%20paper%20wrapper%2C%20fresh%20blueberries%20scattered%20around%2C%20cozy%20bakery%20atmosphere&width=200&height=150&seq=muffin-order-page&orientation=landscape'
    },
    {
      id: 1007,
      name: 'Almond Croissant',
      price: 3.45,
      category: 'Pastry',
      image: 'https://readdy.ai/api/search-image?query=Almond%20croissant%20with%20sliced%20almonds%20on%20top%2C%20powdered%20sugar%20dusting%2C%20almond%20cream%20filling%20visible%2C%20French%20pastry%20presentation%20on%20ceramic%20plate&width=200&height=150&seq=almond-croissant-order&orientation=landscape'
    },
    {
      id: 1008,
      name: 'Chai Tea Latte',
      price: 4.50,
      category: 'Tea',
      image: 'https://readdy.ai/api/search-image?query=Aromatic%20chai%20tea%20latte%20with%20foam%2C%20cinnamon%20stick%20stirrer%2C%20whole%20spices%20like%20cardamom%20and%20star%20anise%20around%20cup%2C%20warm%20earth%20tones%2C%20cozy%20tea%20presentation&width=200&height=150&seq=chai-latte-order&orientation=landscape'
    }
  ];

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
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const total = getTotalPrice().toFixed(2);
    window.location.href = `/checkout?total=${total}`;
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-4xl font-bold mb-4">Order Online</h1>
          <p className="text-xl text-amber-100">
            Skip the line and order your favorites for pickup or delivery
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            {/* Order Type Selection */}
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Type</h2>
              <div className="flex space-x-4">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform ${
                    orderType === 'pickup'
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <i className="ri-store-line mr-2"></i>
                  Pickup
                </button>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform ${
                    orderType === 'delivery'
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <i className="ri-truck-line mr-2"></i>
                  Delivery
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Items</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.map((item, index) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="overflow-hidden rounded-t-xl">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover object-top hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <span className="text-lg font-bold text-amber-600">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{item.category}</p>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-amber-600 text-white py-2 rounded-lg font-medium hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer transform"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-xl shadow-lg border sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
                            >
                              <i className="ri-subtract-line text-xs"></i>
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
                            >
                              <i className="ri-add-line text-xs"></i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-amber-600">${getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Customer Information Form */}
                <form id="order-form" onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Customer Information</h3>
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  
                  {orderType === 'delivery' && (
                    <textarea
                      name="address"
                      placeholder="Delivery Address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      maxLength={500}
                      required
                    ></textarea>
                  )}
                  
                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transform"
                  >
                    Place Order - ${getTotalPrice().toFixed(2)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
