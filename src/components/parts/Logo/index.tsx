import Image from '@/components/parts/Image';
import logoImage from '@/public/images/logo.png';

import type { LogoProps, LogoSize } from './types';

const logoSize: Record<LogoSize, number> = {
  'sm': 24,
  'md': 32,
  'lg': 48
};

const Logo: React.FC<LogoProps> = ({
  size = 'md'
}) => {
  const logoSizeValue = logoSize[size];

  return (
    <Image
      src={logoImage}
      alt="logo"
      height={logoSizeValue}
      width={logoSizeValue}
      className="dark:brightness-0 dark:invert"
    />
  );
};

export default Logo;
