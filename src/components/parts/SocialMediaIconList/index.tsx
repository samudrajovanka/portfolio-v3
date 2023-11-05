import { twMerge } from 'tailwind-merge';

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
          <a
            key={socialMedia._id}
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${socialMedia.key.toLowerCase()} profile`}
            className="group/icon relative"
          >
            <data.icon
              className={twMerge('text-xl text-subtitle transition-color', data.colorClassName)}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIconList;
