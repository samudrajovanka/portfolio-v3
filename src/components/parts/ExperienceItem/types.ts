import { Experience } from '@/repositories/experiences/types';

export type ExperienceItemProps = {
  experience: Experience;
  currentPos: number;
  total: number;
};