import Container from '@/components/elements/Container';
import Link from '@/components/elements/Link';
import Text from '@/components/elements/Text';

const Home = () => {
  return (
    <Container className="absolute left-1/2 top-0 flex h-screen -translate-x-1/2 flex-col justify-center">
      <div className="md:w-3/4">
        <Text as="h1" resetTypography className="text-3xl font-bold sm:text-6xl">
          Hello, I&apos;m Jovanka
          <Text as="span" resetTypography resetColor className="text-primary-main dark:text-secondary-main">
            .
          </Text>
        </Text>

        <Text resetTypography className="my-5 text-base sm:text-lg">
          I am experienced{' '}
          <strong
            className="bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
          >
            Fullstack Web Developer
          </strong>{' '}
          with a strong focus on JavaScript. My goal is to leverage these skills to contribute to effective team
          collaboration and deliver the best possible results.
        </Text>

        <Text>
          Check out my <Link href="/projects">projects</Link> or learn more <Link href="/about">about me</Link>.
        </Text>
      </div>
    </Container>
  );
};

export default Home;
