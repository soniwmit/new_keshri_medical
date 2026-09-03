import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../data/config';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Navigation, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

interface ContactProps {
  onOpenWhatsAppOrder: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Stock Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message or confirm submission
    const text = `*New Website Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', subject: 'Medicine Stock Inquiry', message: '' });
  };

  return (
    <div className="w-full">
      <SEO
        title="Contact Us, Store Location & Hours"
        description="Visit New Keshri Medical Store on NH-110 Jehanabad Rd, Arwal, Bihar. Contact our pharmacist, get GPS directions, and check operating hours."
        canonicalPath="/contact"
      />

      {/* Header Banner */}
      <section className="bg-[#141412] text-[#F9F7F2] py-14 sm:py-20 border-b border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1C19] text-[#9C7B38] editorial-tag border border-[#2C2B27]">
            <MapPin className="w-3.5 h-3.5" /> Direct Contact & Store Location
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F9F7F2]">
            Get in Touch With Us
          </h1>
          <p className="text-sm sm:text-base text-[#C4BEB2] max-w-2xl mx-auto leading-relaxed">
            Reach out via phone, WhatsApp, or visit our store in Arwal. Our pharmacists are available to answer your prescription questions.
          </p>
        </div>
      </section>

      {/* Emergency Contact Notice */}
      <section className="bg-[#EBF3EE] dark:bg-[#1A4329]/20 border-b border-[#1A4329]/20 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#1A4329] dark:text-[#64AB82]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A4329] dark:bg-[#64AB82] animate-ping" />
            <span className="font-bold">24/7 Urgent Medical Dispatch:</span>
            <span>Emergency medicine support is available on direct call.</span>
          </div>
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="font-bold text-[#1A4329] dark:text-[#64AB82] hover:underline flex items-center gap-1.5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +91 80839 54721</span>
          </a>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-14 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Business Details & Action Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                  Pharmacy Information
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6] tracking-tight">
                  New Keshri Medical Store
                </h2>
                <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A8A49A]">
                  {BUSINESS_CONFIG.tagline}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] flex items-start gap-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] border border-[#1A4329]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-serif font-bold text-[#1A1A1A] dark:text-[#F4EFE6] text-sm">Store Address</h4>
                    <p className="text-[#5E5B54] dark:text-[#A8A49A] leading-relaxed">
                      {BUSINESS_CONFIG.address.full}
                    </p>
                    <p className="text-[11px] text-[#8E8A80] font-medium">
                      Landmark: {BUSINESS_CONFIG.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] flex items-start gap-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-[#F7F3E9] dark:bg-[#9C7B38]/20 text-[#9C7B38] border border-[#9C7B38]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-serif font-bold text-[#1A1A1A] dark:text-[#F4EFE6] text-sm">Direct Phone & WhatsApp</h4>
                    <p className="text-[#5E5B54] dark:text-[#A8A49A]">
                      Call: <a href={`tel:${BUSINESS_CONFIG.phone}`} className="font-semibold hover:underline text-[#1A4329] dark:text-[#64AB82]">{BUSINESS_CONFIG.phoneDisplay}</a>
                    </p>
                    <p className="text-[#5E5B54] dark:text-[#A8A49A]">
                      WhatsApp: <a href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-[#1A4329] dark:text-[#64AB82]">{BUSINESS_CONFIG.whatsappDisplay}</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] flex items-start gap-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] border border-[#1A4329]/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-serif font-bold text-[#1A1A1A] dark:text-[#F4EFE6] text-sm">Store Operating Hours</h4>
                    <p className="text-[#5E5B54] dark:text-[#A8A49A]">
                      {BUSINESS_CONFIG.hours.days}: <strong>{BUSINESS_CONFIG.hours.timing}</strong>
                    </p>
                    <p className="editorial-tag text-[#1A4329] dark:text-[#64AB82]">
                      {BUSINESS_CONFIG.hours.emergency}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] flex items-start gap-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-[#F2EFE9] dark:bg-[#20201D] text-[#5E5B54] dark:text-[#A8A49A] border border-[#E5E0D8] dark:border-[#2C2B27]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-serif font-bold text-[#1A1A1A] dark:text-[#F4EFE6] text-sm">Email Address</h4>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-[#5E5B54] dark:text-[#A8A49A] hover:underline">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* 3 Core Contact Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="py-3 px-3 rounded-lg bg-[#141412] hover:bg-[#1C1C19] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors border border-[#2C2B27]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9C7B38]" />
                  <span>Call Button</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenWhatsAppOrder}
                  className="py-3 px-3 rounded-lg bg-[#1A4329] hover:bg-[#12301D] active:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-lg bg-[#9C7B38] hover:bg-[#86682D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] mt-1">
                    Ask about medicine stock, bulk order discounts, or pediatric/orthopedic supply availability.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                        Full Name <span className="text-[#A64B2A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Keshri"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                        Mobile Number <span className="text-[#A64B2A]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                      >
                        <option value="Medicine Stock Inquiry">Medicine Stock Inquiry</option>
                        <option value="Prescription Verification">Prescription Verification</option>
                        <option value="Home Delivery Request in Arwal">Home Delivery Request in Arwal</option>
                        <option value="Medical Equipment / BP Monitor">Medical Equipment / BP Monitor</option>
                        <option value="Insulin / Cold Chain Product">Insulin / Cold Chain Product</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                      Message / Medicine Details <span className="text-[#A64B2A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your question, required medicine names, dosage, or address..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#1A4329] hover:bg-[#12301D] active:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Pharmacist</span>
                  </button>

                  {isSubmitted && (
                    <div className="p-3 rounded-lg bg-[#EBF3EE] text-[#1A4329] text-xs font-semibold flex items-center gap-2 border border-[#1A4329]/20">
                      <CheckCircle2 className="w-4 h-4 text-[#1A4329]" />
                      <span>Thank you! Your message was sent to our WhatsApp team.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Full Width Interactive Google Map */}
          <div className="mt-14 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F4EFE6]">
                  Find Our Store on Google Maps
                </h3>
                <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A]">
                  Located on NH-110 Jehanabad Road, Arwal Sipah Panchayat, Bihar 804401
                </p>
              </div>
              <a
                href={BUSINESS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] text-xs font-semibold uppercase tracking-wider self-start sm:self-auto shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps App</span>
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs">
              <iframe
                title="New Keshri Medical Store Google Maps Location"
                src="https://maps.google.com/maps?q=Arwal%20NH%20110%20Jehanabad%20Rd%20Bihar%20804401&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
