'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false
});

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return children;
};

export default Template;
