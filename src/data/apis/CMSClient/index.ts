import { CMS_API_KEY, CMS_ROOT } from "~/constants/apis";

export const CMSClient = async (uri: string) => {
  const key = {
    headers: { "X-API-KEY": CMS_API_KEY },
  };

  console.log(`${CMS_ROOT}${uri}`);
  const res = await (await fetch(`${CMS_ROOT}${uri}`, key)).json();
  return res;
};
