/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    async rewrites() {
        return [{
            source: "/api/:path*",
            destination: "/backend/routes/:path*"
        }]
    }
};

export default nextConfig;
