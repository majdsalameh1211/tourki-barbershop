// mockData.js - Complete with 5-step booking translations
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
    { id: 1, name: "Haircut", price: 50, icon: "✂️" },
    { id: 2, name: "Haircut + Beard", price: 80, icon: "💈" },
    { id: 3, name: "Beard Trim", price: 35, icon: "🪒" }
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
      navbar: { tagline: "Barber Shop", selectLanguage: "Select Language" },
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
        monday: "Mon", tuesday: "Tue", wednesday: "Wed", thursday: "Thu",
        friday: "Fri", saturday: "Sat", sunday: "Sun"
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
      },
      booking: {
        pageTitle: "Book Your Appointment",
        steps: {
          service: "Service",
          date: "Date",
          time: "Time",
          info: "Info",
          confirm: "Confirm"
        },
        step1: {
          title: "Choose Your Service",
          select: "Select"
        },
        step2: {
          title: "Pick Your Date",
          selected: "Selected"
        },
        step3: {
          title: "Pick Your Time",
          selected: "Selected",
          noSlots: "No available slots for this date"
        },
        step4: {
          title: "Almost Done!",
          fullName: "Full Name",
          phoneNumber: "Phone Number",
          whatsappCheck: "I have WhatsApp on this number",
          whatsappWarn: "⚠️ Without WhatsApp, you won't receive updates."
        },
        step5: {
          title: "Confirm Your Booking",
          summary: "Summary",
          service: "Service",
          date: "Date",
          time: "Time",
          name: "Name",
          phone: "Phone",
          whatsapp: "WhatsApp",
          yes: "Yes",
          no: "No",
          info: "Your booking will be reviewed shortly",
          back: "← Back"
        },
        buttons: {
          next: "Next",
          confirm: "Confirm",
          backHome: "Back to Home"
        },
        success: {
          title: "Success!",
          message: "Your booking has been submitted",
          whatsapp: "We've sent you a WhatsApp confirmation.",
          bookingId: "Booking ID"
        }
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
        closed: "مغلق",
        min: "دقيقة"
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
        pageTitle: "احجز موعدك",
        steps: {
          service: "الخدمة",
          date: "التاريخ",
          time: "الوقت",
          info: "المعلومات",
          confirm: "التأكيد"
        },
        step1: { title: "اختر خدمتك", select: "اختر" },
        step2: { title: "اختر التاريخ", selected: "المحدد" },
        step3: { title: "اختر الوقت", selected: "المحدد", noSlots: "لا توجد مواعيد" },
        step4: {
          title: "أوشكت على الانتهاء!",
          fullName: "الاسم الكامل",
          phoneNumber: "رقم الهاتف",
          whatsappCheck: "لدي واتساب",
          whatsappWarn: "⚠️ بدون واتساب لن تتلقى التحديثات."
        },
        step5: {
          title: "أكد حجزك",
          summary: "ملخص",
          service: "الخدمة",
          date: "التاريخ",
          time: "الوقت",
          name: "الاسم",
          phone: "الهاتف",
          whatsapp: "واتساب",
          yes: "نعم",
          no: "لا",
          info: "سيتم مراجعة حجزك قريباً",
          back: "← رجوع"
        },
        buttons: { next: "التالي", confirm: "تأكيد", backHome: "العودة" },
        success: {
          title: "نجح!",
          message: "تم إرسال حجزك",
          whatsapp: "أرسلنا لك تأكيداً عبر واتساب.",
          bookingId: "رقم الحجز"
        }
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
        closed: "סגור",
        min: "דק'"
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
        pageTitle: "קבע תור",
        steps: {
          service: "שירות",
          date: "תאריך",
          time: "שעה",
          info: "פרטים",
          confirm: "אישור"
        },
        step1: { title: "בחר שירות", select: "בחר" },
        step2: { title: "בחר תאריך", selected: "נבחר" },
        step3: { title: "בחר שעה", selected: "נבחר", noSlots: "אין תורים פנויים" },
        step4: {
          title: "כמעט סיימנו!",
          fullName: "שם מלא",
          phoneNumber: "מספר טלפון",
          whatsappCheck: "יש לי וואטסאפ",
          whatsappWarn: "⚠️ בלי וואטסאפ לא תקבל עדכונים."
        },
        step5: {
          title: "אשר את התור",
          summary: "סיכום",
          service: "שירות",
          date: "תאריך",
          time: "שעה",
          name: "שם",
          phone: "טלפון",
          whatsapp: "וואטסאפ",
          yes: "כן",
          no: "לא",
          info: "התור שלך יאושר בקרוב",
          back: "← חזור"
        },
        buttons: { next: "הבא", confirm: "אשר", backHome: "חזרה" },
        success: {
          title: "הצלחה!",
          message: "ההזמנה נשלחה",
          whatsapp: "שלחנו לך אישור בוואטסאפ.",
          bookingId: "מספר הזמנה"
        }
      }
    }
  }
};
