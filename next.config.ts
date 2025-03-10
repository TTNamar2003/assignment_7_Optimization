import type { NextConfig } from 'next'


import withBundleAnalyzerImport from '@next/bundle-analyzer'


const withBundleAnalyzer = withBundleAnalyzerImport({
  enabled: process.env.ANALYZE === 'true',
})



const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ['picsum.photos'],
  },
}

// Apply the bundle analyzer wrapper to the config
export default withBundleAnalyzer(nextConfig)