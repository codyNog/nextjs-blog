import { Layout } from "~/components/templates/layouts";
import { fetchBlogPost } from "~/data/apis/fetchBlogPost";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";
import { Content } from "~/components/molecules/Content";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { Tag } from "~/components/atoms/Tag";
import { Flex } from "~/libs/styled";
import { Card } from "~/components/atoms/Card";

interface Props {
  blog: Blog;
}

const Tags = styled.div({
  marginLeft: "auto",
});

export default function BlogId({ blog }: Props) {
  return (
    <Layout>
      <Card>
        <h1>{blog.title}</h1>
        <Flex>
          <p>{dayjs(blog.publishedAt).format("YYYY/MM/DD")}</p>
          <Tags>
            {blog.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Flex>
        <Content body={blog.body} style={{ marginTop: 20 }} />
      </Card>
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
