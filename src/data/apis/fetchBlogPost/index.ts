import { Blog } from "~/types/blog";
import { CMSClient } from "~/data/apis/CMSClient";

export const fetchBlogPost = async (id: string): Promise<Blog> => {
  const res = await CMSClient(`/blog/${id}`);

  return res;
};
