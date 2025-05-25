import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, MapPin, Phone, Clock, User, ChefHat, DollarSign, Package, Star, Utensils, Coffee, Beef, Lock, Timer, CheckCircle, Search, Filter, Calendar, BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';

// Move components outside to prevent re-definition on every render
const AdminLogin = ({ showAdminLogin, setShowAdminLogin, adminCredentials, setAdminCredentials, setIsAdmin, setCurrentPage }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'password') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setCurrentPage('admin');
      setAdminCredentials({ username: '', password: '' });
    } else {
      alert('Invalid credentials! Please try again.');
    }
  }, [adminCredentials, setIsAdmin, setShowAdminLogin, setCurrentPage, setAdminCredentials]);

  const handleClose = useCallback(() => {
    setShowAdminLogin(false);
    setAdminCredentials({ username: '', password: '' });
  }, [setShowAdminLogin, setAdminCredentials]);

  if (!showAdminLogin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Admin Login</h3>
          <p className="text-gray-600">Please enter your credentials</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={adminCredentials.username}
                onChange={(e) => setAdminCredentials(prev => ({...prev, username: e.target.value}))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter username"
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={adminCredentials.password}
                onChange={(e) => setAdminCredentials(prev => ({...prev, password: e.target.value}))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            Demo Credentials: admin / password
          </p>
        </div>
      </div>
    </div>
  );
};

const ChefLogin = ({ showChefLogin, setShowChefLogin, adminCredentials, setAdminCredentials, setIsChef, setCurrentPage }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (adminCredentials.username === 'chef' && adminCredentials.password === 'kitchen') {
      setIsChef(true);
      setShowChefLogin(false);
      setCurrentPage('chef');
      setAdminCredentials({ username: '', password: '' });
    } else {
      alert('Invalid credentials! Please try again.');
    }
  }, [adminCredentials, setIsChef, setShowChefLogin, setCurrentPage, setAdminCredentials]);

  const handleClose = useCallback(() => {
    setShowChefLogin(false);
    setAdminCredentials({ username: '', password: '' });
  }, [setShowChefLogin, setAdminCredentials]);

  if (!showChefLogin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ChefHat className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Chef Login</h3>
          <p className="text-gray-600">Kitchen Access Portal</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={adminCredentials.username}
                onChange={(e) => setAdminCredentials(prev => ({...prev, username: e.target.value}))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={adminCredentials.password}
                onChange={(e) => setAdminCredentials(prev => ({...prev, password: e.target.value}))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enter Kitchen
            </button>
          </div>
        </form>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            Demo Credentials: chef / kitchen
          </p>
        </div>
      </div>
    </div>
  );
};

const CustomerDetailsForm = ({ showOrderForm, setShowOrderForm, customerDetails, setCustomerDetails, cart, placeOrderWithDetails }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (customerDetails.name.trim() && customerDetails.phone.trim()) {
      placeOrderWithDetails();
    }
  }, [customerDetails, placeOrderWithDetails]);

  const handleClose = useCallback(() => {
    setShowOrderForm(false);
    setCustomerDetails({ name: '', phone: '' });
  }, [setShowOrderForm, setCustomerDetails]);

  if (!showOrderForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Almost Done! 🍽️</h3>
        <p className="text-gray-600 mb-6 text-center">
          Please provide your details to confirm your delicious order
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                value={customerDetails.name}
                onChange={(e) => setCustomerDetails(prev => ({...prev, name: e.target.value}))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                value={customerDetails.phone}
                onChange={(e) => setCustomerDetails(prev => ({...prev, phone: e.target.value}))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your phone number"
                required
                autoComplete="tel"
              />
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Order Total:</span>
              <span className="text-xl font-bold text-orange-600">
                ₹{cart.reduce((sum, item) => sum + item.price, 0)}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {cart.length} item{cart.length !== 1 ? 's' : ''} in your order
            </p>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Cart
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Confirm Order 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Timer component for order tracking
const OrderTimer = ({ order, setCurrentOrder }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (order && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [order, timeLeft]);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleClose = useCallback(() => {
    setCurrentOrder(null);
  }, [setCurrentOrder]);

  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        {!isCompleted ? (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Timer className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Thank you <span className="font-semibold text-orange-600">{order.customerName}</span>! 
              Your delicious meal is being prepared with love.
            </p>
            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">Estimated preparation time:</p>
              <div className="text-3xl font-bold text-orange-600 mb-2">{formatTime(timeLeft)}</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((600 - timeLeft) / 600) * 100}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Order ID: #{order.id.toString().slice(-6)}
            </p>
            <p className="text-sm text-gray-600">
              We'll have your fresh, hot meal ready soon. Thank you for choosing Naan Stop! 🍽️
            </p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Ready!</h3>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-orange-600">{order.customerName}</span>, 
              your delicious meal is ready for pickup! 
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Please visit our counter with Order ID: #{order.id.toString().slice(-6)}
            </p>
            <p className="text-lg font-semibold text-green-600">
              Enjoy your meal! 🎉
            </p>
          </>
        )}
        <button
          onClick={handleClose}
          className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NaanStopWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChef, setIsChef] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showChefLogin, setShowChefLogin] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({ name: '', phone: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Sample data for charts
  const generateChartData = useCallback(() => {
    const today = new Date();
    const chartData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dayOrders = orders.filter(order => {
        const orderDate = new Date(order.timestamp);
        return orderDate.toDateString() === date.toDateString();
      });
      chartData.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        orders: dayOrders.length,
        revenue: dayOrders.reduce((sum, order) => sum + order.total, 0)
      });
    }
    return chartData;
  }, [orders]);

  const categoryData = useCallback(() => {
    const categories = {};
    orders.forEach(order => {
      order.items.forEach(item => {
        categories[item.category] = (categories[item.category] || 0) + 1;
      });
    });
    return Object.entries(categories).map(([name, value]) => ({ name, value }));
  }, [orders]);

  const COLORS = ['#ea580c', '#dc2626', '#d97706', '#ca8a04', '#65a30d', '#059669', '#0891b2', '#0284c7'];

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

  const addToCart = useCallback((item, category) => {
    const cartItem = { ...item, category, id: Date.now() + Math.random() };
    setCart(prev => [...prev, cartItem]);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const placeOrder = useCallback(() => {
    if (cart.length === 0) return;
    setShowOrderForm(true);
  }, [cart.length]);

  const placeOrderWithDetails = useCallback(() => {
    const order = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price, 0),
      status: 'pending',
      timestamp: new Date().toLocaleString(),
      orderTime: new Date(),
      customerName: customerDetails.name,
      customerPhone: customerDetails.phone
    };
    
    setOrders(prev => [...prev, order]);
    setCart([]);
    setShowOrderForm(false);
    setCurrentOrder(order);
    setCustomerDetails({ name: '', phone: '' });
  }, [cart, customerDetails]);

  const updateOrderStatus = useCallback((orderId, status) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  }, []);

  // Filter orders based on search and filters
  const filteredOrders = orders.filter(order => {
    const matchesSearch = searchTerm === '' || 
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerPhone.includes(searchTerm) ||
      order.id.toString().includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    const matchesDate = dateFilter === 'all' || (() => {
      const orderDate = new Date(order.timestamp);
      const today = new Date();
      switch(dateFilter) {
        case 'today':
          return orderDate.toDateString() === today.toDateString();
        case 'yesterday':
          const yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - 1);
          return orderDate.toDateString() === yesterday.toDateString();
        case 'week':
          const weekAgo = new Date(today);
          weekAgo.setDate(weekAgo.getDate() - 7);
          return orderDate >= weekAgo;
        default:
          return true;
      }
    })();
    
    return matchesSearch && matchesStatus && matchesDate;
  });

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
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <p className="text-gray-500 mb-6">Add some delicious items from our menu!</p>
            <button
              onClick={() => setCurrentPage('menu')}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-3 border-b">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold mr-4">₹{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
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
                  Place Order 🚀
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Chef Dashboard with Order Queue and Timers
  const ChefDashboard = () => {
    const pendingOrders = orders.filter(order => order.status === 'pending' || order.status === 'preparing');
    
    const OrderCard = ({ order }) => {
      const [timeElapsed, setTimeElapsed] = useState(0);
      
      useEffect(() => {
        const timer = setInterval(() => {
          const elapsed = Math.floor((new Date() - new Date(order.orderTime)) / 1000);
          setTimeElapsed(elapsed);
        }, 1000);
        
        return () => clearInterval(timer);
      }, [order.orderTime]);
      
      const formatElapsedTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };
      
      const isUrgent = timeElapsed > 300; // 5 minutes
      
      return (
        <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${isUrgent ? 'border-red-500' : 'border-blue-500'}`}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-bold text-lg">Order #{order.id.toString().slice(-6)}</h4>
              <p className="text-sm text-gray-600">{order.customerName} - {order.customerPhone}</p>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${isUrgent ? 'text-red-600' : 'text-blue-600'}`}>
                {formatElapsedTime(timeElapsed)}
              </div>
              <p className="text-xs text-gray-500">elapsed</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Items to prepare:</h5>
            <ul className="space-y-1">
              {order.items.map((item, idx) => (
                <li key={idx} className="text-sm bg-gray-50 px-2 py-1 rounded">
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-2">
            {order.status === 'pending' && (
              <button
                onClick={() => updateOrderStatus(order.id, 'preparing')}
                className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700"
              >
                Start Cooking
              </button>
            )}
            {order.status === 'preparing' && (
              <button
                onClick={() => updateOrderStatus(order.id, 'ready')}
                className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700"
              >
                Mark Ready
              </button>
            )}
          </div>
        </div>
      );
    };
    
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Kitchen Dashboard</h2>
            <button
              onClick={() => {
                setIsChef(false);
                setCurrentPage('home');
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Exit Kitchen
            </button>
          </div>

          {/* Kitchen Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-500 text-white p-6 rounded-lg">
              <div className="flex items-center">
                <Timer className="w-8 h-8 mr-3" />
                <div>
                  <p className="text-sm opacity-80">Pending Orders</p>
                  <p className="text-2xl font-bold">{orders.filter(o => o.status === 'pending').length}</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <div className="flex items-center">
                <ChefHat className="w-8 h-8 mr-3" />
                <div>
                  <p className="text-sm opacity-80">Preparing</p>
                  <p className="text-2xl font-bold">{orders.filter(o => o.status === 'preparing').length}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                <div>
                  <p className="text-sm opacity-80">Ready Today</p>
                  <p className="text-2xl font-bold">{orders.filter(o => o.status === 'ready' || o.status === 'completed').length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Queue */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Order Queue</h3>
            {pendingOrders.length === 0 ? (
              <div className="text-center py-8">
                <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No pending orders. Kitchen is caught up! 🎉</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pendingOrders.map(order => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Admin Dashboard with Visualizations
  const AdminDashboard = () => {
    const chartData = generateChartData();
    const categoryChartData = categoryData();
    
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Admin Dashboard</h2>
            <button
              onClick={() => {
                setIsAdmin(false);
                setCurrentPage('home');
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Logout
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

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Orders & Revenue Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="#ea580c" name="Orders" />
                  <Bar dataKey="revenue" fill="#dc2626" name="Revenue (₹)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Popular Categories
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={categoryChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search orders, customer, phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="ready">Ready</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="week">Last 7 Days</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-500">
                Showing {filteredOrders.length} of {orders.length} orders
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Orders Management</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order.id.toString().slice(-6)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customerName || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customerPhone || 'N/A'}
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
                          className="text-sm border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              {filteredOrders.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No orders found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              {!isAdmin && !isChef && (
                <>
                  <button
                    onClick={() => setShowChefLogin(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                  >
                    <ChefHat className="w-4 h-4 mr-2" />
                    Chef
                  </button>
                  <button
                    onClick={() => setShowAdminLogin(true)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Admin
                  </button>
                </>
              )}
              {isAdmin && (
                <button
                  onClick={() => setCurrentPage('admin')}
                  className={`hover:text-orange-600 flex items-center ${currentPage === 'admin' ? 'text-orange-600' : 'text-gray-700'}`}
                >
                  <User className="w-5 h-5 mr-1" />
                  Dashboard
                </button>
              )}
              {isChef && (
                <button
                  onClick={() => setCurrentPage('chef')}
                  className={`hover:text-blue-600 flex items-center ${currentPage === 'chef' ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  <ChefHat className="w-5 h-5 mr-1" />
                  Kitchen
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {isAdmin && currentPage === 'admin' ? (
        <AdminDashboard />
      ) : isChef && currentPage === 'chef' ? (
        <ChefDashboard />
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'menu' && <MenuPage />}
          {currentPage === 'cart' && <CartPage />}
        </>
      )}

      {/* Modals */}
      <AdminLogin
        showAdminLogin={showAdminLogin}
        setShowAdminLogin={setShowAdminLogin}
        adminCredentials={adminCredentials}
        setAdminCredentials={setAdminCredentials}
        setIsAdmin={setIsAdmin}
        setCurrentPage={setCurrentPage}
      />
      <ChefLogin
        showChefLogin={showChefLogin}
        setShowChefLogin={setShowChefLogin}
        adminCredentials={adminCredentials}
        setAdminCredentials={setAdminCredentials}
        setIsChef={setIsChef}
        setCurrentPage={setCurrentPage}
      />
      <CustomerDetailsForm
        showOrderForm={showOrderForm}
        setShowOrderForm={setShowOrderForm}
        customerDetails={customerDetails}
        setCustomerDetails={setCustomerDetails}
        cart={cart}
        placeOrderWithDetails={placeOrderWithDetails}
      />
      <OrderTimer
        order={currentOrder}
        setCurrentOrder={setCurrentOrder}
      />
    </div>
  );
};

export default NaanStopWebsite;
