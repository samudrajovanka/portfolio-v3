import Fade from '@/components/elements/Fade';
import List from '@/components/elements/List';
import BlogCard from '@/components/parts/BlogCard';
import HeaderSection from '@/components/parts/HeaderSection';
import SectionPage from '@/components/parts/SectionPage';
import { getMediumBlogs } from '@/repositories/mediumBlog';

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
      <List as="ul">
        {blogs.map((blog) => (
          <Fade key={blog.guid} role="listitem">
            <BlogCard blog={blog} />
          </Fade>
        ))}
      </List>
    </SectionPage>
  );
};

export default Blogs;
