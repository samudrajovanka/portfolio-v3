import { twMerge } from 'tailwind-merge';

import Container from '@/components/elements/Container';

import type { SectionPageProps } from './types';

const SectionPage: React.FC<SectionPageProps> = ({
  withContainer, children, className, ...props
}) => {
  const finalClassName = twMerge(
    'mt-8',
    props?.withMarginBottom ? 'mb-8' : undefined,
    className
  );

  const Content = () => (
    <>
      {props.header ? props.header : null}

      {props.header ? (
        <div className="mt-10">
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );

  if (withContainer) {
    return (
      <Container as="section" className={finalClassName}>
        <Content />
      </Container>
    );
  }

  return (
    <section className={finalClassName}>
      <Content />
    </section>
  );
};

export default SectionPage;
