/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  
  env: {
    url: "http://localhost:4001/",
    mediaUrl: "http://localhost:3000",
  },
};

export default nextConfig;
