type CardElement = 'div' | 'li';

export type CardProps = React.PropsWithChildren<{
  /**
   * @default div
   */
  as?: CardElement;
  className?: string;
  noPadding?: boolean;
}>;
