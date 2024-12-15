import { v2 as cloudinary } from "./cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDIARY_CLOUD_NAME,
  cloud_api_key: process.env.CLOUDIARY_API_KEY,
  cloud_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
