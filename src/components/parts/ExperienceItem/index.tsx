'use client';

import { type Variants, motion } from 'framer-motion';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import List from '@/components/elements/List';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import Tag from '@/components/parts/Tag';

import type { ExperienceItemProps } from './types';

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  currentPos,
  total
}) => {
  const isLast = currentPos === total - 1;

  const getFormatedDate = (date: string): string => {
    return moment(date).format('MMM YYYY');
  };

  const getEndDate = () => {
    if (!experience?.endDate) return 'Present';

    return getFormatedDate(experience.endDate);
  };

  const getDiffDate = () => {
    const endDate = experience?.endDate || (new Date()).toISOString();

    const diff = moment(endDate).diff(experience.startDate, 'months') + 1;
    
    const MAX_MONTHS = 12;
    const modDiff = diff % MAX_MONTHS;
    const year = Math.floor(diff / MAX_MONTHS);

    const yearString = year > 0 ? `${year} yrs` : '';
    const monthString = modDiff > 0 ? `${modDiff} mos` : '';

    return `${yearString} ${monthString}`.trim();
  };

  const indicatorVariants: Variants = {
    hidden: {
      height: 0
    },
    visible: {
      height: 'calc(100% - 20px)'
    }
  };

  return (
    <div className={twMerge('relative', isLast ? undefined : 'pb-5')}>
      <div className="absolute bottom-0 left-0 top-1">
        <div className="aspect-square w-8 rounded-full border-8 border-primary-main"/>

        {!isLast ? (
          <motion.div
            className="absolute left-1/2 h-[calc(100%-20px)] w-3 -translate-x-1/2 -translate-y-1 bg-primary-main"
            variants={indicatorVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
            viewport={{ once: true }}
          />
        ) : null}
      </div>

      <div className="ml-12">
        <Reveal>
          <Text as="h2" className="font-bold">{experience.position}</Text>
        </Reveal>

        <Reveal>
          <Text>{experience.company} - {experience.type}</Text>
        </Reveal>

        <Reveal>
          <Text
            typography="small"
            color="subtitle"
          >
            {getFormatedDate(experience.startDate)} - {getEndDate()} ({getDiffDate()})
          </Text>
        </Reveal>
        
        {experience?.description ? (
          <Reveal>
            <Text className="mt-1" color="subtitle">{experience.description}</Text>
          </Reveal>
        ) : null}

        <Reveal className="mt-3">
          <List as="ul" direction="horizontal" className="flex-wrap gap-2">
            {experience.stacks.map((stack, index) => (
              <li key={`${stack}_${index}`}>
                <Tag>{stack}</Tag>
              </li>
            ))}
          </List>
        </Reveal>
      </div>
    </div>
  );
};

export default ExperienceItem;
