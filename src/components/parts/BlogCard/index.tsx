import moment from 'moment';

import Card from '@/components/elements/Card';
import Link from '@/components/elements/Link';
import List from '@/components/elements/List';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import Tag from '@/components/parts/Tag';

import type { BlogCardProps } from './types';

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={blog.link} isExternal>
      <Card>
        <Reveal>
          <Text as="h2" typography="subheading">{blog.title}</Text>
        </Reveal>

        <Reveal className="mt-[2px]">
          <Text typography="description" color="subtitle">{moment(blog.pubDate).format('MMM DD, YYYY')}</Text>
        </Reveal>

        <Reveal className="mt-4">
          <List as="ul">
            {blog.categories.map((category, idx) => (
              <li key={`${category}_${idx}`}>
                <Tag>{category}</Tag>
              </li>
            ))}
          </List>
        </Reveal>
      </Card>
    </Link>
  );
};

export default BlogCard;
