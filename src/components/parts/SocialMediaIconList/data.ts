import {
  AiFillLinkedin,
  AiFillGithub,
  AiTwotoneMail,
  AiFillMediumSquare,
  AiOutlineDribbble,
  AiFillYoutube
} from 'react-icons/ai';

import { SocialMediaIcon } from './types';

export const SOCIAL_MEDIA_ICONS: SocialMediaIcon[] = [
  {
    key: 'LINKEDIN',
    icon: AiFillLinkedin,
    colorClassName: 'group-hover/icon:text-[#0077B7]'
  },
  {
    key: 'GITHUB',
    icon: AiFillGithub,
    colorClassName: 'group-hover/icon:text-black dark:group-hover/icon:text-white'
  },
  {
    key: 'EMAIL',
    icon: AiTwotoneMail,
    colorClassName: 'group-hover/icon:text-red-500'
  },
  {
    key: 'MEDIUM',
    icon: AiFillMediumSquare,
    colorClassName: 'group-hover/icon:text-black'
  },
  {
    key: 'DRIBBBLE',
    icon: AiOutlineDribbble,
    colorClassName: 'group-hover/icon:text-[#EA4C89]'
  },
  {
    key: 'YOUTUBE',
    icon: AiFillYoutube,
    colorClassName: 'group-hover/icon:text-red-500'
  }
];
