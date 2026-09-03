export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I order medicines through WhatsApp?",
    answer: "Ordering is simple: click any WhatsApp button on our website, fill in your required medicine names or upload a clear photo of your doctor's prescription, along with your delivery address in Arwal. Our pharmacist will verify the prescription, check current batch availability, share the exact discounted bill, and arrange quick dispatch.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-2",
    question: "Are all medicines 100% genuine and batch-verified?",
    answer: "Yes, absolutely. New Keshri Medical Store procures all pharmaceutical products exclusively from licensed corporate distributors and authorized manufacturer stockists. Every strip, bottle, and device comes with GST invoices, valid batch numbers, and uncompromised expiry dates.",
    category: "Quality & Authenticity"
  },
  {
    id: "faq-3",
    question: "Do you deliver medicines in Arwal and surrounding areas?",
    answer: "Yes! We provide prompt local delivery across Arwal Sipah Panchayat, Arwal Bazaar, Jehanabad Road corridor, and nearby localities. Urgent and elderly orders are prioritized. You can also opt for swift in-store pickup.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-4",
    question: "How do you store sensitive medicines like Insulin?",
    answer: "We operate medical-grade cold storage units dedicated to vaccines, insulins, eye drops, and biologicals with continuous 2°C to 8°C temperature logging. When dispensing insulins for transit, we provide complimentary insulated ice-packs.",
    category: "Storage & Safety"
  },
  {
    id: "faq-5",
    question: "Can I check medicine availability before visiting the shop?",
    answer: "Yes! Use our instant 'Medicine Stock Checker' on the Services page. If you can't find an item in the online catalog, simply message us on WhatsApp (+91 8083954721) or call us; our team will confirm immediately or arrange it within a few hours.",
    category: "Stock & Inventory"
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer: "We accept all convenient payment options: UPI (Google Pay, PhonePe, Paytm, BHIM), Cash on Delivery / Counter, Debit/Credit Cards, and Net Banking.",
    category: "Billing & Payment"
  },
  {
    id: "faq-7",
    question: "What are your operating hours? Is emergency service available?",
    answer: "We are open Monday through Sunday from 7:30 AM to 10:00 PM. For late-night or urgent emergency medicine needs, you can reach out directly via phone call on +91 8083954721.",
    category: "Hours & Contact"
  }
];

export interface HealthTip {
  id: string;
  title: string;
  excerpt: string;
  fullTip: string;
  date: string;
  tag: string;
  readTime: string;
}

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "Proper Storage of Medicines During Hot Weather in Bihar",
    excerpt: "Why keeping your medicines away from direct sunlight, humidity, and heat is critical for drug stability.",
    fullTip: "Extreme summer heat can degrade active chemical compounds in tablets, syrups, and ointments. Always store oral medicines below 25°C in a dry cupboard away from kitchen steam or bathroom moisture. Insulins and certain eye drops must always remain in the refrigerator (2°C - 8°C), never in the freezer.",
    date: "Latest Pharmacist Advice",
    tag: "Medicine Storage",
    readTime: "2 min read"
  },
  {
    id: "tip-2",
    title: "Why Completing Full Antibiotic Courses Is Essential",
    excerpt: "Stopping antibiotics early when symptoms subside creates dangerous bacterial drug resistance.",
    fullTip: "Even if your fever or throat infection feels resolved within 2-3 days, lingering bacteria remain active. Stopping prematurely allows the strongest microbes to mutate into drug-resistant strains. Always complete the prescribed 5-day or 7-day course unless your doctor advises otherwise.",
    date: "Antibiotic Awareness",
    tag: "Prescription Safety",
    readTime: "3 min read"
  },
  {
    id: "tip-3",
    title: "Daily Blood Pressure Monitoring: Common Mistakes to Avoid",
    excerpt: "Accurate readings require 5 minutes of quiet rest and proper arm cuff placement at heart level.",
    fullTip: "Avoid caffeine, smoking, or brisk walking for 30 minutes before taking a BP reading. Sit with your back supported, feet flat on the floor, and support your arm on a table so the cuff aligns directly with your heart. Never speak during measurement.",
    date: "Heart Health",
    tag: "Health Devices",
    readTime: "2 min read"
  }
];
