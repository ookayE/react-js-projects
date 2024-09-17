import connectToDb from "@/database";
import blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDb();
    const extractBlogs = await blog.find({});

    if (extractBlogs) {
      return NextResponse.json({
        success: true,
        data: extractBlogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Nope",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Still nope",
    });
  }
}
