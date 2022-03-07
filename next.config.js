const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = (phase) =>
  withBundleAnalyzer({
    webpack(conf) {
      conf.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      conf.resolve.modules.push(__dirname);
      return conf;
    },
    images: {
      domains: [process.env.IMAGE_HOST],
    },
    env: {
      API_URL:
        phase === PHASE_DEVELOPMENT_SERVER ? process.env.API_DEV_URL : process.env.API_DEV_URL,
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      TAKEUS_DESKTOP_URL: process.env.TAKEUS_DESKTOP_URL,
    },
  });
