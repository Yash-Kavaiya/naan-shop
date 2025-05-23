# Naan Stop - Complete Restaurant Management System

## 🍽️ About Naan Stop

Naan Stop is a comprehensive pure vegetarian North Indian restaurant management system located in Balaji food court, near Shree Hotel, Hinjewadi Phase-1, Pune. We specialize in authentic North Indian flavors with our signature tagline: **"Taste the Rich Heritage of North Indian Flavors"**.

## ✨ Key Features

### 🛒 **Customer Experience**
- **Digital Menu**: Complete categorized menu with prices and descriptions
- **Shopping Cart**: Add/remove items with real-time updates
- **Customer Details**: Name and phone number collection for orders
- **10-Minute Timer**: Live countdown with personalized messages
- **Order Confirmation**: Beautiful confirmation screen with order tracking
- **Mobile Responsive**: Optimized for all devices

### 👨‍🍳 **Chef Dashboard** 
- **Secure Login**: Username: `chef` | Password: `kitchen`
- **Order Queue**: Real-time pending orders with priority system
- **Live Timers**: Elapsed time for each order with urgency indicators
- **Order Management**: Start cooking → Mark ready workflow
- **Kitchen Stats**: Pending, preparing, and completed order counts
- **Urgent Orders**: Visual alerts for orders over 5 minutes

### 👨‍💼 **Admin Dashboard**
- **Secure Login**: Username: `admin` | Password: `password`
- **Advanced Analytics**: Revenue tracking and order statistics
- **Data Visualizations**: 
  - Bar charts for orders & revenue trends
  - Pie charts for popular categories
- **Advanced Filters**:
  - Search by customer name, phone, or order ID
  - Filter by order status (pending, preparing, ready, completed)
  - Date filters (today, yesterday, last 7 days, all time)
- **Order Management**: Full CRUD operations on orders
- **Customer Data**: Complete customer information tracking

## 📊 **Dashboard Features**

### Chef Dashboard Highlights:
- **Real-time Order Queue** with elapsed timers
- **Priority System** - orders turn red after 5 minutes
- **Customer Details** for each order
- **One-click Status Updates**
- **Kitchen Performance Stats**

### Admin Dashboard Highlights:
- **Revenue Analytics** with trend visualization
- **Popular Items Analysis** via pie charts
- **Advanced Search & Filtering**
- **Customer Database Management**
- **Order History & Tracking**
- **Business Intelligence Reports**

## 🍛 **Complete Menu Categories**

| Category | Price Range | Description |
|----------|-------------|-------------|
| **Thali Stop** | ₹140-180 | Complete meal thalis with rice, dal, vegetables |
| **Mini Thali Stop** | ₹120-130 | Smaller portion thalis perfect for light meals |
| **Paneer Specialties** | ₹180-220 | Premium paneer dishes with authentic flavors |
| **Vegetable Dishes** | ₹110-190 | Fresh seasonal vegetables in various preparations |
| **Dal Stop** | ₹120-160 | Traditional lentil preparations |
| **Breads & Naan** | ₹20-70 | Fresh tandoor breads and flavored naans |
| **Rice & Biryani** | ₹80-150 | Aromatic rice dishes and biryanis |
| **Kulcha Stop** | ₹110-130 | Stuffed kulchas with various fillings |
| **Chole Bhature** | ₹100-120 | Classic North Indian favorite |
| **Cold Drinks** | ₹15 | Refreshing beverages |

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Yash-Kavaiya/naan-shop.git
cd naan-shop
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

## 🔐 **Access Credentials**

### Chef Dashboard Access:
- **Username**: `chef`
- **Password**: `kitchen`
- **Purpose**: Kitchen operations and order management

### Admin Dashboard Access:
- **Username**: `admin`  
- **Password**: `password`
- **Purpose**: Business analytics and complete system management

## 💻 **Technology Stack**

| Component | Technology |
|-----------|------------|
| **Frontend** | React 18 with Hooks |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Charts** | Recharts library |
| **State Management** | React useState/useEffect |
| **Build Tool** | Create React App |

## 🎯 **User Workflows**

### Customer Order Flow:
1. Browse menu → Add items to cart
2. Click "Place Order" → Enter name & phone
3. Confirm order → View 10-minute timer
4. Receive personalized updates
5. Pick up when ready

### Chef Workflow:
1. Login to kitchen dashboard
2. View order queue with timers
3. Click "Start Cooking" for pending orders
4. Monitor preparation time
5. Click "Mark Ready" when done

### Admin Workflow:
1. Login to admin dashboard
2. View business analytics and charts
3. Filter/search orders by various criteria
4. Manage customer data
5. Track revenue and performance

## 📱 **Mobile Responsiveness**

- **Adaptive Design**: Works seamlessly on desktop, tablet, and mobile
- **Touch-Friendly**: Large buttons and easy navigation
- **Fast Loading**: Optimized for mobile networks
- **Responsive Charts**: Data visualization adapts to screen size

## 🔧 **Advanced Features**

### Real-time Updates:
- Live order status changes
- Dynamic timer countdowns  
- Instant cart updates
- Real-time analytics

### Data Persistence:
- Order history tracking
- Customer database
- Revenue calculations
- Performance metrics

### Security Features:
- Secure login systems
- Role-based access control
- Input validation
- XSS protection

## 📈 **Analytics & Reports**

### Business Intelligence:
- **Daily Revenue Tracking**
- **Order Volume Analysis** 
- **Popular Item Identification**
- **Customer Behavior Insights**
- **Kitchen Performance Metrics**

### Filtering Options:
- **Time-based**: Today, yesterday, last 7 days, all time
- **Status-based**: Pending, preparing, ready, completed
- **Search**: Customer name, phone number, order ID

## 🎨 **Design Highlights**

- **Modern UI/UX**: Clean, intuitive interface design
- **Brand Colors**: Orange theme matching restaurant identity
- **Professional Typography**: Easy-to-read fonts and hierarchy
- **Smooth Animations**: Engaging user interactions
- **Accessibility**: Proper contrast and semantic markup

## 🔄 **Order Status Flow**

```
Pending → Preparing → Ready → Completed
   ↓         ↓        ↓        ↓
Customer  Chef     Customer  Admin
 Places   Starts    Pickup   Archives
 Order   Cooking
```

## 📞 **Contact Information**

- **📍 Address**: Balaji food court, near Shree Hotel, Hinjewadi Phase-1, Pune
- **📱 Phone**: 7507687563 / 8788619308
- **🍽️ Cuisine**: Pure Vegetarian North Indian
- **⏰ Service**: Quick and efficient order processing

## 🏆 **Key Achievements**

- ✅ **Complete Restaurant Management System**
- ✅ **Real-time Order Tracking with Timers**
- ✅ **Dual Dashboard System (Chef + Admin)**
- ✅ **Advanced Analytics & Visualizations**
- ✅ **Mobile-First Responsive Design**
- ✅ **Secure Role-Based Access Control**
- ✅ **Customer Data Management**
- ✅ **Business Intelligence Reporting**

## 🛠️ **Available Scripts**

```bash
npm start      # Run development server
npm test       # Launch test runner  
npm run build  # Build for production
npm run eject  # Eject from CRA (⚠️ irreversible)
```

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Built with ❤️ for authentic North Indian food lovers
- Special thanks to the Naan Stop team for their delicious recipes
- Designed to enhance dining experience and streamline restaurant operations
- Showcases modern web development best practices

## 🚀 **Deployment Options**

### Quick Deploy Options:
1. **Vercel**: Connect GitHub repo for automatic deployment
2. **Netlify**: Drag & drop build folder or connect repository  
3. **GitHub Pages**: Enable in repository settings
4. **Heroku**: Deploy with buildpack for React apps

### Environment Setup:
```bash
# For production deployment
npm run build
# Deploy the 'build' folder to your hosting service
```

---

**Naan Stop** - *Where tradition meets technology in serving authentic vegetarian North Indian cuisine!* 🍛✨

### 🎯 **Live Demo Features**
- **Customer Interface**: Browse menu, place orders, track preparation
- **Chef Dashboard**: Manage kitchen operations with real-time timers
- **Admin Portal**: Complete business analytics and order management
- **Mobile Responsive**: Perfect experience on all devices

**Ready to serve delicious meals with cutting-edge technology!** 🚀