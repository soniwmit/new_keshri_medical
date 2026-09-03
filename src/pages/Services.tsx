import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { SERVICES_DATA, ServiceCategory } from '../data/servicesData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { BUSINESS_CONFIG } from '../data/config';
import { 
  Pill, 
  HeartPulse, 
  Activity, 
  Baby, 
  ShieldCheck, 
  Home, 
  Sparkles, 
  Snowflake, 
  CheckCircle2, 
  MessageSquare, 
  PhoneCall, 
  Search, 
  Filter,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppOrder }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredCategories = activeCategoryFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === activeCategoryFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6" />;
      default: return <Pill className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full">
      <SEO
        title="Services & Live Medicine Stock Checker"
        description="Search real-time medicine availability, check MRP and batch expiry, and explore full pharmacy categories at New Keshri Medical Store in Arwal."
        canonicalPath="/services"
      />

      {/* Header Banner */}
      <section className="bg-[#141412] text-[#F9F7F2] py-14 sm:py-20 border-b border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1C19] text-[#9C7B38] editorial-tag border border-[#2C2B27]">
            <Activity className="w-3.5 h-3.5" /> Full-Spectrum Pharmacy & Medical Supplies
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F9F7F2]">
            Pharmacy Services & Medicine Stock
          </h1>
          <p className="text-sm sm:text-base text-[#C4BEB2] max-w-2xl mx-auto leading-relaxed">
            Search our live in-store inventory, check batch expiries and MRP, or explore our specialized healthcare categories.
          </p>
        </div>
      </section>

      {/* 1. EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section className="py-12 sm:py-16 bg-[#F9F7F2] dark:bg-[#141412] border-b border-[#E5E0D8] dark:border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Interactive Catalog
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight mt-1">
              Search In-Store Medicine Stock
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A] mt-1">
              Instant search across brand names, generics, and therapeutic categories. Click &quot;Order&quot; on any item to automatically prepare your WhatsApp message.
            </p>
          </div>

          <MedicineStockChecker onSelectForOrder={(name) => onOpenWhatsAppOrder(name)} />
        </div>
      </section>

      {/* 2. CATEGORY-WISE HEALTHCARE SERVICES */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] dark:bg-[#181816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Complete Categories
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Specialized Pharmaceutical Departments
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A]">
              Explore our exhaustive therapeutic categories, quality controls, and patient advantages.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#1A4329] text-[#F9F7F2] shadow-xs'
                  : 'bg-white dark:bg-[#1C1C19] text-[#5E5B54] dark:text-[#A8A49A] border border-[#E5E0D8] dark:border-[#2C2B27] hover:bg-[#F9F7F2]'
              }`}
            >
              All Categories ({SERVICES_DATA.length})
            </button>
            {SERVICES_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeCategoryFilter === cat.id
                    ? 'bg-[#1A4329] text-[#F9F7F2] shadow-xs'
                    : 'bg-white dark:bg-[#1C1C19] text-[#5E5B54] dark:text-[#A8A49A] border border-[#E5E0D8] dark:border-[#2C2B27] hover:bg-[#F9F7F2]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-[#1C1C19] rounded-xl p-6 sm:p-8 border border-[#E5E0D8] dark:border-[#2C2B27] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#1A4329]/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#1A4329] text-[#F9F7F2] flex items-center justify-center shadow-xs">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">
                        {service.title}
                      </h3>
                      <p className="editorial-tag text-[#9C7B38] mt-0.5">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights & Features */}
                  <div className="space-y-2 pt-2">
                    <h4 className="editorial-tag text-[#8E8A80]">
                      Key Highlights & Protocols:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#3D3A35] dark:text-[#C4BEB2]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A4329] dark:text-[#64AB82] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Items */}
                  <div className="pt-2">
                    <h4 className="editorial-tag text-[#8E8A80] mb-1.5">
                      Popular Products & Brands:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-[#F9F7F2] dark:bg-[#141412] border border-[#E5E0D8] dark:border-[#2C2B27] text-[11px] font-medium text-[#5E5B54] dark:text-[#A8A49A]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Card CTA */}
                <div className="pt-4 border-t border-[#E5E0D8] dark:border-[#2C2B27] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                    Sourced from authorized distributors
                  </span>
                  <button
                    onClick={() => onOpenWhatsAppOrder(service.title)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#1A4329] hover:bg-[#12301D] active:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{service.callToAction}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription Support Banner */}
      <section className="py-14 bg-[#1A4329] text-[#F9F7F2] border-t border-[#12301D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F9F7F2]">
            Have a Specific Doctor&apos;s Prescription?
          </h3>
          <p className="text-xs sm:text-sm text-[#C4BEB2] max-w-xl mx-auto leading-relaxed">
            You don&apos;t have to type long medicine names. Simply upload a picture of your prescription on WhatsApp and our registered pharmacist will verify every item.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenWhatsAppOrder()}
              className="px-6 py-3 rounded-lg bg-[#F9F7F2] hover:bg-white text-[#1A1A1A] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#1A4329]" />
              <span>Send Prescription Photo via WhatsApp</span>
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-6 py-3 rounded-lg bg-[#12301D] hover:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs sm:text-sm uppercase tracking-wider border border-[#2D603E] transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#9C7B38]" />
              <span>Call +91 80839 54721</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
