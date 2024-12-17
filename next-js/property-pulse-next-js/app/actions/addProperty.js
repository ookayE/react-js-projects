"use server";
import connectDB from "@/config/db";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addProperty(formData) {
  // Connect to the database
  await connectDB();

  // Get the currently authenticated user session
  const sessionUser = await getSessionUser();

  // Ensure the user is logged in and has a valid user ID
  if (!sessionUser || !sessionUser.userID) {
    throw new Error("User ID is required");
  }

  const { userID } = sessionUser;

  // Gather amenities and filter out any empty image files
  const amenities = formData.getAll("amenities");
  const images = formData.getAll("images").filter((image) => image.name !== "");

  // Construct the property data object from the form inputs
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
    amenities,
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

  const imageUrls = []; // Array to store the Cloudinary URLs of uploaded images

  // Loop through each image file provided in the form
  for (const imageFile of images) {
    // Step 1: Read the file as an ArrayBuffer (binary data)
    const imageBuffer = await imageFile.arrayBuffer();

    // Step 2: Convert ArrayBuffer to a typed array (Uint8Array)
    const imageArray = Array.from(new Uint8Array(imageBuffer));

    // Step 3: Convert the typed array into a Node.js Buffer
    const imageData = Buffer.from(imageArray);

    // Step 4: Convert the binary data to a Base64-encoded string
    const imageBase64 = imageData.toString("base64");

    // Step 5: Upload the image to Cloudinary using the Base64-encoded string
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`, // Data URL format for Cloudinary
      {
        folder: "Property Pulse", // Upload to a specific folder in Cloudinary
      }
    );

    // Step 6: Store the secure URL of the uploaded image in the imageUrls array
    imageUrls.push(result.secure_url);
  }

  // Step 7: Add the array of uploaded image URLs to the property data
  propertyData.images = imageUrls;

  // Save the new property document to the database
  const newProperty = new Property(propertyData);
  await newProperty.save();

  // Revalidate the root layout cache to ensure the new property is displayed
  revalidatePath("/", "layout");

  // Redirect the user to the newly created property's detail page
  redirect(`/properties/${newProperty._id}`);
}

export default addProperty;
