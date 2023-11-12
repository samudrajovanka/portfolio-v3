import fetcher from '@/lib/fetcher';

import type { GetExperiencesResponse } from './types';

export const getExperiences = async () => {
  const data = await fetcher<GetExperiencesResponse>({
    url: '/api/experiences',
    next: {
      revalidate: 60 * 60 * 24 * 7
    }
  });

  return data;
};
