import { Layout } from "~/components/templates/layouts";
import { fetchBlogPost } from "~/data/apis/fetchBlogPost";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  blog: Blog;
}

const Body = styled.div({
  marginTop: 20,
});

export default function BlogId({ blog }: Props) {
  return (
    <Layout>
      <Box borderWidth={"1px"} borderRadius={"lg"} padding={"16px"}>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <Body
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </Box>
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
