/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET,
    AUTH_TENANT_NAME: process.env.AUTH_TENANT_NAME,
    AUTH_TENANT_GUID: process.env.AUTH_TENANT_GUID,
    JWT_SECRET: process.env.JWT_SECRET,
    USER_FLOW: process.env.USER_FLOW,
  }
}

module.exports = nextConfig