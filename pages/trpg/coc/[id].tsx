import { fetchCocPosts } from "~/data/apis/coc/fetchCocPosts";
import { fetchCocPost } from "~/data/apis/coc/fetchCocPost";

const Component = ({ blog }) => {
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
};

export const getStaticPaths = async () => {
  const data = await fetchCocPosts();
  const paths = data.contents.map((content) => `/trpg/coc/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetchCocPost(context.params.id);
  return {
    props: {
      blog: data,
    },
  };
};

export default Component;
