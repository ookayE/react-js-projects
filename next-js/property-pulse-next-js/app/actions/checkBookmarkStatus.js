"use server";

import connectDB from "@/config/db";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

async function checkBookmarkStatus(propertyID) {
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

  return { isBookmarked };
}

export default checkBookmarkStatus;
