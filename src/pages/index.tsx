import { BlogFeed } from "~/components/organisms/BlogFeed";
import { Layout } from "~/components/templates/layouts";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";

interface Props {
  blog: Blog[];
}

export default function Home({ blog }: Props) {
  return (
    <Layout>
      <BlogFeed blog={blog} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await fetchBlogPosts();

  return {
    props: {
      blog: data,
    },
  };
};
