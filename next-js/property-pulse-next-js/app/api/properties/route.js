import connectDB from "@/config/db";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    await connectDB;

    const properties = await Property.find();

    return new Response(properties, { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
