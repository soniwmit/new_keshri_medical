import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../data/config';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  Users, 
  Building2, 
  Stethoscope, 
  MapPin, 
  PhoneCall, 
  MessageSquare,
  Sparkles,
  Calendar,
  ChevronRight
} from 'lucide-react';

interface AboutProps {
  onOpenWhatsAppOrder: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppOrder }) => {
  const timelineEvents = [
    {
      year: 'Foundation',
      title: 'Establishment on NH-110 Jehanabad Road',
      description: 'Opened with a dedicated mission to bridge the gap in essential prescription medicines and pediatric healthcare for Arwal families.'
    },
    {
      year: 'Cold Chain Integration',
      title: 'Installation of Medical-Grade Refrigeration Units',
      description: 'Upgraded storage with dedicated continuous 2°C–8°C digital temperature logging and power backup for insulin and life-saving vaccines.'
    },
    {
      year: 'Diagnostic Expansion',
      title: 'Authorized Distribution of Health Devices',
      description: 'Partnered with Omron, Accu-Chek, and Dr Trust to supply verified digital blood pressure monitors, glucometers, and nebulizers.'
    },
    {
      year: 'Digital & WhatsApp Era',
      title: 'Fast Prescription & WhatsApp Home Delivery in Arwal',
      description: 'Introduced instant WhatsApp prescription ordering, inventory availability checking, and doorstep dispatch across Sipah Panchayat.'
    }
  ];

  const values = [
    {
      title: 'Absolute Integrity',
      desc: '100% genuine medicines sourced solely through certified pharmaceutical distributors with verifiable GST batches.'
    },
    {
      title: 'Patient-First Empathy',
      desc: 'We prioritize prompt relief, compassionate counseling, and respectful care for seniors and recovering patients.'
    },
    {
      title: 'Scientific Vigilance',
      desc: 'Strict expiry segregation, cold-chain temperature logs, and pharmacist review of prescription dosages.'
    },
    {
      title: 'Community Accessibility',
      desc: 'Affordable rates, generic alternatives when appropriate, and rapid doorstep delivery across Arwal.'
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="About Us - Story, Mission & Pharmacist Team"
        description="Learn about New Keshri Medical Store in Arwal, Bihar: our history, mission, licensed pharmacist message, values, and dedication to genuine healthcare."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="bg-[#141412] text-[#F9F7F2] py-14 sm:py-20 border-b border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1C19] text-[#9C7B38] editorial-tag border border-[#2C2B27]">
            <Building2 className="w-3.5 h-3.5" /> Established Community Pharmacy
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F9F7F2]">
            About New Keshri Medical Store
          </h1>
          <p className="text-sm sm:text-base text-[#C4BEB2] max-w-2xl mx-auto leading-relaxed">
            Your neighborhood pharmacy on NH-110 Jehanabad Road, Arwal, delivering certified medicines, surgical supplies, and patient-centered healthcare advice.
          </p>
        </div>
      </section>

      {/* Business Story & Store Overview */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                Our Journey & Legacy
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight leading-tight">
                Rooted in Care, Committed to Genuine Healthcare in Arwal
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                <p>
                  <strong>New Keshri Medical Store</strong> was created with a fundamental conviction: every citizen in Arwal, regardless of circumstance, deserves direct and dependable access to 100% genuine medications, honest guidance, and reliable healthcare equipment.
                </p>
                <p>
                  Strategically situated on <strong>Arwal NH-110, Jehanabad Road, Arwal Sipah Panchayat</strong>, our pharmacy serves as an essential primary healthcare bridge. We maintain comprehensive stock across cardiology, diabetes, respiratory medicine, pediatrics, and surgical dressings so patients never have to travel to distant cities for critical prescriptions.
                </p>
                <p>
                  Over years of dedicated service, we have earned the trust of local families, doctors, and clinics. Our modern facility includes automated inventory tracking, cold-storage refrigeration, and rapid WhatsApp delivery dispatch.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs">
                  <p className="font-serif text-2xl font-bold text-[#1A4329] dark:text-[#64AB82]">2,000+</p>
                  <p className="editorial-tag text-[#8E8A80] mt-0.5">Medicines in Stock</p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs">
                  <p className="font-serif text-2xl font-bold text-[#9C7B38]">7:30 AM</p>
                  <p className="editorial-tag text-[#8E8A80] mt-0.5">365 Days Service</p>
                </div>
              </div>
            </div>

            {/* Store Photos */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-xs border border-[#E5E0D8] dark:border-[#2C2B27]">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63c25b3cf542?auto=format&fit=crop&w=1000&q=80"
                  alt="Well-stocked medicine dispensary at New Keshri Medical Store"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#EBF3EE] dark:bg-[#1A4329]/20 border border-[#1A4329]/30 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
                <p className="text-xs text-[#1A4329] dark:text-[#64AB82]">
                  <strong>Drug License & GST Compliant:</strong> Every medicine strip is dispensed with a verifiable batch number, manufacturer seal, and computerized GST bill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] dark:bg-[#181816] border-y border-[#E5E0D8] dark:border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] flex items-center justify-center border border-[#1A4329]/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                To guarantee the prompt availability of 100% genuine pharmaceutical drugs, cold-chain biologics, and clinical diagnostic instruments to every household in Arwal at fair prices, reinforced with professional dosage counseling and empathetic patient support.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#F7F3E9] dark:bg-[#9C7B38]/20 text-[#9C7B38] flex items-center justify-center border border-[#9C7B38]/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                To be recognized as the most dependable and tech-enabled community medical institution across Bihar, pioneering transparent medicine stock accessibility, digital WhatsApp delivery, and zero-compromise storage standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Principles We Live By
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Our Core Operating Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] space-y-2 shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1A4329] text-[#F9F7F2] font-mono font-bold text-xs flex items-center justify-center mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F4EFE6]">{val.title}</h4>
                <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacist / Owner Message */}
      <section className="py-16 bg-[#1A4329] text-[#F9F7F2] border-y border-[#12301D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#12301D] p-2 border border-[#2D603E] shadow-xs flex items-center justify-center mx-auto md:mx-0">
                <Stethoscope className="w-12 h-12 text-[#9C7B38]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#F9F7F2]">Registered Pharmacist</h3>
                <p className="editorial-tag text-[#9C7B38] mt-0.5">New Keshri Medical Store</p>
                <p className="text-[11px] text-[#A8A49A]">Arwal, Bihar</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="editorial-tag text-[#9C7B38]">
                A Personal Message to Our Patients
              </span>
              <blockquote className="font-serif italic text-sm sm:text-base text-[#E5E0D8] leading-relaxed">
                &ldquo;Behind every prescription that reaches our counter is a mother, a father, a child, or a recovering grandparent hoping for genuine healing. We view our work not simply as dispensing medicine, but as a sacred trust with the people of Arwal. When you take a medication from New Keshri Medical Store, you have our guarantee that it was stored safely, verified meticulously, and dispensed with honest care.&rdquo;
              </blockquote>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenWhatsAppOrder()}
                  className="px-5 py-2.5 rounded-lg bg-[#F9F7F2] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#1A4329]" />
                  <span>Talk with Pharmacist</span>
                </button>
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="px-5 py-2.5 rounded-lg bg-[#12301D] hover:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider border border-[#2D603E] flex items-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#9C7B38]" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
              Milestones
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
              Our Growth & Community Milestones
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-[#E5E0D8] dark:before:bg-[#2C2B27]">
            {timelineEvents.map((evt, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
              >
                <div className={`sm:w-1/2 ${idx % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:order-2 sm:pl-8'}`}>
                  <div className="p-5 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs">
                    <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                      {evt.year}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F4EFE6] mt-1">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] mt-1 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                {/* Central Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#1A4329] dark:bg-[#64AB82] ring-4 ring-[#F9F7F2] dark:ring-[#141412] z-10" />

                <div className={`sm:w-1/2 hidden sm:block ${idx % 2 === 0 ? 'order-2' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12 bg-[#EAE5DB] dark:bg-[#181816] border-t border-[#D4CEBF] dark:border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">
              Ready to Order or Inquire About a Prescription?
            </h3>
            <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A]">
              Our team is ready to assist you in store or online via WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenWhatsAppOrder()}
              className="px-5 py-2.5 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer"
            >
              WhatsApp Order Now
            </button>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-white dark:bg-[#1C1C19] text-[#1A1A1A] dark:text-[#F4EFE6] font-semibold text-xs uppercase tracking-wider border border-[#C4BEB2] dark:border-[#2C2B27] hover:bg-[#F2EFE9] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
