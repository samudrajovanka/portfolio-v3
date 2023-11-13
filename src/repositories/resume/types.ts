import type { SuccessResponseData } from '@/types/response';

export type ResumeData = {
  _id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export type GetResumeResponse = SuccessResponseData<{
  resume: ResumeData | null;
}>;
