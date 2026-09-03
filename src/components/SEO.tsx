import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../data/config';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Arwal, Bihar.",
  keywords = "New Keshri Medical Store, medical store Arwal, pharmacy Arwal, genuine medicines Bihar, chemist Jehanabad road Arwal, WhatsApp medicine delivery Arwal",
  canonicalPath = '/'
}) => {
  useEffect(() => {
    // Update Title
    const fullTitle = `${title} | ${BUSINESS_CONFIG.businessName}`;
    document.title = fullTitle;

    // Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + canonicalPath);

    // Scroll to top on route render
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonicalPath]);

  return null;
};
