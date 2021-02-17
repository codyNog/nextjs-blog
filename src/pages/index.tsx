import { BlogFeed } from "~/components/organisms/BlogFeed";
import { Layout } from "~/components/templates/layouts";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";

type Props = { blog: Blog[] };

const Component = (props: Props) => {
  return (
    <Layout>
      <BlogFeed link={"/blog"} blog={props.blog} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await fetchBlogPosts();

  return {
    props: {
      blog: data,
    },
  };
};

export default Component;
