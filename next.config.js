/** @type {import('next').NextConfig} */
const nextConfig = {
	// Your Next.js configuration options go here
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nextui-docs-v2.vercel.app',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn-icons-png.freepik.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				pathname: '/**',
			},
		],
	},
	experimental: {
		suppressHydrationWarning: true,
	},
};

module.exports = nextConfig;
