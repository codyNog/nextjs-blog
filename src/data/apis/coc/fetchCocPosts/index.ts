import { CMSClient } from "~/data/apis/CMSClient";

export const fetchCocPosts = async () => await CMSClient("/call-of-cthulhu");
