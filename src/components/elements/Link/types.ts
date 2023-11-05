import { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & React.PropsWithChildren<NextLinkProps & {
  className?: string;
}>;
