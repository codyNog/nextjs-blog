import { Blog } from "~/types/blog";
import { CMSClient } from "~/data/apis/CMSClient";
import module from "./module";

export const fetchBlogPost = async (id: string): Promise<Blog> => {
  const res: Blog = await CMSClient(`/blog/${id}`);

  const data = { ...res, body: module.htmlConverter(res.body) };

  return data;
};
