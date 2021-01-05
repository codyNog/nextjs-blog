import { CMS_API_KEY, CMS_ROOT } from "~/constants/apis";
import { Blog } from "~/types/blog";
import { CMSClient } from "../CMSClient";

export const fetchBlogPost = async (id: string): Promise<Blog> => {
  const res = await CMSClient(`/blog/${id}`);
  const { contents } = res;

  return contents;
};
