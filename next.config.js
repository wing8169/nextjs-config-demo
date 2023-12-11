/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    SERVER_RUNTIME_CONFIG: "Secret",
  },
  publicRuntimeConfig: {
    PUBLIC_RUNTIME_CONFIG: "Public",
  },
};

module.exports = nextConfig;
