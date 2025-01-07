"use server";

import connectDB from "@/config/db";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const bookmarkProperty = async ({ propertyID }) => {
  //connect to DB
  await connectDB();

  //get session user
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID is required");
  }

  // destructer userID
  const { userID } = sessionUser;

  const user = await User.findById(userID);

  // is this property already bookmarked
  let message;

  let isBookmarked = user.bookmarks.includes(propertyID);
  if (isBookmarked) {
    // if property is already bookmarked, remove it
    user.bookmarks.pull(propertyID);
    message = "Bookmark removed";
    isBookmarked = false;
  } else {
    //if property is not bookmarked, bookmark it
    user.bookmarks.push(propertyID);
    message = "Property bookmarked";
    isBookmarked = true;
  }

  // update databse
  await user.save();
  revalidatePath("/properties.saved", "page");

  return {
    message,
    isBookmarked,
  };
};

export default bookmarkProperty;
