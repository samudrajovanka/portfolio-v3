import { twMerge } from 'tailwind-merge';

import Link from '@/components/elements/Link';
import { getSocialMedias } from '@/repositories/socialMedia';

import { SOCIAL_MEDIA_ICONS } from './data';

const SocialMediaIconList = async () => {
  const socialMediasResponse = await getSocialMedias();
  const socialMedias = socialMediasResponse.data.socialMedias;

  return (
    <div className="flex gap-3">
      {socialMedias.map((socialMedia) => {
        const data = SOCIAL_MEDIA_ICONS.find((item) => item.key === socialMedia.key);

        if (!data) {
          return null;
        }

        return (
          <Link
            key={socialMedia._id}
            href={socialMedia.url}
            isExternal
            title={`${socialMedia.key.toLowerCase()} profile`}
            className="group/icon"
          >
            <data.icon
              className={twMerge('text-xl text-subtitle transition-color', data.colorClassName)}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMediaIconList;
