/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com','platform-lookaside.fbsbx.com'
    ]
  },
  experimental: {
    
    appDir: true,
  },
}

module.exports = nextConfig
