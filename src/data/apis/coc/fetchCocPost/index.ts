import { CMSClient } from "~/data/apis/CMSClient";

export const fetchCocPost = async (id: string) =>
  await CMSClient(`/call-of-cthulhu/${id}`);
