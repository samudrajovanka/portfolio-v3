import Container from '@/components/elements/Container';
import Link from '@/components/elements/Link';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';

const Home = () => {
  return (
    <Container className="h-d-screen absolute left-1/2 top-0 flex -translate-x-1/2 flex-col justify-center">
      <div className="md:w-3/4">
        <Reveal>
          <Text as="h1" resetTypography className="text-3xl font-bold sm:text-6xl">
            Hello,
          </Text>
        </Reveal>

        <Reveal>
          <Text resetTypography className="text-3xl font-bold sm:text-6xl">
            I&apos;m Jovanka
            <span className="text-primary-main dark:text-secondary-main">
              .
            </span>
          </Text>
        </Reveal>

        <Reveal className="mt-5">
          <Text resetTypography className="text-base sm:text-lg">
            <strong
              className="bg-neutral-950 px-1 text-white dark:bg-white dark:text-neutral-950"
            >
              Fullstack Web Developer
            </strong>{' '}
            with a strong focus on JavaScript. My goal is to leverage these skills to contribute to effective team
            collaboration and deliver the best possible results.
          </Text>
        </Reveal>

        <Reveal className="mt-5">
          <Text>
            Check out my <Link href="/projects">projects</Link> or learn more <Link href="/about">about me</Link>.
          </Text>
        </Reveal>
      </div>
    </Container>
  );
};

export default Home;
