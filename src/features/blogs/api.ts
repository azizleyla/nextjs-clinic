import { apiClient } from "@/core/api/apiClient";
import type { BackendBlogResponse, BlogFromApi, BlogPost } from "./types";
import { mapBlog, mapBlogs } from "./utils/mapBlog";

async function fetchAllBlogs(locale: string): Promise<BlogPost[]> {
  const res = await apiClient.get<BackendBlogResponse<BlogFromApi[]>>("/blogs", {
    backend: true,
  });
  return mapBlogs(res.data ?? [], locale);
}

/** Backend bütün bloqları qaytarır; səhifələmə frontda edilir */
export async function getBlogs(
  locale: string,
  page = 1,
  perPage = 3
) {
  const all = await fetchAllBlogs(locale);
  const totalPages = Math.ceil(all.length / perPage) || 1;
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    posts: all.slice(start, start + perPage),
    totalPages,
    currentPage,
  };
}

export async function getBlogById(
  id: string | number,
  locale: string
): Promise<BlogPost> {
  const posts = await fetchAllBlogs(locale);
  const post = posts.find((p) => String(p.id) === String(id));
  if (!post) {
    throw new Error("Blog tapılmadı");
  }
  return post;
}

export async function getBlogsList(locale: string, limit?: number) {
  const posts = await fetchAllBlogs(locale);
  return limit ? posts.slice(0, limit) : posts;
}
