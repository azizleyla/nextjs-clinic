import BlogsSection from "./BlogsSection";
import { getBlogsList } from "../api";
import type { BlogPost } from "../types";

type Props = {
  locale: string;
  posts?: BlogPost[];
  title?: string;
  limit?: number;
};

export default async function BlogsSectionWrapper({
  locale,
  posts: propPosts,
  title,
  limit = 2,
}: Props) {
  const data =
    propPosts ?? (await getBlogsList(locale, limit).catch(() => []));
  return <BlogsSection posts={data?.posts} title={title} />;
}
