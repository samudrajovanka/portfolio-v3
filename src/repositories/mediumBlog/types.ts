export type Blog = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Record<any, any>;
  categories: string[];
}

export type Feed = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

export type GetMediumBlogResponse = {
  success: string;
  feed: Feed;
  items: Blog[];
};
