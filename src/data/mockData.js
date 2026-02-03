// ... (Your existing mockData object remains here) ...
export const mockData = {
  businessInfo: {
    name: "Tourki",
    phone: "+972-50-123-4567",
    address: "Reneh Main Street, near Stars Pizzeria, Nazareth",
    wazeCoordinates: { lat: 32.7048, lng: 35.2978 }
  },
  
  workingHours: {
    monday: { open: "08:00", close: "18:00", lunchBreak: "15:00 - 16:00" },
    tuesday: { open: "08:00", close: "18:00", lunchBreak: "15:00 - 16:00" },
    wednesday: { open: "08:00", close: "18:00", lunchBreak: "15:00 - 16:00" },
    thursday: { open: "08:00", close: "18:00", lunchBreak: "15:00 - 16:00" },
    friday: { open: "08:00", close: "18:00", lunchBreak: "15:00 - 16:00" },
    saturday: { open: "08:00", close: "18:00", lunchBreak: "15:00 - 16:00" },
    sunday: { closed: true }
  },
  
  services: [
    { id: 1, name: "Haircut", duration: 30, price: 50, icon: "✂️" },
    { id: 2, name: "Haircut + Beard", duration: 45, price: 80, icon: "💈" },
    { id: 3, name: "Beard Trim", duration: 20, price: 35, icon: "🪒" }
  ]
};

// === NEW: Language Configuration ===
export const languages = [
  { code: 'en', label: 'English', native: 'English', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', native: 'العربية', dir: 'rtl' },
  { code: 'he', label: 'Hebrew', native: 'עברית', dir: 'rtl' }
];

export const translationResources = {
  en: {
    translation: {
      navbar: {
        tagline: "Barber Shop",
        selectLanguage: "Select Language"
      },
      hero: {
        subtitle: "Professional Barber Shop in Reneh Main Street",
        bookBtn: "BOOK NOW",
        scrollText: "Scroll to explore"
      },
      mainContent: {
        visitUs: "Visit Us",
        openHours: "Open Hours",
        services: "Services",
        closed: "Closed",
        min: "min"
      },
      days: {
        monday: "Mon",
        tuesday: "Tue",
        wednesday: "Wed",
        thursday: "Thu",
        friday: "Fri",
        saturday: "Sat",
        sunday: "Sun"
      },
      serviceNames: {
        "Haircut": "Haircut",
        "Haircut + Beard": "Haircut + Beard",
        "Beard Trim": "Beard Trim"
      },
      footer: {
        tagline: "Barber Shop",
        address: "Reneh Main Street, Nazareth",
        followUs: "Follow Us On Social Media",
        copyright: "© {{year}} Tourki Barber Shop. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  ar: {
    translation: {
      navbar: {
        tagline: "صالون حلاقة",
        selectLanguage: "اختر اللغة"
      },
      hero: {
        subtitle: "صالون حلاقة محترف في شارع الرينة الرئيسي",
        bookBtn: "احجز الآن",
        scrollText: "تصفح المزيد"
      },
      mainContent: {
        visitUs: "زورونا",
        openHours: "ساعات العمل",
        services: "خدماتنا",
        closed: "مغلق",
        min: "دقيقة"
      },
      days: {
        monday: "الاثنين",
        tuesday: "الثلاثاء",
        wednesday: "الأربعاء",
        thursday: "الخميس",
        friday: "الجمعة",
        saturday: "السبت",
        sunday: "الأحد"
      },
      serviceNames: {
        "Haircut": "قص شعر",
        "Haircut + Beard": "شعر + ذقن",
        "Beard Trim": "تحديد ذقن"
      },
      footer: {
        tagline: "صالون حلاقة",
        address: "شارع الرينة الرئيسي، الناصرة",
        followUs: "تابعونا على وسائل التواصل الاجتماعي",
        copyright: "© {{year}} صالون تركي. جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة"
      }
    },
  },
  he: {
    translation: {
      navbar: {
        tagline: "מספרת גברים",
        selectLanguage: "בחר שפה"
      },
      hero: {
        subtitle: "מספרה מקצועית ברחוב הראשי ריינה",
        bookBtn: "הזמן עכשיו",
        scrollText: "גלול להמשך"
      },
      mainContent: {
        visitUs: "בקר אותנו",
        openHours: "שעות פתיחה",
        services: "שירותים",
        closed: "סגור",
        min: "דק'"
      },
      days: {
        monday: "שני",
        tuesday: "שלישי",
        wednesday: "רביעי",
        thursday: "חמישי",
        friday: "שישי",
        saturday: "שבת",
        sunday: "ראשון"
      },
      serviceNames: {
        "Haircut": "תספורת",
        "Haircut + Beard": "תספורת + זקן",
        "Beard Trim": "עיצוב זקן"
      },
      footer: {
        tagline: "מספרת גברים",
        address: "רחוב הראשי ריינה, נצרת",
        followUs: "עקבו אחרינו ברשתות החברתיות",
        copyright: "© {{year}} מספרת טורקי. כל הזכויות שמורות.",
        privacy: "מדיניות פרטיות",
        terms: "תנאי שימוש"
      }
    }
  }
};
