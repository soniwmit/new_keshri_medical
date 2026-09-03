import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  ShieldCheck, 
  Building2, 
  Pill, 
  Activity, 
  Baby,
  Filter
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      setIsZoomed(false);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      setIsZoomed(false);
    }
  };

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Storefront & Interior' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'devices', label: 'Health Devices' },
    { id: 'surgical', label: 'Surgical & Ortho' },
    { id: 'baby', label: 'Baby & Mother Care' },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Store Gallery - Pharmacy Photos, Shelves & Diagnostics"
        description="View photo gallery of New Keshri Medical Store in Arwal: medicine dispensary racks, cold storage, patient counseling counter, and medical devices."
        canonicalPath="/gallery"
      />

      {/* Header Banner */}
      <section className="bg-[#141412] text-[#F9F7F2] py-14 sm:py-20 border-b border-[#2C2B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1C19] text-[#9C7B38] editorial-tag border border-[#2C2B27]">
            <Camera className="w-3.5 h-3.5" /> Photographic Tour
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F9F7F2]">
            Store Gallery & Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-[#C4BEB2] max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our clean dispensary counters, systematic medicine racks, pharmaceutical cold-chain refrigeration, and diagnostic displays.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 sm:py-20 bg-[#F9F7F2] dark:bg-[#141412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="editorial-tag text-[#8E8A80] flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A4329] text-[#F9F7F2] shadow-xs'
                    : 'bg-white dark:bg-[#1C1C19] text-[#5E5B54] dark:text-[#A8A49A] border border-[#E5E0D8] dark:border-[#2C2B27] hover:bg-[#F2EFE9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden shadow-xs border border-[#E5E0D8] dark:border-[#2C2B27] bg-white dark:bg-[#1C1C19] cursor-pointer transition-all hover:border-[#1A4329]/40 hover:-translate-y-0.5"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#EAE5DB] dark:bg-[#20201D]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141412]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#141412]/80 backdrop-blur-md editorial-tag text-[#9C7B38] border border-[#2C2B27] shadow-xs">
                    {item.badge}
                  </span>

                  {/* Zoom indicator icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#141412]/60 backdrop-blur-md text-[#F9F7F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <h3 className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F4EFE6] group-hover:text-[#1A4329] dark:group-hover:text-[#64AB82] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A] line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP LIGHTBOX MODAL WITH ZOOM & NAVIGATION */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0E0C]/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-[#1C1C19] hover:bg-[#2C2B27] text-[#F9F7F2] border border-[#2C2B27] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-lg bg-[#1C1C19] hover:bg-[#2C2B27] text-[#F9F7F2] border border-[#2C2B27] transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-lg bg-[#1C1C19] hover:bg-[#2C2B27] text-[#F9F7F2] border border-[#2C2B27] transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
            <div
              className={`relative overflow-hidden rounded-xl border border-[#2C2B27] max-h-[75vh] cursor-zoom-in ${
                isZoomed ? 'cursor-zoom-out' : ''
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className={`max-h-[75vh] w-auto object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
            </div>

            <div className="text-center text-[#F9F7F2] space-y-1 max-w-2xl px-4">
              <span className="editorial-tag text-[#9C7B38]">
                {filteredItems[lightboxIndex].badge} &bull; Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="font-serif text-base font-bold text-[#F9F7F2]">{filteredItems[lightboxIndex].title}</h4>
              <p className="text-xs text-[#C4BEB2]">{filteredItems[lightboxIndex].caption}</p>
              <p className="editorial-tag text-[#8E8A80] pt-1">Click photo to toggle 1.5x zoom</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
