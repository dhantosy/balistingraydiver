/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/fun-diving',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dive-courses',
        destination: '/',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
}

module.exports = nextConfig
