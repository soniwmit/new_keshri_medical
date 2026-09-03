import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../data/config';
import { SERVICES_DATA } from '../data/servicesData';
import { FAQ_DATA, HEALTH_TIPS } from '../data/faqData';
import { 
  PhoneCall, 
  MessageSquare, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Award, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake, 
  Star, 
  CheckCircle2, 
  Pill, 
  Snowflake, 
  Activity, 
  Baby, 
  Mail, 
  Check, 
  HelpCircle,
  Stethoscope,
  ChevronRight
} from 'lucide-react';

interface HomeProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppOrder }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  // Top 6 featured services for preview
  const featuredServices = SERVICES_DATA.slice(0, 6);
  // 4 preview FAQs
  const previewFaqs = FAQ_DATA.slice(0, 4);

  return (
    <div className="w-full">
      <SEO
        title="Home - Trusted Pharmacy in Arwal, Bihar"
        description="New Keshri Medical Store provides 100% genuine medicines, healthcare devices, surgical supplies, baby care, and fast WhatsApp delivery in Arwal, Bihar."
        canonicalPath="/"
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#141412] text-[#F9F7F2] pt-12 sm:pt-20 pb-20 sm:pb-28 border-b border-[#2C2B27]">
        {/* Ambient background glow and overlay image */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586015555751-63c25b3cf542?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1A4329]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C19] border border-[#2C2B27] editorial-tag text-[#9C7B38]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C7B38]" />
                <span>Serving Arwal & Surrounding Districts with Trust</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Your Trusted <span className="italic font-serif text-[#9C7B38]">Medical Store</span> for Genuine Medicines
              </h1>

              <p className="text-base sm:text-lg text-[#C4BEB2] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* 3 Core Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="px-6 py-3.5 rounded-lg bg-[#F9F7F2] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#1A4329]" />
                  <span>Call Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenWhatsAppOrder()}
                  className="px-6 py-3.5 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] border border-[#2D603E] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#9C7B38]" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-lg bg-[#1C1C19] hover:bg-[#252521] text-[#E5E0D8] font-semibold text-xs uppercase tracking-wider border border-[#2C2B27] flex items-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#9C7B38]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Key Highlights Ribbon */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#2C2B27] text-center lg:text-left">
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#F9F7F2]">100%</p>
                  <p className="editorial-tag text-[#8E8A80] mt-0.5">Genuine Medicines</p>
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#9C7B38]">2°C – 8°C</p>
                  <p className="editorial-tag text-[#8E8A80] mt-0.5">Cold Chain Storage</p>
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#F9F7F2]">7:30 AM</p>
                  <p className="editorial-tag text-[#8E8A80] mt-0.5">Daily Morning Opening</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Card: Prescription Quick Dispatch */}
            <div className="lg:col-span-5">
              <div className="bg-[#1C1C19] rounded-xl p-6 sm:p-7 border border-[#2C2B27] shadow-xs text-[#F9F7F2] space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#1A4329] text-[#9C7B38] border border-[#12301D]">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#F4EFE6]">Order in 3 Simple Steps</h3>
                    <p className="text-xs text-[#A8A49A]">Fast prescription verification & dispatch</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141412] border border-[#2C2B27]">
                    <span className="w-5 h-5 rounded-md bg-[#1A4329] text-[#F9F7F2] flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-[#F4EFE6]">Click WhatsApp Order</p>
                      <p className="text-[#8E8A80]">Take a quick photo of your prescription or write names.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141412] border border-[#2C2B27]">
                    <span className="w-5 h-5 rounded-md bg-[#1A4329] text-[#F9F7F2] flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-[#F4EFE6]">Pharmacist Verification</p>
                      <p className="text-[#8E8A80]">We verify batch, dosage and calculate discounted bill.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141412] border border-[#2C2B27]">
                    <span className="w-5 h-5 rounded-md bg-[#1A4329] text-[#F9F7F2] flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-[#F4EFE6]">Swift Doorstep Delivery</p>
                      <p className="text-[#8E8A80]">Delivered directly to your home in Arwal or ready for pickup.</p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenWhatsAppOrder()}
                  className="w-full py-3 px-4 rounded-lg bg-[#1A4329] hover:bg-[#12301D] font-bold text-xs uppercase tracking-wider text-[#F9F7F2] flex items-center justify-center gap-2 border border-[#2D603E] shadow-xs cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#9C7B38]" />
                  <span>Send Doctor Prescription on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Storefront Image preview */}
            <div className="relative rounded-xl overflow-hidden shadow-xs border border-[#E5E0D8] dark:border-[#2C2B27]">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                alt="New Keshri Medical Storefront Arwal"
                className="w-full h-80 sm:h-96 object-cover transform hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#F9F7F2]/95 dark:bg-[#141412]/95 backdrop-blur-md text-xs space-y-1 shadow-xs border border-[#E5E0D8] dark:border-[#2C2B27]">
                <p className="font-serif font-bold text-[#1A1A1A] dark:text-[#F4EFE6] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82]" />
                  <span>New Keshri Medical Store &bull; Arwal</span>
                </p>
                <p className="text-[#5E5B54] dark:text-[#A8A49A]">
                  NH-110, Jehanabad Road, Arwal Sipah Panchayat, Bihar 804401
                </p>
              </div>
            </div>

            {/* Content Preview */}
            <div className="space-y-5">
              <div className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                About Our Pharmacy
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight leading-tight">
                Committed to Authentic Healthcare & Family Wellness in Arwal
              </h2>
              <p className="text-sm text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Founded with a steadfast mission to provide dependable, genuine medicines at honest prices, <strong>New Keshri Medical Store</strong> stands as a pillar of health for families across Arwal Sipah Panchayat and neighboring areas.
              </p>
              <p className="text-sm text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Led by qualified, registered pharmaceutical professionals, we adhere to strict cold-chain protocols, verified batch procurement from licensed distributors, and patient-first dosage guidance.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-[#F4EFE6]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
                  <span>Licensed Chemist & Druggist</span>
                </div>
                <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-[#F4EFE6]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
                  <span>Qualified Pharmacist on Duty</span>
                </div>
                <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-[#F4EFE6]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
                  <span>Batch-Tracked Inventory</span>
                </div>
                <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-[#F4EFE6]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
                  <span>Arwal Doorstep Delivery</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1A1A1A] hover:bg-black dark:bg-[#1A4329] dark:hover:bg-[#12301D] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] dark:bg-[#181816] border-y border-[#E5E0D8] dark:border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                Healthcare Solutions
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight mt-1">
                Featured Pharmaceutical Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1A4329] dark:text-[#64AB82] hover:underline self-start sm:self-auto"
            >
              <span>View All Services & Stock Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-[#1C1C19] rounded-xl p-6 shadow-xs hover:border-[#1A4329] dark:hover:border-[#64AB82] border border-[#E5E0D8] dark:border-[#2C2B27] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] flex items-center justify-center border border-[#1A4329]/20 transition-transform group-hover:scale-105">
                    {service.iconName === 'Pill' && <Pill className="w-5 h-5" />}
                    {service.iconName === 'HeartPulse' && <Activity className="w-5 h-5" />}
                    {service.iconName === 'Activity' && <Activity className="w-5 h-5" />}
                    {service.iconName === 'Baby' && <Baby className="w-5 h-5" />}
                    {service.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                    {service.iconName === 'Home' && <HeartHandshake className="w-5 h-5" />}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E5E0D8] dark:border-[#2C2B27] flex items-center justify-between">
                  <button
                    onClick={() => onOpenWhatsAppOrder(service.title)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#1A4329] dark:text-[#64AB82] hover:text-[#12301D] flex items-center gap-1"
                  >
                    <span>Order on WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to="/services"
                    className="text-[11px] uppercase tracking-wider text-[#8E8A80] hover:text-[#1A1A1A] dark:hover:text-[#F4EFE6]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider shadow-xs transition-all"
            >
              <span>Explore All Categories & Check Inventory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              The New Keshri Difference
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Why Doctors & Families Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A]">
              Upholding the highest standards in medicine storage, verification, and healthcare fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">100% Genuine & Batch-Tracked</h3>
              <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Zero tolerance for spurious or grey-market medicines. Sourced straight from certified manufacturer distributors.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3E9] dark:bg-[#9C7B38]/20 text-[#9C7B38] flex items-center justify-center font-bold">
                <Snowflake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Certified Cold Chain Care</h3>
              <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Continuous 2°C – 8°C refrigeration for insulins and vaccines with backup generators and ice-pack transport.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Expert Pharmacist Guidance</h3>
              <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Clear advice on dosages, meal timings, drug interactions, and affordable high-potency generic substitutions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAE5DB] dark:bg-[#2A2925] text-[#1A1A1A] dark:text-[#F4EFE6] flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Fast Doorstep Delivery</h3>
              <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Doorstep dispatch across Arwal Sipah Panchayat, Arwal Bazaar, and highway communities on simple WhatsApp order.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3E9] dark:bg-[#9C7B38]/20 text-[#9C7B38] flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Fair & Transparent Pricing</h3>
              <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Full GST compliant invoices with honest discounts on chronic prescriptions for diabetes, cardiac, and senior care.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Emergency Phone Support</h3>
              <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                Open early from 7:30 AM to 10:00 PM every single day, with 24/7 on-call dispatch for urgent medical emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS & HEALTH ESSENTIALS PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] dark:bg-[#181816] border-t border-[#E5E0D8] dark:border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                Daily Essentials
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight mt-1">
                Popular Healthcare Essentials
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase tracking-wider font-semibold text-[#1A4329] dark:text-[#64AB82] hover:underline flex items-center gap-1"
            >
              <span>Search All Products in Inventory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82] bg-[#EBF3EE] dark:bg-[#1A4329]/30 px-2 py-0.5 rounded-md">
                  Diagnostics
                </span>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6] mt-2">
                  Omron Digital BP Monitor (HEM 7120)
                </h4>
                <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] mt-1">Automatic upper arm accuracy with 3-year warranty.</p>
              </div>
              <div className="pt-2">
                <p className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6]">₹2,450</p>
                <button
                  onClick={() => onOpenWhatsAppOrder('Omron Digital BP Monitor')}
                  className="mt-2 w-full py-2 px-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" /> Order
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82] bg-[#EBF3EE] dark:bg-[#1A4329]/30 px-2 py-0.5 rounded-md">
                  Diabetes Care
                </span>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6] mt-2">
                  Accu-Chek Active Strips (50s)
                </h4>
                <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] mt-1">Accurate glucose self-testing with fresh expiry dates.</p>
              </div>
              <div className="pt-2">
                <p className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6]">₹1,025</p>
                <button
                  onClick={() => onOpenWhatsAppOrder('Accu-Chek Active Strips')}
                  className="mt-2 w-full py-2 px-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" /> Order
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82] bg-[#EBF3EE] dark:bg-[#1A4329]/30 px-2 py-0.5 rounded-md">
                  Cold Chain
                </span>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6] mt-2">
                  Human Mixtard 30/70 Insulin
                </h4>
                <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] mt-1">Strict 2°C - 8°C stored biphasic insulin with gel pack.</p>
              </div>
              <div className="pt-2">
                <p className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6]">₹178</p>
                <button
                  onClick={() => onOpenWhatsAppOrder('Human Mixtard 30/70 Insulin')}
                  className="mt-2 w-full py-2 px-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" /> Order
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82] bg-[#EBF3EE] dark:bg-[#1A4329]/30 px-2 py-0.5 rounded-md">
                  Baby Care
                </span>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6] mt-2">
                  Himalaya Baby Massage Duo
                </h4>
                <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] mt-1">Pure olive & winter cherry natural baby care set.</p>
              </div>
              <div className="pt-2">
                <p className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6]">₹310</p>
                <button
                  onClick={() => onOpenWhatsAppOrder('Himalaya Baby Massage Duo')}
                  className="mt-2 w-full py-2 px-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" /> Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW (Ready & Summarized from local community feedback) */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Community Trust
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Customer Feedback & Verified Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A]">
              Honest ratings from residents across Arwal Sipah Panchayat and Jehanabad Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#9C7B38]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#9C7B38]" />
                  ))}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F4EFE6] leading-relaxed">
                  &quot;Always get my father&apos;s monthly cardiac and diabetes medicines here. The pharmacist checks the prescription carefully and they always pack insulin with cold ice pads.&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E0D8] dark:border-[#2C2B27] text-xs">
                <p className="font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Rakesh Sharma</p>
                <p className="editorial-tag text-[#8E8A80] mt-0.5">Resident, Arwal Sipah Panchayat</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#9C7B38]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#9C7B38]" />
                  ))}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F4EFE6] leading-relaxed">
                  &quot;WhatsApp ordering made life so easy! I sent a photo of the doctor&apos;s slip, and within an hour they confirmed and had it ready for delivery at our house.&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E0D8] dark:border-[#2C2B27] text-xs">
                <p className="font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Anjali Kumari</p>
                <p className="editorial-tag text-[#8E8A80] mt-0.5">Local Customer, Jehanabad Road Arwal</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#9C7B38]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#9C7B38]" />
                  ))}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F4EFE6] leading-relaxed">
                  &quot;Very polite staff and 100% genuine products with proper bills. They also have nebulizers, BP machines and baby diapers in all brands.&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E0D8] dark:border-[#2C2B27] text-xs">
                <p className="font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Mukesh Yadav</p>
                <p className="editorial-tag text-[#8E8A80] mt-0.5">Regular Customer, Arwal</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={BUSINESS_CONFIG.socialLinks.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C4BEB2] dark:border-[#2C2B27] text-[#1A1A1A] dark:text-[#F4EFE6] text-xs uppercase tracking-wider font-semibold hover:bg-[#EAE5DB] dark:hover:bg-[#1C1C19] transition-colors"
            >
              <Star className="w-3.5 h-3.5 text-[#9C7B38]" />
              <span>Leave a Review on Google Business Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] dark:bg-[#181816] border-t border-[#E5E0D8] dark:border-[#2C2B27]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Have Questions?
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A]">
              Quick answers about medicine availability, WhatsApp delivery, and store timings.
            </p>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4EFE6]"
                  >
                    <span>{faq.question}</span>
                    <span className={`text-[#1A4329] dark:text-[#64AB82] font-mono text-base font-bold transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed border-t border-[#E5E0D8] dark:border-[#2C2B27] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-xs uppercase tracking-wider font-semibold text-[#1A4329] dark:text-[#64AB82] hover:underline inline-flex items-center gap-1"
            >
              <span>Have more questions? Visit our Contact Page or WhatsApp us</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PRESCRIPTION CTA BANNER */}
      <section className="py-14 sm:py-16 bg-[#1A4329] text-[#F9F7F2] border-y border-[#12301D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12301D] border border-[#2D603E] editorial-tag text-[#9C7B38]">
            <Sparkles className="w-3 h-3" /> Quick Medicine Ordering
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F7F2]">
            Need Medicines in Arwal Today?
          </h2>
          <p className="text-sm sm:text-base text-[#D4CEBF] max-w-2xl mx-auto leading-relaxed">
            Send us your doctor&apos;s prescription or required medicine list via WhatsApp. We will prepare your order immediately with batch verification and discounted billing.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenWhatsAppOrder()}
              className="px-6 py-3.5 rounded-lg bg-[#F9F7F2] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#1A4329]" />
              <span>Order via WhatsApp Now</span>
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-6 py-3.5 rounded-lg bg-[#12301D] hover:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider border border-[#2D603E] transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#9C7B38]" />
              <span>Call +91 80839 54721</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Pharmacist Advice
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Latest Health & Medicine Tips
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A]">
              Essential guidance for safe medication usage, temperature storage, and heart wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#8E8A80]">
                    <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82] bg-[#EBF3EE] dark:bg-[#1A4329]/30 px-2 py-0.5 rounded-md">
                      {tip.tag}
                    </span>
                    <span className="font-mono text-[10px]">{tip.readTime}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F4EFE6] leading-snug">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                    {tip.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E0D8] dark:border-[#2C2B27]">
                  <p className="text-[11px] text-[#8E8A80] dark:text-[#A8A49A] leading-relaxed italic font-serif">
                    &ldquo;{tip.fullTip}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SECTION */}
      <section className="py-14 bg-[#EAE5DB] dark:bg-[#181816] border-t border-[#D4CEBF] dark:border-[#2C2B27]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#F9F7F2] dark:bg-[#1C1C19] border border-[#D4CEBF] dark:border-[#2C2B27] text-[#1A4329] dark:text-[#64AB82] mx-auto flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">
            Subscribe for Health Alerts & Stock Announcements
          </h3>
          <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A] max-w-xl mx-auto leading-relaxed">
            Get seasonal monsoon/winter health advisories, vaccination schedules, and special discount alerts directly in your inbox.
          </p>

          <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-[#141412] border border-[#C4BEB2] dark:border-[#2C2B27] text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F4EFE6] placeholder-[#8E8A80] focus:outline-hidden focus:border-[#1A4329]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-[#1A4329] dark:text-[#64AB82] font-semibold flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5" /> Thank you! You have subscribed for health alerts.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
