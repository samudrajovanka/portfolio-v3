/* eslint-disable max-len */
import Link from '@/components/elements/Link';
import Paragraf from '@/components/elements/Paragraf';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import { getSocialMedias } from '@/repositories/socialMedia';

const AboutMe = async () => {
  const socialMediasResponse = await getSocialMedias();
  
  const email = socialMediasResponse.data.socialMedias.find((socialMedia) => {
    return socialMedia.key === 'EMAIL';
  });

  return (
    <article>
      <Reveal>
        <Text as="h1" typography="subheading">About Me</Text>
      </Reveal>

      <Paragraf className="mt-3">
        <Reveal>
          <Text>
            Hello, my name is Jovanka Samudra, you can call me Jovan. I am a   fresh graduate student of Informatics at the UPN Veteran Jakarta University. When I was in college, I joined communities and organizations to expand my skills and knowledge. I&apos;m member and also a former vice-chairperson in the <Link href="https://www.instagram.com/androidupnvj/" isExternal>KSM Android</Link>, and I once served as the department head in <Link href="https://www.instagram.com/bemfikupnvj/" isExternal>BEMF-IK UPNVJ</Link>. Now I work as a Fullstack Engineer at <Link href="https://www.feedloop.ai/" isExternal>Feedloop</Link>.
          </Text>
        </Reveal>

        <Reveal>
          <Text>
            Now I am focusing on Fullstack Web Development to create website with good performance and security. I am constantly honing my skills through online courses, bootcamps, and other experiences. My goal is to create a product that can be beneficial to many people, especially in the field of technology.
          </Text>
        </Reveal>
        
        <Reveal>
          <Text>
            Besides programming, I&apos;m eagerly awaiting the completion of One Piece.
          </Text>
        </Reveal>

        {email ? (
          <Reveal>
            <Text>
              If you want to know more about me just say <Link href={email.url} isExternal>&quot;Hi!&quot; and let&apos;s chat</Link>.
            </Text>
          </Reveal>
        ) : null}
      </Paragraf>
    </article>
  );
};

export default AboutMe;
