import connectToDb from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";
import blog from "@/models/blog";

const editBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function PUT(request) {
  try {
    await connectToDb();

    //parse the request body to extract datda
    const body = await request.json();
    const { id, title, description } = body;

    //id validation
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "No blog ID",
      });
    }

    // find blog by id and update
    const updateBlogById = await blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    // if no blog found return error
    if (!updateBlogById) {
      return NextResponse.json({
        success: false,
        message: "Blog ID not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Blog updated",
      blog: updateBlogById,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
