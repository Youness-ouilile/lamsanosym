// 📦 LAMSANO SYM - Products Database
// 
// أضف أو عدّل المنتجات هنا فقط دون الحاجة لتعديل الكود!
// Just add products here - no code changes needed!
// 
// كل منتج يحتوي على:
// - id: رقم فريد
// - name: {en, fr, ar} الأسماء بثلاث لغات
// - description: {en, fr, ar} الوصف بثلاث لغات
// - category: الفئة (bags أو canvas)
// - price: السعر
// - rating: التقييم (من 0 إلى 5)
// - image: رابط الصورة

export const products = [
  // ============ BAGS CATEGORY ============
  
  {
    id: 1,
    name: { 
      en: 'Eco Denim Crossbody', 
      fr: 'Sac Bandoulière Denim Écologique', 
      ar: 'حقيبة الدينم البيئية' 
    },
    category: 'bags',
    price: 150,
    rating: 4.8,
    image: 'public/products/1000140605.png',
    description: { 
      en: 'Handmade upcycled denim crossbody bag with leather accents and adjustable strap. Perfect for daily use.',
      fr: 'Sac à main bandoulière en denim upcyclé fabriqué à la main avec détails en cuir et sangle réglable.',
      ar: 'حقيبة يد مصنوعة يدويًا من الدينم المُعاد تدويره مع تفاصيل جلدية وحزام قابل للتعديل.' 
    }
  },

  {
    id: 2,
    name: { 
      en: 'Urban Denim Tote', 
      fr: 'Sac à Main Denim Urbain', 
      ar: 'حقيبة الدينم الحضرية' 
    },
    category: 'bags',
    price: 130,
    rating: 4.9,
    image: 'public/products/IMG-20260728-WA0038.jpg',
    description: { 
      en: 'Spacious tote bag made from reclaimed denim patches. Great for shopping, work, or travel.',
      fr: 'Grand sac de transport spacieux fabriqué à partir de patchs de denim récupérés.',
      ar: 'حقيبة كبيرة مصنوعة من قطع الدينم المستعادة. مثالية للتسوق والعمل والسفر.' 
    }
  },

  {
    id: 3,
    name: { 
      en: 'Denim Clutch Wallet', 
      fr: 'Portefeuille Pochette Denim', 
      ar: 'محفظة الدينم الصغيرة' 
    },
    category: 'bags',
    price: 150,
    rating: 4.6,
    image: 'public/products/IMG-20260728-WA0034.jpg',
    description: { 
      en: 'Compact wallet with zippered compartments. Perfect for organizing cards, coins, and essentials.',
      fr: 'Portefeuille compact avec compartiments zippés pour les cartes et pièces.',
      ar: 'محفظة صغيرة مع أقسام مضغوطة لتنظيم البطاقات والعملات المعدنية.' 
    }
  },

  {
    id: 4,
    name: { 
      en: 'Premium Denim Backpack', 
      fr: 'Sac à Dos Denim Premium', 
      ar: 'حقيبة الظهر الدينم المتميزة' 
    },
    category: 'bags',
    price: 85,
    rating: 4.9,
    image: 'https://images.unslash.com/photo-1553062407-98eeb64c6a62?w=500&h500&fit=crop',
    description: { 
      en: 'Large capacity backpack with laptop compartment, multiple pockets, and padded straps. Ideal for students and travelers.',
      fr: 'Sac à dos de grande capacité avec compartiment pour ordinateur portable et sangles rembourrées.',
      ar: 'حقيبة ظهر كبيرة مع حجرة كمبيوتر محمول وأحزمة مبطنة. مثالية للطلاب والمسافرين.' 
    }
  },

  {
    id: 5,
    name: { 
      en: 'Vintage Denim Shoulder Bag', 
      fr: 'Sac à Épaule Denim Vintage', 
      ar: 'حقيبة الكتف الدينم العتيقة' 
    },
    category: 'bags',
    price: 50,
    rating: 4.7,
    image: 'https://images.unslash.com/photo-1590874965295-c91131b0aeae?w=500&h=500&fit=crop',
    description: { 
      en: 'Stylish vintage-inspired shoulder bag made from reclaimed denim. Perfect for casual outings.',
      fr: 'Sac à épaule élégant inspiré du style vintage, fabriqué à partir de denim récupéré.',
      ar: 'حقيبة كتف أنيقة مستوحاة من الأسلوب العتيق، مصنوعة من الدينم المعاد تدويره.' 
    }
  },

  {
    id: 6,
    name: { 
      en: 'Eco Denim Mini Pouch', 
      fr: 'Petite Pochette Denim Écologique', 
      ar: 'حقيبة الدينم الصغيرة البيئية' 
    },
    category: 'bags',
    price: 18,
    rating: 4.5,
    image: 'https://images.unsplah.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    description: { 
      en: 'Small pouch perfect for storing keys, coins, or small accessories. Lightweight and durable.',
      fr: 'Petite pochette parfaite pour ranger les clés, les pièces ou les petits accessoires.',
      ar: 'حقيبة صغيرة مثالية لتخزين المفاتيح والعملات المعدنية والملحقات الصغيرة.' 
    }
  },

  // ============ CANVAS ARTWORKS CATEGORY ============

  {
    id: 7,
    name: { 
      en: 'Canvas Wall Art I', 
      fr: 'Art Mural sur Toile I', 
      ar: 'لوحة فنية جدارية I' 
    },
    category: 'canvas',
    price: 250,
    rating: 4.7,
    image: 'public/products/1000141182.png',
    description: { 
      en: 'Hand-painted abstract canvas using recycled fabric dyes. Unique art piece for any space.',
      fr: 'Toile abstraite peinte à la main avec des teintures de tissu recyclées. Pièce d\'art unique.',
      ar: 'لوحة فنية مرسومة يدويًا باستخدام الأصباغ الحبرية المعاد تدويره. قطعة فنية فريدة.' 
    }
  },

  {
    id: 8,
    name: { 
      en: 'Canvas Wall Art II', 
      fr: 'Art Mural sur Toile II', 
      ar: 'لوحة فنية جدارية II' 
    },
    category: 'canvas',
    price: 75,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=500&fit=crop',
    description: { 
      en: 'Geometric fabric collage on premium canvas. Modern design made from upcycled materials.',
      fr: 'Collage de tissu géométrique sur toile premium. Design moderne fabriqué avec des matériaux upcyclés.',
      ar: 'تجميع النسيج الهندسي على لوحة قماشية فاخرة. تصميم حديث مصنوع من مواد معاد تدويره.' 
    }
  },

  {
    id: 9,
    name: { 
      en: 'Sustainable Art Print I', 
      fr: 'Impression Artistique Durable I', 
      ar: 'طباعة فنية مستدامة I' 
    },
    category: 'canvas',
    price: 45,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop',
    description: { 
      en: 'Eco-friendly art print on recycled canvas. Beautiful addition to your home decor.',
      fr: 'Impression artistique écologique sur toile recyclée. Bel ajout à votre décoration intérieure.',
      ar: 'طباعة فنية صديقة للبيئة على لوحة معاد تدويره. إضافة جميلة إلى ديكور منزلك.' 
    }
  },

  {
    id: 10,
    name: { 
      en: 'Colorful Fabric Canvas', 
      fr: 'Toile Textile Colorée', 
      ar: 'لوحة نسيج ملونة' 
    },
    category: 'canvas',
    price: 55,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=500&fit=crop',
    description: { 
      en: 'Vibrant fabric art piece featuring recycled textile scraps in a beautiful composition.',
      fr: 'Pièce d\'art textile vibrante avec des morceaux de textile recyclés dans une belle composition.',
      ar: 'قطعة فنية نسيجية نابضة بالحياة تعرض قصاصات النسيج المعاد تدويره.' 
    }
  },

  {
    id: 11,
    name: { 
      en: 'Minimalist Canvas Art', 
      fr: 'Art Toile Minimaliste', 
      ar: 'فن قماشي بسيط' 
    },
    category: 'canvas',
    price: 60,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop',
    description: { 
      en: 'Clean and simple minimalist design on canvas using natural dyes from recycled materials.',
      fr: 'Design minimaliste épuré et simple sur toile utilisant des colorants naturels.',
      ar: 'تصميم بسيط وأنيق على لوحة قماشية باستخدام الأصباغ الطبيعية.' 
    }
  },

  {
    id: 12,
    name: { 
      en: 'Mixed Media Canvas', 
      fr: 'Toile Technique Mixte', 
      ar: 'لوحة وسائط متعددة' 
    },
    category: 'canvas',
    price: 80,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=500&fit=crop',
    description: { 
      en: 'Unique mixed media artwork combining recycled denim, canvas, and hand-painted elements.',
      fr: 'Œuvre d\'art technique mixte unique combinant denim recyclé et éléments peints à la main.',
      ar: 'عمل فني وسائط متعددة فريد يجمع بين الدينم المعاد تدويره والعناصر المرسومة بيد.' 
    }
  },

  // ============ SPECIAL EDITION ============

  {
    id: 13,
    name: { 
      en: 'Limited Edition Denim Art', 
      fr: 'Art Denim Édition Limitée', 
      ar: 'فن الدينم الإصدار المحدود' 
    },
    category: 'canvas',
    price: 150,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop',
    description: { 
      en: 'Exclusive limited edition artwork made from rare upcycled denim pieces. Only 5 copies available.',
      fr: 'Œuvre d\'art exclusive en édition limitée fabriquée à partir de pièces rares de denim upcyclé.',
      ar: 'عمل فني حصري محدود الإصدار مصنوع من قطع دينم نادرة معاد تدويره. 5 نسخ فقط متاحة.' 
    }
  },

  {
    id: 14,
    name: { 
      en: 'Eco-Luxury Tote Bag', 
      fr: 'Sac à Main Écologique Luxe', 
      ar: 'حقيبة اليد الفاخرة البيئية' 
    },
    category: 'bags',
    price: 120,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1590874965295-c91131b0aeae?w=500&h=500&fit=crop',
    description: { 
      en: 'Premium handcrafted tote bag featuring designer denim patterns and genuine leather details.',
      fr: 'Sac de transport premium fabriqué à la main avec des détails en cuir véritable.',
      ar: 'حقيبة يد فاخرة مصنوعة يدويًا مع تفاصيل جلدية حقيقية وأنماط دينم مصممة.' 
    }
  },

  {
    id: 15,
    name: { 
      en: 'Artist Collaboration Canvas', 
      fr: 'Toile Collaboration Artiste', 
      ar: 'لوحة تعاون الفنان' 
    },
    category: 'canvas',
    price: 200,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=500&fit=crop',
    description: { 
      en: 'Exclusive collaboration with renowned artists. Each piece is numbered and signed. Truly one-of-a-kind.',
      fr: 'Collaboration exclusive avec des artistes reconnus. Chaque pièce est numérotée et signée.',
      ar: 'تعاون حصري مع فنانين مشهورين. كل قطعة مرقمة وموقعة من قبل الفنان.' 
    }
  },
];

export default products;
