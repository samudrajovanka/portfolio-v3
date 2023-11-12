import fetcher from '@/lib/fetcher';

import type { GetLearnsResponse } from './types';

export const getLearns = async () => {
  const data = await fetcher<GetLearnsResponse>({
    url: '/api/learns',
    next: {
      revalidate: 60 * 60 * 24 * 7
    }
  });

  return data;
};
