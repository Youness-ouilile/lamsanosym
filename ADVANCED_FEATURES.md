# 🎯 LAMSANO SYM - Advanced Features Guide

Learn how to add powerful features to your website beyond the basic setup.

---

## 📚 Table of Contents

1. [Payment Gateway Integration](#payment-gateway-integration)
2. [User Authentication](#user-authentication)
3. [Database Setup](#database-setup)
4. [Email System](#email-system)
5. [Backend API](#backend-api)
6. [Advanced Customization](#advanced-customization)
7. [Performance Enhancement](#performance-enhancement)
8. [Advanced Analytics](#advanced-analytics)

---

## 💳 Payment Gateway Integration

### Option 1: Stripe Integration

**Install Stripe:**
```bash
npm install @stripe/react-stripe-js @stripe/js stripe
```

**Create Payment Component:**
```javascript
import { loadStripe } from '@stripe/js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();
    
    const { token } = await stripe.createToken(elements.getElement(CardElement));
    
    // Send token to backend
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token.id, amount })
    });
    
    const data = await response.json();
    if (data.success) {
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit">Pay ${(amount/100).toFixed(2)}</button>
    </form>
  );
}

// In Cart component:
<Elements stripe={stripePromise}>
  <PaymentForm amount={cartTotal * 100} />
</Elements>
```

**Backend (Node.js/Express):**
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/payment', async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      source: req.body.token,
      description: 'LAMSANO SYM Purchase'
    });
    res.json({ success: true, id: charge.id });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});
```

### Option 2: PayPal Integration

**Install PayPal:**
```bash
npm install @paypal/checkout-server-sdk
```

**Add PayPal Button:**
```javascript
import { PayPalButtons } from '@paypal/checkout-server-sdk';

<PayPalButtons
  createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: { value: cartTotal.toString() }
      }]
    });
  }}
  onApprove={(data, actions) => {
    return actions.order.capture().then(() => {
      alert('Order confirmed!');
    });
  }}
/>
```

---

## 🔐 User Authentication

### Setup Firebase Authentication

**Install Firebase:**
```bash
npm install firebase
```

**Initialize Firebase (src/firebase.js):**
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

**Create Auth Context (src/contexts/AuthContext.jsx):**
```javascript
import { createContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOutUser, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOutUser(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

**Login Component:**
```javascript
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginModal({ isOpen, onClose }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      onClose();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
```

---

## 🗄️ Database Setup

### Firestore Database

**Install Firestore:**
```bash
npm install firebase
```

**Update firebase.js:**
```javascript
import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(app);
```

**Save Product Orders to Firestore:**
```javascript
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

async function saveOrder(cartItems, userInfo) {
  try {
    const ordersCollection = collection(db, 'orders');
    const docRef = await addDoc(ordersCollection, {
      items: cartItems,
      userInfo: userInfo,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'pending',
      createdAt: serverTimestamp(),
      notes: 'Ordered via website'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving order:', error);
  }
}
```

### MongoDB Alternative

**Install MongoDB:**
```bash
npm install mongodb
```

**Connect to MongoDB:**
```javascript
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    const database = client.db('lamsano');
    return database;
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

// Use in API routes:
const db = await connectDB();
const orders = db.collection('orders');
await orders.insertOne(orderData);
```

---

## 📧 Email System

### Setup SendGrid Email

**Install SendGrid:**
```bash
npm install @sendgrid/mail
```

**Create Email Service (backend):**
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendOrderConfirmation(email, orderDetails) {
  const msg = {
    to: email,
    from: 'noreply@lamsano-sym.com',
    subject: 'Order Confirmation - LAMSANO SYM',
    html: `
      <h1>Thank You for Your Order!</h1>
      <p>Order ID: ${orderDetails.id}</p>
      <p>Total: $${orderDetails.total.toFixed(2)}</p>
      <h3>Items:</h3>
      <ul>
        ${orderDetails.items.map(item => 
          `<li>${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</li>`
        ).join('')}
      </ul>
      <p>We'll ship your order soon!</p>
      <p>Best regards,<br/>LAMSANO SYM Team</p>
    `
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email error:', error);
  }
}
```

### Alternative: Nodemailer

```bash
npm install nodemailer
```

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmail(to, subject, html) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
```

---

## 🔌 Backend API

### Setup Express Server

**Create server.js:**
```bash
npm install express cors dotenv
```

```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// WhatsApp Order Endpoint
app.post('/api/orders', async (req, res) => {
  const { items, userInfo } = req.body;
  
  // Validate
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No items in order' });
  }

  try {
    // Save to database
    const order = await saveToDatabase({ items, userInfo, date: new Date() });
    
    // Send confirmation email
    await sendOrderConfirmation(userInfo.email, order);
    
    res.json({ success: true, orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Custom Design Quote
app.post('/api/custom-quote', async (req, res) => {
  const { productType, designDetails, userInfo } = req.body;

  try {
    // Save quote request
    const quote = await saveQuoteRequest({ productType, designDetails, userInfo });
    
    // Send notification email to admin
    await notifyAdminNewQuote(quote);
    
    res.json({ success: true, quoteId: quote.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🎨 Advanced Customization

### Add Product Reviews

```javascript
function ProductReviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmitReview = async () => {
    const review = {
      productId,
      text: newReview,
      rating,
      author: user?.email || 'Anonymous',
      date: new Date()
    };

    // Save to database
    await addReview(review);
    setReviews([...reviews, review]);
    setNewReview('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
      
      {/* Review Form */}
      <div className="mb-6 p-4 border rounded-lg">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded mb-2"
        />
        <select 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))}
          className="p-2 border rounded mb-2"
        >
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Stars</option>)}
        </select>
        <button 
          onClick={handleSubmitReview}
          className="bg-emerald-600 text-white px-4 py-2 rounded"
        >
          Post Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="border-l-4 border-emerald-600 pl-4">
            <div className="flex justify-between">
              <strong>{review.author}</strong>
              <span>{'⭐'.repeat(review.rating)}</span>
            </div>
            <p className="text-gray-600">{review.text}</p>
            <small className="text-gray-400">{review.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Add Wishlist Feature

```javascript
function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
    }
  };

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter(item => item.id !== productId);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  return { wishlist, addToWishlist, removeFromWishlist };
}

// In Product Card:
const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
const isWishlisted = wishlist.some(item => item.id === product.id);

<button
  onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
  className={`text-2xl ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`}
>
  ❤️
</button>
```

### Add Blog Section

```javascript
function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const posts = await fetch('/api/blog-posts').then(r => r.json());
    setPosts(posts);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">Blog & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="card">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="text-emerald-600 font-semibold">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## ⚡ Performance Enhancement

### Code Splitting

```javascript
import { lazy, Suspense } from 'react';

const ProductSection = lazy(() => import('./sections/Products'));
const CustomizerSection = lazy(() => import('./sections/Customizer'));

<Suspense fallback={<LoadingSpinner />}>
  <ProductSection />
  <CustomizerSection />
</Suspense>
```

### Image Optimization

```javascript
// Use Next.js Image component (if using Next.js)
import Image from 'next/image';

<Image 
  src="/product.jpg" 
  alt="Product" 
  width={500} 
  height={500}
  quality={80}
  priority={false}
/>

// Or lazy load with intersection observer
<img loading="lazy" src="/product.jpg" alt="Product" />
```

### Caching Strategy

```javascript
// Cache product data for 1 hour
const CACHE_TIME = 60 * 60 * 1000; // 1 hour

function useCachedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cached = localStorage.getItem('products');
    const cacheTime = localStorage.getItem('productsTime');
    
    if (cached && cacheTime && Date.now() - JSON.parse(cacheTime) < CACHE_TIME) {
      setProducts(JSON.parse(cached));
    } else {
      fetchProducts();
    }
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('/api/products').then(r => r.json());
    setProducts(data);
    localStorage.setItem('products', JSON.stringify(data));
    localStorage.setItem('productsTime', JSON.stringify(Date.now()));
  };

  return products;
}
```

---

## 📊 Advanced Analytics

### Track Custom Events

```javascript
// Track product views
gtag('event', 'view_item', {
  items: [{
    item_id: product.id,
    item_name: product.name,
    price: product.price
  }]
});

// Track add to cart
gtag('event', 'add_to_cart', {
  value: product.price,
  currency: 'USD',
  items: [{ item_id: product.id }]
});

// Track purchase
gtag('event', 'purchase', {
  transaction_id: orderId,
  value: total,
  currency: 'USD',
  items: cartItems
});
```

### Heatmap Integration

```bash
npm install react-hot-keys @react-hook/window-size
```

```javascript
import { useEffect } from 'react';

export function useHotjar() {
  useEffect(() => {
    // Hotjar snippet
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  }, []);
}
```

---

## 🚀 Next Steps

1. Choose features that align with your business goals
2. Implement one feature at a time
3. Test thoroughly
4. Deploy and monitor

---

**Made with ❤️ for Sustainable Fashion** 🌱
