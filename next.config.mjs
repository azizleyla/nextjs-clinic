// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        root: process.cwd(),
    },
};

const withIntl = createNextIntlPlugin('./src/core/i18n/request.ts');
export default withAnalyzer(withIntl(nextConfig));
