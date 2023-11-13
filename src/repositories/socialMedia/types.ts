import type { SuccessResponseData } from '@/types/response';

export type SocialMediaData = {
  _id: string;
  key: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export type GetSocialMediaResponse = SuccessResponseData<{
  socialMedias: SocialMediaData[];
}>;
