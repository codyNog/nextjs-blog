import { fetchBlogPost } from "~/data/apis/fetchBlogPost";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";

export default function BlogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await fetchBlogPosts();
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetchBlogPost(id);
  return {
    props: {
      blog: data,
    },
  };
};
