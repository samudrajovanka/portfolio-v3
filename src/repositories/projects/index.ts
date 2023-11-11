import fetcher from '@/lib/fetcher';

import type { GetProjectsResponse } from './types';

export const getProjects = async () => {
  const data = await fetcher<GetProjectsResponse>({
    url: '/api/projects'
    // next: {
    //   revalidate: 60 * 60 * 24 * 7
    // }
  });

  return data;
};
