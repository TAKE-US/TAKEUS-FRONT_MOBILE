const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    conf.resolve.modules.push(__dirname);
    return conf;
  },
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/:path*',
          destination: process.env.DEV_API_URL,
        },
      ];
    }
  },
});
