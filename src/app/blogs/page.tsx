import Blogs from '@/components/pages/Blogs';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata({ title: 'Blogs' }, { withSuffix: true });

const BlogsPage = Blogs;

export default BlogsPage;
