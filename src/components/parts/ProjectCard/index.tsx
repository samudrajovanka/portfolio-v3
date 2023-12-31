import { FaCode, FaLink } from 'react-icons/fa';

import Card from '@/components/elements/Card';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import List from '@/components/elements/List';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import Tag from '@/components/parts/Tag';

import type { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col gap-2">
      <Image
        src={project.imageUrl}
        alt={project.name}
        width={640}
        height={360}
        className="aspect-video w-full object-cover"
      />
      
      <div>
        <Reveal>
          <Text as="h2" typography="subheading">{project.name}</Text>
        </Reveal>

        {project?.description ? (
          <Reveal className="mt-1">
            <Text color="subtitle" typography="description">{project.description}</Text>
          </Reveal>
        ) : null}

        <Reveal className="mt-4">
          <List as="ul" direction="horizontal" className="flex-wrap gap-2">
            {project.stacks.map((stack, idx) => (
              <li key={`${stack}_${idx}`}>
                <Tag>{stack}</Tag>
              </li>
            ))}
          </List>
        </Reveal>

        {project?.projectUrl || project?.repositoryUrl ? (
          <div className="mt-3 flex justify-end gap-5">
            {project?.projectUrl ? (
              <Reveal>
                <Link href={project.projectUrl} typography="regular" withColorNeutral isExternal>
                  <FaLink className="mr-1 inline-block" />
                  view project
                </Link>
              </Reveal>
            ) : null}

            {project?.repositoryUrl ? (
              <Reveal>
                <Link href={project.repositoryUrl} typography="regular" withColorNeutral isExternal>
                  <FaCode className="mr-1 inline-block" />
                  source code
                </Link>
              </Reveal>
            ) : null}
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default ProjectCard;
