import { CMS_API_KEY, CMS_ROOT } from "~/constants/apis";

export const fetchBlogPosts = async () => {
  const key = {
    headers: { "X-API-KEY": CMS_API_KEY },
  };

  const res = await fetch(`${CMS_ROOT}/blog`, key);
  return res.json();
};
