
export default function sitemap() {
    const baseUrl = 'https://nextjs-clinic-beta.vercel.app'

    // Statik səhifələr
    const staticPages = [
        { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/departments`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/doctors`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/blogs`, changeFrequency: 'weekly', priority: 0.9 },
    ]


    return [...staticPages]
}
