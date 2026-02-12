// mockData.js - Updated with all UI translations
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
  
  // (Your existing services/timeslots arrays remain here...)
  services: [
    { id: 1, name: "Haircut", price: 50, icon: "✂️", duration: 45 },
    { id: 2, name: "Haircut + Beard", price: 80, icon: "💈", duration: 60 },
    { id: 3, name: "Beard Trim", price: 35, icon: "🪒", duration: 30 }
  ],

  timeSlots: {
    default: [
      { id: 1, start: "10:00", end: "10:45", isBookable: true },
      { id: 2, start: "10:45", end: "11:30", isBookable: true },
      { id: 3, start: "11:30", end: "12:15", isBookable: true },
      { id: 4, start: "12:15", end: "13:00", isBookable: true },
      { id: 5, start: "13:00", end: "15:30", isBookable: false },
      { id: 6, start: "15:30", end: "16:15", isBookable: true },
      { id: 7, start: "16:15", end: "17:00", isBookable: true },
      { id: 8, start: "17:00", end: "17:45", isBookable: true },
      { id: 9, start: "17:45", end: "18:30", isBookable: true },
      { id: 10, start: "18:30", end: "19:15", isBookable: true },
      { id: 11, start: "19:15", end: "20:00", isBookable: true },
      { id: 12, start: "20:00", end: "20:45", isBookable: true },
      { id: 13, start: "20:45", end: "21:30", isBookable: true },
      { id: 14, start: "21:30", end: "22:00", isBookable: true }
    ]
  },

  bookedSlots: [
    { date: "2026-02-10", slotId: 3, status: "APPROVED" },
    { date: "2026-02-10", slotId: 6, status: "PENDING" },
    { date: "2026-02-11", slotId: 1, status: "APPROVED" }
  ]
};

export const languages = [
  { code: 'en', label: 'English', native: 'English', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', native: 'العربية', dir: 'rtl' },
  { code: 'he', label: 'Hebrew', native: 'עברית', dir: 'rtl' }
];

export const translationResources = {
  en: {
    translation: {
      navbar: { tagline: "Royal Cut", selectLanguage: "Select Language" },
      hero: {
        subtitle: "Professional Barber Shop in Reneh Main Street",
        bookBtn: "BOOK NOW",
        scrollText: "Scroll to explore"
      },
      mainContent: {
        visitUs: "Visit Us",
        openHours: "Open Hours",
        services: "Services",
        products: "Our Products", // ADDED
        closed: "Closed",
        min: "min",
        getInTouch: "Get in Touch", // ADDED
        call: "Call", // ADDED
        location: "Location", // ADDED
        navigate: "Navigate", // ADDED
        startNavigation: "Start Navigation", // ADDED
        getDirections: "Get Directions" // ADDED
      },
      days: {
        monday: "Mon", tuesday: "Tue", wednesday: "Wed", thursday: "Thu",
        friday: "Fri", saturday: "Sat", sunday: "Sun"
      },
      serviceNames: {
        "Haircut": "Haircut",
        "Haircut + Beard": "Haircut + Beard",
        "Beard Trim": "Beard Trim"
      },
      footer: {
        tagline: "Royal Cut",
        address: "Reneh Main Street, Nazareth",
        followUs: "Follow Us On Social Media",
        copyright: "© {{year}} Tourki Barber Shop. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      booking: {
        // ... (Keep existing booking translations)
        pageTitle: "Book Your Appointment",
        steps: { date: "Date", time: "Time", info: "Info", confirm: "Confirm" },
        step1: { title: "Pick Your Date", selected: "Selected" },
        step2: { title: "Pick Your Time", selected: "Selected", noSlots: "No available slots", tryAnother: "Select another date" },
        step3: { title: "Your Information", fullName: "Full Name", namePlaceholder: "Enter your name", nameError: "Name too short", phoneNumber: "Phone Number", phoneHint: "Israeli format: 05X-XXX-XXXX", whatsappCheck: "I have WhatsApp", warningTitle: "Important", whatsappWarn: "Without WhatsApp you won't get updates." },
        step4: { title: "Almost Done!", summary: "Booking Summary", date: "Date", time: "Time", name: "Name", phone: "Phone", whatsapp: "WhatsApp", yes: "Yes", no: "No", whatNext: "What happens next?", reviewInfo: "Your booking will be reviewed", whatsappInfo: "You'll get a confirmation via WhatsApp", reservedInfo: "Slot reserved for you" },
        buttons: { next: "Next", prev: "Back", confirm: "Confirm Booking", backHome: "Back to Home", home: "Back to Home" },
        success: { title: "Success!", message: "Your booking has been submitted", whatsapp: "Check WhatsApp for confirmation.", bookingId: "Booking ID" }
      }
    }
  },
  ar: {
    translation: {
      navbar: { tagline: "صالون حلاقة", selectLanguage: "اختر اللغة" },
      hero: {
        subtitle: "صالون حلاقة محترف في شارع الرينة الرئيسي",
        bookBtn: "احجز الآن",
        scrollText: "تصفح المزيد"
      },
      mainContent: {
        visitUs: "زورونا",
        openHours: "ساعات العمل",
        services: "خدماتنا",
        products: "منتجاتنا", // ADDED
        closed: "مغلق",
        min: "دقيقة",
        getInTouch: "تواصل معنا", // ADDED
        call: "اتصال", // ADDED
        location: "الموقع", // ADDED
        navigate: "الملاحة", // ADDED
        startNavigation: "ابدأ القيادة", // ADDED
        getDirections: "الحصول على الاتجاهات" // ADDED
      },
      days: {
        monday: "الاثنين", tuesday: "الثلاثاء", wednesday: "الأربعاء",
        thursday: "الخميس", friday: "الجمعة", saturday: "السبت", sunday: "الأحد"
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
      },
      booking: {
        // ... (Keep existing booking translations)
        pageTitle: "احجز موعدك",
        steps: { date: "التاريخ", time: "الوقت", info: "بياناتك", confirm: "التأكيد" },
        step1: { title: "اختر التاريخ", selected: "المحدد" },
        step2: { title: "اختر الوقت", selected: "المحدد", noSlots: "لا توجد مواعيد متاحة", tryAnother: "اختر تاريخاً آخر" },
        step3: { title: "بياناتك الشخصية", fullName: "الاسم الكامل", namePlaceholder: "أدخل اسمك", nameError: "الاسم قصير جداً", phoneNumber: "رقم الهاتف", phoneHint: "تنسيق: 05X-XXX-XXXX", whatsappCheck: "لدي واتساب", warningTitle: "ملاحظة", whatsappWarn: "لن تصلك التحديثات بدون واتساب." },
        step4: { title: "مراجعة نهائية", summary: "ملخص الحجز", date: "التاريخ", time: "الوقت", name: "الاسم", phone: "الهاتف", whatsapp: "واتساب", yes: "نعم", no: "لا", whatNext: "ماذا بعد؟", reviewInfo: "سيتم مراجعة طلبك", whatsappInfo: "ستصلك رسالة عبر واتساب", reservedInfo: "تم حجز الوقت لك" },
        buttons: { next: "التالي", prev: "السابق", confirm: "تأكيد الحجز", backHome: "الرئيسية", home: "الرئيسية" },
        success: { title: "تم بنجاح!", message: "تم إرسال طلبك", whatsapp: "راجع واتساب للتأكيد.", bookingId: "رقم الحجز" }
      }
    }
  },
  he: {
    translation: {
      navbar: { tagline: "מספרת גברים", selectLanguage: "בחר שפה" },
      hero: {
        subtitle: "מספרה מקצועית ברחוב הראשי ריינה",
        bookBtn: "הזמן עכשיו",
        scrollText: "גלול להמשך"
      },
      mainContent: {
        visitUs: "בקר אותנו",
        openHours: "שעות פתיחה",
        services: "שירותים",
        products: "המוצרים שלנו", // ADDED
        closed: "סגור",
        min: "דק'",
        getInTouch: "צור קשר", // ADDED
        call: "התקשר", // ADDED
        location: "מיקום", // ADDED
        navigate: "ניווט", // ADDED
        startNavigation: "התחל ניווט", // ADDED
        getDirections: "קבל הוראות הגעה" // ADDED
      },
      days: {
        monday: "שני", tuesday: "שלישי", wednesday: "רביעי",
        thursday: "חמישי", friday: "שישי", saturday: "שבת", sunday: "ראשון"
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
      },
      booking: {
        // ... (Keep existing booking translations)
        pageTitle: "קבע תור",
        steps: { date: "תאריך", time: "שעה", info: "פרטים", confirm: "אישור" },
        step1: { title: "בחר תאריך", selected: "נבחר" },
        step2: { title: "בחר שעה", selected: "נבחר", noSlots: "אין תורים פנויים", tryAnother: "בחר תאריך אחר" },
        step3: { title: "הפרטים שלך", fullName: "שם מלא", namePlaceholder: "הכנס את שמך", nameError: "שם קצר מדי", phoneNumber: "מספר טלפון", phoneHint: "פורמט: 05X-XXX-XXXX", whatsappCheck: "יש לי וואטסאפ", warningTitle: "שים לב", whatsappWarn: "ללא וואטסאפ לא תקבל עדכונים." },
        step4: { title: "אישור סופי", summary: "סיכום הזמנה", date: "תאריך", time: "שעה", name: "שם", phone: "טלפון", whatsapp: "וואטסאפ", yes: "כן", no: "לא", whatNext: "מה קורה עכשיו?", reviewInfo: "ההזמנה תועבר לאישור", whatsappInfo: "תקבל אישור בוואטסאפ", reservedInfo: "התור נשמר עבורך" },
        buttons: { next: "הבא", prev: "הקודם", confirm: "אשר הזמנה", backHome: "חזרה לבית", home: "חזרה לבית" },
        success: { title: "הצלחה!", message: "ההזמנה נשלחה", whatsapp: "אישור נשלח בוואטסאפ.", bookingId: "מספר הזמנה" }
      }
    }
  }
};