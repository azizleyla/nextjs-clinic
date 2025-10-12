import { blogPosts } from "@/constants/blogs";

export async function GET() {
    return new Response(JSON.stringify(blogPosts), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
