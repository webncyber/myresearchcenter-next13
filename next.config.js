/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'x-url',
                value: '/'
              }
            ],
          },
        ]
      }
}

module.exports = nextConfig
