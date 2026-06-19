import { site } from './site';

export type SchemaNode = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type WebPageSchemaOptions = {
  url: string;
  title: string;
  description: string;
  type?: string;
  image?: string;
};

type ServiceSchemaOptions = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  image?: string;
};

type CollectionPageSchemaOptions = {
  name: string;
  description: string;
  url: string;
  items: BreadcrumbItem[];
};

type ArticleSchemaOptions = {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  articleSection?: string;
};

type ProductSchemaOptions = {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
  additionalProperty?: Array<{ label: string; value: string }>;
};

const localBusinessId = `${site.siteUrl}/#localbusiness`;
const webSiteId = `${site.siteUrl}/#website`;

const defaultServiceAreas = ['Belo Horizonte', 'Regiao Metropolitana de Belo Horizonte', 'Minas Gerais'];

function toAbsoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, site.siteUrl).href;
}

function mapAreas(areaServed: string[]) {
  return areaServed.map((name) => ({
    '@type': 'City',
    name,
  }));
}

function humanizeSegment(segment: string) {
  return segment
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getLocalBusinessId() {
  return localBusinessId;
}

export function buildLocalBusinessSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': localBusinessId,
    name: site.name,
    url: site.siteUrl,
    image: toAbsoluteUrl(site.ogImage),
    logo: toAbsoluteUrl(site.logo),
    telephone: site.phone,
    email: site.email,
    description:
      'Aluguel de tendas, venda de tendas, aluguel de toldos e estruturas para eventos, empresas, feiras, casamentos e operacoes temporarias em Belo Horizonte e regiao.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    areaServed: mapAreas(defaultServiceAreas),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: site.businessHours.opens,
      closes: site.businessHours.closes,
    },
    knowsAbout: [
      'Aluguel de tendas',
      'Venda de tendas',
      'Aluguel de toldos',
      'Tendas para eventos',
      'Tendas para casamento',
      'Coberturas temporarias',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Aluguel de tendas',
        },
      },
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Venda de tendas',
        },
      },
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Aluguel de toldos',
        },
      },
    ],
  };
}

export function buildWebSiteSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': webSiteId,
    url: site.siteUrl,
    name: site.name,
    description: site.metaDescription,
    publisher: {
      '@id': localBusinessId,
    },
  };
}

export function buildWebPageSchema({
  url,
  title,
  description,
  type = 'WebPage',
  image,
}: WebPageSchemaOptions): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      '@id': webSiteId,
    },
    about: {
      '@id': localBusinessId,
    },
    ...(image
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: toAbsoluteUrl(image),
          },
        }
      : {}),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = defaultServiceAreas,
  image,
}: ServiceSchemaOptions): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: {
      '@id': localBusinessId,
    },
    areaServed: mapAreas(areaServed),
    ...(image ? { image: toAbsoluteUrl(image) } : {}),
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  url,
  items,
}: CollectionPageSchemaOptions): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name,
    description,
    isPartOf: {
      '@id': webSiteId,
    },
    about: {
      '@id': localBusinessId,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  articleSection,
}: ArticleSchemaOptions): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    ...(articleSection ? { articleSection } : {}),
    ...(image ? { image: [toAbsoluteUrl(image)] } : {}),
    author: {
      '@id': localBusinessId,
    },
    publisher: {
      '@id': localBusinessId,
    },
  };
}

export function buildProductSchema({
  name,
  description,
  url,
  image,
  category,
  additionalProperty = [],
}: ProductSchemaOptions): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name,
    description,
    url,
    ...(image ? { image: [toAbsoluteUrl(image)] } : {}),
    ...(category ? { category } : {}),
    brand: {
      '@type': 'Brand',
      name: site.name,
    },
    ...(additionalProperty.length
      ? {
          additionalProperty: additionalProperty.map((item) => ({
            '@type': 'PropertyValue',
            name: item.label,
            value: item.value,
          })),
        }
      : {}),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildAutoBreadcrumbs(url: string): BreadcrumbItem[] {
  const parsedUrl = new URL(url, site.siteUrl);
  const segments = parsedUrl.pathname.split('/').filter(Boolean);

  if (!segments.length) return [];

  return [
    { name: 'Inicio', url: site.siteUrl },
    ...segments.map((segment, index) => ({
      name: humanizeSegment(decodeURIComponent(segment)),
      url: `${site.siteUrl}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ];
}
