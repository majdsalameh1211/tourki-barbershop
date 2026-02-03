export const mockData = {
  businessInfo: {
    name: "Tourki",
    phone: "+972-50-123-4567",
    address: "Reneh Main Street, near Stars Pizzeria, Nazareth",
    wazeCoordinates: { lat: 32.7048, lng: 35.2978 } // Nazareth coordinates
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
    {
      id: 1,
      name: "Haircut",
      duration: 30,
      price: 50,
      icon: "✂️"
    },
    {
      id: 2,
      name: "Haircut + Beard",
      duration: 45,
      price: 80,
      icon: "💈"
    },
    {
      id: 3,
      name: "Beard Trim",
      duration: 20,
      price: 35,
      icon: "🪒"
    }
  ]
};