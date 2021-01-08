import styled from "@emotion/styled";
import { useState } from "react";
import { Tag } from "~/components/atoms/Tag";
import { Summary } from "~/components/molecules/Summary";
import { Layout } from "~/components/templates/layouts";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Flex } from "~/libs/styled";
import { Blog } from "~/types/blog";

interface Props {
  blog: Blog[];
}

const Tags = styled(Flex)({});

const allTags = (blog: Blog[]) => {
  let array: string[] = [];
  blog.forEach((elem) => (array = [...array, ...elem.tags]));
  return Array.from(new Set(array));
};

const filterBlog = (blog: Blog[], value: string) => {
  if (!value) return blog;
  return blog.filter((elem) => elem.tags.includes(value));
};

export default function Home({ blog }: Props) {
  const [value, setValue] = useState("");

  return (
    <Layout>
      <Flex styleProps={{ marginBottom: 16 }}>
        タグ絞り込み
        <Tags>
          {allTags(blog).map((elem) => (
            <Tag onClick={() => setValue(elem)} key={elem}>
              {elem}
            </Tag>
          ))}
          <Tag onClick={() => setValue("")}>クリア</Tag>
        </Tags>
      </Flex>
      <ul>
        {filterBlog(blog, value).map((blog, i) => (
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
