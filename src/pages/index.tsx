import styled from "@emotion/styled";
import { Summary } from "~/components/molecules/Summary";
import { Layout } from "~/components/templates/layouts";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";

interface Props {
  blog: Blog[];
}

const Li = styled.li<{ isTop?: boolean }>(({ isTop }) => ({
  marginTop: isTop ? 0 : 16,
  cursor: "pointer",
}));

const A = styled.a({
  textDecoration: "none",
});

export default function Home({ blog }: Props) {
  return (
    <Layout>
      <ul>
        {blog.map((blog, i) => (
          <Summary
            key={blog.id}
            blog={blog}
            style={{ marginTop: !i ? 0 : 16 }}
          />
        ))}
      </ul>
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
