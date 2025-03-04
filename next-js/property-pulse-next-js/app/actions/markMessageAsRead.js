"use server";
import connectDB from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID is required");
  }

  const { userID } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message not found");

  // Verify ownership
  if (message.recipient.toString() !== userID) {
    return new Response("Unauthorized", { status: 401 });
  }

  message.read = !message.read;
  await message.save();

  revalidatePath("/messages", "page");

  // Return plain value
  return message.read;
}

export default markMessageAsRead;
