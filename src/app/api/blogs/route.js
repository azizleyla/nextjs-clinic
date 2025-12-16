import { blogPosts } from "@/src/utils/constants/blogs";

export async function GET() {
    return new Response(JSON.stringify(blogPosts), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
