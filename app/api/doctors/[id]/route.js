import { doctors } from "@/constants/doctors";

export async function GET(request, { params }) {
    const { id } = params; 

    const doctor = doctors.find((doc) => String(doc.id) === String(id));

    if (!doctor) {
        return new Response(
            JSON.stringify({ message: "Doctor not found" }),
            { status: 404, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(
        JSON.stringify(doctor),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}
