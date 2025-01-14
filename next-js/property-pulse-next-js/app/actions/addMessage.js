"use server";
import connectDB from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

async function addMessage(previousState, formData) {
  // Connect to the database
  await connectDB();

  // Get the currently authenticated user session
  const sessionUser = await getSessionUser();

  // Ensure the user is logged in and has a valid user ID
  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID is required");
  }

  const { userID } = sessionUser;

  const recipient = formData.get("recipient");

  if (userID === recipient) {
    return { error: "You cannot send a message to yourself" };
  }

  const newMessage = new Message({
    sender: userID,
    recipient,
    property: formData.get("property"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
  });

  await newMessage.save();

  return { submitted: true };
}

export default addMessage;
