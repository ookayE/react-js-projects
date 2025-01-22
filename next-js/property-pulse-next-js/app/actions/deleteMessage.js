"use server";

import connectDB from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteMessage = async (messageID) => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID required");
  }

  const { userID } = sessionUser;

  const message = await Message.findById(messageID);

  if (message.recipient.toString() !== userID) {
    throw new Error("Unauthorized");
  }

  await message.deleteOne();

  revalidatePath("/", "layout");
};

export default deleteMessage;
