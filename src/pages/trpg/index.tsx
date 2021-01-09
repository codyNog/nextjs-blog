import React from "react";
import { BlogFeed } from "~/components/organisms/BlogFeed";
import { Layout } from "~/components/templates/layouts";

import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";
import { Blog } from "~/types/blog";

interface Props {
  blog: Blog[];
}

const Component = ({ blog }: Props) => {
  return (
    <Layout>
      <BlogFeed link={"/trpg"} blog={blog} />
    </Layout>
  );
};

export default Component;

export const getStaticProps = async () => {
  const data = await fetchBlogPosts();

  return {
    props: {
      blog: data,
    },
  };
};
