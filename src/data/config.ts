export interface BusinessConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  category: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    full: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  mapsUrl: string;
  mapsEmbedUrl: string;
  hours: {
    days: string;
    timing: string;
    emergency: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    googleBusiness: string;
  };
  brandColors: {
    primary: string;
    accent: string;
    secondary: string;
    light: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: "New Keshri Medical Store",
  shortName: "New Keshri",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Retail Pharmacy & Healthcare Center",
  whatsappNumber: "918083954721",
  whatsappDisplay: "+91 80839 54721",
  phone: "+918083954721",
  phoneDisplay: "+91 80839 54721",
  email: "newkeshrimedical@gmail.com",
  address: {
    full: "New Keshri Medical Store, Arwal NH 110, Jehanabad Rd, Arwal Sipah Panchayat, Bihar 804401",
    street: "Arwal NH 110, Jehanabad Rd, Arwal Sipah Panchayat",
    city: "Arwal",
    state: "Bihar",
    pincode: "804401",
    landmark: "On NH-110, Jehanabad-Arwal Highway, Sipah Panchayat"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Keshri+Medical+Store+Arwal+Nh+110+Jehanabad+Rd+Bihar+804401",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.564726219385!2d84.664!3d25.245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzQyLjAiTiA4NMKwNDAnMzAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  hours: {
    days: "Monday – Sunday (All 7 Days)",
    timing: "7:30 AM – 10:00 PM",
    emergency: "24/7 Emergency Medicine Dispatch on Call"
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/918083954721",
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=New+Keshri+Medical+Store+Arwal"
  },
  brandColors: {
    primary: "#0284C7", // Medical Blue
    accent: "#0A8F6A",  // Emerald Medical Green
    secondary: "#0F172A",
    light: "#F8FAFC"
  },
  pwa: {
    enabled: true,
    appName: "New Keshri Medical Store",
    shortName: "New Keshri",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};
