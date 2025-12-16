export default function robots() {
  const baseUrl = 'https://nextjs-clinic-beta.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
