import { blogPosts } from "@/features/blogs/constants/blogs";

export async function GET(request, { params }) {
    const { id } = params;

    const blog = blogPosts.find((bl) => String(bl.id) === String(id));

    if (!blog) {
        return new Response(
            JSON.stringify({ message: "Blog not found" }),
            { status: 404, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(
        JSON.stringify(blog),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}
