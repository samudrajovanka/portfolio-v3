import type { SVGProps, FC } from 'react';

export type SocialMediaIcon = {
  key: string;
  icon: FC<SVGProps<SVGElement>>;
  colorClassName?: string;
}