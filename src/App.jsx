import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Globe, Heart, Share2, Download, Plus, Minus, Trash2, MessageCircle, ChevronDown, Star, Home, Package, Palette, Users, Info, Send, ArrowRight } from 'lucide-react';
import products from './products'; // استيراد المنتجات من ملف منفصل

// 🌍 i18n Translations
const translations = {
  en: {
    nav: { home: 'Home', products: 'Products', customizer: 'Customizer', about: 'About Us', team: 'Team' },
    hero: {
      headline: 'Upcycled Handmade Denim & Canvas Art',
      subheadline: 'Sustainable Fashion & Eco-Conscious Artistry',
      cta1: 'Explore Collection',
      cta2: 'Customize Your Product'
    },
    products: {
      title: 'Our Collection',
      subtitle: 'Handcrafted Treasures from Recycled Materials',
      all: 'All Products',
      bags: 'Handbags & Accessories',
      canvas: 'Canvas Artworks',
      addCart: 'Add to Cart',
      price: 'Price',
      viewDetails: 'View Details',
      exploreMore: 'Explore More →',
      featuredProducts: 'Featured Products'
    },
    customizer: {
      title: 'Design Your Own',
      subtitle: 'Create Your Unique Masterpiece',
      selectProduct: 'Select Product Type',
      bag: 'Custom Bag',
      canvas: 'Custom Canvas Art',
      designArea: 'Design Area - Sketch, Add Text, Upload Images',
      requestQuote: 'Request Custom Quote',
      sendViaWhatsApp: 'Send Design via WhatsApp'
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      subtotal: 'Subtotal',
      estimate: 'Price Estimate',
      checkout: 'Order via WhatsApp',
      continue: 'Continue Shopping'
    },
    about: {
      title: 'About LAMSANO SYM',
      mission: 'Our Mission',
      missionText: 'LAMSANO SYM is an ENACTUS/INJAZ Al-Maghrib initiative dedicated to transforming textile waste into stunning art and fashion. We believe in the circular economy and sustainable luxury.',
      values: 'Our Values',
      sustainability: 'Sustainability First',
      craftsmanship: 'Artisan Craftsmanship',
      innovation: 'Innovative Design'
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'Passionate Creators Behind LAMSANO SYM'
    },
    footer: {
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      followUs: 'Follow Us',
      sustainability: '🌱 Certified Eco-Friendly Brand'
    }
  },
  fr: {
    nav: { home: 'Accueil', products: 'Produits', customizer: 'Personnalisateur', about: 'À propos', team: 'Équipe' },
    hero: {
      headline: 'Accessoires Denim Upcyclés et Art sur Toile Faits à la Main',
      subheadline: 'Mode Durable et Artisanat Conscient de l\'Environnement',
      cta1: 'Explorer la Collection',
      cta2: 'Personnaliser Votre Produit'
    },
    products: {
      title: 'Notre Collection',
      subtitle: 'Trésors Artisanaux Fabriqués à partir de Matériaux Recyclés',
      all: 'Tous les Produits',
      bags: 'Sacs à Main et Accessoires',
      canvas: 'Toiles Murales',
      addCart: 'Ajouter au Panier',
      price: 'Prix',
      viewDetails: 'Voir les Détails',
      exploreMore: 'Explorer Plus →',
      featuredProducts: 'Produits en Vedette'
    },
    customizer: {
      title: 'Créez le Vôtre',
      subtitle: 'Créez Votre Chef-d\'œuvre Unique',
      selectProduct: 'Sélectionnez le Type de Produit',
      bag: 'Sac Personnalisé',
      canvas: 'Art de Toile Personnalisé',
      designArea: 'Zone de Conception - Dessinez, Ajoutez du Texte, Téléchargez des Images',
      requestQuote: 'Demander un Devis Personnalisé',
      sendViaWhatsApp: 'Envoyer le Design via WhatsApp'
    },
    cart: {
      title: 'Panier d\'Achat',
      empty: 'Votre panier est vide',
      subtotal: 'Sous-total',
      estimate: 'Estimation du Prix',
      checkout: 'Commander via WhatsApp',
      continue: 'Continuer vos Achats'
    },
    about: {
      title: 'À Propos de LAMSANO SYM',
      mission: 'Notre Mission',
      missionText: 'LAMSANO SYM est une initiative d\'ENACTUS/INJAZ Al-Maghrib dédiée à la transformation des déchets textiles en art et mode époustouflants. Nous croyons à l\'économie circulaire et au luxe durable.',
      values: 'Nos Valeurs',
      sustainability: 'Durabilité d\'Abord',
      craftsmanship: 'Artisanat Artisan',
      innovation: 'Conception Innovante'
    },
    team: {
      title: 'Rencontrez Notre Équipe',
      subtitle: 'Créateurs Passionnés Derrière LAMSANO SYM'
    },
    footer: {
      quickLinks: 'Liens Rapides',
      contact: 'Nous Contacter',
      followUs: 'Suivez-nous',
      sustainability: '🌱 Marque Certifiée Écologique'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', customizer: 'المخصص', about: 'من نحن', team: 'الفريق' },
    hero: {
      headline: 'إكسسوارات الدينم المُعاد تصنيعها وفن الكانفاس اليدوي',
      subheadline: 'الموضة المستدامة والحرف الواعية بيئياً',
      cta1: 'استكشف المجموعة',
      cta2: 'خصص منتجك'
    },
    products: {
      title: 'مجموعتنا',
      subtitle: 'كنوز حرفية مصنوعة من مواد معاد تدويرها',
      all: 'جميع المنتجات',
      bags: 'الحقائب والاكسسوارات',
      canvas: 'لوحات الكانفاس الجدارية',
      addCart: 'أضف إلى السلة',
      price: 'السعر',
      viewDetails: 'عرض التفاصيل',
      exploreMore: '→ استكشف المزيد',
      featuredProducts: 'المنتجات المميزة'
    },
    customizer: {
      title: 'صمم بنفسك',
      subtitle: 'أنشئ تحفتك الفريدة',
      selectProduct: 'اختر نوع المنتج',
      bag: 'حقيبة مخصصة',
      canvas: 'فن كانفاس مخصص',
      designArea: 'منطقة التصميم - ارسم، أضف نصاً، حمّل الصور',
      requestQuote: 'اطلب عرض سعر مخصص',
      sendViaWhatsApp: 'أرسل التصميم عبر WhatsApp'
    },
    cart: {
      title: 'سلة التسوق',
      empty: 'سلتك فارغة',
      subtotal: 'المجموع الفرعي',
      estimate: 'تقدير السعر',
      checkout: 'اطلب عبر WhatsApp',
      continue: 'متابعة التسوق'
    },
    about: {
      title: 'حول LAMSANO SYM',
      mission: 'مهمتنا',
      missionText: 'LAMSANO SYM هي مبادرة من ENACTUS/INJAZ المغرب مكرسة لتحويل نفايات النسيج إلى فن وموضة مذهلة. نؤمن بالاقتصاد الدائري والفخامة المستدامة.',
      values: 'قيمنا',
      sustainability: 'الاستدامة أولاً',
      craftsmanship: 'الحرفية اليدوية',
      innovation: 'التصميم المبتكر'
    },
    team: {
      title: 'قابل فريقنا',
      subtitle: 'المبدعون الشغوفون خلف LAMSANO SYM'
    },
    footer: {
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      followUs: 'تابعنا',
      sustainability: '🌱 علامة تجارية معتمدة صديقة للبيئة'
    }
  }
};

// Team Members
const teamMembers = [
  {
    id: 1,
    name: 'Samira Amkhaou',
    role: { en: 'Team Leader', fr: 'Chef d\'équipe', ar: 'قائد الفريق' },
    image: '/team/IMG-20260212-WA0030.jpg'
  },
  {
    id: 2,
    name: 'Youness Ouilile',
    role: { en: 'Designer & Co-creator', fr: 'Designer & Co-créateur', ar: 'مصمم ومشارك في الابتكار' },
    image: '/team/1763064983904.jpg'
  },
  {
    id: 3,
    name: 'Sanae Amentag',
    role: { en: 'Finance Manage', fr: 'Gestion financière', ar: 'إدارة الشؤون المالية' },
    image: '/team/IMG-20251223-WA0112.jpg'
  },
  {
    id: 4,
    name: 'Asmae Aben',
    role: { en: 'Marketing Manager', fr: 'Responsable marketing', ar: 'مديرة تسويق' },
    image: '/team/IMG-20260729-WA0021.jpg'
  },
   {
    id: 4,
    name: 'Sana Fhad',
    role: { en: 'Co-Finance & Operations', fr: 'Co-responsable des finances et des opérations', ar: 'التمويل والعمليات المشتركة' },
    image: '/team/IMG-20260729-WA0022.jpg'
  },
   {
    id: 4,
    name: 'Hiba Ben Thami',
    role: { en: 'Social Media Manager', fr: 'Responsable des réseaux sociaux', ar: 'مديرة وسائل التواصل الاجتماعي' },
    image: '/team/IMG-20260731-WA0000.jpg'
  }
];

// ============ PRODUCT CARD COMPONENT ============
function ProductCard({ product, language, isRTL, onAddCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group hover:scale-105">
      <div className="relative overflow-hidden h-80">
        <img src={product.image} alt={product.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition">
          <Heart size={20} className="text-emerald-600" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 flex-1">{product.name[language]}</h3>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description[language]}</p>
        <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-3xl font-bold text-emerald-600">{product.price} MAD</span>
        </div>
        <button
          onClick={() => onAddCart(product)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 rounded-lg transition shadow-md"
        >
          {language === 'ar' ? 'أضف إلى السلة' : language === 'fr' ? 'Ajouter au Panier' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

// ============ PRODUCTS PAGE COMPONENT ============
function ProductsPage({ language, isRTL, t, onAddCart, onBack }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-emerald-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="text-emerald-600 font-bold flex items-center gap-2 hover:text-emerald-700">
            ← {language === 'ar' ? 'العودة' : language === 'fr' ? 'Retour' : 'Back'}
          </button>
          <h1 className="text-2xl font-bold text-emerald-700">{t.products.title}</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Subtitle */}
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="text-gray-600 text-lg">{t.products.subtitle}</p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-4 mb-12 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          {[
            { key: 'all', label: t.products.all },
            { key: 'bags', label: t.products.bags },
            { key: 'canvas', label: t.products.canvas }
          ].map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeFilter === filter.key
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
              isRTL={isRTL}
              onAddCart={onAddCart}
            />
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              {language === 'ar' ? 'لا توجد منتجات' : language === 'fr' ? 'Aucun produit trouvé' : 'No products found'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ============ MAIN APP COMPONENT ============
export default function LamsanoSYM() {
  const [language, setLanguage] = useState('en');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeProductFilter, setActiveProductFilter] = useState('all');
  const [customizerProduct, setCustomizerProduct] = useState('bag');
  const [customDesign, setCustomDesign] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'products'

  const t = translations[language];
  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  // Get featured products (first 5)
  const featuredProducts = products.slice(0, 5);

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // WhatsApp Functions
  const sendCartToWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    const message = `Hello! I'd like to order the following items from LAMSANO SYM:\n\n${
      cartItems.map(item => `- ${item.name[language]} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`).join('\n')
    }\n\nTotal: $${cartTotal.toFixed(2)}\n\nPlease confirm availability and provide shipping details.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/0613798674?text=${encoded}`, '_blank');
  };

  const sendCustomDesignToWhatsApp = () => {
    const message = `Hello LAMSANO SYM! I'd like to order a custom ${customizerProduct} with the following specifications:\n\nDesign Details: ${customDesign || 'See attached design sketch'}\n\nPlease provide a quote for this custom creation.\n\nThank you!`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/0613798674?text=${encoded}`, '_blank');
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setShowMobileMenu(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If on products page, show ProductsPage component
  if (currentPage === 'products') {
    return (
      <ProductsPage
        language={language}
        isRTL={isRTL}
        t={t}
        onAddCart={addToCart}
        onBack={() => setCurrentPage('home')}
      />
    );
  }

  // HOME PAGE
  return (
    <div dir={dir} className={`min-h-screen bg-gradient-to-b from-slate-50 to-white ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      {/* ============ HEADER / NAVBAR ============ */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-emerald-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12   overflow-hidden flex items-center justify-center">
  <img 
    src="/IMG-20251222-WA0006-removebg-preview (1).png" 
    alt="Lamsano Sym Logo" 
    className="w-full h-full object-cover"
  />
</div>
            <div>
              <h1 className={`text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ${isRTL ? 'text-right' : ''}`}>LAMSANO SYM</h1>
            
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'customizer', 'about', 'team'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-semibold text-sm hover:text-emerald-600 transition ${activeSection === section ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'}`}
              >
                {t.nav[section] || section}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('products')}
              className="font-semibold text-sm hover:text-emerald-600 transition text-gray-700"
            >
              {t.nav.products}
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 bg-emerald-100 hover:bg-emerald-200 px-3 py-2 rounded-lg transition text-emerald-700 font-semibold text-sm">
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-0 w-32 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                {['en', 'fr', 'ar'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`w-full text-${isRTL ? 'right' : 'left'} px-4 py-2 hover:bg-emerald-100 ${language === lang ? 'bg-emerald-200 font-bold' : ''}`}
                  >
                    {lang === 'en' ? '🇬🇧 English' : lang === 'fr' ? '🇫🇷 Français' : '🇲🇦 العربية'}
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition shadow-lg"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-emerald-600"
            >
              {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-emerald-200 px-4 py-4 space-y-3">
            {['home', 'customizer', 'about', 'team'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left font-semibold text-gray-700 hover:text-emerald-600 py-2"
              >
                {t.nav[section] || section}
              </button>
            ))}
            <button
              onClick={() => { setCurrentPage('products'); setShowMobileMenu(false); }}
              className="block w-full text-left font-semibold text-gray-700 hover:text-emerald-600 py-2"
            >
              {t.nav.products}
            </button>
          </div>
        )}
      </header>

      {/* ============ CART SLIDE-OVER ============ */}
      {showCart && (
        <div className="fixed inset-0 z-40 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>
          <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} max-w-sm w-full h-full bg-white shadow-2xl overflow-y-auto flex flex-col`}>
            <div className={`p-6 border-b border-emerald-200 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h2 className="text-2xl font-bold text-emerald-700">{t.cart.title}</h2>
              <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600 text-lg">{t.cart.empty}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 p-6 space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className={`border border-emerald-200 rounded-lg p-4 flex ${isRTL ? 'flex-row-reverse' : ''} gap-4`}>
                      <img src={item.image} alt={item.name[language]} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name[language]}</h3>
                        <p className="text-emerald-600 font-bold">${item.price.toFixed(2)}</p>
                        <div className={`flex items-center gap-2 mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => updateQuantity(item.id, 0)}
                            className="ml-auto text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-emerald-200 p-6 space-y-4">
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-lg font-semibold text-gray-700">{t.cart.estimate}:</span>
                    <span className="text-2xl font-bold text-emerald-600">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={sendCartToWhatsApp}
                    className={`w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 rounded-lg transition shadow-lg flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <MessageCircle size={20} />
                    {t.cart.checkout}
                  </button>
                  <button
                    onClick={() => setShowCart(false)}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition"
                  >
                    {t.cart.continue}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ============ HERO SECTION ============ */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">{t.hero.subheadline}</p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg text-lg"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection('customizer')}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-xl transition text-lg"
              >
                {t.hero.cta2}
              </button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              '/products/1000140605.png',
              '/products/IMG-20260728-WA0038.jpg',
              '/products/1000141182.png'
            ].map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
                <img src={img} alt="LAMSANO Product" className="w-full h-80 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS SECTION (Homepage) ============ */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-5xl font-bold text-emerald-700 mb-4">{t.products.featuredProducts}</h2>
            <p className="text-gray-600 text-lg">{t.products.subtitle}</p>
          </div>

          {/* Featured Products Grid (Only 5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
                isRTL={isRTL}
                onAddCart={addToCart}
              />
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentPage('products')}
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-12 rounded-xl transition shadow-lg text-lg ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t.products.exploreMore}
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ============ CUSTOMIZER SECTION ============ */}
      <section id="customizer" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-5xl font-bold text-emerald-700 mb-4">{t.customizer.title}</h2>
            <p className="text-gray-600 text-lg">{t.customizer.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design Interface */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <label className="block text-lg font-bold text-gray-800 mb-4">{t.customizer.selectProduct}</label>
                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => setCustomizerProduct('bag')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                      customizerProduct === 'bag'
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {t.customizer.bag}
                  </button>
                  <button
                    onClick={() => setCustomizerProduct('canvas')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                      customizerProduct === 'canvas'
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {t.customizer.canvas}
                  </button>
                </div>
              </div>

              {/* Canvas Drawing Area */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <label className="block text-lg font-bold text-gray-800 mb-4">{t.customizer.designArea}</label>
                <textarea
                  value={customDesign}
                  onChange={(e) => setCustomDesign(e.target.value)}
                  placeholder={`Describe your custom ${customizerProduct}...\n• Colors\n• Patterns\n• Text\n• Special Details`}
                  className="w-full h-40 border-2 border-emerald-300 rounded-lg p-4 focus:outline-none focus:border-emerald-600 font-semibold resize-none"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl border-2 border-dashed border-emerald-400 p-8 text-center cursor-pointer hover:border-emerald-600 transition">
                <Download className="mx-auto text-emerald-600 mb-3" size={32} />
                <p className="font-semibold text-gray-800 mb-2">{isRTL ? 'اسحب الصور أو انقر للتحميل' : 'Drag & drop images or click to upload'}</p>
                <p className="text-sm text-gray-600">{isRTL ? 'PNG, JPG, SVG (ماكس 5MB)' : 'PNG, JPG, SVG (max 5MB)'}</p>
              </div>

              {/* Send Design */}
              <button
                onClick={sendCustomDesignToWhatsApp}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-lg transition shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle size={24} />
                {t.customizer.sendViaWhatsApp}
              </button>
            </div>

            {/* Preview */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className={`text-8xl mb-4 ${customizerProduct === 'bag' ? '👜' : '🎨'}`}></div>
                  <p className="text-xl font-semibold text-gray-600 mb-4">
                    {customizerProduct === 'bag' ? 'Custom Denim Bag Preview' : 'Custom Canvas Art Preview'}
                  </p>
                  <p className="text-gray-500">{isRTL ? 'سيتم عرض معاينتك هنا' : 'Your design preview will appear here'}</p>
                </div>
              </div>

              {/* Design Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-emerald-700 mb-4">{isRTL ? 'ملخص التصميم' : 'Design Summary'}</h3>
                <div className="space-y-3">
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-gray-600">{isRTL ? 'نوع المنتج' : 'Product Type'}:</span>
                    <span className="font-semibold text-emerald-600">{customizerProduct}</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-gray-600">{isRTL ? 'الوصف' : 'Description'}:</span>
                    <span className="font-semibold text-gray-700 text-right max-w-xs">{customDesign || 'Not specified'}</span>
                  </div>
                  <div className={`flex justify-between pt-4 border-t border-emerald-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-gray-600 font-semibold">{isRTL ? 'السعر التقديري' : 'Estimated Price'}:</span>
                    <span className="text-2xl font-bold text-emerald-600">100MAD - 250MAD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-emerald-700 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>{t.about.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              <h3 className={`text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Palette size={28} /> {t.about.mission}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">{t.about.missionText}</p>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Star size={28} /> {t.about.values}
              </h3>
              {[
                { title: t.about.sustainability, emoji: '🌱' },
                { title: t.about.craftsmanship, emoji: '✋' },
                { title: t.about.innovation, emoji: '💡' }
              ].map((value, idx) => (
                <div key={idx} className={`bg-white border-2 border-emerald-200 rounded-lg p-4 flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="text-3xl">{value.emoji}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{value.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION ============ */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-5xl font-bold text-emerald-700 mb-4">{t.team.title}</h2>
            <p className="text-gray-600 text-lg">{t.team.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 group">
                <div className="relative overflow-hidden h-64">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className={`p-6 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold text-sm">{member.role[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="flex items-center gap-2 mb-4">
 <div className="w-12   overflow-hidden flex items-center justify-center">
  <img 
    src="/IMG-20251222-WA0006-removebg-preview (1).png" 
    alt="Lamsano Sym Logo" 
    className="w-full h-full object-cover"
  />
</div>                <h3 className="text-2xl font-bold">LAMSANO SYM</h3>
              </div>
              <p className="text-emerald-100 text-sm">{isRTL ? 'صنع من القلب. مستدام بالحب.' : 'Made from Heart. Sustainable by Love.'}</p>
            </div>

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-emerald-100">
                {['Home', 'Products', 'Customizer', 'About'].map(link => (
                  <li key={link} className="hover:text-white cursor-pointer transition">{link}</li>
                ))}
              </ul>
            </div>

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h4 className="font-bold text-lg mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-emerald-100">
                <li className="hover:text-white cursor-pointer transition">📧 lamsanosym6@gmail.com</li>
                <li className="hover:text-white cursor-pointer transition">📱 +212 613 798674</li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <MessageCircle size={16} /> WhatsApp
                </li>
              </ul>
            </div>
             <div class="footer-socials">
   
      <a href="https://www.instagram.com/lamsano____sym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="social-link instagram" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        <span>Instagram</span>
      </a>

     
      <a href="lamsanosym06@gmail.com" class="social-link gmail" aria-label="Gmail">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>Gmail</span>
      </a>
    </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h4 className="font-bold text-lg mb-4">{isRTL ? 'المسؤولية' : 'Responsibility'}</h4>
              <div className="bg-emerald-700/50 rounded-lg p-4 text-sm">
                {t.footer.sustainability}
              </div>
            </div>
          </div>

          <div className={`border-t border-emerald-700 pt-8 flex flex-col sm:flex-row items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <p className="text-emerald-100 text-sm">&copy; 2024 LAMSANO SYM. {isRTL ? 'جميع الحقوق محفوظة.' : 'All Rights Reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
