import { twMerge } from 'tailwind-merge';

import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  children,
  as: Component = 'div',
  className,
  ...props
}) => {
  const bgClassName = 'bg-theme';
  const borderClassName = 'border-[2px] border-content';
  const transitionClassName = 'transition-transform duration-500';

  return (
    <Component className="group/card relative">
      <div className={twMerge(
        bgClassName,
        borderClassName,
        'absolute inset-0',
        'group-hover/card:md:translate-x-2 group-hover/card:md:translate-y-2',
        transitionClassName
      )} />

      <div className={twMerge(
        bgClassName,
        borderClassName,
        'relative h-full',
        'group-hover/card:md:-translate-x-2 group-hover/card:md:-translate-y-2',
        transitionClassName,
        props.noPadding ? undefined : 'p-3 sm:p-5',
        className
      )}>
        {children}
      </div>
    </Component>
  );
};

export default Card;
