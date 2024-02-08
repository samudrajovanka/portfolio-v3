import { Suspense } from 'react';

import NProgressClient from '@/components/parts/NProgressClient';

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Suspense>
      <NProgressClient />
      {children}
    </Suspense>
  );
};

export default Template;
