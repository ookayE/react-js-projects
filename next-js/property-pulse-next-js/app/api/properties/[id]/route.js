import connectDB from "@/config/db";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) return new Response("Property not found");

    return new Response(property, { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};