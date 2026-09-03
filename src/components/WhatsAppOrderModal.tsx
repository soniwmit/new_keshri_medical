import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { X, Send, PhoneCall, Upload, FileText, CheckCircle, Clock, MapPin, User, MessageSquare } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineRequired, setMedicineRequired] = useState(prefilledMedicine);
  const [preferredTime, setPreferredTime] = useState('As soon as possible');
  const [notes, setNotes] = useState('');
  const [hasPrescription, setHasPrescription] = useState<boolean>(false);
  const [prescriptionFileName, setPrescriptionFileName] = useState<string>('');

  // Update when prefilledMedicine prop changes
  React.useEffect(() => {
    if (prefilledMedicine) {
      setMedicineRequired(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFileName(file.name);
      setHasPrescription(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !phone.trim() || !medicineRequired.trim()) {
      alert('Please enter your Name, Phone Number, and Medicine Required.');
      return;
    }

    const prescriptionNote = hasPrescription
      ? `Yes (Uploaded: ${prescriptionFileName || 'Prescription image ready to send'})`
      : 'No / OTC Medicine';

    const message = `*Hello ${BUSINESS_CONFIG.businessName} - Medicine Order*\n\n` +
      `*Customer Name:* ${customerName.trim()}\n` +
      `*Phone:* ${phone.trim()}\n` +
      (email.trim() ? `*Email:* ${email.trim()}\n` : '') +
      `*Medicine Required:* ${medicineRequired.trim()}\n` +
      `*Delivery Address:* ${address.trim() || 'In-store Pickup / Arwal'}\n` +
      `*Prescription:* ${prescriptionNote}\n` +
      `*Preferred Delivery Time:* ${preferredTime}\n` +
      (notes.trim() ? `*Additional Notes:* ${notes.trim()}\n\n` : '\n') +
      `_Please confirm availability and bill amount. Thank you!_`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0E0C]/80 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-order-title"
    >
      <div className="relative w-full max-w-lg my-8 rounded-xl bg-white dark:bg-[#1C1C19] shadow-2xl border border-[#E5E0D8] dark:border-[#2C2B27] overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 bg-[#1A4329] text-[#F9F7F2] flex items-center justify-between border-b border-[#2C2B27]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#141412]/30 border border-[#2C2B27]">
              <MessageSquare className="w-5 h-5 text-[#9C7B38]" />
            </div>
            <div>
              <h3 id="whatsapp-order-title" className="font-serif text-base sm:text-lg font-bold text-[#F9F7F2]">
                WhatsApp Medicine Order
              </h3>
              <p className="text-xs text-[#E5E0D8]/80">
                Direct prescription & medicine delivery to your doorstep in Arwal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#E5E0D8] hover:text-[#F9F7F2] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                Customer Name <span className="text-[#A64B2A]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8E8A80] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Keshri"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                Mobile Number <span className="text-[#A64B2A]">*</span>
              </label>
              <div className="relative">
                <PhoneCall className="w-4 h-4 text-[#8E8A80] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Email (Optional) & Preferred Delivery Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8E8A80]" /> Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
              >
                <option value="As soon as possible">Immediate / ASAP (1-2 Hours)</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                <option value="Self Store Pickup">Self Counter Pickup at Arwal</option>
              </select>
            </div>
          </div>

          {/* Medicines Required */}
          <div>
            <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
              Medicine Names & Quantities <span className="text-[#A64B2A]">*</span>
            </label>
            <textarea
              required
              rows={2}
              placeholder="e.g. Dolo 650 - 2 strips, Azithral 500 - 1 strip, Betadine 20g - 1 tube"
              value={medicineRequired}
              onChange={(e) => setMedicineRequired(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#8E8A80]" /> Delivery Address in Arwal
            </label>
            <input
              type="text"
              placeholder="House/Shop no, Village / Ward, Landmark, Arwal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
            />
          </div>

          {/* Upload Prescription */}
          <div className="p-3.5 rounded-lg bg-[#F9F7F2] dark:bg-[#141412] border border-dashed border-[#E5E0D8] dark:border-[#2C2B27]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
                <div>
                  <p className="font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] text-xs">Doctor Prescription</p>
                  <p className="text-[11px] text-[#8E8A80]">
                    Upload image or PDF (or attach directly in WhatsApp)
                  </p>
                </div>
              </div>
              <label className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] text-[#1A1A1A] dark:text-[#F4EFE6] text-xs font-semibold cursor-pointer hover:bg-[#F2EFE9] transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{prescriptionFileName ? 'Change File' : 'Select Photo'}</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
            {prescriptionFileName && (
              <div className="mt-2 text-[11px] text-[#1A4329] dark:text-[#64AB82] font-medium flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Attached: {prescriptionFileName}
              </div>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs">
              Special Instructions / Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Call before coming, keep generic alternatives ready if branded is unavailable"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
            />
          </div>

          {/* Buttons: Send via WhatsApp & Call Now */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              id="btn-whatsapp-order-submit"
              className="flex-1 py-3 px-4 rounded-lg bg-[#1A4329] hover:bg-[#12301D] active:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send via WhatsApp
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="py-3 px-4 rounded-lg bg-white dark:bg-[#1C1C19] hover:bg-[#F2EFE9] text-[#1A1A1A] dark:text-[#F4EFE6] border border-[#E5E0D8] dark:border-[#2C2B27] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82]" /> Call Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
