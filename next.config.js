/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    TELEGRAM_API_ID: process.env.TELEGRAM_API_ID,
    TELEGRAM_API_HASH: process.env.TELEGRAM_API_HASH,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  },
  images: {
    domains: ['api.telegram.org','t.me'],
  },
}

module.exports = nextConfig
