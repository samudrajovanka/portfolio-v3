import { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = React.PropsWithChildren<NextLinkProps & {
  className?: string;
}>;
