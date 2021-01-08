import styled from "@emotion/styled";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { Card } from "~/components/atoms/Card";
import { Tag } from "~/components/atoms/Tag";
import { Flex, Outer, StyleProps } from "~/libs/styled";
import { Blog } from "~/types/blog";

interface Props extends StyleProps {
  blog: Blog;
}

const Li = styled(Outer)({
  cursor: "pointer",
});

const A = styled.a({
  textDecoration: "none",
});

const Tags = styled.div({
  marginLeft: "auto",
});

export const Summary: React.FC<Props> = ({ blog, style }) => {
  return (
    <Li key={blog.id} styleProps={style}>
      <Link href={`/blog/${blog.id}`}>
        <A>
          <Card>
            <h2>{blog.title}</h2>
            <Flex>
              <p>{dayjs(blog.createdAt).format("YYYY/MM/DD")}</p>
              <Tags>
                {blog.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </Flex>
          </Card>
        </A>
      </Link>
    </Li>
  );
};
