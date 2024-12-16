import cloudinary from "@/config/cloudinary";

export default function handler(request, response) {
  response.status(200).json({ message: "Works!" });
}
