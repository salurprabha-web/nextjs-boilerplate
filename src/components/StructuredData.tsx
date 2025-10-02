export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kuhaan Traders",
    "alternateName": "Kuhaan Traders - Material Sourcing Specialists",
    "url": "https://kuhaantraders.com",
    "logo": "https://kuhaantraders.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9063679687",
      "contactType": "Customer Service",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No:964, H.No 3-964, Sri Nilayam 3rd Floor, Ayyappa Society",
      "addressLocality": "Madhapur",
      "addressRegion": "Telangana",
      "postalCode": "500084",
      "addressCountry": "IN"
    },
    "description": "Your trusted material sourcing specialist serving Hotels, Software Solutions, Manufacturing, and Corporate sectors. We source smarter, you save better.",
    "foundingDate": "2017",
    "founders": [
      {
        "@type": "Person",
        "name": "Kuhaan Traders Team"
      }
    ],
    "knowsAbout": [
      "Material Sourcing",
      "Supply Chain Management",
      "Procurement Services",
      "Hospitality Supplies",
      "Software Solutions",
      "Manufacturing Equipment",
      "Corporate Office Supplies",
      "Bulk Supplier Management",
      "Price Negotiation"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "India",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Material Sourcing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sourcing & Procurement",
            "description": "Strategic material sourcing and procurement solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bulk Supplier Management",
            "description": "Efficient management of multiple supplier relationships"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Price Negotiation",
            "description": "Expert negotiation strategies for best market prices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Supply Solutions",
            "description": "Tailored supply chain solutions for unique requirements"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "25"
    },
    "sameAs": [
      "https://www.linkedin.com/company/kuhaan-traders",
      "https://www.facebook.com/kuhaantraders"
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kuhaan Traders",
    "image": "https://kuhaantraders.com/logo.png",
    "url": "https://kuhaantraders.com",
    "telephone": "+91-8871857876",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No:964, H.No 3-964, Sri Nilayam 3rd Floor, Ayyappa Society",
      "addressLocality": "Madhapur",
      "addressRegion": "Telangana",
      "postalCode": "500084",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4517,
      "longitude": 78.3791
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "INR"
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kuhaan Traders",
    "url": "https://kuhaantraders.com",
    "description": "Your trusted material sourcing specialist serving Hotels, Software Solutions, Manufacturing, and Corporate sectors.",
    "publisher": {
      "@type": "Organization",
      "name": "Kuhaan Traders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kuhaantraders.com/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://kuhaantraders.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}