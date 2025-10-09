import { MetadataRoute } from 'next'
import { doctors } from '../constants/doctors'
import { blogPosts } from '../constants/blogs'
import { services } from '../constants/services'

export default function sitemap() {
    const baseUrl = 'https://elmed-clinic.vercel.app'

    // Statik səhifələr
    const staticPages = [
        { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/doctors`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/blogs`, changeFrequency: 'weekly', priority: 0.9 },
    ]

    // Dinamik səhifələr (mock data, real project-də API və DB istifadə olunur)

    const dynamicServices = services.map(service => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(service.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))


    return [...staticPages, ...dynamicDoctorPages, ...dynamicBlogPages,...dynamicServices]
}
