import fetcher from '@/lib/fetcher';

import type { GetResumeResponse } from './types';

export const getResume = async () => {
  const data = await fetcher<GetResumeResponse>({
    url: '/api/resume',
    next: {
      revalidate: 60 * 60 * 24 * 7
    }
  });

  return data;
};
