/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  },
};

module.exports = nextConfig;
