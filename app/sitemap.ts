import type { MetadataRoute } from 'next'
import { SERVICES_DATA } from '@/lib/services-data'
import { LOCATIONS_DATA } from '@/lib/locations-data'
import { BUSINESS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url
  const now = new Date()

  const homepage: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/book`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const locationPages: MetadataRoute.Sitemap = LOCATIONS_DATA.map((location) => ({
    url: `${base}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...homepage, ...servicePages, ...locationPages]
}
