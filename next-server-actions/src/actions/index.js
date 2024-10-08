"use server";

import connectToDB from "@/database";
import { User } from "lucide-react";

//add new user action

export async function AddNewUserAction(formData) {
  await connectToDB();

  try {
    const newlyCreatedUser = await User.create(formData);

    if (newlyCreatedUser) {
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Error occurred",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error occurred",
    };
  }
}

//fetch users action

//edit user action

//delete user action
