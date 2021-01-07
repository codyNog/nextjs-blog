import { Box, Flex, Tag } from "@chakra-ui/react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import Link from "next/link";
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

export default function Home({ blog }: Props) {
  return (
    <Layout>
      <ul>
        {blog.map((blog, i) => (
          <Li key={blog.id} isTop={!i}>
            <Link href={`/blog/${blog.id}`}>
              <Box
                borderWidth={"1px"}
                borderRadius={"lg"}
                width={"100%"}
                p={4}
                as={"a"}
                display={"block"}
              >
                <h2>{blog.title}</h2>
                <Flex>
                  {blog.tags.map((tag) => (
                    <Tag key={tag} mr={"auto"}>
                      {tag}
                    </Tag>
                  ))}
                  <p>{dayjs(blog.createdAt).format("YYYY/MM/DD")}</p>
                </Flex>
              </Box>
            </Link>
          </Li>
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
