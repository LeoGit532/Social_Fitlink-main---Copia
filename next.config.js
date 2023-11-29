/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withTM = require('next-transpile-modules')([
  'styled-components',
 ]);
 
 module.exports = withTM({
  // Your regular Next.js config
 });