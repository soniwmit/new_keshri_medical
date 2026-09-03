import React, { useState, useMemo } from 'react';
import medicineInventory from '../data/medicineStock.json';
import { BUSINESS_CONFIG } from '../data/config';
import { Search, CheckCircle2, AlertTriangle, XCircle, RefreshCw, MessageSquare, Filter, PackageCheck, Info } from 'lucide-react';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  dosage: string;
  mrp: number;
  quantity: number;
  expiry: string;
  status: string; // 'Available' | 'Limited Stock' | 'Out of Stock'
  description: string;
}

interface MedicineStockCheckerProps {
  onSelectForOrder?: (medName: string) => void;
  isCompact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectForOrder,
  isCompact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const list = Array.from(new Set(medicineInventory.map((item) => item.category)));
    return ['All', ...list];
  }, []);

  const filteredMedicines = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return medicineInventory.filter((med) => {
      const matchesSearch =
        !term ||
        med.name.toLowerCase().includes(term) ||
        med.brand.toLowerCase().includes(term) ||
        med.category.toLowerCase().includes(term) ||
        med.description.toLowerCase().includes(term);

      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const handleWhatsAppInquire = (med: MedicineItem) => {
    if (onSelectForOrder) {
      onSelectForOrder(`${med.name} (${med.brand})`);
      return;
    }
    const text = `Hello ${BUSINESS_CONFIG.businessName}, I would like to inquire/order:\n\n*Medicine:* ${med.name}\n*Brand:* ${med.brand}\n*Current Status:* ${med.status}\n*MRP:* ₹${med.mrp.toFixed(2)}\n\nPlease confirm availability and delivery in Arwal.`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF3EE] text-[#1A4329] dark:bg-[#1A4329]/30 dark:text-[#64AB82] border border-[#1A4329]/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A4329] dark:text-[#64AB82]" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F7F3E9] text-[#9C7B38] dark:bg-[#9C7B38]/20 dark:text-[#D4AF37] border border-[#9C7B38]/30">
            <AlertTriangle className="w-3.5 h-3.5 text-[#9C7B38]" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FDF2ED] text-[#A64B2A] dark:bg-[#A64B2A]/20 dark:text-[#D97D5D] border border-[#A64B2A]/20">
            <XCircle className="w-3.5 h-3.5 text-[#A64B2A]" />
            Out of Stock
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F2EFE9] text-[#5E5B54] dark:bg-[#1C1C19] dark:text-[#A8A49A]">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#1C1C19] rounded-xl shadow-xs border border-[#E5E0D8] dark:border-[#2C2B27] overflow-hidden" id="medicine-stock-checker">
      {/* Header Bar */}
      <div className="p-5 sm:p-6 bg-[#1A4329] text-[#F9F7F2] border-b border-[#12301D]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#12301D] text-[#9C7B38] border border-[#2D603E]">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">Live Medicine Stock Checker</h3>
              <p className="text-xs sm:text-sm text-[#C4BEB2]">
                Instantly check verified in-store inventory, MRP, batch expiry & availability at Arwal
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-[#12301D] border border-[#2D603E] px-3 py-1.5 rounded-lg text-xs font-medium text-[#F9F7F2]">
            <span className="w-2 h-2 rounded-full bg-[#9C7B38] animate-ping" />
            <span>Updated Daily: {medicineInventory.length} Items Listed</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 border-b border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] space-y-4">
        <div className="relative">
          <label htmlFor="medicine-search-input" className="sr-only">Search medicine by brand or name</label>
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8A80]" />
          <input
            id="medicine-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine (e.g., Dolo 650, Azithral, Pan-D, Omron, Insulin)..."
            className="w-full pl-11 pr-10 py-3 rounded-lg bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] text-[#1A1A1A] dark:text-[#F4EFE6] text-sm focus:outline-hidden focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] transition-all placeholder:text-[#8E8A80]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8E8A80] hover:text-[#1A1A1A] dark:hover:text-[#F4EFE6] p-1"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category & Status Filter Tabs */}
        {!isCompact && (
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#8E8A80] font-medium flex items-center gap-1 editorial-tag">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categories.slice(0, 6).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#1A4329] text-[#F9F7F2] shadow-xs'
                        : 'bg-white dark:bg-[#1C1C19] text-[#5E5B54] dark:text-[#A8A49A] border border-[#E5E0D8] dark:border-[#2C2B27] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#8E8A80] font-medium editorial-tag">Status:</span>
              {(['All', 'Available', 'Limited Stock', 'Out of Stock'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedStatus === st
                      ? 'bg-[#1A1A1A] text-[#F9F7F2] dark:bg-[#F9F7F2] dark:text-[#1A1A1A]'
                      : 'text-[#5E5B54] dark:text-[#A8A49A] hover:text-[#1A1A1A] dark:hover:text-[#F9F7F2]'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Table / Grid */}
      <div className="overflow-x-auto">
        {filteredMedicines.length === 0 ? (
          <div className="p-10 text-center space-y-3">
            <Info className="w-10 h-10 text-[#C4BEB2] dark:text-[#5E5B54] mx-auto" />
            <h4 className="font-serif text-base font-semibold text-[#1A1A1A] dark:text-[#F4EFE6]">
              No medicines found matching &quot;{searchTerm}&quot;
            </h4>
            <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] max-w-sm mx-auto">
              We stock over 2,000+ medicines in our Arwal store. If not listed in this preview, our pharmacist can dispense or arrange it immediately.
            </p>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello New Keshri Medical Store, I want to check availability for: ${searchTerm}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] rounded-lg text-xs font-semibold shadow-xs transition-colors uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4" /> Ask Pharmacist on WhatsApp
            </a>
          </div>
        ) : (
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F2EFE9] dark:bg-[#181816] text-[#5E5B54] dark:text-[#A8A49A] font-semibold border-b border-[#E5E0D8] dark:border-[#2C2B27]">
                <th className="py-3.5 px-4 font-serif">Medicine Name & Formulation</th>
                <th className="py-3.5 px-4 font-serif">Manufacturer</th>
                <th className="py-3.5 px-4 font-serif">Category</th>
                <th className="py-3.5 px-4 text-right font-serif">MRP</th>
                <th className="py-3.5 px-4 text-center font-serif">Batch Expiry</th>
                <th className="py-3.5 px-4 text-center font-serif">Availability Status</th>
                <th className="py-3.5 px-4 text-center font-serif">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E0D8] dark:divide-[#2C2B27]">
              {filteredMedicines.map((med) => (
                <tr
                  key={med.id}
                  className="hover:bg-[#F9F7F2] dark:hover:bg-[#181816] transition-colors"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] text-sm">
                      {med.name}
                    </div>
                    <div className="text-[11px] text-[#8E8A80]">
                      {med.dosage}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-[#3D3A35] dark:text-[#C4BEB2]">
                    {med.brand}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md bg-[#F2EFE9] dark:bg-[#181816] text-[#5E5B54] dark:text-[#A8A49A] text-[11px]">
                      {med.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold text-[#1A1A1A] dark:text-[#F4EFE6] text-sm">
                    ₹{med.mrp.toFixed(2)}
                  </td>
                  <td className="py-3.5 px-4 text-center text-[#8E8A80] font-mono text-[11px]">
                    {med.expiry}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {getStatusBadge(med.status)}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => handleWhatsAppInquire(med)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] font-semibold text-[11px] uppercase tracking-wider transition-colors shadow-xs"
                      title="Order or Inquire via WhatsApp"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Order</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-[#F9F7F2] dark:bg-[#141412] border-t border-[#E5E0D8] dark:border-[#2C2B27] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8A80] gap-2">
        <span className="flex items-center gap-1.5">
          <RefreshCw className="w-3.5 h-3.5 text-[#1A4329] dark:text-[#64AB82]" />
          Showing {filteredMedicines.length} of {medicineInventory.length} verified items
        </span>
        <span>
          Prescription required for Schedule H & H1 medications. Validated upon order.
        </span>
      </div>
    </div>
  );
};
