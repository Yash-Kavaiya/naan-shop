import React, { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, Phone, Clock, User, ChefHat, DollarSign, Package, Star, Utensils, Coffee, Beef } from 'lucide-react';

const NaanStopWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Menu data based on the images
  const menuData = {
    thali: [
      { name: 'Paneer Thali', price: 180, desc: 'Paneer bhaji, masala dal fry, rice, sweet roti, roti-2, phulka-4' },
      { name: 'Veg Thali', price: 140, desc: 'Mix veg, dal fry, rice, sweet roti, roti-2, phulka-4' },
      { name: 'Punjabi Thali', price: 160, desc: 'Kaahai paneer, chole, mix veg, sweet roti' },
      { name: 'Light Sweet Thali', price: 150, desc: 'Khati paneer, plain dal, makhan dal, rice' },
      { name: 'Maharashtrian Thali', price: 150, desc: 'Bhev bhaji, dal tadka, rice, papad' },
      { name: 'Dry Veg Thali', price: 140, desc: 'Green aloo, chole, mix veg sweet roti' },
      { name: 'Special Thali', price: 170, desc: 'Gopi paneer sabji, jeera rice, papad' }
    ],
    miniThali: [
      { name: 'Paneer Mini Thali', price: 130, desc: 'Paneer bhaji mix, khichdi rice, phulka-3' },
      { name: 'Veg Mini Thali', price: 120, desc: 'Mix veg, dal fry, khichdi rice, phulka-3' },
      { name: 'Punjabi Mini Thali', price: 130, desc: 'Khadhi paneer dal fry, rice, roti, phulka-3' },
      { name: 'Light Sweet Mini Thali', price: 130, desc: 'Khati paneer, plain dal roti, rice, roti-2, phulka-3' },
      { name: 'Maharashtrian Mini Thali', price: 130, desc: 'Shev bhaji, dal fry, rice, roti-2, phulka-3' },
      { name: 'Dry Veg Mini Thali', price: 130, desc: 'Oleera aloo, chole, rice, roti-2, phulka-3' }
    ],
    paneer: [
      { name: 'Kadai Paneer', price: 180 },
      { name: 'Paneer Tikka Masala', price: 180 },
      { name: 'Mutter Paneer', price: 180 },
      { name: 'Paneer Kolhapuri', price: 180 },
      { name: 'Paneer Lababdar', price: 180 },
      { name: 'Paneer Maratha', price: 180 },
      { name: 'Palak Paneer', price: 180 },
      { name: 'Paneer Makhan', price: 190 },
      { name: 'Paneer Do Pyaza', price: 190 },
      { name: 'Mushroom Paneer', price: 190 },
      { name: 'Kaju Paneer Masala', price: 220 },
      { name: 'Paneer Bhurji Dry', price: 190 },
      { name: 'Paneer Bhurji Curry', price: 190 },
      { name: 'Paneer Butter Masala', price: 190 },
      { name: 'Shahi Paneer', price: 190 }
    ],
    veg: [
      { name: 'Mix Veg', price: 160 },
      { name: 'Veg Kolhapuri', price: 160 },
      { name: 'Veg Maratha', price: 160 },
      { name: 'Aloo Mutter', price: 160 },
      { name: 'Aloo Palak', price: 160 },
      { name: 'Jeera Aloo', price: 130 },
      { name: 'Bhindi Masala', price: 160 },
      { name: 'Bhev Bhaji', price: 160 },
      { name: 'Bhev Tomato', price: 160 },
      { name: 'Kaju Masala', price: 190 },
      { name: 'Aloo Gobi', price: 160 },
      { name: 'Veg Kofta', price: 140 },
      { name: 'Lasuni Palak', price: 110 },
      { name: 'Kadhi Pakoda', price: 170 },
      { name: 'Tawa Veg', price: 160 },
      { name: 'Mushroom Masala', price: 160 }
    ],
    dal: [
      { name: 'Dal Fry', price: 120 },
      { name: 'Dal Tadka', price: 130 },
      { name: 'Dal Kolhapuri', price: 130 },
      { name: 'Dal Makhani', price: 130 },
      { name: 'Osadu', price: 160 },
      { name: 'Rajma', price: 130 }
    ],
    breads: [
      { name: 'Plain Tandoor Roti', price: 20 },
      { name: 'Butter Tandoor Roti', price: 25 },
      { name: 'Plain Naan', price: 30 },
      { name: 'Butter Naan', price: 40 },
      { name: 'Garlic Naan', price: 50 },
      { name: 'Cheese Garlic Naan', price: 70 },
      { name: 'Laccha Paratha', price: 60 }
    ],
    rice: [
      { name: 'Steam Rice', price: 80 },
      { name: 'Jeera Rice', price: 100 },
      { name: 'Veg Pulao', price: 120 },
      { name: 'Paneer Pulao', price: 140 },
      { name: 'Veg Biryani', price: 130 },
      { name: 'Paneer Biryani', price: 150 }
    ],
    kulcha: [
      { name: 'Aloo Pyaz Kulcha', price: 110 },
      { name: 'Aloo Kulcha', price: 110 },
      { name: 'Mix Veg Kulcha', price: 110 },
      { name: 'Paneer Kulcha', price: 130 },
      { name: 'Chur Chur Naan', price: 110 },
      { name: 'Gobi Kulcha', price: 110 }
    ],
    choleBhature: [
      { name: 'Chole Bhature', price: 100 },
      { name: 'Paneer Chole Bhature', price: 120 }
    ],
    drinks: [
      { name: 'Pepsi', price: 15 },
      { name: '7 Up', price: 15 },
      { name: 'Mirinda', price: 15 }
    ]
  };

  const addToCart = (item, category) => {
    const cartItem = { ...item, category, id: Date.now() + Math.random() };
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    
    const order = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price, 0),
      status: 'pending',
      timestamp: new Date().toLocaleString()
    };
    
    setOrders([...orders, order]);
    setCart([]);
    alert('Order placed successfully!');
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const MenuSection = ({ title, items, category, icon: Icon }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2 text-orange-600" />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-800">{item.name}</h4>
              <span className="text-lg font-bold text-orange-600">₹{item.price}</span>
            </div>
            {item.desc && (
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
            )}
            <button
              onClick={() => addToCart(item, category)}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">NAAN STOP</h1>
          <p className="text-xl mb-2">PURE VEG</p>
          <p className="text-lg mb-6">"Taste the Rich Heritage of North Indian Flavors"</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Balaji food court, near shree in hotel Hinjewadi phase-1</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>7507687563 / 8788619308</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pure Vegetarian</h3>
              <p className="text-gray-600">100% vegetarian dishes prepared with fresh ingredients</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast and efficient service for your convenience</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Taste</h3>
              <p className="text-gray-600">Traditional North Indian flavors and recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MenuPage = () => (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Menu</h2>
        
        <MenuSection title="Thali Stop" items={menuData.thali} category="thali" icon={Utensils} />
        <MenuSection title="Mini Thali Stop" items={menuData.miniThali} category="miniThali" icon={Coffee} />
        <MenuSection title="Paneer Specialties" items={menuData.paneer} category="paneer" icon={Beef} />
        <MenuSection title="Vegetable Dishes" items={menuData.veg} category="veg" icon={Utensils} />
        <MenuSection title="Dal Stop" items={menuData.dal} category="dal" icon={Coffee} />
        <MenuSection title="Breads" items={menuData.breads} category="breads" icon={Beef} />
        <MenuSection title="Rice & Biryani" items={menuData.rice} category="rice" icon={Utensils} />
        <MenuSection title="Kulcha Stop" items={menuData.kulcha} category="kulcha" icon={Coffee} />
        <MenuSection title="Chole Bhature" items={menuData.choleBhature} category="choleBhature" icon={Beef} />
        <MenuSection title="Cold Drinks" items={menuData.drinks} category="drinks" icon={Coffee} />
      </div>
    </div>
  );

  const CartPage = () => (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-3 border-b">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold mr-4">₹{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</span>
                </div>
                <button
                  onClick={placeOrder}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <button
            onClick={() => setIsAdmin(false)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Exit Admin
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <div className="flex items-center">
              <Package className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Total Orders</p>
                <p className="text-2xl font-bold">{orders.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg">
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Total Revenue</p>
                <p className="text-2xl font-bold">₹{orders.reduce((sum, order) => sum + order.total, 0)}</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg">
            <div className="flex items-center">
              <Clock className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Pending Orders</p>
                <p className="text-2xl font-bold">{orders.filter(o => o.status === 'pending').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg">
            <div className="flex items-center">
              <Star className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Completed</p>
                <p className="text-2xl font-bold">{orders.filter(o => o.status === 'completed').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Recent Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{order.id.toString().slice(-6)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {order.items.map(item => item.name).join(', ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'preparing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'ready' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className="text-sm border rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="preparing">Preparing</option>
                        <option value="ready">Ready</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className="text-2xl font-bold text-orange-600 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              NAAN STOP
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`hover:text-orange-600 ${currentPage === 'home' ? 'text-orange-600' : 'text-gray-700'}`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('menu')}
                className={`hover:text-orange-600 ${currentPage === 'menu' ? 'text-orange-600' : 'text-gray-700'}`}
              >
                Menu
              </button>
              <button
                onClick={() => setCurrentPage('cart')}
                className={`hover:text-orange-600 flex items-center ${currentPage === 'cart' ? 'text-orange-600' : 'text-gray-700'}`}
              >
                <ShoppingCart className="w-5 h-5 mr-1" />
                Cart ({cart.length})
              </button>
              {!isAdmin ? (
                <button
                  onClick={() => setIsAdmin(true)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Admin
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPage('admin')}
                  className={`hover:text-orange-600 flex items-center ${currentPage === 'admin' ? 'text-orange-600' : 'text-gray-700'}`}
                >
                  <ChefHat className="w-5 h-5 mr-1" />
                  Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {isAdmin && currentPage === 'admin' ? (
        <AdminDashboard />
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'menu' && <MenuPage />}
          {currentPage === 'cart' && <CartPage />}
        </>
      )}
    </div>
  );
};

export default NaanStopWebsite;