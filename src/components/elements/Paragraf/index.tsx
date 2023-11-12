import { twMerge } from 'tailwind-merge';

import type { ParagrafProps } from './types';

const Paragraf: React.FC<ParagrafProps> = ({ children, className }) => {
  return (
    <div className={twMerge('flex flex-col gap-3', className)}>{children}</div>
  );
};

export default Paragraf;
