import React from "react";
import { Blog } from "~/types/blog";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { Card } from "~/components/atoms/Card";
import { Flex, Spacer, Tag } from "@chakra-ui/react";

interface Props {
  blog: Blog;
}

const Content = styled.div({
  marginTop: 20,
});

export const BlogPost: React.FC<Props> = ({ blog }) => {
  return (
    <Card>
      <h1>{blog.title}</h1>
      <Flex>
        <p>{dayjs(blog.publishedAt).format("YYYY/MM/DD")}</p>
        <Spacer />
        <Flex>
          カテゴリ:
          {blog.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Flex>
      </Flex>
      <Content
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </Card>
  );
};
