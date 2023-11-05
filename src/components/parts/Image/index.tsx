import { default as NextImage } from 'next/image';

import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  ...props
}) => {
  return (
    <NextImage {...props} />
  );
};

export default Image;
