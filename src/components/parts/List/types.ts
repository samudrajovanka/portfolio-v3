type ListElement = 'div' | 'ul';

export type ListProps = React.PropsWithChildren<{
  /**
   * @default div
   */
  as?: ListElement;
  className?: string;
  /**
   * @default vertical
   * work if display is flex
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @default flex
   */
  display?: 'flex' | 'grid';
}>;
