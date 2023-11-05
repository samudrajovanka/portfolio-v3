import { twMerge } from 'tailwind-merge';

/**
 * This component is used to create a animation shine border that appears on hover parent.
 *
 * How to use:
 *
 * - Set parent component to relative position
 *
 * - Set parent group with name 'group/border' on className
 */
const BorderHover: React.FC = () => {
  const transitionClassName = 'transition-all duration-500';
  const baseClassNameSpan = 'absolute bg-primary-main dark:bg-secondary-main';
  const horizontalClassNameSpan = 'w-0 h-[2px] group-hover/border:w-full';
  const verticalClassNameSpan = 'w-[2px] h-0 group-hover/border:h-full';

  return (
    <div className="absolute inset-0 overflow-hidden">
      <span
        className={twMerge(
          baseClassNameSpan,
          'top-0 left-0 group-hover/border:translate-x-full',
          horizontalClassNameSpan,
          transitionClassName
        )}
      />
      <span
        className={twMerge(
          baseClassNameSpan,
          'bottom-0 right-0 group-hover/border:-translate-y-full',
          verticalClassNameSpan,
          transitionClassName
        )}
      />
      <span
        className={twMerge(
          baseClassNameSpan,
          'bottom-0 right-0 group-hover/border:-translate-x-full',
          horizontalClassNameSpan,
          transitionClassName
        )}
      />
      <span
        className={twMerge(
          baseClassNameSpan,
          'top-0 left-0 group-hover/border:translate-y-full',
          verticalClassNameSpan,
          transitionClassName
        )}
      />
    </div>
  );
};

export default BorderHover;
