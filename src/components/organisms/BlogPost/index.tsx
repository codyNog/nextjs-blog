import React from "react";
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

export const BlogPost: React.FC<Props> = ({ blog }) => {
  return (
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
  );
};
