import dynamic from 'next/dynamic';

import HeaderSection from '@/components/parts/HeaderSection';
import SectionPage from '@/components/parts/SectionPage';
import { getMediumBlogs } from '@/repositories/mediumBlog';

const Fade = dynamic(() => import('@/components/elements/Fade'));
const List = dynamic(() => import('@/components/elements/List'));
const Text = dynamic(() => import('@/components/elements/Text'));
const BlogCard = dynamic(() => import('@/components/parts/BlogCard'));
const Reveal = dynamic(() => import('@/components/elements/Reveal'));

const Blogs = async () => {
  const mediumBlogResponse = await getMediumBlogs();
  const { items: blogs } = mediumBlogResponse;

  const header = (
    <HeaderSection
      title="My Blogs"
      description="Explore my thoughts and expertise in these concise blog posts.
        Explore my thoughts and expertise in these concise blog posts."
    />
  );

  return (
    <SectionPage
      withContainer
      header={header}
      withMarginBottom
    >
      {blogs.length ? (
        <List as="ul">
          {blogs.map((blog) => (
            <Fade key={blog.guid} role="listitem">
              <BlogCard blog={blog} />
            </Fade>
          ))}
        </List>
      ) : (
        <Reveal>
          <Text>
            There are no blogs yet. Please come back later :)
          </Text>
        </Reveal>
      )}
    </SectionPage>
  );
};

export default Blogs;
