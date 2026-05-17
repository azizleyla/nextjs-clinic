export type LocalizedField = Record<string, string>;

export type BlogFromApi = {
  id: number;
  created_at: string;
  img_url: string;
  title: LocalizedField;
  content: LocalizedField;
  published_at: string;
  slug: string;
  excerpt: LocalizedField;
  category_id: number | null;
  tags: string[];
};

export type BackendBlogResponse<T> = {
  success: boolean;
  status: number;
  data: T;
  message?: string;
};

export type BlogPost = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
};
