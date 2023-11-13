import AboutMe from '@/components/parts/AboutMe';
import CurrentlyLearn from '@/components/parts/CurrentlyLearn';
import Experiences from '@/components/parts/Experiences';
import LetsConnect from '@/components/parts/LetsConnect';
import SectionPage from '@/components/parts/SectionPage';

const About = () => {
  return (
    <SectionPage
      withContainer
      withMarginBottom
      className="flex flex-col gap-10"
    >
      <AboutMe />
      <Experiences />
      <CurrentlyLearn />
      <LetsConnect />
    </SectionPage>
  );
};

export default About;
