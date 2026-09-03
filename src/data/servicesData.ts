export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  popularItems: string[];
  benefits: string[];
  callToAction: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    shortDesc: "100% genuine allopathic medicines from top Indian & global pharmaceutical manufacturers.",
    fullDesc: "We stock authentic, batch-verified prescription medicines across all therapeutic classes including cardiology, diabetes care, gastroenterology, antibiotics, neurology, dermatology, and oncology. Every strip and vial is verified by our qualified pharmacist with strict expiry controls.",
    iconName: "Pill",
    features: [
      "Authentic batch verification & GST billing",
      "Exact brand or bio-equivalent generic options",
      "Dedicated cold storage for insulins and biologicals",
      "Pharmacist dose counseling & interaction check"
    ],
    popularItems: ["Cardiac Care (Telmisartan, Amlodipine)", "Diabetes (Metformin, Glimepiride)", "Antibiotics & Anti-infectives", "Thyroid & Hormone therapy"],
    benefits: ["Zero counterfeit risk", "Discounted MRP prices", "Direct distributor sourcing"],
    callToAction: "Order via WhatsApp Prescription"
  },
  {
    id: "otc-medicines",
    title: "OTC Medicines & First Aid",
    shortDesc: "Quick relief over-the-counter essentials for fever, pain, cold, cough, and indigestion.",
    fullDesc: "Instant access to everyday remedies without delay. From antipyretics and analgesics to antacids, cough syrups, motion sickness tablets, burn creams, and eye/ear drops, New Keshri Medical Store keeps your home first-aid cabinet fully equipped.",
    iconName: "HeartPulse",
    features: [
      "Rapid symptom relief advice",
      "Comprehensive first aid dressing kits",
      "Antacids, digestive enzymes & ORS sachets",
      "Antiseptic liquids (Dettol, Savlon, Betadine)"
    ],
    popularItems: ["Paracetamol & Combiflam", "Pain sprays & balms", "Cough & decongestant syrups", "Povidone iodine & bandages"],
    benefits: ["Immediate counter pickup", "Affordable pricing", "Safe usage directions"],
    callToAction: "Check OTC Stock"
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment & Surgical Supplies",
    shortDesc: "Hospital-grade home diagnostic tools, surgical disposables, and mobility aids.",
    fullDesc: "We provide certified medical apparatus for patient home monitoring and post-operative care. Products include digital BP monitors, glucometers, nebulizers, pulse oximeters, vaporizers, surgical gloves, IV sets, catheters, crepe bandages, and orthopedic supports.",
    iconName: "Activity",
    features: [
      "Omron, Dr Trust, Accu-Chek authorized devices",
      "Orthopedic belts (Lumbo-sacral, knee braces, cervical collars)",
      "Sterile disposables: syringes, cannula, gauze, cotton rolls",
      "Warranty support and device demonstration"
    ],
    popularItems: ["Digital BP Monitors", "Glucometers & Test Strips", "Compressor Nebulizers", "Orthopedic Braces & Belts"],
    benefits: ["Clinic-accurate home monitoring", "Tested reliability", "Free battery & fitting guidance"],
    callToAction: "Inquire Equipment"
  },
  {
    id: "baby-mother-care",
    title: "Baby Care & Mother Care",
    shortDesc: "Gentle, dermatologist-approved nourishment, formulas, diapers, and maternal essentials.",
    fullDesc: "Complete nurturing support for newborns, infants, toddlers, and new mothers. We carry leading pediatrician-recommended formulas, feeding accessories, baby massage oils, diaper rash treatments, wet wipes, and maternal lactation supplements.",
    iconName: "Baby",
    features: [
      "Himalaya, Sebamed, Johnson's, Mothercare brands",
      "Infant nutritional formulas (Nan Pro, Similac, Lactogen)",
      "Anti-rash breathable diaper pants all sizes (NB to XXL)",
      "Maternal nutritional powders & breast pumps"
    ],
    popularItems: ["Infant Formula & Cereals", "Pampers & MamyPoko Diapers", "Baby Wash & Calming Massage Oils", "Gripe water & teething gels"],
    benefits: ["Hypoallergenic safety", "Fresh manufacturing batches", "Complete mother & baby checklist"],
    callToAction: "Order Baby Essentials"
  },
  {
    id: "supplements-wellness",
    title: "Health Supplements & Nutrition",
    shortDesc: "Multivitamins, calcium, protein powders, immune boosters, and Ayurvedic tonics.",
    fullDesc: "Optimize your health, immunity, and stamina with balanced dietary supplements. Our inventory includes clinically proven vitamins (Vitamin D3, B-Complex, Vitamin C, Zinc), omega-3 fish oils, geriatric tonics, and trusted classical Ayurvedic remedies.",
    iconName: "ShieldCheck",
    features: [
      "Multivitamin & multimineral capsules",
      "Calcium + Vitamin D3 for bone density",
      "Herbal immunity tonics (Chyawanprash, Liv-52, Giloy)",
      "Diabetic protein powders & nutritional shakes"
    ],
    popularItems: ["Shelcal 500 / HD", "Becadexamin / Becosules", "Ensure & Protinex Health Drinks", "Himalaya Herbal Tonics"],
    benefits: ["Clinically approved formulations", "Immunity enhancement", "Authentic wellness brands"],
    callToAction: "Find Wellness Supplements"
  },
  {
    id: "home-care-senior",
    title: "Home Care & Senior Care",
    shortDesc: "Dignified, comfortable care supplies for seniors, bedridden patients, and recovery.",
    fullDesc: "Comprehensive patient care support for families caring for senior citizens or recovering patients at home. We stock adult diapers, underpads, air mattresses for bedsore prevention, walking sticks, commode chairs, and hygiene wipes.",
    iconName: "Home",
    features: [
      "Adult pull-up diapers & bed-protector underpads",
      "Anti-bedsore bubble ripple air mattresses",
      "Walking sticks, quadripod canes & folding walkers",
      "Sanitizing body wash wipes & disinfectants"
    ],
    popularItems: ["Friends / Dignity Adult Diapers", "Underpad Sheets (60x90cm)", "Air Mattress with Compressor Pump", "Foldable Aluminium Walkers"],
    benefits: ["Gentle patient comfort", "Discreet home delivery in Arwal", "Durable assistive hardware"],
    callToAction: "Inquire Senior Supplies"
  },
  {
    id: "personal-care-hygiene",
    title: "Personal Care & Hygiene",
    shortDesc: "Everyday sanitary products, antiseptic skin care, oral hygiene, and grooming.",
    fullDesc: "Maintain daily hygiene and personal protection. We carry sanitary napkins, intimate hygiene washes, medicated soaps, antidandruff shampoos, oral rinses, sanitizers, and dermatological skin lotions.",
    iconName: "Sparkles",
    features: [
      "Sanitary protection & organic cotton pads",
      "Medicated dermatological soaps (Ketoconazole, Permethrin)",
      "Antiseptic mouthwashes & sensitive toothpastes",
      "Hand sanitizers, alcohol rubs, face masks"
    ],
    popularItems: ["Whisper / Stayfree Pads", "Betadine Germicide Gargle", "Sensodyne Rapid Relief", "Moisturizing skin barriers"],
    benefits: ["Top hygienic quality", "Everyday household rates", "Packaged fresh"],
    callToAction: "Order Personal Care"
  },
  {
    id: "cold-chain-insulin",
    title: "Cold Chain Biologicals & Vaccines",
    shortDesc: "Guaranteed 2°C – 8°C refrigerator storage for insulins, vaccines, and injectables.",
    fullDesc: "Medicines that lose potency under room temperatures receive dedicated, round-the-clock temperature monitoring at New Keshri Medical Store with generator backup. We ensure your insulin and injectables remain 100% potent from our fridge to your hands.",
    iconName: "Snowflake",
    features: [
      "Continuous digital temperature logging (2°C - 8°C)",
      "Free ice-gel pack wrapping for local transit in Arwal",
      "Full range of human insulins and insulin pen cartridges",
      "Tetanus toxoid, anti-rabies, and essential biologics"
    ],
    popularItems: ["Human Mixtard & Actrapid Insulins", "Lantus & Toujeo Solostar Pens", "Tetanus Vaccine (TT Injection)", "Erythropoietin injections"],
    benefits: ["Zero heat degradation", "Complimentary cool-pack carry", "Expert handling"],
    callToAction: "Check Cold Chain Stock"
  }
];
