'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductThumbProps {
  src: string;
  alt: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ProductThumb({ src, alt, href, size = 'md' }: ProductThumbProps) {
  const sizeClass = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-20 h-20' : 'w-14 h-14';

  const handleClick = () => {
    if (href && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_product_image', {
        product_image: alt,
        product_link: href,
      });
    }
  };

  const img = (
    <div className={`${sizeClass} rounded-lg bg-white shadow-sm border border-border-light overflow-hidden flex-shrink-0 flex items-center justify-center p-1`}>
      <Image src={src} alt={alt} width={80} height={80} className="object-contain w-full h-full" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={handleClick} className="hover:opacity-80 transition-opacity">
        {img}
      </Link>
    );
  }

  return img;
}
