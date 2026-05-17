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
  limit = 6,
}: Props) {
  const posts =
    propPosts ?? (await getBlogsList(locale, limit).catch(() => []));
  return <BlogsSection posts={posts} title={title} />;
}
