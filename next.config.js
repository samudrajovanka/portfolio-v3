/** @type {import('next').NextConfig} */

const getHost = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://www.jovan.id';
  }

  return process.env.VERCEL ? 'https://jovan-dev.vercel.app' : 'http://localhost:3000';
};

const nextConfig = {
  env: {
    APP_URL: getHost()
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

module.exports = nextConfig;
