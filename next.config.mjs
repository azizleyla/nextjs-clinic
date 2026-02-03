// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    reactStrictMode: true,
};

export default createNextIntlPlugin('./src/i18n/request.js')(nextConfig);
