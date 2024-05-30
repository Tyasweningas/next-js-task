/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['raw.githubusercontent.com'], // Tambahkan domain host gambar di sini
    },
    env: {
      WEBSITE_NAME: 'next-js-practice',
    },
  };
  
  export default nextConfig;
  