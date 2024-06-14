/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/flyers/dr-strings-nickel-lo-rider',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/baby-must-haves/BabyBjorn-small-baby-bib',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/back-to-school/large-college-backpack',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/baby-must-haves/retractable-baby-gate',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/back-to-school/shower-caddy-tote-bag',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/home-decor/facts-on-having-a-cozy-home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/healthy-recipes/top-5-brunch-ideas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/baby-must-haves/baby-electric-nail-trimmer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/gardening/leaf-sweepers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/back-to-school',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/healthy-recipes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/home-decor',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/baby-must-haves',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/gardening',
        destination: '/',
        permanent: true,
      },
    ]
  },
    compiler: {
        styledComponents: true,
      }
}

module.exports = nextConfig
