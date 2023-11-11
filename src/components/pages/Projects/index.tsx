import Fade from '@/components/elements/Fade';
import HeaderSection from '@/components/parts/HeaderSection';
import List from '@/components/parts/List';
import ProjectCard from '@/components/parts/ProjectCard';
import SectionPage from '@/components/parts/SectionPage';
import { getProjects } from '@/repositories/projects';

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
      <List as="ul" display="grid" className="grid-cols-1 sm:grid-cols-2">
        {projects.map((project) => (
          <Fade key={project._id}>
            <ProjectCard project={project} />
          </Fade>
        ))}
      </List>
    </SectionPage>
  );
};

export default Projects;
