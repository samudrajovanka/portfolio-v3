'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false
});

const NProgressClient = () => {
  const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
};

export default NProgressClient;
