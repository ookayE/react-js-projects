import connectToDb from "@/database";
import blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(request, response) {
  try {
    await connectToDb();

    const { searchParams } = newURL(request.URL);
    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Not Blog ID",
      });
    }

    const deleteCurrentBlog = await blog.findByIdAndDelete(getCurrentBlogId);

    if (deleteCurrentBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog has been deleted",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Nope",
    });
  }
}
