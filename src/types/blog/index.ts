export interface Blog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  tags: string[];
  body: string;
  summary?: string;
}
