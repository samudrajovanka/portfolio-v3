import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const generateUrl = (path: string = '') => 'https://www.jovan.id' + path;

  return [
    {
      url: generateUrl(),
      priority: 1
    },
    {
      url: generateUrl('/about'),
      priority: 0.8
    },
    {
      url: generateUrl('/blogs'),
      priority: 0.4
    },
    {
      url: generateUrl('/projects'),
      priority: 0.6
    }
  ];
}
