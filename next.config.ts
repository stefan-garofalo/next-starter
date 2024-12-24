import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		ppr: 'incremental',
		reactCompiler: true,
		dynamicIO: true,
		typedRoutes: true
	}
}

export default nextConfig
