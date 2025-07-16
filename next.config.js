/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.rocket.new', 'application.rocket.new'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig 