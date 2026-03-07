import {
  getPaginatedPosts,
  DEFAULT_BLOGS_PER_PAGE,
} from "@/features/blogs/constants/blogs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
  const perPage =
    Math.min(
      20,
      Math.max(1, parseInt(searchParams.get("per_page") || String(DEFAULT_BLOGS_PER_PAGE), 10) || DEFAULT_BLOGS_PER_PAGE)
    );
  const { posts, total, totalPages, currentPage } = getPaginatedPosts(
    page,
    perPage
  );
  return new Response(
    JSON.stringify({
      data: posts,
      total,
      total_pages: totalPages,
      current_page: currentPage,
      per_page: perPage,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
