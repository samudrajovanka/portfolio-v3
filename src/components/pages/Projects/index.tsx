import dynamic from 'next/dynamic';

import HeaderSection from '@/components/parts/HeaderSection';
import SectionPage from '@/components/parts/SectionPage';
import { getProjects } from '@/repositories/projects';

const Fade = dynamic(() => import('@/components/elements/Fade'));
const List = dynamic(() => import('@/components/elements/List'));
const Text = dynamic(() => import('@/components/elements/Text'));
const ProjectCard = dynamic(() => import('@/components/parts/ProjectCard'));
const Reveal = dynamic(() => import('@/components/elements/Reveal'));

const Projects = async () => {
  const projectsResponse = await getProjects();
  const { projects } = projectsResponse.data;

  const header = (
    <HeaderSection title="My Projects" description="Showcasing my best creative projects" />
  );

  return (
    <SectionPage
      withContainer
      header={header}
      withMarginBottom
    >
      {projects.length ? (
        <List as="ul" display="grid" className="grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <Fade key={project._id} role="listitem">
              <ProjectCard project={project} />
            </Fade>
          ))}
        </List>
      ) : (
        <Reveal>
          <Text>
            There are no projects yet. Please come back later :)
          </Text>
        </Reveal>
      )}
    </SectionPage>
  );
};

export default Projects;
