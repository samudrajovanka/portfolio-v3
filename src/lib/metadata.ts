import type { Metadata } from 'next';

import app from '@/config/app';

type GenerateMetadataOpts = {
  withSuffix?: boolean;
};

const generateMetadata = (metadata?: Partial<Metadata>, options?: GenerateMetadataOpts): Metadata => {
  let title = metadata?.title ?? app.name;
  const description = metadata?.description ?? app.description;

  if (options?.withSuffix) {
    title += ` | ${app.name}`;
  }

  const metadataResult: Metadata = {
    ...metadata,
    title,
    description,
    keywords: metadata?.keywords || app.keywords,
    metadataBase: new URL(app.url),
    applicationName: app.name,
    openGraph: {
      title,
      description,
      type: 'website',
      images: `${app.url}/images/logo.png`,
      siteName: app.name,
      url: app.url
    }
  };

  return metadataResult;
};

export default generateMetadata;
