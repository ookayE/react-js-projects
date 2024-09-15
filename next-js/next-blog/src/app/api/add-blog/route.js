import connectToDb from "@/database";
import blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

// use Joi to validate incoming blog data
const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// handle incoming POST requests
export async function POST(request) {
  try {
    //connect to DB
    await connectToDb();

    //Extract data from request body
    const extractBlogData = await request.json();
    const { title, description } = extractBlogData;

    //Validate the incoming data against defined Joi schema
    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    //if there is no error
    const newBlogItem = await blog.create(extractBlogData);
    if (newBlogItem) {
      return NextResponse.json({
        success: true,
        message: "New blog added!",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: { error },
    });
  }
}
