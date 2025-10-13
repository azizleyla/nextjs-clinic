import { doctors } from "@/utils/constants/doctors";

export async function GET() {
    return new Response(JSON.stringify(doctors), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
