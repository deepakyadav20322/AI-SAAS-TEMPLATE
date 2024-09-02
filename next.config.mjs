/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ai-saas-template-aceternity.vercel.app',
            port: '',
            // pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
