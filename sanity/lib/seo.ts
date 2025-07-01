import { client } from './client';
import { buildImageUrl } from './image';
import { sanityFetch } from './live';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: {
    asset: {
      _ref: string;
    };
  };
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export async function getHomeSEO(): Promise<SEOData | null> {
  const query = `*[_type == "home"][0] {
    seo {
      title,
      description,
      keywords,
      ogImage,
      ogTitle,
      ogDescription,
      noIndex,
      noFollow
    }
  }`;

  try {
    const { data: result } = await sanityFetch({ query });
    return result?.seo || null;
  } catch (error) {
    console.error('Error fetching home SEO data:', error);
    return null;
  }
}

export async function getAboutSEO(): Promise<SEOData | null> {
  const query = `*[_type == "about"][0] {
    seo {
      title,
      description,
      keywords,
      ogImage,
      ogTitle,
      ogDescription,
      noIndex,
      noFollow
    }
  }`;

  try {
    const result = await client.fetch(query);
    return result?.seo || null;
  } catch (error) {
    console.error('Error fetching about SEO data:', error);
    return null;
  }
}

export async function getContactSEO(): Promise<SEOData | null> {
  const query = `*[_type == "contact"][0] {
    seo {
      title,
      description,
      keywords,
      ogImage,
      ogTitle,
      ogDescription,
      noIndex,
      noFollow
    }
  }`;

  try {
    const { data: result } = await sanityFetch({ query });
    return result?.seo || null;
  } catch (error) {
    console.error('Error fetching contact SEO data:', error);
    return null;
  }
}

export async function getServiceSEO(): Promise<SEOData | null> {
  const query = `*[_type == "service"][0] {
    seo {
      title,
      description,
      keywords,
      ogImage,
      ogTitle,
      ogDescription,
      noIndex,
      noFollow
    }
  }`;

  try {
    const { data: result } = await sanityFetch({ query });
    return result?.seo || null;
  } catch (error) {
    console.error('Error fetching service SEO data:', error);
    return null;
  }
}

// Fonction utilitaire pour générer les métadonnées
export function generateMetadata(
  seoData: SEOData | null,
  fallbackTitle: string,
  fallbackDescription: string
) {
  if (!seoData) {
    return {
      title: fallbackTitle,
      description: fallbackDescription,
    };
  }

  const metadata: any = {
    title: seoData.title,
    description: seoData.description,
  };

  // Gestion des robots meta tags
  if (seoData.noIndex || seoData.noFollow) {
    const robots = [];
    if (seoData.noIndex) robots.push('noindex');
    if (seoData.noFollow) robots.push('nofollow');
    if (robots.length > 0) {
      metadata.robots = robots.join(', ');
    }
  }

  if (seoData.keywords && seoData.keywords.length > 0) {
    metadata.keywords = seoData.keywords.join(', ');
  }

  // Configuration Open Graph
  if (seoData.ogImage || seoData.ogTitle || seoData.ogDescription) {
    metadata.openGraph = {
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      type: 'website',
    };

    if (seoData.ogImage) {
      metadata.openGraph.images = [
        {
          url: buildImageUrl(seoData.ogImage.asset._ref, 1200, 630),
          width: 1200,
          height: 630,
          alt: seoData.ogTitle || seoData.title,
        },
      ];
    }
  }

  return metadata;
}
