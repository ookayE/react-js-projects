"use server";

import connectDB from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

async function getUnreadMessageCount() {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID is required");
  }

  const { userID } = sessionUser;

  const count = await Message.countDocuments({
    recipient: userID,
    read: false,
  });

  return { count };
}

export default getUnreadMessageCount;
