import { twMerge } from 'tailwind-merge';

import { ListProps } from './types';

const List: React.FC<ListProps> = ({ children, as: Component = 'div', display = 'flex', ...props }) => {
  const getDirectionClassName = (): string => {
    if (display !== 'flex') return '';

    const directionClassName = {
      horizontal: 'flex-row',
      vertical: 'flex-col'
    };

    const { direction = 'vertical' } = props;

    return directionClassName[direction] ?? directionClassName.vertical;
  };

  const getDisplayClassName = (): string => {
    const displayClassName = {
      grid: 'grid grid-flow-row',
      flex: 'flex',
      block: 'block'
    };

    return displayClassName[display] ?? displayClassName.flex;
  };
  
  return (
    <Component
      className={twMerge(
        ['grid', 'flex'].includes(display) ? 'gap-5' : undefined,
        getDisplayClassName(),
        getDirectionClassName(),
        props.className
      )}
    >
      {children}
    </Component>
  );
};

export default List;
