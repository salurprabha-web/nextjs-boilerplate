import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: any
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
}: SEOProps): Metadata {
  const siteUrl = 'https://kuhaantraders.com'
  const defaultKeywords = [
    'material sourcing',
    'supplier',
    'procurement',
    'hospitality',
    'software solutions',
    'manufacturing',
    'corporate',
    'supply chain',
    'best quotes'
  ]

  const allKeywords = [...keywords, ...defaultKeywords]

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Kuhaan Traders' }],
    creator: 'Kuhaan Traders',
    publisher: 'Kuhaan Traders',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical || `${siteUrl}`,
      siteName: 'Kuhaan Traders',
      type: 'website',
      locale: 'en_IN',
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : ['/twitter-image.jpg'],
    },
    alternates: {
      canonical: canonical || siteUrl,
    },
    other: {
      'twitter:creator': '@kuhaantraders',
      'twitter:site': '@kuhaantraders',
    },
    category: 'business',
    classification: 'Material Sourcing, Supply Chain, Procurement Services',
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://kuhaantraders.com',
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      item: `https://kuhaantraders.com${item.url}`,
    })),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  category: string
  provider: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.category,
    provider: {
      '@type': 'Organization',
      name: service.provider,
      url: 'https://kuhaantraders.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: service.url,
      availableLanguage: {
        '@type': 'Language',
        name: 'English',
      },
    },
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  category: string
  brand: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    image: product.image || '/placeholder-product.jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Kuhaan Traders',
        url: 'https://kuhaantraders.com',
      },
    },
  }
}