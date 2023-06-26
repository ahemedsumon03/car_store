/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio'],
        deviceSizes: [320, 640, 768, 1024, 1280],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
