import type { SuccessResponseData } from '@/types/response';

export type Experience = {
  _id: string;
  company: string;
  startDate: string;
  endDate?: string;
  position: string;
  type: string;
  stacks: string[];
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export type GetExperiencesResponse = SuccessResponseData<{
  experiences: Experience[];
}>;
