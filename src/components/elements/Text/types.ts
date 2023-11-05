type TextComponent = 
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type Typography =
  | 'heading'
  | 'subheading'
  | 'regular'
  | 'description';
  

type Color = 'subtitle' | 'normal';

export type TextProps = React.PropsWithChildren<{
  /**
   * @default 'p'
   */
  as?: TextComponent;
  /**
   * @default 'regular'
   */
  typography?: Typography;
  /**
   * @default 'normal'
   */
  color?: Color;
  className?: string;
  resetTypography?: boolean;
  resetColor?: boolean;
}>;
