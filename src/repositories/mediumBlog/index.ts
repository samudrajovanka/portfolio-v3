import fetcher from '@/lib/fetcher';

import type { GetMediumBlogResponse } from './types';

export const getMediumBlogs = async () => {
  const data = await fetcher<GetMediumBlogResponse>({
    url: process.env.NEXT_PUBLIC_API_MEDIUM_FEED_URL as string,
    next: {
      revalidate: 60 * 60 * 24 * 7
    },
    options: {
      isFreshURL: true
    }
  });

  return data;
};
