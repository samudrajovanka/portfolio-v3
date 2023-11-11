import type { SuccessResponseData } from '@/types/response';

export type ProjectData = {
  _id: string;
  name: string;
  description?: string;
  stacks: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export type GetProjectsResponse = SuccessResponseData<{
  projects: ProjectData[];
}>;
