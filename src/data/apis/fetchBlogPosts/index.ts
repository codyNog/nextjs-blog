import { CMS_API_KEY, CMS_ROOT } from "~/constants/apis";
import { Blog } from "~/types/blog";
import { CMSClient } from "../CMSClient";

export const fetchBlogPosts = async (): Promise<Blog[]> => {
  const res = await CMSClient("/blog");
  const { contents } = res;

  return contents;
};
