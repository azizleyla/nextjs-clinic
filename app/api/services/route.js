import { services } from "@/utils/constants/services";

export async function GET() {
    return new Response(JSON.stringify(services), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
