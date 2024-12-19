"use server";

import connectDB from "@/config/db";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const updateProperty = async (propertyID, formData) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID is required");
  }

  const { userID } = sessionUser;

  const existingProperty = await Property.findById(propertyID);

  // Verify ownership of property
  if (existingProperty.owner.toString() !== userID) {
    throw new Error("User does not own this property!");
  }

  const propertyData = {
    owner: userID,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_feet: formData.get("square_feet"),
    amenities: formData.getAll("amenities"),
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
  };

  const updatedProperty = await Property.findByIdAndUpdate(
    propertyID,
    propertyData
  );

  revalidatePath("/", "layout");

  redirect(`/properties/${updatedProperty._id}`);
};

export default updateProperty;
