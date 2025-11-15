import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },

  reactStrictMode: false,

  // ⭐ ADD THIS PART ⭐
  webpack: (config) => {
    // Completely ignore everything inside vibecode-starters
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: /vibecode-starters/,
      use: 'ignore-loader',
    });

    return config;
  },
};

export default nextConfig;
