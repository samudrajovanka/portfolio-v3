import { twMerge } from 'tailwind-merge';

import type { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({
  children,
  as: Component = 'div',
  className
}) => {

  return (
    <Component
      className={twMerge(
        'container xl:max-w-5xl mx-auto px-4',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
