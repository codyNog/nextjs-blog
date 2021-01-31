import { Layout } from "~/components/templates/layouts";
import { fetchBlogPost } from "~/data/apis/fetchBlogPost";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";
import { BlogPost } from "~/components/organisms/BlogPost";

interface Props {
  blog: Blog;
}

export default function BlogId({ blog }: Props) {
  return (
    <Layout>
      <BlogPost blog={blog} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await fetchBlogPosts();
  const paths = data.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetchBlogPost(id).catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
