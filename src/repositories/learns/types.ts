import type { SuccessResponseData } from '@/types/response';

export type Learn = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type GetLearnsResponse = SuccessResponseData<{
  learns: Learn[];
}>;
