/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            headers: [
              {
                key: 'x-url',
                value: '/',
              }
            ],
          },
        ]
      }
}

module.exports = nextConfig
