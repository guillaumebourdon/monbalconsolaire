/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Pas d'index /etude pour l'instant : on renvoie vers le hub éditorial
      { source: '/etude', destination: '/tout-savoir', permanent: false },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'monbalconsolaire.vercel.app' }],
        destination: 'https://monbalconsolaire.fr/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      // La carte /embed/* est faite pour être intégrée en iframe sur d'autres sites
      {
        source: '/((?!embed/).*)',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
      {
        source: '/(.*)',
        has: [{ type: 'host', value: '(?!monbalconsolaire\\.fr).*' }],
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
