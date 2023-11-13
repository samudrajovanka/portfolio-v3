import { LinkProps as NextLinkProps } from 'next/link';

import type { Typography } from '@/components/elements/Text/types';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & React.PropsWithChildren<NextLinkProps & {
  className?: string;
  noDecoration?: boolean;
  withColorNeutral?: boolean;
  typography?: Typography;
  isExternal?: boolean;
}>;
