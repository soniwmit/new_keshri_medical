export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'devices' | 'surgical' | 'baby';
  imageUrl: string;
  caption: string;
  badge: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Well-Organized Medicine Dispensary & Shelves",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63c25b3cf542?auto=format&fit=crop&w=1000&q=80",
    caption: "Categorized, batch-tracked medicine racks systematically arranged according to therapeutic action for fast and accurate dispensing.",
    badge: "Pharmacy Shelves"
  },
  {
    id: "gal-2",
    title: "Storefront & Prescription Counseling Counter",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    caption: "Spacious customer service counter on NH-110 Jehanabad Road, Arwal, offering one-on-one dosage counseling by our registered pharmacist.",
    badge: "Front View & Counter"
  },
  {
    id: "gal-3",
    title: "Cold-Chain Refrigerated Biologicals & Insulins",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    caption: "High-grade pharmaceutical refrigeration units maintaining continuous 2°C – 8°C temperature logs for insulins and vaccines.",
    badge: "Cold Chain Storage"
  },
  {
    id: "gal-4",
    title: "Digital Blood Pressure & Cardiac Monitors",
    category: "devices",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    caption: "Omron and Dr Trust upper-arm digital BP instruments with free on-spot measurement and testing assistance.",
    badge: "Diagnostics & Devices"
  },
  {
    id: "gal-5",
    title: "Blood Glucose Monitoring Kits & Strips",
    category: "devices",
    imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=1000&q=80",
    caption: "Accu-Chek, OneTouch and Contour glucometers with freshly stocked, long-expiry test strips and sterile lancets.",
    badge: "Diabetes Monitoring"
  },
  {
    id: "gal-6",
    title: "Baby Nutrition, Diapers & Gentle Skincare",
    category: "baby",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
    caption: "Dedicated pediatric section with infant formulas, Himalaya gentle baby washes, rash creams, and all diaper sizes.",
    badge: "Baby & Mother Care"
  },
  {
    id: "gal-7",
    title: "Sterile Surgical Dressings & First Aid Essentials",
    category: "surgical",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=80",
    caption: "Clinical sterile cotton rolls, gauze pads, micropore tapes, crepe bandages, and povidone-iodine antiseptic solutions.",
    badge: "Surgical Supplies"
  },
  {
    id: "gal-8",
    title: "Orthopedic Belts, Collars & Rehabilitation Aids",
    category: "surgical",
    imageUrl: "https://images.unsplash.com/photo-1583912267550-d4190895c106?auto=format&fit=crop&w=1000&q=80",
    caption: "Ergonomic lumbosacral supports, cervical collars, knee braces, wrist splints, and senior mobility walkers.",
    badge: "Orthopedics & Mobility"
  },
  {
    id: "gal-9",
    title: "Comprehensive Wellness & Multivitamin Rack",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=80",
    caption: "Certified nutritional supplements, calcium tablets, fish oils, liver tonics, and natural herbal immunity boosters.",
    badge: "Supplements & Wellness"
  }
];
