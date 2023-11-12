/* eslint-disable max-len */
import Link from '@/components/elements/Link';
import List from '@/components/elements/List';
import Paragraf from '@/components/elements/Paragraf';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import { upperFirstLetter } from '@/lib/text';
import { getSocialMedias } from '@/repositories/socialMedia';

const LetsConnect = async () => {
  const socialMediasResponse = await getSocialMedias();
  const { socialMedias } = socialMediasResponse.data;

  return (
    <article>
      <Reveal>
        <Text as="h1" typography="heading">Let&apos;s Connect</Text>
      </Reveal>

      <Paragraf className="mt-3">
        <Reveal>
          <Text>I&apos;m always excited to meet new people, so please use the social media links listed to reach out to me.</Text>
        </Reveal>

        <Reveal>
          <List as="ul" display="block" className="list-margin list-disc">
            {socialMedias.map((socialMedia) => (
              <li key={socialMedia._id}>
                <Link href={socialMedia.url} typography="regular">{upperFirstLetter(socialMedia.key)}</Link>
              </li>
            ))}
          </List>
        </Reveal>

        <Reveal>
          <Text>You can also read my resume <Link href="/resume">here</Link>. Anyway, I appreciate your time and visit to my profile.</Text>
        </Reveal>
      </Paragraf>
    </article>
  );
};

export default LetsConnect;
