import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // Enable only when ANALYZE is set to true
});

export default withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Allow images from Sanity's CDN
      },
    ],
  },
  // Add other configurations as needed
});
