import React, { useState } from "react";
import { NegativeTag, Tag } from "~/components/atoms/Tag";
import { Summary } from "~/components/molecules/Summary";
import { Flex } from "~/libs/styled";
import { Blog } from "~/types/blog";

const allTags = (blog: Blog[]) => {
  let array: string[] = [];
  blog.forEach((elem) => (array = [...array, ...elem.tags]));
  return Array.from(new Set(array));
};

const filterBlog = (blog: Blog[], value: string) => {
  if (!value) return blog;
  return blog.filter((elem) => elem.tags.includes(value));
};

interface Props {
  blog: Blog[];
  link: string;
}

export const BlogFeed: React.FC<Props> = ({ blog, link }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Flex styleProps={{ marginBottom: 16 }}>
        タグ絞り込み
        <Flex>
          {allTags(blog).map((elem) => {
            if (!value || (value && elem === value))
              return (
                <Tag
                  onClick={() => setValue(elem)}
                  key={elem}
                  style={{ marginLeft: 4 }}
                >
                  {elem}
                </Tag>
              );
            return null;
          })}
          {value && (
            <NegativeTag onClick={() => setValue("")} style={{ marginLeft: 4 }}>
              クリア
            </NegativeTag>
          )}
        </Flex>
      </Flex>
      <ul>
        {filterBlog(blog, value).map((blog, i) => (
          <Summary
            link={link}
            key={blog.id}
            blog={blog}
            style={{ marginTop: !i ? 0 : 16 }}
          />
        ))}
      </ul>
    </div>
  );
};
