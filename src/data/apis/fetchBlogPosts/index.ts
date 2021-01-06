import { Blog } from "~/types/blog";
import { CMSClient } from "~/data/apis/CMSClient";

export const fetchBlogPosts = async (): Promise<Blog[]> => {
  const res = await CMSClient("/blog");
  const { contents } = res;

  return contents;
};
