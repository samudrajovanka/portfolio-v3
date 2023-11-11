import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';

import type { HeaderSectionProps } from './types';

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, description }) => {
  return (
    <header>
      <Reveal>
        <Text as="h1" typography="heading">{title}</Text>
      </Reveal>

      {description ? (
        <Reveal className="mt-1">
          <Text color="subtitle">{description}</Text>
        </Reveal>
      ) : null}
    </header>
  );
};

export default HeaderSection;
