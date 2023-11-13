import List from '@/components/elements/List';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import ExperienceItem from '@/components/parts/ExperienceItem';
import { getExperiences } from '@/repositories/experiences';

const Experiences = async () => {
  const experiencesResponse = await getExperiences();
  const { experiences } = experiencesResponse.data;

  return (
    <article>
      <Reveal>
        <Text as="h1" typography="subheading">Experiences</Text>
      </Reveal>

      <List className="mt-3 gap-0">
        {experiences.map((experience, idx) => (
          <ExperienceItem
            key={experience._id}
            experience={experience}
            currentPos={idx}
            total={experiences.length}
          />
        ))}
      </List>
    </article>
  );
};

export default Experiences;
