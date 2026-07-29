// ==========================================
// 1. CONFIG & DATA
// ==========================================
const WHATSAPP_NUMBER = "212613798674"; // 👈 Enter your WhatsApp number here

const translations = {
  en: {
    dir: 'ltr',
    nav: { home: 'Home', products: 'Products', customizer: 'Customizer', about: 'About Us', team: 'Team' },
    hero: {
      title: 'Upcycled Denim & Fabrics into Fashion & Art Pieces',
      subtitle: 'Sustainable project transforming textile remnants into eco-friendly handmade denim bags and canvas paintings.',
      ctaShop: 'Explore Collection',
      ctaCustom: 'Customize Product'
    },
    products: {
      title: 'Our Collection',
      all: 'All',
      bags: 'Denim Bags & Accessories',
      canvas: 'Fabric Canvas Art',
      addToCart: 'Add to Cart'
    },
    customizer: {
      title: 'Interactive Design Studio',
      subtitle: 'Personalize your eco-friendly creation',
      baseProduct: 'Select Base Product:',
      bag: 'Denim Bag',
      canvasArt: 'Canvas Artwork',
      patchStyle: 'Select Patch/Pattern:',
      patchFloral: 'Floral & Nature',
      patchGeom: 'Geometric Shapes',
      patchCallig: 'Calligraphy',
      customNotes: 'Custom Notes/Text:',
      notesPlaceholder: 'Enter a name or special quote...',
      sendQuote: 'Request Custom Quote via WhatsApp'
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      total: 'Estimated Total:',
      checkoutWhatsApp: 'Order via WhatsApp',
      promptMsg: 'Hello LAMSANO SYM, I would like to order the following items:'
    },
    about: {
      title: 'About LAMSANO SYM',
      text: 'A green entrepreneurial project under ENACTUS & INJAZ Al-Maghrib. We promote circular economy by upcycling textile waste into high-value handmade accessories and artworks.'
    },
    team: {
      title: 'Our Core Team',
      subtitle: 'Youth driven by sustainability and creativity'
    }
  },
  fr: {
    dir: 'ltr',
    nav: { home: 'Accueil', products: 'Produits', customizer: 'Personnaliser', about: 'À Propos', team: 'Équipe' },
    hero: {
      title: 'Recyclage du Denim & Tissus en Sublimes Éco-Créations',
      subtitle: 'Projet écologique innovant fusionnant art, mode durable et surcyclage textile.',
      ctaShop: 'Explorer la Collection',
      ctaCustom: 'Personnaliser Votre Produit'
    },
    products: {
      title: 'Nos Créations Exclusives',
      all: 'Tous',
      bags: 'Sacs & Accessoires en Denim',
      canvas: 'Tableaux & Art Mural',
      addToCart: 'Ajouter au Panier'
    },
    customizer: {
      title: 'Studio de Personnalisation',
      subtitle: 'Créez votre pièce unique en quelques clics',
      baseProduct: 'Choisissez le produit de base:',
      bag: 'Sac en Denim',
      canvasArt: 'Tableau en Tissu',
      patchStyle: 'Style de motif / patch:',
      patchFloral: 'Fleurs & Nature',
      patchGeom: 'Formes Géométriques',
      patchCallig: 'Calligraphie',
      customNotes: 'Notes ou texte personnalisé:',
      notesPlaceholder: 'Ajoutez un prénom ou une phrase spéciale...',
      sendQuote: 'Demander un devis sur WhatsApp'
    },
    cart: {
      title: 'Votre Panier',
      empty: 'Votre panier est vide',
      total: 'Total estimé:',
      checkoutWhatsApp: 'Commander via WhatsApp',
      promptMsg: 'Bonjour LAMSANO SYM, je souhaite commander les articles suivants:'
    },
    about: {
      title: 'À Propos de LAMSANO SYM',
      text: 'Une initiative durable portée sous les cadres ENACTUS & INJAZ Al-Maghrib. Nous valorisons l\'économie circulaire en revalorisant les chutes de denim et de tissu pour créer des sacs et objets d\'art éco-responsables.'
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Des jeunes passionnés par l\'innovation et l\'impact social'
    }
  },
  ar: {
    dir: 'rtl',
    nav: { home: 'الرئيسية', products: 'المنتجات', customizer: 'صمم بنفسك', about: 'من نحن', team: 'فريق العمل' },
    hero: {
      title: 'إعادة تدوير الجينز والقماش إلى تحف فنية وأزياء مستدامة',
      subtitle: 'مشروع بيئي مبتكر يجمع بين الفن التقليدي ولمسات الموضة العصريّة من بقايا الأقمشة.',
      ctaShop: 'تصفح المجموعة',
      ctaCustom: 'صمّم منتجك الخاص'
    },
    products: {
      title: 'تشكيلتنا الحصرية',
      all: 'الكل',
      bags: 'حقائب وأكسسوارات دنيم',
      canvas: 'لوحات فنية جدارية',
      addToCart: 'إضافة للسلة'
    },
    customizer: {
      title: 'استوديو التصميم التفاعلي',
      subtitle: 'اختر نوع المنتج، الألوان، والأشكال لتصميم قطعتك الفريدة',
      baseProduct: 'اختر المنتج الأساسي:',
      bag: 'حقيبة جينز',
      canvasArt: 'لوحة قماشية',
      patchStyle: 'اختر نمط الرقعة/التطريز:',
      patchFloral: 'زهور ورسومات طبيعية',
      patchGeom: 'أشكال هندسية',
      patchCallig: 'خط عربي أسياد',
      customNotes: 'ملاحظات أو كتابات خاصة:',
      notesPlaceholder: 'اكتب اسمك أو عبارة مفضلة لتطريزها...',
      sendQuote: 'إرسال طلب التصميم عبر واتساب'
    },
    cart: {
      title: 'سلة التسوق',
      empty: 'السلة فارغة حالياً',
      total: 'المجموع التقديري:',
      checkoutWhatsApp: 'اطلب الآن عبر واتساب',
      promptMsg: 'مرحباً LAMSANO SYM، أرغب في طلب المنتجات التالية:'
    },
    about: {
      title: 'قصة LAMSANO SYM',
      text: 'مشروع طلابي رائد مؤطر ضمن برامج ENACTUS و INJAZ Al-Maghrib. نهدف إلى تعزيز الاقتصاد الدائري من خلال تحويل بقايا أقمشة الدنيم والمنسوجات المهملة إلى حقائب يد عصرية ومنتجات فنية فريدة عالية الجودة صديقة للبيئة.'
    },
    team: {
      title: 'فريق العمل',
      subtitle: 'شباب شغوف بالابتكار والاستدامة'
    }
  }
};

const products = [
  { id: 1, category: 'bags', image: 'photo/1000140605.png', title: { en: 'Classic Denim Bag', fr: 'Sac Denim Classique', ar: 'حقيبة دنيم كلاسيكية' }, price: 150 },
  { id: 2, category: 'bags', image: 'photo/IMG-20260728-WA0038.jpg', title: { en: 'Embroidered Backpack', fr: 'Sac à Dos Brodé', ar: 'حقيبة ظهر مطرزة' }, price: 120 },
  { id: 3, category: 'canvas', image: 'photo/IMG-20260502-WA0002.jpg', title: { en: 'Textile Wall Canvas', fr: 'Tableau Murale en Tissu', ar: 'لوحة جدارية من القماش' }, price: 250 },
  { id: 4, category: 'canvas', image: 'photo/1000141182.png', title: { en: 'Denim Abstract Canvas', fr: 'Tableau Artistique Denim', ar: 'لوحة الدنيم الفنية' }, price: 250 },
];

let currentLang = 'en';
let cart = [];
let currentFilter = 'all';
let customBase = 'bag';

// ==========================================
// 2. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const yearElem = document.getElementById('year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
  
  renderProducts();
  updateCustomizerPreview();

  // تفعيل تكبير صور الفريق
  const teamImages = document.querySelectorAll('.avatar-placeholder img');
  const modal = document.getElementById('imageModal');
  const zoomedImg = document.getElementById('zoomedImg');

  if (modal && zoomedImg) {
    teamImages.forEach(img => {
      img.addEventListener('click', function() {
        zoomedImg.src = this.src;
        zoomedImg.alt = this.alt;
        modal.style.display = 'flex';
      });
    });
  }
});

// ==========================================
// 3. LANGUAGE SWITCHER
// ==========================================
function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', lang);

  ['en', 'fr', 'ar'].forEach(l => {
    const btn = document.getElementById(`lang-${l}`);
    if (btn) {
      if (l === lang) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const keyPath = elem.getAttribute('data-i18n').split('.');
    let val = t;
    keyPath.forEach(k => { val = val ? val[k] : undefined; });
    if (val) {
      if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
        elem.placeholder = val;
      } else {
        elem.textContent = val;
      }
    }
  });

  renderProducts();
  renderCart();
  updateCustomizerPreview();
}

// ==========================================
// 4. PRODUCTS & FILTERS
// ==========================================
function setProductFilter(filter) {
  currentFilter = filter;
  ['all', 'bags', 'canvas'].forEach(f => {
    const btn = document.getElementById(`filter-${f}`);
    if (btn) {
      if (f === filter) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = products.filter(p => currentFilter === 'all' || p.category === currentFilter);
  const t = translations[currentLang];

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-box" style="height: 220px !important; max-height: 220px !important; overflow: hidden !important; position: relative !important; width: 100% !important;">
        <img src="${product.image}" 
             alt="${product.title[currentLang]}" 
             class="product-img" 
             style="width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important;" />
        <span class="product-tag">Upcycled</span>
      </div>
      
      <div class="product-details">
        <div>
          <h3>${product.title[currentLang]}</h3>
          <p class="product-price">${product.price} MAD</p>
        </div>
        <button onclick="addToCart(${product.id})" class="btn-add">
          🛒 ${t.products.addToCart}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ==========================================
// 5. SHOPPING CART (FIXED & IMPROVED)
// ==========================================
function toggleCart(open) {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  if (open) modal.classList.remove('hidden');
  else modal.classList.add('hidden');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
  toggleCart(true);
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmptyMsg = document.getElementById('cart-empty');
  const checkoutContainer = document.getElementById('cart-checkout-container');
  const cartTotalElem = document.getElementById('cart-total');

  if (!cartItemsContainer) return;

  if (!cart || cart.length === 0) {
    if (cartEmptyMsg) cartEmptyMsg.classList.remove('hidden');
    cartItemsContainer.classList.add('hidden');
    if (checkoutContainer) checkoutContainer.classList.add('hidden');
    if (cartTotalElem) cartTotalElem.innerText = `0 MAD`;
    return;
  }

  if (cartEmptyMsg) cartEmptyMsg.classList.add('hidden');
  cartItemsContainer.classList.remove('hidden');
  if (checkoutContainer) checkoutContainer.classList.remove('hidden');

  let totalMAD = 0;
  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const itemQty = item.qty || 1;
    const itemPrice = Number(item.price) || 0;
    const itemTotal = itemPrice * itemQty;
    totalMAD += itemTotal;

    const title = item.title ? (item.title[currentLang] || item.title['en']) : 'Product';
    const imgSrc = item.image || 'images/products/default.jpg';

    const itemHTML = `
      <div class="cart-item">
        <img src="${imgSrc}" alt="${title}" class="cart-item-img" />
        <div class="cart-item-details">
          <div class="cart-item-title">${title}</div>
          <div class="cart-item-price">${itemPrice} MAD</div>
        </div>
        <div class="quantity-controls">
          <button onclick="updateQty(${item.id}, -1)">-</button>
          <span>${itemQty}</span>
          <button onclick="updateQty(${item.id}, 1)">+</button>
        </div>
        <button onclick="removeItem(${item.id})" class="delete-btn">🗑️</button>
      </div>
    `;
    cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
  });

  if (cartTotalElem) {
    cartTotalElem.innerText = `${totalMAD} MAD`;
  }
}

function sendCartToWhatsApp() {
  const nameInput = document.getElementById('cust-name');
  const cityInput = document.getElementById('cust-city');
  const addressInput = document.getElementById('cust-address');

  const name = nameInput ? nameInput.value.trim() : '';
  const city = cityInput ? cityInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';

  let isValid = true;
  [nameInput, cityInput, addressInput].forEach(input => {
    if (input) {
      if (!input.value.trim()) {
        input.classList.add('input-error');
        isValid = false;
      } else {
        input.classList.remove('input-error');
      }
    }
  });

  if (!isValid) {
    alert('Please fill in all required shipping details (Name, City, and Address).');
    return;
  }

  const t = translations[currentLang];
  let message = `${t.cart.promptMsg}\n\n`;

  let total = 0;
  cart.forEach((item, index) => {
    const itemQty = item.qty || 1;
    const itemPrice = Number(item.price) || 0;
    const itemTotal = itemPrice * itemQty;
    total += itemTotal;
    const title = item.title ? (item.title[currentLang] || item.title['en']) : 'Product';
    
    message += `${index + 1}. ${title} - ${itemQty}x = ${itemTotal} MAD\n`;
  });

  message += `\n💰 ${t.cart.total} ${total} MAD\n\n`;
  message += `📋 Required Details:\n`;
  message += `• Name: ${name}\n`;
  message += `• City: ${city}\n`;
  message += `• Address: ${address}`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// ==========================================
// 6. CUSTOMIZER
// ==========================================
function setCustomBase(base) {
  customBase = base;
  const btnBag = document.getElementById('btn-base-bag');
  const btnCanvas = document.getElementById('btn-base-canvas');

  if (btnBag && btnCanvas) {
    if (base === 'bag') {
      btnBag.classList.add('active');
      btnCanvas.classList.remove('active');
    } else {
      btnCanvas.classList.add('active');
      btnBag.classList.remove('active');
    }
  }

  updateCustomizerPreview();
}

function updateCustomizerPreview() {
  const t = translations[currentLang];
  const patchElem = document.getElementById('custom-patch');
  const notesElem = document.getElementById('custom-notes');

  if (!patchElem || !notesElem) return;

  const patchVal = patchElem.value;
  const notesVal = notesElem.value;

  const previewBase = document.getElementById('preview-base');
  const previewPatch = document.getElementById('preview-patch');
  const notesContainer = document.getElementById('preview-notes-container');
  const previewNotes = document.getElementById('preview-notes');

  if (previewBase) previewBase.textContent = customBase === 'bag' ? t.customizer.bag : t.customizer.canvasArt;
  if (previewPatch) previewPatch.textContent = t.customizer[patchVal];

  if (notesVal.trim() !== '') {
    if (previewNotes) previewNotes.textContent = notesVal;
    if (notesContainer) notesContainer.classList.remove('hidden');
  } else {
    if (notesContainer) notesContainer.classList.add('hidden');
  }
}

function sendCustomQuoteToWhatsApp() {
  const t = translations[currentLang];
  const patchVal = document.getElementById('custom-patch').value;
  const notesVal = document.getElementById('custom-notes').value;

  const baseText = customBase === 'bag' ? t.customizer.bag : t.customizer.canvasArt;
  const patchText = t.customizer[patchVal];

  const message = `🛠️ *Custom Order - LAMSANO SYM*\n\n🔹 *Base Product:* ${baseText}\n🎨 *Patch/Style:* ${patchText}\n📝 *Custom Notes:* ${notesVal || 'None'}\n\nPlease contact me to confirm pricing and details!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

// ==========================================
// 7. MOBILE MENU & UTILS
// ==========================================
function toggleMobileMenu(force) {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  if (typeof force === 'boolean') {
    if (force) menu.classList.remove('hidden');
    else menu.classList.add('hidden');
  } else {
    menu.classList.toggle('hidden');
  }
}

function closeZoom() {
  const modal = document.getElementById('imageModal');
  if (modal) modal.style.display = 'none';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeZoom();
  }
});