import fetcher from '@/lib/fetcher';

import type { GetSocialMediaResponse } from './types';

export const getSocialMedias = async () => {
  const data = await fetcher<GetSocialMediaResponse>({
    url: '/api/social-medias',
    next: {
      revalidate: 60 * 60 * 24 * 7
    }
  });

  return data;
};
