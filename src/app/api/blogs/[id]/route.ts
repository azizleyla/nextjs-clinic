import { blogPosts } from "@/features/blogs/constants/blogs";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;

  const blog = blogPosts.find((bl) => String(bl.id) === String(id));

  if (!blog) {
    return new Response(
      JSON.stringify({ message: "Blog not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify(blog), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
