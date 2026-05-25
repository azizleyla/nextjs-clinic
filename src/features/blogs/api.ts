import { apiClient } from "@/core/api/apiClient";
import type { BackendBlogResponse, BlogFromApi, BlogPost } from "./types";
import { mapBlog, mapBlogs } from "./utils/mapBlog";

async function fetchAllBlogs(locale: string, limit?: number, page?: number) {
  const params = new URLSearchParams();

  if (page) params.append("page", String(page));
  if (limit) params.append("limit", String(limit));

  const url = `/blogs${params.toString() ? `?${params}` : ""}`;

  const res = await apiClient.get(url, {
    backend: true,
  });
  console.log(res, "rrr");
  const { totalPages, currentPage, totalElements } = res;

  return {
    posts: mapBlogs(res?.data ?? [], locale),
    totalPages,
    currentPage,
    totalElements,
  };
}
export async function getBlogById(
  id: string | number,
  locale: string,
): Promise<BlogPost> {
  const posts = await fetchAllBlogs(locale);
  const post = posts.find((p) => String(p.id) === String(id));
  if (!post) {
    throw new Error("Blog tapılmadı");
  }
  return post;
}

export async function getBlogsList(
  locale: string,
  limit?: number,
  page?: number,
) {
  const posts = await fetchAllBlogs(locale, limit, page);
  return posts;
}
