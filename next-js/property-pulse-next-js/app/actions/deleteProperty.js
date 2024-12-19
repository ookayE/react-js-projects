"use server";

import connectDB from "@/config/db";
import cloudinary from "@/config/cloudinary";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteProperty = async (propertyID) => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID required");
  }

  const { userID } = sessionUser;

  const property = await Property.findById(propertyID);

  if (!property) {
    throw new Error("Property not found");
  }

  //verify ownership of property
  if (property.owner.toString() !== userID) {
    throw new Error("Unauthorized");
  }

  // extract public ID from image URL by splitting
  const publicIDs = property.images.map((imageURL) => {
    const URLParts = imageURL.split("/");
    return URLParts.at(-1).split(".").at(0);
  });

  //delete images from cloudinary
  if (publicIDs.length > 0) {
    for (let publicID of publicIDs) {
      await cloudinary.uploader.destroy("Property Pulse/" + publicID);
    }
  }

  // if all that works, use Mongoose method deleteOne to remove the single docuement
  await property.deleteOne();

  revalidatePath("/", "layout");
};

export default deleteProperty;
