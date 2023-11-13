import List from '@/components/elements/List';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import { getLearns } from '@/repositories/learns';

const CurrentlyLearn = async () => {
  const learnsResponse = await getLearns();
  const { learns } = learnsResponse.data;

  if (!learns.length) return null;

  return (
    <article>
      <Reveal>
        <Text as="h1" typography="subheading">What I currently learn</Text>
      </Reveal>

      <Reveal className="mt-3">
        <List as="ul" display="block" className="list-margin list-disc">
          {learns.map((learn) => (
            <li className="text-theme" key={learn._id}>
              {learn.name}
            </li>
          ))}
        </List>
      </Reveal>
    </article>
  );
};

export default CurrentlyLearn;
